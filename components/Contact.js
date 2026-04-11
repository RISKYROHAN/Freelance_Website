'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', businessType: '' });
  const [status, setStatus] = useState('');

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

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '', businessType: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 15,
        mass: 0.8,
        duration: 0.8
      } 
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="section-container relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-100 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <motion.div 
          className="mx-auto max-w-3xl rounded-3xl bg-corporate-900 p-8 text-white sm:p-12 shadow-2xl relative z-10"
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
        >
          <div className="text-center mb-10">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-white">Ready To Scale Your Business?</h2>
            <p className="text-corporate-200">
              Let's get on a free consultation call to discuss your goals and how a premium custom website can help you achieve them.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-corporate-200 mb-2">Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleInputChange} required className="w-full rounded-lg border border-corporate-700 bg-corporate-800 px-4 py-3 text-white placeholder-corporate-400 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-corporate-200 mb-2">Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleInputChange} required className="w-full rounded-lg border border-corporate-700 bg-corporate-800 px-4 py-3 text-white placeholder-corporate-400 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-corporate-200 mb-2">Business Category</label>
              <select 
                id="businessType" 
                value={formData.businessType} 
                onChange={handleInputChange} 
                required 
                className="w-full rounded-lg border border-corporate-700 bg-corporate-800 px-4 py-3 text-white focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500 appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-corporate-900">Select your industry</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type} className="bg-corporate-900">
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-corporate-200 mb-2">Project Details</label>
              <textarea id="message" value={formData.message} onChange={handleInputChange} required rows="4" className="w-full rounded-lg border border-corporate-700 bg-corporate-800 px-4 py-3 text-white placeholder-corporate-400 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500" placeholder="Tell us about your business and your goals..."></textarea>
            </div>
            <button type="submit" className="w-full btn-primary !py-4 text-lg">Send Inquiry</button>
            {status && <p className="text-center text-sm font-medium mt-4 text-accent-400">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
