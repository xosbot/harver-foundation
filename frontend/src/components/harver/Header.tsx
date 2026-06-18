'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#technologies', label: 'Technologies' },
  { href: '#journey', label: 'Journey' },
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'header-blur' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" data-testid="logo" aria-label="Harver Foundation home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F0FF] to-[#0080FF] flex items-center justify-center">
              <span className="font-display font-bold text-lg text-white">H</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-lg tracking-tight">Harver</span>
              <span className="font-display font-bold text-lg tracking-tight text-[#888]">.tech</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 text-sm text-[#888] hover:text-white font-medium transition-colors rounded-full hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              data-testid="header-cta"
              className="btn-premium px-6 py-2.5 text-sm"
            >
              Partner With Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            data-testid="mobile-menu-toggle"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          data-testid="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#0A0A0A] border-t border-white/5"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3.5 text-[#888] hover:text-white font-medium rounded-xl hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-premium mt-4 py-3.5 text-center text-sm">
              Partner With Us
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
