'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#technologies', label: 'Technologies' },
  { href: '#history', label: 'Our Story' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      data-testid="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" data-testid="logo" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#D4FF00] flex items-center justify-center group-hover:glow-energy transition-all">
            <Zap className="w-6 h-6 text-[#050505]" />
          </div>
          <div>
            <span className="font-grotesk font-bold text-xl tracking-tight">HARVER</span>
            <span className="block text-[10px] font-mono text-[#A3A3A3] tracking-[0.3em]">TECHNOLOGIES</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#A3A3A3] hover:text-white transition-colors font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary px-5 py-2.5 text-sm font-semibold"
            data-testid="header-cta"
          >
            Partner With Us
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-3 text-[#A3A3A3] hover:text-white hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 pt-4">
                <a href="#contact" className="btn-primary block text-center px-5 py-3">
                  Partner With Us
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
