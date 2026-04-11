'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Send, Camera, Globe, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

export default function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const showSolidNav = scrolled || !isHome;

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Founder', href: '/#founder' },
    { name: 'Services', href: '/#services' },
    { name: 'Why DevLoom', href: '/#why-us' },
    { name: 'Testimonials', href: '/#testimonials' },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Premium Header */}
      <nav 
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          showSolidNav ? 'bg-white/90 shadow-lg backdrop-blur-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <motion.a 
            href="/#home" 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-600 font-black text-white shadow-lg shadow-accent-600/20">
              D
            </div>
            <span className={`text-2xl font-black tracking-tighter ${showSolidNav ? 'text-corporate-900' : 'text-white'}`}>
              DevLoom
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className={`group relative text-sm font-semibold transition-colors ${
                    showSolidNav ? 'text-corporate-600 hover:text-accent-600' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
            <motion.a 
              href="/#contact" 
              className="btn-primary !py-2.5 !px-5 shadow-lg shadow-accent-600/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-lg transition-colors ${showSolidNav ? 'text-corporate-900 hover:bg-corporate-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-corporate-100 bg-white"
            >
              <div className="flex flex-col space-y-4 p-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    className="text-lg font-bold text-corporate-900 hover:text-accent-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="/#contact" 
                  className="btn-primary w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>{children}</main>

      {/* Modern Multi-Column Footer */}
      <footer className="bg-corporate-900 pt-20 pb-10 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-corporate-500/10 blur-3xl"></div>
        
        <div className="section-container relative z-10">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Column 1: Brand */}
            <div className="space-y-6">
              <a href="/#home" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-600 font-black text-white">
                  D
                </div>
                <span className="text-2xl font-black tracking-tighter text-white">
                  DevLoom
                </span>
              </a>
              <p className="text-corporate-300 leading-relaxed max-w-xs">
                Empowering local businesses with premium digital presence. Specialists in Doctor, Lawyer, and Restaurant websites centered on community growth.
              </p>
              <div className="flex gap-4">
                {[MessageCircle, Send, Camera, Globe].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    href="#" 
                    className="rounded-full bg-corporate-800 p-2.5 text-corporate-300 transition-colors hover:bg-accent-600 hover:text-white"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="mb-6 text-lg font-bold text-white tracking-widest uppercase text-sm">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="flex items-center gap-2 text-corporate-400 transition-colors hover:text-white group">
                      <ChevronRight className="h-4 w-4 text-accent-500 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="mb-6 text-lg font-bold text-white tracking-widest uppercase text-sm">Specialties</h4>
              <ul className="space-y-4">
                {['Doctor Websites', 'Lawyer Websites', 'Restaurant Digital Menus', 'Furniture Showrooms', 'Local SEO & Maps'].map((item) => (
                  <li key={item}>
                    <a href="/#services" className="text-corporate-400 transition-colors hover:text-white flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-accent-500" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="mb-6 text-lg font-bold text-white tracking-widest uppercase text-sm">Get In Touch</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-corporate-800 p-2 text-accent-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-corporate-500 mb-1 font-bold">Email Us</p>
                    <a href="mailto:hello@devloom.com" className="text-corporate-200 hover:text-white transition-colors">hello@devloom.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-corporate-800 p-2 text-accent-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-corporate-500 mb-1 font-bold">Call Us</p>
                    <a href="tel:+1234567890" className="text-corporate-200 hover:text-white transition-colors">+1 (234) 567-890</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-corporate-800 p-2 text-accent-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-corporate-500 mb-1 font-bold">Our Office</p>
                    <p className="text-corporate-200">123 Local Street, City Center</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 border-t border-corporate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-corporate-500">
              © {new Date().getFullYear()} DevLoom Web Services. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-corporate-500">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

