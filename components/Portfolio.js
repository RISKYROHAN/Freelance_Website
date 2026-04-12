'use client';

import { motion } from 'framer-motion';

export default function Portfolio() {
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

  const projects = [
    {
      title: 'CityCare Medical Center',
      category: 'Health & Wellness',
      challenge: 'A local clinic struggling with manual bookings and a dated website that didn\'t inspire patient trust.',
      solution: 'Developed a sterile, premium medical interface with an integrated 24/7 appointment booking system and doctor profiles.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80'
    },
    {
      title: 'Legal Associates',
      category: 'Legal Services',
      challenge: 'A boutique law firm needing an authoritative online presence to attract high-value corporate clients.',
      solution: 'Created a high-contrast, professional layout focusing on expertise, case studies, and easy consultation scheduling.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80'
    },
    {
      title: 'The Great Eastern',
      category: 'Food & Hospitality',
      challenge: 'An organic restaurant wanting to showcase their fresh menu and drive more local dinner reservations.',
      solution: 'Designed an immersive, visual-first website with a digital interactive menu and seamless OpenTable integration.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80'
    },
    {
      title: 'Vastu Real Estate',
      category: 'Real Estate',
      challenge: 'A growing property firm wanting to digitize their premium listings to target NRIs and young homebuyers.',
      solution: 'Designed an interactive property catalog with custom neighborhood maps and a direct WhatsApp inquiry feature.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80'
    },
    {
      title: 'Ethnic Boutique',
      category: 'Fashion & Retail',
      challenge: 'A traditional clothing store needing to showcase designer ethnic wear to an audience beyond local foot traffic.',
      solution: 'Built a visually stunning e-commerce presence that highlights intricate fabric details and streamlines checkout.',
      image: 'https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Deshmukh & Co. C.A.',
      category: 'Financial Services',
      challenge: 'A well-established Chartered Accountant firm looking to modernize and simplify tax consultation bookings.',
      solution: 'Developed a trust-building corporate site featuring a secure client document portal and automated scheduling.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section id="portfolio" className="bg-corporate-50">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeInUp}
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-corporate-900">Selected Works</h2>
          <p className="mx-auto max-w-2xl text-corporate-600">
            A look at recent projects where strategic problem-solving meets premium UI design.
          </p>
        </motion.div>
        <motion.div
          className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 px-4 sm:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-corporate-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-corporate-400"
          initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px] snap-center overflow-hidden rounded-2xl bg-white shadow-md border border-corporate-100 flex flex-col h-full"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="h-56 relative overflow-hidden group shrink-0">
                <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col flex-grow whitespace-normal h-[300px]">
                <div className="mb-2 text-sm font-medium text-accent-600">{project.category}</div>
                <h3 className="mb-4 text-xl font-semibold text-corporate-900">{project.title}</h3>
                <div className="mb-4">
                  <strong className="text-xs uppercase tracking-wide text-corporate-500">Challenge:</strong>
                  <p className="text-sm text-corporate-700 mt-1 line-clamp-3">{project.challenge}</p>
                </div>
                <div className="mt-auto">
                  <strong className="text-xs uppercase tracking-wide text-corporate-500">Solution:</strong>
                  <p className="text-sm text-corporate-700 mt-1 line-clamp-3">{project.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
