import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import redis from '@/lib/redis';

const RATE_LIMIT_MAX = 3; 
const RATE_LIMIT_WINDOW_SECS = 15 * 60; // 15 minutes

export async function POST(req) {
  try {
    const body = await req.json();
    
    if (redis) {
      const ip = req.headers.get('x-forwarded-for') || 'anon_ip';
      const rateLimitKey = `rate_limit_contact_${ip}`;
      
      const current = await redis.incr(rateLimitKey);
      if (current === 1) {
        await redis.expire(rateLimitKey, RATE_LIMIT_WINDOW_SECS);
      }
      
      if (current > RATE_LIMIT_MAX) {
        return NextResponse.json(
          { success: false, error: 'Too many requests. Please wait a few minutes before submitting again.' },
          { status: 429 }
        );
      }
    }

    await dbConnect();
    
    const contact = await Contact.create(body);
    
    // Invalidate the admin inquiries cache so it fetches fresh data next time
    if (redis) {
      await redis.del('inquiries_list');
      console.log('Redis Cache Invalidated: inquiries_list');
    }
    
    return NextResponse.json({ success: true, data: contact }, { status: 201 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
