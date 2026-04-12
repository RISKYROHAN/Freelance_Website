'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
          <h1 className="mb-8 text-4xl font-black text-corporate-900">Privacy Policy</h1>
          <p className="mb-6 text-sm text-corporate-500 italic">Last Updated: April 09, 2026</p>
          
          <div className="prose prose-corporate prose-lg space-y-8 text-corporate-600">
            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">1. Introduction</h2>
              <p>
                Welcome to Localify Web Services. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">2. Information We Collect</h2>
              <p>
                We only collect information that you voluntarily provide to us through our contact forms or email communication. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Name and contact person details</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business/Clinic name</li>
                <li>Project requirements and details</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">3. How We Use Your Information</h2>
              <p>
                The information we collect is used solely for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To respond to your inquiries and consultation requests</li>
                <li>To provide and manage our web development and SEO services</li>
                <li>To communicate regarding project milestones and updates</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We do not sell, trade, or otherwise transfer your personal information to outside parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">5. Your Rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal data that we hold. If you wish to exercise these rights, please contact us at hello@localify.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">6. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
