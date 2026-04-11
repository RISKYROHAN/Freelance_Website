import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const adminToken = request.cookies.get('admin_token')?.value;
  const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
  
  let isValid = false;
  
  if (adminToken) {
    try {
      await jwtVerify(adminToken, secret);
      isValid = true;
    } catch (e) {
      isValid = false;
    }
  }

  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    if (!isValid) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Prevent logged-in users from accessing the login page
  if (request.nextUrl.pathname.startsWith('/admin/login')) {
    if (isValid) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
