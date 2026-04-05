'use client';

import { Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-white/10 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#D4FF00] flex items-center justify-center">
              <Zap className="w-4 h-4 text-[#050505]" />
            </div>
            <div>
              <span className="font-grotesk font-bold text-lg tracking-tight">HARVER</span>
              <span className="block text-[8px] font-mono text-[#737373] tracking-[0.3em]">TECHNOLOGIES</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="font-grotesk text-sm text-[#A3A3A3]">
              Energy Harvested. Intelligence Amplified. <span className="text-[#D4FF00]">Humanity Elevated.</span>
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[#737373]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="font-mono text-xs text-[#737373]">
            © 2026 Harver Technologies Pvt. Ltd. All rights reserved. Confidential.
          </p>
        </div>
      </div>
    </footer>
  );
}
