import { promises as fs } from 'node:fs';
import path from 'node:path';

// Tiny key-value store for admin-managed content (jobs, published theme).
// - Production / Vercel: Upstash Redis over REST (set UPSTASH_REDIS_REST_URL/TOKEN
//   or KV_REST_API_URL/TOKEN, which the Vercel Upstash integration adds for you).
// - Local / VPS without Redis: a JSON file at data/store.json.
// Vercel's Upstash integration may add a custom prefix (e.g. STORAGE_KV_REST_API_URL),
// so look for any variable that ends with the known suffix.
const envEnding = (...suffixes: string[]) => {
  const key = Object.keys(process.env).find((k) => suffixes.some((s) => k === s || k.endsWith('_' + s)));
  return key ? process.env[key] : undefined;
};
const REST_URL = envEnding('UPSTASH_REDIS_REST_URL', 'KV_REST_API_URL');
const REST_TOKEN = envEnding('UPSTASH_REDIS_REST_TOKEN', 'KV_REST_API_TOKEN');
const FILE = path.join(process.cwd(), 'data', 'store.json');

export const storeBackend = REST_URL && REST_TOKEN ? 'redis' : 'file';

function assertWritableFileStore() {
  if (process.env.VERCEL) {
    throw new Error('Storage is not connected. In Vercel, connect the Upstash Redis database to this project (Storage tab) and redeploy.');
  }
}

async function readFileStore(): Promise<Record<string, unknown>> {
  try {
    return JSON.parse(await fs.readFile(FILE, 'utf8'));
  } catch {
    return {};
  }
}

export async function storeGet<T>(key: string): Promise<T | null> {
  if (storeBackend === 'redis') {
    const res = await fetch(`${REST_URL}/get/${encodeURIComponent(key)}`, {
      headers: { Authorization: `Bearer ${REST_TOKEN}` },
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`Store read failed (${res.status})`);
    const { result } = (await res.json()) as { result: string | null };
    return result ? (JSON.parse(result) as T) : null;
  }
  return ((await readFileStore())[key] as T) ?? null;
}

export async function storeSet(key: string, value: unknown): Promise<void> {
  if (storeBackend === 'redis') {
    const res = await fetch(`${REST_URL}/set/${encodeURIComponent(key)}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${REST_TOKEN}` },
      body: JSON.stringify(value),
    });
    if (!res.ok) throw new Error(`Store write failed (${res.status})`);
    return;
  }
  assertWritableFileStore();
  const all = await readFileStore();
  all[key] = value;
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(all, null, 2), 'utf8');
}

export async function storeDelete(key: string): Promise<void> {
  if (storeBackend === 'redis') {
    await fetch(`${REST_URL}/del/${encodeURIComponent(key)}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${REST_TOKEN}` },
    });
    return;
  }
  assertWritableFileStore();
  const all = await readFileStore();
  delete all[key];
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(all, null, 2), 'utf8');
}
