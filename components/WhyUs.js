'use client';

import { motion } from 'framer-motion';
import { Target, Star, Headset } from 'lucide-react';

export default function WhyUs() {
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

  const reasons = [
    { 
      title: 'Local Market Expertise', 
      desc: 'I understand the local landscape. We don\'t just build websites; we build digital bridges that connect your local services with neighbors and community members looking for your expertise.', 
      icon: Target 
    },
    { 
      title: 'Professional Authority', 
      desc: 'For Lawyers and Doctors, your website is your digital credentials. I design high-end, authoritative layouts that establish instant trust and reflect your professional standing.', 
      icon: Star 
    },
    { 
      title: 'Community-Focused Results', 
      desc: 'Our goal is to help local businesses thrive. Whether it\'s a furniture shop or a restaurant, we focus on driving local foot traffic and online conversions that grow our economy.', 
      icon: Headset 
    }
  ];

  return (
    <section id="why-us" className="bg-white">
      <div className="section-container">
        <motion.div 
          className="text-center mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
        >
          <h2 className="mb-4 text-sm font-bold tracking-widest text-accent-600 uppercase">The Localify Advantage</h2>
          <h3 className="mb-4 text-3xl font-bold sm:text-4xl text-corporate-900">Why Smart Businesses Choose Me</h3>
          <p className="mx-auto max-w-2xl text-corporate-600">
            Not just another developer — a focused partner who cares about your results.
          </p>
        </motion.div>
        <motion.div 
          className="grid gap-8 md:grid-cols-3"
          initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={i} 
                className="rounded-2xl border-l-4 border-accent-500 bg-corporate-50 p-6 md:p-8 flex flex-col items-start transition hover:bg-corporate-100 cursor-pointer"
                variants={fadeInUp}
              >
                <div className="mb-4 rounded-full bg-accent-100 p-3 text-accent-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mb-3 text-xl font-bold text-corporate-900">{reason.title}</h4>
                <p className="text-corporate-600">{reason.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
