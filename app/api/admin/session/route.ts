import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, verifySessionToken } from '@/lib/adminAuth';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const authed = await verifySessionToken(req.cookies.get(ADMIN_COOKIE)?.value);
  return NextResponse.json({ authed });
}
