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
        name: '',
        email: '',
        company: '',
        phone: '',
        inquiry_type: 'partnership',
        subject: '',
        message: '',
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
      className="py-24 md:py-32 relative overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs tracking-[0.2em] text-[#D4FF00] uppercase block mb-4">
              Connect With Us
            </span>
            <h2
              data-testid="contact-heading"
              className="font-grotesk text-4xl md:text-5xl font-black tracking-tighter mb-6"
            >
              Strategic
              <br />
              <span className="text-[#A3A3A3]">Partnership</span>
            </h2>
            <p className="text-lg text-[#A3A3A3] leading-relaxed mb-8">
              We invite visionary partners, governments, enterprises, and fellow pioneers to join us. 
              The future is not coming—it is being harvested.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="p-4 border border-white/10 bg-[#121212]">
                <span className="font-mono text-xs text-[#737373] block mb-1">Headquarters</span>
                <span className="text-white">Knowledge Park, Delhi NCR, India</span>
              </div>
              <div className="p-4 border border-white/10 bg-[#121212]">
                <span className="font-mono text-xs text-[#737373] block mb-1">Email</span>
                <span className="text-[#D4FF00]">global@harver.tech</span>
              </div>
            </div>

            {/* Global Presence */}
            <div className="p-6 border border-[#D4FF00]/20 bg-[#D4FF00]/5">
              <h3 className="font-grotesk font-bold mb-3">Global Presence</h3>
              <p className="text-sm text-[#A3A3A3]">
                <strong className="text-white">R&D Hubs:</strong> Singapore, Munich, Boston, Shenzhen
                <br />
                <strong className="text-white">Manufacturing:</strong> India (3), Vietnam, Germany
              </p>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-mono text-xs tracking-wider text-[#737373] uppercase block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-testid="input-name"
                    className="w-full px-4 py-3 bg-[#121212] border border-white/10 focus:border-[#D4FF00] outline-none transition-colors"
                    placeholder="Dr. John Smith"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs tracking-wider text-[#737373] uppercase block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-testid="input-email"
                    className="w-full px-4 py-3 bg-[#121212] border border-white/10 focus:border-[#D4FF00] outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-mono text-xs tracking-wider text-[#737373] uppercase block mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    data-testid="input-company"
                    className="w-full px-4 py-3 bg-[#121212] border border-white/10 focus:border-[#D4FF00] outline-none transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs tracking-wider text-[#737373] uppercase block mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    data-testid="input-phone"
                    className="w-full px-4 py-3 bg-[#121212] border border-white/10 focus:border-[#D4FF00] outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs tracking-wider text-[#737373] uppercase block mb-2">
                  Inquiry Type *
                </label>
                <select
                  name="inquiry_type"
                  value={formData.inquiry_type}
                  onChange={handleChange}
                  data-testid="input-inquiry-type"
                  className="w-full px-4 py-3 bg-[#121212] border border-white/10 focus:border-[#D4FF00] outline-none transition-colors"
                >
                  {inquiryTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-mono text-xs tracking-wider text-[#737373] uppercase block mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  data-testid="input-subject"
                  className="w-full px-4 py-3 bg-[#121212] border border-white/10 focus:border-[#D4FF00] outline-none transition-colors"
                  placeholder="Partnership Opportunity"
                />
              </div>

              <div>
                <label className="font-mono text-xs tracking-wider text-[#737373] uppercase block mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  data-testid="input-message"
                  className="w-full px-4 py-3 bg-[#121212] border border-white/10 focus:border-[#D4FF00] outline-none transition-colors resize-none"
                  placeholder="Tell us about your vision and how we can collaborate..."
                />
              </div>

              {/* Status Messages */}
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
                className="w-full btn-primary px-8 py-4 text-base font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Inquiry
                  </>
                )}
              </button>

              <p className="text-xs text-[#737373] text-center">
                By submitting, you agree to our privacy policy. Confidential information will be handled with care.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
