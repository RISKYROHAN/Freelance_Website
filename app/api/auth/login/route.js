import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      const response = NextResponse.json({ success: true }, { status: 200 });
      
      const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
      const token = await new SignJWT({ admin: true, username })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(secret);
      
      // Set a secure HTTP-only cookie
      response.cookies.set({
        name: 'admin_token',
        value: token,
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      return response;
    } else {
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
