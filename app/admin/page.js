import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import LogoutButton from './LogoutButton';
import InquiriesClient from './InquiriesClient';

export const dynamic = 'force-dynamic';

import redis from '@/lib/redis';

async function fetchInquiries() {
  try {
    if (redis) {
      const cached = await redis.get('inquiries_list');
      if (cached) {
        console.log("Redis Cache Hit: inquiries_list");
        return JSON.parse(cached);
      }
    }

    await dbConnect();
    const inquiries = await Contact.find().sort({ createdAt: -1 }).lean();
    const stringified = JSON.stringify(inquiries); // serialize for client if needed

    if (redis) {
      console.log("Redis Cache Miss: Fetching from DB and caching");
      await redis.setex('inquiries_list', 60 * 5, stringified); // Cache for 5 minutes
    }

    return JSON.parse(stringified);
  } catch (error) {
    console.error('Failed to fetch inquiries:', error);
    return [];
  }
}

export default async function AdminDashboard() {
  const inquiries = await fetchInquiries();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-corporate-900 tracking-tight">Inquiries Dashboard</h1>
          <p className="mt-2 text-sm text-corporate-500">
            Manage and view all incoming consultation requests from your portfolio.
          </p>
        </div>
        <LogoutButton />
      </div>

      <InquiriesClient initialInquiries={inquiries} />
    </div>
  );
}
