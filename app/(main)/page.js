'use client';

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { UpgradeCTA } from "@/components/site/UpgradeCTA";
import { WhyLocalify } from "@/components/site/WhyLocalify";
import { Works } from "@/components/site/Works";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function HomePage() {
    return (
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <UpgradeCTA />
          <WhyLocalify />
          <Works />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    );
}
