'use client';

import { motion } from 'framer-motion';

export default function About() {
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
    <section id="about" className="bg-corporate-50">
      <div className="section-container">
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
        >
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl text-corporate-900">Empowering Local Businesses to Dominate the Digital Space.</h2>
          <p className="mb-6 text-lg text-corporate-600">
            Localify Web Services is dedicated to helping local professionals—Doctors, Lawyers, Restaurateurs, and Boutique Owners—establish a premium online presence. In a world where your first impression is often digital, we ensure your business stands out.
          </p>
          <p className="text-lg text-corporate-600">
            Local businesses are the heart of our community. Unlike big agencies that offer generic templates, I provide personalized digital strategies that convert local visitors into lifelong customers, ensuring your expertise is matched by your online authority.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
