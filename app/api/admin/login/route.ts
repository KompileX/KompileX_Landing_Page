import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, SESSION_SECONDS, createSessionToken, passwordMatches } from '@/lib/adminAuth';

export async function POST(req: NextRequest) {
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'ADMIN_PASSWORD is not configured on the server.' }, { status: 500 });
  }
  const { password } = await req.json().catch(() => ({ password: '' }));
  if (!(await passwordMatches(String(password ?? '')))) {
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, await createSessionToken(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: SESSION_SECONDS,
  });
  return res;
}
