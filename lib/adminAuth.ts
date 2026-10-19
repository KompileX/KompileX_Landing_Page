// Stateless admin session: a signed "exp" timestamp in an httpOnly cookie.
// Uses Web Crypto so it runs in both the Edge middleware and Node route handlers.
export const ADMIN_COOKIE = 'kx_admin';
export const SESSION_SECONDS = 60 * 60 * 12;

const enc = new TextEncoder();

async function sign(payload: string): Promise<string> {
  const secret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || '';
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function createSessionToken(): Promise<string> {
  const exp = String(Math.floor(Date.now() / 1000) + SESSION_SECONDS);
  return `${exp}.${await sign(exp)}`;
}

export async function verifySessionToken(token?: string | null): Promise<boolean> {
  if (!token || !process.env.ADMIN_PASSWORD) return false;
  const [exp, sig] = token.split('.');
  if (!exp || !sig || Number(exp) < Date.now() / 1000) return false;
  const expected = await sign(exp);
  if (expected.length !== sig.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  return diff === 0;
}

export async function passwordMatches(input: string): Promise<boolean> {
  const real = process.env.ADMIN_PASSWORD;
  if (!real) return false;
  const [a, b] = await Promise.all([sign(`pw:${input}`), sign(`pw:${real}`)]);
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
