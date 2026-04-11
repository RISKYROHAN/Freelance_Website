import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import LogoutButton from './LogoutButton';
import { Mail, Calendar, MessageSquare, User, Briefcase } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function fetchInquiries() {
  try {
    await dbConnect();
    const inquiries = await Contact.find().sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(inquiries)); // serialize for client if needed
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

      <div className="rounded-2xl border border-corporate-100 bg-white shadow-xl shadow-corporate-200/20 overflow-hidden relative">
        {/* Subtle top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 to-corporate-600"></div>
        
        {inquiries.length === 0 ? (
          <div className="p-16 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-corporate-50 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-corporate-300" />
            </div>
            <h3 className="text-lg font-bold text-corporate-900 mb-1">No Inquiries Yet</h3>
            <p className="text-corporate-500 max-w-sm">
              When customers submit the contact form, their requests will appear here instantly.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-corporate-100 table-fixed">
              <thead className="bg-corporate-50/50">
                <tr>
                  <th scope="col" className="w-[15%] px-6 py-5 text-left text-xs font-bold text-corporate-500 uppercase tracking-wider">Date received</th>
                  <th scope="col" className="w-[25%] px-6 py-5 text-left text-xs font-bold text-corporate-500 uppercase tracking-wider">Client Details</th>
                  <th scope="col" className="w-[20%] px-6 py-5 text-left text-xs font-bold text-corporate-500 uppercase tracking-wider">Business Type</th>
                  <th scope="col" className="w-[40%] px-6 py-5 text-left text-xs font-bold text-corporate-500 uppercase tracking-wider">Project Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-corporate-100 bg-white">
                {inquiries.map((inquiry) => {
                  const initial = inquiry.name ? inquiry.name.charAt(0).toUpperCase() : '?';
                  return (
                    <tr key={inquiry._id} className="hover:bg-corporate-50/80 transition-colors group">
                      <td className="px-6 py-6 whitespace-nowrap align-top">
                        <div className="flex items-center text-sm text-corporate-500">
                          <Calendar className="w-4 h-4 mr-2 text-corporate-400 group-hover:text-accent-500 transition-colors" />
                          <span className="font-medium">
                            {new Date(inquiry.createdAt || new Date()).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-6 align-top">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center font-bold text-lg border border-accent-200">
                            {initial}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-bold text-corporate-900 group-hover:text-accent-600 transition-colors">
                              {inquiry.name}
                            </div>
                            <div className="flex items-center mt-1 text-sm text-corporate-500">
                              <Mail className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                              <a href={`mailto:${inquiry.email}`} className="truncate hover:text-accent-600 hover:underline">
                                {inquiry.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6 align-top">
                        <div className="flex items-center text-sm font-semibold text-corporate-900 bg-accent-50 rounded-full px-3 py-1 w-fit border border-accent-100">
                          <Briefcase className="w-3.5 h-3.5 mr-2 text-accent-600" />
                          {inquiry.businessType || 'Not Specified'}
                        </div>
                      </td>
                      <td className="px-6 py-6 text-sm align-top">
                        <div className="bg-corporate-50 rounded-xl p-4 text-corporate-700 border border-corporate-100 shadow-inner group-hover:bg-white group-hover:shadow-md transition-all">
                          <div className="flex items-start">
                            <MessageSquare className="w-4 h-4 mr-2 mt-0.5 text-corporate-400 flex-shrink-0" />
                            <p className="whitespace-pre-wrap leading-relaxed">
                              {inquiry.message}
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
