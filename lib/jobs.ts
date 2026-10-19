import { storeGet, storeSet } from './store';

export type JobStatus = 'open' | 'closed';

export type Job = {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  applyEmail: string;
  status: JobStatus;
  createdAt: string;
  updatedAt: string;
};

export type JobInput = Omit<Job, 'id' | 'slug' | 'createdAt' | 'updatedAt'>;

const KEY = 'jobs';

async function readAll(): Promise<Job[]> {
  return (await storeGet<Job[]>(KEY)) ?? [];
}

async function writeAll(jobs: Job[]) {
  await storeSet(KEY, jobs);
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'role';

const clean = (v: unknown) => String(v ?? '').trim();
const lines = (v: unknown) =>
  (Array.isArray(v) ? v : String(v ?? '').split('\n')).map((x) => String(x).trim()).filter(Boolean);

export function parseInput(raw: Record<string, unknown>): JobInput | { error: string } {
  const title = clean(raw.title);
  if (!title) return { error: 'Title is required.' };
  const description = clean(raw.description);
  if (!description) return { error: 'Description is required.' };
  return {
    title,
    department: clean(raw.department) || 'Engineering',
    location: clean(raw.location) || 'Remote',
    type: clean(raw.type) || 'Full-time',
    level: clean(raw.level) || 'Mid-level',
    summary: clean(raw.summary),
    description,
    responsibilities: lines(raw.responsibilities),
    requirements: lines(raw.requirements),
    applyEmail: clean(raw.applyEmail) || 'contact@kompilex.com',
    status: raw.status === 'closed' ? 'closed' : 'open',
  };
}

export async function listJobs(opts: { onlyOpen?: boolean } = {}): Promise<Job[]> {
  const all = (await readAll()).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return opts.onlyOpen ? all.filter((j) => j.status === 'open') : all;
}

export async function getJobBySlug(slug: string): Promise<Job | undefined> {
  return (await readAll()).find((j) => j.slug === slug);
}

export async function createJob(input: JobInput): Promise<Job> {
  const all = await readAll();
  const id = Math.random().toString(36).slice(2, 8);
  const now = new Date().toISOString();
  const job: Job = { ...input, id, slug: `${slugify(input.title)}-${id}`, createdAt: now, updatedAt: now };
  await writeAll([job, ...all]);
  return job;
}

export async function updateJob(id: string, input: JobInput): Promise<Job | undefined> {
  const all = await readAll();
  const i = all.findIndex((j) => j.id === id);
  if (i < 0) return undefined;
  all[i] = { ...all[i], ...input, updatedAt: new Date().toISOString() };
  await writeAll(all);
  return all[i];
}

export async function deleteJob(id: string): Promise<boolean> {
  const all = await readAll();
  const next = all.filter((j) => j.id !== id);
  if (next.length === all.length) return false;
  await writeAll(next);
  return true;
}
