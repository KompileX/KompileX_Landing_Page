import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, verifySessionToken } from '@/lib/adminAuth';
import { getPublishedTheme, publishTheme, unpublishTheme } from '@/lib/publishedTheme';

export const dynamic = 'force-dynamic';

const authed = (req: NextRequest) => verifySessionToken(req.cookies.get(ADMIN_COOKIE)?.value);
const denied = () => NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

export async function GET(req: NextRequest) {
  if (!(await authed(req))) return denied();
  return NextResponse.json({ published: await getPublishedTheme() });
}

export async function POST(req: NextRequest) {
  if (!(await authed(req))) return denied();
  const body = await req.json().catch(() => null);
  if (!body || typeof body.variables !== 'object') return NextResponse.json({ error: 'Invalid theme.' }, { status: 400 });
  try {
    await publishTheme(body.variables);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Could not save.' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await authed(req))) return denied();
  try {
    await unpublishTheme();
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Could not save.' }, { status: 500 });
  }
}
