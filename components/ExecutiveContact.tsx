'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  GraduationCap, 
  Send, 
  Check, 
  Copy, 
  ExternalLink,
  MessageSquare,
  ArrowUp,
  Award,
  Zap,
  Loader2
} from 'lucide-react';

export default function ExecutiveContact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to transmit message via SMTP.');
      }

      setFormSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormSubmitted(false);
      }, 5000);
    } catch (err: any) {
      setErrorMessage(err?.message || 'Failed to dispatch inquiry. Please check your network connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Education Credentials */}
      <div className="mb-20">
        <div className="mb-8 pb-4 border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Education & Engineering Qualifications
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="bento-card p-6 sm:p-7 flex flex-col justify-between border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10">
                    {edu.period}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" /> {edu.location}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-xs font-semibold font-mono text-cyan-600 dark:text-cyan-400 mb-2.5">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {edu.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 dark:text-slate-400">Classification:</span>
                <span className="text-emerald-500 font-bold">● {edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collaboration / Contact Hub */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 pb-6 border-b border-slate-200/80 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold mb-2">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>DIRECT COLLABORATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Get In Touch & Connect
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md font-mono">
            Open for Senior Full Stack & Generative AI engineering leadership roles, technical architecture consulting, and advisory collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Contact Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Email */}
            <div className="bento-card p-5 flex items-center justify-between group border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Email Address</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors font-mono">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone */}
            <div className="bento-card p-5 flex items-center justify-between group border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Phone & WhatsApp</div>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors font-mono">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="bento-card p-5 flex items-center justify-between group border-cyan-500/20">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Primary Location</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card p-3.5 flex items-center justify-between group border-cyan-500/20 hover:border-cyan-500/50 transition-all text-xs font-mono font-bold text-slate-900 dark:text-white"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity text-cyan-400" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card p-3.5 flex items-center justify-between group border-cyan-500/20 hover:border-cyan-500/50 transition-all text-xs font-mono font-bold text-slate-900 dark:text-white"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-slate-200" />
                  <span>GitHub</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity text-cyan-400" />
              </a>
            </div>

          </div>

          {/* Right: Message Terminal Form (7 Cols) */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-8 border-cyan-500/20 hover:border-cyan-500/50 transition-all">
            <div className="flex items-center gap-2 pb-4 mb-6 border-b border-slate-200 dark:border-white/10">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <h3 className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                TRANSMIT DIRECT INQUIRY
              </h3>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center font-mono text-xs space-y-2 animate-fadeIn">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Transmission Received</h4>
                <p className="text-slate-300">Thank you for reaching out. Anil will respond to your inquiry shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-slate-500 dark:text-slate-400 uppercase font-bold mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 dark:text-slate-400 uppercase font-bold mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. s.jenkins@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 dark:text-slate-400 uppercase font-bold mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior AI Architect Opportunity / Technical Consulting"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 dark:text-slate-400 uppercase font-bold mb-1.5">Message / Requirements</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details regarding role requirements, team scope, or project architecture..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none font-sans text-xs"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 dark:text-red-400 text-xs font-mono">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 font-bold text-xs font-mono hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20 active:scale-95"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>

      {/* Futuristic Cyber Footer */}
      <footer className="mt-24 pt-8 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
        <div>
          © {new Date().getFullYear()} <strong className="text-slate-900 dark:text-white">{PERSONAL_INFO.name}</strong>. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <span className="text-emerald-500 font-bold">● SYSTEM ONLINE</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-all flex items-center gap-1 font-bold"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>

    </section>
  );
}
