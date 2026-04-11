'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function Upgrade() {
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
    <section className="relative overflow-hidden bg-corporate-900 py-24 text-white">
      <div className="absolute inset-0 bg-[url('/images/upgrade-bg.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-corporate-900 to-transparent"></div>
      
      <div className="section-container relative z-10 text-center">
        <motion.div 
          className="mx-auto max-w-4xl"
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
        >
          <h2 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-[#f3e9d8]">
            Upgrade Your Digital Identity
          </h2>
          <p className="mb-4 text-xl text-corporate-200">
            Your website is often the first impression of your business. If it's outdated or ineffective, you're already losing potential customers to competitors who look more professional and trustworthy online.
          </p>
          <p className="mb-12 text-xl font-medium text-white">
            Let's build a website that not only looks premium — but actually brings you clients.
          </p>
          
          <a 
            href="https://wa.me/YOUR_PHONE_NUMBER" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-transform hover:scale-105"
          >
            WhatsApp Now
            <MessageCircle className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
