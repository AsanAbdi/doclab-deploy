import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  // Check if the request is for the root URL
  if (url.pathname === '/') {
    // Redirect to the /client route
    url.pathname = '/client'
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}