'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const inquiryTypes = [
  { value: 'partnership', label: 'Strategic Partnership' },
  { value: 'investment', label: 'Investment Inquiry' },
  { value: 'technical', label: 'Technical Collaboration' },
  { value: 'media', label: 'Media & Press' },
  { value: 'general', label: 'General Inquiry' },
];

export function ContactForm() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '',
    inquiry_type: 'partnership', subject: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to submit');
      setStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', inquiry_type: 'partnership', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://static.prod-images.emergentagent.com/jobs/7eda1572-c4f0-42a3-ac66-6030124d9fc5/images/c9d22da17fceacc8999606d5c26b7e1c91b6f9f8edaa4406bff8310f06133a32.png"
          alt="Metallic surface"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#030303]/90" />
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-[0.2em] text-[#00F0FF] uppercase">Connect</span>
            <h2
              data-testid="contact-heading"
              className="font-display text-4xl sm:text-5xl font-bold tracking-tighter mt-4 mb-6"
            >
              Strategic <span className="text-[#888]">Partnership</span>
            </h2>
            <p className="text-lg text-[#888] leading-relaxed mb-10">
              We invite visionary partners, governments, enterprises, and fellow pioneers to join us.
              The future is not coming—it is being harvested.
            </p>

            <div className="space-y-4 mb-10">
              <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/5">
                <div className="text-xs text-[#555] uppercase tracking-wider mb-1">Headquarters</div>
                <div className="text-white font-medium">Knowledge Park, Delhi NCR, India</div>
              </div>
              <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/5">
                <div className="text-xs text-[#555] uppercase tracking-wider mb-1">Email</div>
                <div className="text-[#00F0FF] font-medium">global@harver.tech</div>
              </div>
            </div>

            {/* Trust Markers */}
            <div className="p-6 rounded-2xl bg-[#00F0FF]/5 border border-[#00F0FF]/20">
              <div className="text-sm font-medium mb-3">Backed By</div>
              <div className="flex items-center gap-6 text-[#888]">
                <span className="font-mono text-sm">Temasek</span>
                <span className="font-mono text-sm">SoftBank Vision</span>
                <span className="font-mono text-sm">DST India</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="text-xs text-[#555] uppercase tracking-wider block mb-2">Name *</label>
                  <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} required
                    data-testid="input-name" className="input-premium w-full" placeholder="Dr. John Smith" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-xs text-[#555] uppercase tracking-wider block mb-2">Email *</label>
                  <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} required
                    data-testid="input-email" className="input-premium w-full" placeholder="john@company.com" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-company" className="text-xs text-[#555] uppercase tracking-wider block mb-2">Company</label>
                  <input id="contact-company" type="text" name="company" value={formData.company} onChange={handleChange}
                    data-testid="input-company" className="input-premium w-full" placeholder="Acme Corp" />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="text-xs text-[#555] uppercase tracking-wider block mb-2">Phone</label>
                  <input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    data-testid="input-phone" className="input-premium w-full" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div>
                <label htmlFor="contact-inquiry-type" className="text-xs text-[#555] uppercase tracking-wider block mb-2">Inquiry Type *</label>
                <select id="contact-inquiry-type" name="inquiry_type" value={formData.inquiry_type} onChange={handleChange}
                  data-testid="input-inquiry-type" className="input-premium w-full">
                  {inquiryTypes.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="contact-subject" className="text-xs text-[#555] uppercase tracking-wider block mb-2">Subject *</label>
                <input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} required
                  data-testid="input-subject" className="input-premium w-full" placeholder="Partnership Opportunity" />
              </div>

              <div>
                <label htmlFor="contact-message" className="text-xs text-[#555] uppercase tracking-wider block mb-2">Message *</label>
                <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows={4}
                  data-testid="input-message" className="input-premium w-full resize-none" placeholder="Tell us about your vision..." />
              </div>

              {status === 'success' && (
                <div data-testid="success-message" className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thank you! Our team will respond within 24-48 hours.</span>
                </div>
              )}

              {status === 'error' && (
                <div data-testid="error-message" className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button type="submit" disabled={status === 'loading'} data-testid="submit-button"
                className="btn-premium w-full py-4 text-base flex items-center justify-center gap-2 disabled:opacity-50">
                {status === 'loading' ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                ) : (
                  <><Send className="w-5 h-5" /> Submit Inquiry</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
