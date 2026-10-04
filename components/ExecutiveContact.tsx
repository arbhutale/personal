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
  ArrowUp
} from 'lucide-react';

export default function ExecutiveContact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Education Credentials */}
      <div className="mb-20">
        <div className="mb-8 pb-4 border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-semibold mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Education & Engineering Qualifications
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="bento-card p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10">
                    {edu.period}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {edu.location}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2.5">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 dark:text-slate-400">Classification:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collaboration / Contact Hub */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-6 border-b border-slate-200/80 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-semibold mb-2">
              <Mail className="w-3.5 h-3.5" />
              <span>DIRECT COLLABORATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Get In Touch & Connect
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md font-mono">
            Open for Senior Full Stack & Generative AI engineering roles, technical architecture consulting, and advisory collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Contact Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Email */}
            <div className="bento-card p-5 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Email Address</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-850 hover:bg-slate-200 dark:hover:bg-dark-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone */}
            <div className="bento-card p-5 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Direct Phone</div>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-850 hover:bg-slate-200 dark:hover:bg-dark-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="bento-card p-5 flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Base Location</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.location}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Open to Remote & Global Leadership</div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10 hover:border-blue-500 flex items-center justify-center gap-2 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold font-mono">LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10 hover:border-slate-800 dark:hover:border-white flex items-center justify-center gap-2 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span className="text-xs font-bold font-mono">GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right: Direct Dispatch Message Box (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bento-card p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Send a Direct Dispatch</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                Have a senior engineering opportunity or technical architecture collaboration? Drop a line below.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-center space-y-2 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300">Message Dispatched!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Thank you for reaching out. Anil will respond promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Senior GenAI Role / Architecture Opportunity"
                      className="w-full bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Anil, we are looking for a Senior Full Stack & GenAI Engineer to architect our enterprise platforms..."
                      className="w-full bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Dispatch Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Clean High-Contrast Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-mono">
          <span className="font-bold text-slate-900 dark:text-white font-display text-sm">{PERSONAL_INFO.name}</span>
          <span>•</span>
          <span className="text-slate-500 dark:text-slate-400">Senior Full Stack & Generative AI Engineer</span>
        </div>

        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
          <span>•</span>
          <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">© 2026 • Optimized for Mobile, iPad & Desktop</span>
        </div>
      </footer>

    </section>
  );
}
