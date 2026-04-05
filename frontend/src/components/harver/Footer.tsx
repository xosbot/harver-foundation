'use client';

import { Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-[#222225] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#FF3B00] flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-tight block">HARVER</span>
              <span className="font-mono text-[9px] text-[#8A8A93] tracking-[0.25em]">TECHNOLOGIES</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="text-sm text-[#8A8A93]">
              Energy Harvested. Intelligence Amplified.{' '}
              <span className="text-[#FF3B00] font-semibold">Humanity Elevated.</span>
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-[#8A8A93]">
            <a href="#" className="hover:text-white transition-colors link-underline">Privacy</a>
            <a href="#" className="hover:text-white transition-colors link-underline">Terms</a>
            <a href="#" className="hover:text-white transition-colors link-underline">Careers</a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#222225] text-center">
          <p className="font-mono text-xs text-[#8A8A93]">
            © 2026 Harver Technologies Pvt. Ltd. All rights reserved. Confidential.
          </p>
        </div>
      </div>
    </footer>
  );
}
