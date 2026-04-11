'use client';

import { motion } from 'framer-motion';

export default function TermsOfService() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white py-24">
      <div className="section-container">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mx-auto max-w-3xl"
        >
          <h1 className="mb-8 text-4xl font-black text-corporate-900">Terms of Service</h1>
          <p className="mb-6 text-sm text-corporate-500 italic">Last Updated: April 09, 2026</p>
          
          <div className="prose prose-corporate prose-lg space-y-8 text-corporate-600">
            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services provided by DevLoom Web Services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">2. Description of Services</h2>
              <p>
                DevLoom provides premium web design, development, SEO, and digital consulting services specifically tailored for local businesses and professionals (Doctors, Lawyers, Restaurants, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">3. Project Terms</h2>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Proposals:</strong> All project timelines and costs will be clearly outlined in a custom proposal.</li>
                <li><strong>Content:</strong> Clients are responsible for providing necessary business content, images, and brand assets unless otherwise agreed.</li>
                <li><strong>Revisions:</strong> Each project includes a specified number of revision rounds to ensure satisfaction.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">4. Intellectual Property</h2>
              <p>
                Upon receipt of full payment, all custom design and code developed specifically for the client's website will be owned by the client. DevLoom retains the right to showcase the work in our portfolio and marketing materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">5. Limitation of Liability</h2>
              <p>
                DevLoom will not be liable for any indirect, incidental, or consequential damages resulting from the use of our services or any third-party platforms (hosting providers, CMS plugins, etc.) used in the project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">6. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of our local jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">7. Contact Information</h2>
              <p>
                Questions about the Terms of Service should be sent to us at hello@devloom.com.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
