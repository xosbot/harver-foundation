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
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiry_type: 'partnership',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || 'Failed to submit inquiry');
      }

      setStatus('success');
      setFormData({
        name: '', email: '', company: '', phone: '',
        inquiry_type: 'partnership', subject: '', message: '',
      });
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
      className="py-24 lg:py-32 relative overflow-hidden bg-[#0C0C0E]"
    >
      <div className="absolute inset-0 grid-technical opacity-30" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-[#FF3B00]" />
              <span className="font-mono text-xs tracking-[0.2em] text-[#FF3B00] uppercase">
                Connect With Us
              </span>
            </div>

            <h2
              data-testid="contact-heading"
              className="font-display text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] mb-6"
            >
              Strategic
              <br />
              <span className="text-[#8A8A93]">Partnership</span>
            </h2>

            <p className="text-lg text-[#8A8A93] leading-relaxed mb-10">
              We invite visionary partners, governments, enterprises, and fellow pioneers to join us.
              The future is not coming—it is being harvested.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-10">
              <div className="border border-[#222225] bg-[#050505] p-5">
                <span className="font-mono text-xs text-[#8A8A93] block mb-1">HEADQUARTERS</span>
                <span className="text-white font-medium">Knowledge Park, Delhi NCR, India</span>
              </div>
              <div className="border border-[#222225] bg-[#050505] p-5">
                <span className="font-mono text-xs text-[#8A8A93] block mb-1">EMAIL</span>
                <span className="text-[#FF3B00] font-medium">global@harver.tech</span>
              </div>
            </div>

            {/* Global Presence */}
            <div className="border border-[#FF3B00]/30 bg-[#FF3B00]/5 p-6">
              <h3 className="font-display font-bold text-lg mb-3">Global Presence</h3>
              <div className="text-sm text-[#8A8A93] space-y-1">
                <p><span className="text-white font-medium">R&D Hubs:</span> Singapore, Munich, Boston, Shenzhen</p>
                <p><span className="text-white font-medium">Manufacturing:</span> India (3), Vietnam, Germany</p>
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
                  <label className="font-mono text-xs tracking-wider text-[#8A8A93] uppercase block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-testid="input-name"
                    className="w-full px-4 py-3 bg-[#050505] border border-[#222225] text-white"
                    placeholder="Dr. John Smith"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs tracking-wider text-[#8A8A93] uppercase block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-testid="input-email"
                    className="w-full px-4 py-3 bg-[#050505] border border-[#222225] text-white"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-xs tracking-wider text-[#8A8A93] uppercase block mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    data-testid="input-company"
                    className="w-full px-4 py-3 bg-[#050505] border border-[#222225] text-white"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs tracking-wider text-[#8A8A93] uppercase block mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    data-testid="input-phone"
                    className="w-full px-4 py-3 bg-[#050505] border border-[#222225] text-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs tracking-wider text-[#8A8A93] uppercase block mb-2">
                  Inquiry Type *
                </label>
                <select
                  name="inquiry_type"
                  value={formData.inquiry_type}
                  onChange={handleChange}
                  data-testid="input-inquiry-type"
                  className="w-full px-4 py-3 bg-[#050505] border border-[#222225] text-white"
                >
                  {inquiryTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-mono text-xs tracking-wider text-[#8A8A93] uppercase block mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  data-testid="input-subject"
                  className="w-full px-4 py-3 bg-[#050505] border border-[#222225] text-white"
                  placeholder="Partnership Opportunity"
                />
              </div>

              <div>
                <label className="font-mono text-xs tracking-wider text-[#8A8A93] uppercase block mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  data-testid="input-message"
                  className="w-full px-4 py-3 bg-[#050505] border border-[#222225] text-white resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>

              {status === 'success' && (
                <div data-testid="success-message" className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thank you! Our team will respond within 24-48 hours.</span>
                </div>
              )}

              {status === 'error' && (
                <div data-testid="error-message" className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                data-testid="submit-button"
                className="w-full btn-industrial px-8 py-4 text-sm tracking-wider flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    SUBMITTING...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    SUBMIT INQUIRY
                  </>
                )}
              </button>

              <p className="text-xs text-[#8A8A93] text-center">
                By submitting, you agree to our privacy policy. Confidential information will be handled with care.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
