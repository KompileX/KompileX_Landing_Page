import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, verifySessionToken } from '@/lib/adminAuth';
import { createJob, listJobs, parseInput } from '@/lib/jobs';

export const dynamic = 'force-dynamic';

const authed = (req: NextRequest) => verifySessionToken(req.cookies.get(ADMIN_COOKIE)?.value);
const denied = () => NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

export async function GET(req: NextRequest) {
  if (!(await authed(req))) return denied();
  return NextResponse.json({ jobs: await listJobs() });
}

export async function POST(req: NextRequest) {
  if (!(await authed(req))) return denied();
  const input = parseInput(await req.json().catch(() => ({})));
  if ('error' in input) return NextResponse.json(input, { status: 400 });
  return NextResponse.json({ job: await createJob(input) }, { status: 201 });
}
