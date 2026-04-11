'use client';

import { motion } from 'framer-motion';

export default function Founder() {
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
    <section id="founder" className="bg-white">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
        >
          <h2 className="mb-4 text-sm font-bold tracking-widest text-accent-600 uppercase">Man Behind DevLoom</h2>
          <h3 className="mb-6 text-3xl font-bold sm:text-4xl text-corporate-900">Hi, I'm the person you'll be working with directly.</h3>
          <p className="mb-4 text-corporate-600">
            I started by helping local businesses build their online presence, and I quickly realised one thing: most businesses don't need complex websites — they need simple, clean websites that actually bring them customers.
          </p>
          <p className="mb-4 text-corporate-600">
            That's exactly what I focus on. Every website I create is designed to build trust, communicate your value clearly, and turn visitors into clients. No templates, no shortcuts — just purposeful design aligned with your business goals.
          </p>
          <p className="text-corporate-600">
            When you work with me, you work directly with me. From understanding your vision to final delivery and even after launch, I'm there to support you.
          </p>
        </motion.div>
        <motion.div 
          className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: false }}
        >
          <img src="/images/founder.jpg" alt="Founder" className="absolute inset-0 h-full w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
