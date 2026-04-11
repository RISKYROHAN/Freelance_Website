'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
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

  const testimonials = [
    { 
      name: 'Dr. Robert Miller', 
      role: 'Head Dentist, CityCare Medical', 
      text: 'Our clinic\'s online bookings have increased by 40% since the new site went live. The professional look has significantly improved patient trust even before they walk through our doors.' 
    },
    { 
      name: 'Elena Rodriguez', 
      role: 'Senior Partner, Anderson & Associates', 
      text: 'The authoritative design of our new website has been a game-changer. We finally have a digital presence that matches the caliber of legal services we provide to our clients.' 
    },
  ];

  return (
    <section id="testimonials" className="bg-corporate-900 text-white">
      <div className="section-container">
        <motion.div 
          className="text-center mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-white">Don't Just Take My Word For It</h2>
          <p className="mx-auto max-w-2xl text-corporate-200">
            See what my clients have to say about their experience.
          </p>
        </motion.div>
        <motion.div 
          className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
        >
          {testimonials.map((test, i) => (
            <motion.div 
              key={i} 
              className="rounded-2xl bg-corporate-800 p-8 border border-corporate-700"
              variants={fadeInUp}
            >
              <div className="mb-6 flex gap-1 text-accent-400">
                ★ ★ ★ ★ ★
              </div>
              <p className="mb-6 text-lg italic text-corporate-100">"{test.text}"</p>
              <div>
                <p className="font-bold text-white">{test.name}</p>
                <p className="text-sm text-corporate-400">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
