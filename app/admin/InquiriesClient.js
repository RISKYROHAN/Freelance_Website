'use client';

import { useState, useMemo } from 'react';
import { Calendar, Mail, MessageSquare, Briefcase } from 'lucide-react';

export default function InquiriesClient({ initialInquiries }) {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [businessType, setBusinessType] = useState('');

  const businessTypes = [
    "Medical / Health",
    "Legal / Law",
    "Food & Beverage",
    "Real Estate",
    "Retail / Shop",
    "Beauty & Wellness",
    "Home Services",
    "Professional Services",
    "Education",
    "Other Local Business"
  ];

  const filteredInquiries = useMemo(() => {
    return initialInquiries.filter(inquiry => {
      let matchesFrom = true;
      let matchesTo = true;
      let matchesType = true;

      const inquiryDate = new Date(inquiry.createdAt || new Date());
      inquiryDate.setHours(0, 0, 0, 0);

      if (fromDate) {
        const from = new Date(fromDate);
        from.setHours(0, 0, 0, 0);
        matchesFrom = inquiryDate >= from;
      }
      
      if (toDate) {
        const to = new Date(toDate);
        to.setHours(23, 59, 59, 999);
        matchesTo = inquiryDate <= to;
      }

      if (businessType) {
        if (businessType === 'Not Specified') {
          matchesType = !inquiry.businessType || inquiry.businessType === 'Not Specified';
        } else {
          matchesType = inquiry.businessType === businessType;
        }
      }

      return matchesFrom && matchesTo && matchesType;
    });
  }, [initialInquiries, fromDate, toDate, businessType]);

  return (
    <>
      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 bg-white p-5 rounded-2xl shadow-sm border border-corporate-100 shadow-corporate-200/20">
        <div className="flex-1">
          <label className="block text-xs font-bold text-corporate-500 uppercase tracking-wider mb-2">From Date</label>
          <input 
            type="date" 
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-full rounded-lg border border-corporate-200 px-4 py-2.5 text-corporate-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-bold text-corporate-500 uppercase tracking-wider mb-2">To Date</label>
          <input 
            type="date" 
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="w-full rounded-lg border border-corporate-200 px-4 py-2.5 text-corporate-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-bold text-corporate-500 uppercase tracking-wider mb-2">Business Type</label>
          <select 
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full rounded-lg border border-corporate-200 px-4 py-2.5 text-corporate-900 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none bg-white transition-colors cursor-pointer"
          >
            <option value="">All Types</option>
            {businessTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
            <option value="Not Specified">Not Specified</option>
          </select>
        </div>
      </div>

      {/* Inquiries Table */}
      <div className="rounded-2xl border border-corporate-100 bg-white shadow-xl shadow-corporate-200/20 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 to-corporate-600"></div>
        
        {filteredInquiries.length === 0 ? (
          <div className="p-16 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-corporate-50 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-corporate-300" />
            </div>
            <h3 className="text-lg font-bold text-corporate-900 mb-1">No Inquiries Found</h3>
            <p className="text-corporate-500 max-w-sm">
              Try adjusting your filters, or wait for new consultation requests.
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
                {filteredInquiries.map((inquiry) => {
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
    </>
  );
}
