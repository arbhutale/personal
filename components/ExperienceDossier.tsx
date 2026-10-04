'use client';

import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2,
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';

export default function ExperienceDossier() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeExp = EXPERIENCES[selectedIdx];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-6 border-b border-slate-200/80 dark:border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-semibold mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>ENTERPRISE MISSION DOSSIER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Leadership
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md font-mono">
          8+ years architecting mission-critical platforms, pioneering Generative AI applications, and engineering scalable cloud microservices.
        </p>
      </div>

      {/* Interactive Dossier Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Organization Selector Column (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          {EXPERIENCES.map((exp, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={exp.company}
                onClick={() => setSelectedIdx(idx)}
                className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between group ${
                  isSelected
                    ? 'bento-card border-indigo-500/60 dark:border-indigo-400/60 shadow-md ring-1 ring-indigo-500/20'
                    : 'bg-white/70 dark:bg-dark-900/60 border-slate-200/80 dark:border-white/5 hover:bg-white dark:hover:bg-dark-850'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} p-[1px] flex items-center justify-center shrink-0`}>
                    <div className="w-full h-full bg-white dark:bg-dark-950 rounded-[11px] flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-slate-800 dark:text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold transition-colors ${
                      isSelected ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'
                    }`}>
                      {exp.company}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {exp.role}
                    </p>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className={`w-2 h-2 rounded-full transition-all ${
                  isSelected ? 'bg-indigo-600 dark:bg-indigo-400 scale-125' : 'bg-transparent'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Mission Briefing Sheet (8 cols) */}
        <div className="lg:col-span-8 bento-card p-6 sm:p-8 relative overflow-hidden">
          
          {/* Top Organization Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                <Sparkles className="w-3 h-3 text-indigo-500" />
                <span>{activeExp.type}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
                {activeExp.role}
              </h3>
              <div className="text-base font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">
                {activeExp.company}
              </div>
            </div>

            <div className="flex flex-col items-end gap-1 text-xs font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-dark-950 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>{activeExp.period}</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
                <MapPin className="w-3 h-3" />
                <span>{activeExp.location}</span>
              </div>
            </div>
          </div>

          {/* Key Deliverables & Achievements */}
          <div className="mt-6 space-y-3.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Key Architectural Contributions</span>
            </h4>

            <div className="space-y-2.5">
              {activeExp.highlights.map((h, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-850/80 border border-slate-200/70 dark:border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="mt-7 pt-5 border-t border-slate-200/80 dark:border-white/10">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Production Tech Matrix
            </div>
            <div className="flex flex-wrap gap-2">
              {activeExp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-xl bg-slate-100 dark:bg-dark-950 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
