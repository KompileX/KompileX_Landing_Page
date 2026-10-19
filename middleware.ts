import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, verifySessionToken } from '@/lib/adminAuth';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === '/admin/login') return NextResponse.next();

  const ok = await verifySessionToken(req.cookies.get(ADMIN_COOKIE)?.value);
  if (ok) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = '/admin/login';
  url.search = '';
  return NextResponse.redirect(url);
}

export const config = { matcher: ['/admin/:path*'] };
