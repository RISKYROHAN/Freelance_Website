'use client';

import { motion } from 'framer-motion';

export default function Hero() {
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
    <section id="home" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-corporate-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-corporate-900 to-transparent"></div>
      <motion.div 
        className="section-container relative z-10 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
          Empowering Local<br />
          <span className="text-accent-500">Businesses & Professionals</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-corporate-200 sm:text-xl px-4 sm:px-0">
          We specialize in high-converting, premium websites for Doctors, Lawyers, Restaurants, and Local Shops. Transform your local presence into a digital powerhouse.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-4 sm:px-0">
          <a href="#contact" className="btn-primary w-full sm:w-auto">Bring Your Business Online</a>
          <a href="#portfolio" className="btn-secondary !bg-transparent !text-white !border-white hover:!bg-white/10 w-full sm:w-auto">View Our Work</a>
        </div>
      </motion.div>
    </section>
  );
}
