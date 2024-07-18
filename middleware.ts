import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  const isAuthPage = pathname === '/login' || pathname === '/signup';
  const refreshToken = request.cookies.get('refreshToken');

  if (refreshToken && isAuthPage) {
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }

  if (!refreshToken && !isAuthPage) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/signup', '/protected/:path*']
};
