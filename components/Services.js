'use client';

import { motion } from 'framer-motion';
import { MonitorSmartphone, Calendar, MapPin, Store, Layout, Search } from 'lucide-react';

export default function Services() {
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

  const servicesList = [
    { 
      title: 'Local SEO & Google Maps', 
      desc: 'We optimize your business to appear at the top of local searches and Google Maps, ensuring customers in your area find you first.', 
      icon: MapPin 
    },
    { 
      title: 'Custom Business Systems', 
      desc: 'From online appointment bookings for doctors and lawyers to digital menus for restaurants, we build systems that automate your workflow.', 
      icon: Calendar 
    },
    { 
      title: 'High-Converting Web Design', 
      desc: 'Tailor-made, premium websites designed specifically for local professionals to showcase authority and convert visitors into clients.', 
      icon: Layout 
    }
  ];

  return (
    <section id="services" className="bg-white">
      <div className="section-container">
        <motion.div 
          className="text-center mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-corporate-900">Expertise Engineered for Results</h2>
          <p className="mx-auto max-w-2xl text-corporate-600">
            We specialize in providing high-end solutions that elevate your brand and bring you measurable success.
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
          {servicesList.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={i} 
                className="rounded-2xl border border-corporate-100 bg-corporate-50 p-8 transition hover:shadow-lg cursor-pointer flex flex-col items-start"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 rounded-xl bg-accent-100 p-4 text-accent-600">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-corporate-900">{service.title}</h3>
                <p className="text-corporate-600">{service.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
