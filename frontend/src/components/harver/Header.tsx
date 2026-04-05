'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#technologies', label: 'Technologies' },
  { href: '#history', label: 'History' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      data-testid="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" data-testid="logo" className="flex items-center gap-4 group">
          <div className="w-11 h-11 bg-[#FF3B00] flex items-center justify-center group-hover:glow-primary transition-all">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-xl tracking-tight block">HARVER</span>
            <span className="font-mono text-[10px] text-[#8A8A93] tracking-[0.25em]">TECHNOLOGIES</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10" data-testid="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#8A8A93] hover:text-white font-medium tracking-wide link-underline transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            data-testid="header-cta"
            className="btn-industrial px-6 py-3 text-sm tracking-wider"
          >
            PARTNER WITH US
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden p-2 text-white"
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
            className="lg:hidden bg-[#0C0C0E] border-t border-[#222225]"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 text-[#8A8A93] hover:text-white hover:bg-[#141417] font-medium transition-all border-b border-[#222225] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 pt-4">
                <a href="#contact" className="btn-industrial block text-center px-6 py-4 text-sm">
                  PARTNER WITH US
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
