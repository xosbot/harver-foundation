'use client';

export function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F0FF] to-[#0080FF] flex items-center justify-center">
              <span className="font-display font-bold text-lg text-white">H</span>
            </div>
            <div>
              <span className="font-display font-bold text-lg">Harver</span>
              <span className="font-display font-bold text-lg text-[#888]">.tech</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-sm text-[#888] text-center">
            Energy Harvested. Intelligence Amplified.{' '}
            <span className="text-[#00F0FF]">Humanity Elevated.</span>
          </p>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex items-center gap-8 text-sm text-[#555]">
            <a href="#" aria-label="Privacy Policy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" aria-label="Terms of Service" className="hover:text-white transition-colors">Terms</a>
            <a href="#" aria-label="Careers" className="hover:text-white transition-colors">Careers</a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="font-mono text-xs text-[#555]">
            © 2026 Harver Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
