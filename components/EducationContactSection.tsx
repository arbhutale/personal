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

export default function EducationContactSection() {
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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-100/40 dark:bg-dark-950 cyber-bg-grid border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Education Highlight Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-brand-purple/10 border border-indigo-200 dark:border-brand-purple/30 text-indigo-700 dark:text-purple-300 text-xs font-mono font-semibold mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-600 dark:text-purple-400" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Education & <span className="text-gradient-purple">Qualifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-100 dark:bg-brand-cyan/10 text-sky-700 dark:text-brand-cyan border border-sky-300 dark:border-brand-cyan/30">
                      {edu.period}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {edu.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-sky-600 dark:text-brand-cyan mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 dark:text-slate-400">Classification:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 dark:bg-brand-cyan/10 border border-sky-300 dark:border-brand-cyan/30 text-sky-700 dark:text-brand-cyan text-xs font-mono font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In <span className="text-gradient-cyan">Touch</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Open to senior engineering roles, Generative AI architecture consulting, and high-impact enterprise collaborations.
          </p>
        </div>

        {/* Contact Info & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-sky-100 dark:bg-brand-cyan/10 text-sky-600 dark:text-brand-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500">Email Address</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-brand-cyan transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-brand-cyan transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500">Direct Phone</div>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500">Primary Location</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.location}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Open to Remote, Hybrid & Relocation</div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white dark:bg-dark-900/90 border border-slate-200 dark:border-white/10 hover:border-blue-500 flex items-center justify-center gap-2 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm group"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold">LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white dark:bg-dark-900/90 border border-slate-200 dark:border-white/10 hover:border-slate-800 dark:hover:border-white flex items-center justify-center gap-2 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-all shadow-sm group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold">GitHub Repos</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/15 shadow-xl dark:shadow-2xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sky-600 dark:text-brand-cyan" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Have a project, role opening, or technical question? Leave a note and I'll respond within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-center space-y-2 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-800 dark:text-emerald-300">Message Received!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Thank you for reaching out. Anil will get back to you promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white dark:bg-dark-950 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-sky-500 dark:focus:border-brand-cyan shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-white dark:bg-dark-950 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-sky-500 dark:focus:border-brand-cyan shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Senior GenAI Opportunity / Architecture Collaboration"
                      className="w-full bg-white dark:bg-dark-950 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-sky-500 dark:focus:border-brand-cyan shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Anil, we are looking for a Senior GenAI Engineer to architect our enterprise AI systems..."
                      className="w-full bg-white dark:bg-dark-950 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-sky-500 dark:focus:border-brand-cyan shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 dark:from-brand-cyan dark:via-brand-blue dark:to-purple-500 text-white dark:text-black font-bold text-xs flex items-center justify-center gap-2 hover:opacity-95 shadow-md dark:shadow-brand-cyan/20 transition-all active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Anil</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <span className="font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.name}</span>
            <span>•</span>
            <span className="font-medium text-slate-600 dark:text-slate-400">Senior Full Stack & Generative AI Engineer</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-brand-cyan transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
            <span>•</span>
            <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">© 2026 • Optimized for Mobile, iPad & Desktop</span>
          </div>
        </footer>

      </div>
    </section>
  );
}
