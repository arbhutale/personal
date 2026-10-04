'use client';

import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Building2
} from 'lucide-react';

export default function ExperienceSection() {
  const [activeExpIndex, setActiveExpIndex] = useState(0);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative cyber-bg-grid">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-brand-purple/10 border border-indigo-200 dark:border-brand-purple/30 text-indigo-700 dark:text-purple-300 text-xs font-mono font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5 text-indigo-600 dark:text-brand-purple" />
            <span>CAREER PATH & ENTERPRISE LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional <span className="text-gradient-purple">Work Experience</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            8+ years architecting mission-critical platforms, pioneering Generative AI applications, and engineering scalable cloud microservices across premier technology organizations.
          </p>
        </div>

        {/* Interactive Experience Layout: Company List on Left, Deep Dive on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Company Selector Tab List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Select Organization
            </span>
            {EXPERIENCES.map((exp, idx) => (
              <button
                key={exp.company}
                onClick={() => setActiveExpIndex(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group ${
                  activeExpIndex === idx
                    ? 'bg-white dark:bg-dark-850 border-sky-500 dark:border-brand-cyan/60 shadow-lg shadow-sky-500/10 dark:shadow-brand-cyan/10 ring-1 ring-sky-500/30'
                    : 'bg-white/80 dark:bg-dark-900/60 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-dark-850 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} p-[1.5px] shadow-sm flex items-center justify-center`}>
                    <div className="w-full h-full bg-white dark:bg-dark-900 rounded-[10px] flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-slate-800 dark:text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-brand-cyan transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {exp.role}
                    </p>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${
                  activeExpIndex === idx ? 'text-sky-600 dark:text-brand-cyan translate-x-1' : 'text-slate-400 dark:text-slate-600'
                }`} />
              </button>
            ))}
          </div>

          {/* Experience Deep Dive Detail Card */}
          <div className="lg:col-span-8">
            {(() => {
              const exp = EXPERIENCES[activeExpIndex];
              return (
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/15 relative overflow-hidden">
                  
                  {/* Glowing Corner Indicator */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${exp.color} opacity-15 dark:opacity-20 blur-3xl rounded-full pointer-events-none`} />

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-white/5 border border-sky-200 dark:border-white/10 text-xs font-semibold text-sky-700 dark:text-brand-cyan mb-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{exp.type}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="text-lg font-bold text-slate-700 dark:text-slate-300 mt-1 flex items-center gap-2">
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1.5 text-xs font-mono">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-sky-600 dark:text-brand-cyan" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities & Achievements */}
                  <div className="mt-6 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2 font-mono">
                      <Layers className="w-4 h-4 text-sky-600 dark:text-brand-cyan" />
                      Key Contributions & Impact
                    </h4>

                    <div className="space-y-3">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 dark:bg-dark-900/60 border border-slate-200/60 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-brand-cyan shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 font-mono">
                      Technologies & Tools Utilized
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono font-medium rounded-xl bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-sky-500 dark:hover:border-brand-cyan hover:text-sky-600 dark:hover:text-brand-cyan transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
}
