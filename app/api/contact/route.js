import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req) {
  try {
    const body = await req.json();
    await dbConnect();
    
    const contact = await Contact.create(body);
    
    return NextResponse.json({ success: true, data: contact }, { status: 201 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
