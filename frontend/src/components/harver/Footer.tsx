'use client';

import { Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About', href: '#expertise' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Journey', href: '#journey' },
    { label: 'Careers', href: '#' },
  ],
  Technologies: [
    { label: 'Wireless Power', href: '#technologies' },
    { label: 'AI Systems', href: '#technologies' },
    { label: 'IoT Platform', href: '#technologies' },
    { label: 'Clean Tech', href: '#technologies' },
  ],
  Resources: [
    { label: 'Research Papers', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Press Kit', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Compliance', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F0FF] to-[#0080FF] flex items-center justify-center">
                <span className="font-display font-bold text-lg text-white">H</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg">Harver</span>
                <span className="font-display font-bold text-lg text-[#888]">.tech</span>
              </div>
            </div>
            <p className="text-sm text-[#888] leading-relaxed mb-6">
              Energy Harvested. Intelligence Amplified. Humanity Elevated.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#888]">
                <MapPin className="w-4 h-4 text-[#00F0FF]" />
                <span>Knowledge Park, Delhi NCR, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#888]">
                <Mail className="w-4 h-4 text-[#00F0FF]" />
                <span>global@harver.tech</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#888]">
                <Phone className="w-4 h-4 text-[#00F0FF]" />
                <span>+91 11 4567 8900</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-mono text-xs tracking-[0.2em] text-[#00F0FF] uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#888] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
          <div className="flex items-center gap-6">
            <p className="font-mono text-xs text-[#555]">
              © 2026 Harver Technologies Pvt. Ltd. All rights reserved.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-4">
            <div className="px-3 py-1.5 rounded-full bg-[#00F0FF]/5 border border-[#00F0FF]/20">
              <span className="font-mono text-[10px] text-[#00F0FF] tracking-wider">ISO 27001</span>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-[#00F0FF]/5 border border-[#00F0FF]/20">
              <span className="font-mono text-[10px] text-[#00F0FF] tracking-wider">SOC 2</span>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-[#00F0FF]/5 border border-[#00F0FF]/20">
              <span className="font-mono text-[10px] text-[#00F0FF] tracking-wider">GDPR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
