import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, verifySessionToken } from '@/lib/adminAuth';
import { deleteJob, parseInput, updateJob } from '@/lib/jobs';

export const dynamic = 'force-dynamic';

const authed = (req: NextRequest) => verifySessionToken(req.cookies.get(ADMIN_COOKIE)?.value);
const denied = () => NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await authed(req))) return denied();
  const input = parseInput(await req.json().catch(() => ({})));
  if ('error' in input) return NextResponse.json(input, { status: 400 });
  const job = await updateJob((await params).id, input);
  return job ? NextResponse.json({ job }) : NextResponse.json({ error: 'Not found' }, { status: 404 });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await authed(req))) return denied();
  const ok = await deleteJob((await params).id);
  return ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: 'Not found' }, { status: 404 });
}
