'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Layers, 
  BrainCircuit, 
  Server, 
  Layout, 
  Cloud, 
  Database, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  BrainCircuit,
  ShieldCheck,
  Server,
  Layout,
  Cloud,
  Database
};

export default function SkillConstellation() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories = selectedCategory === 'All' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b border-slate-200/80 dark:border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold mb-2">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL PROFICIENCY & STACK MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Engineering Competencies
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 max-w-xl font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((catGroup) => {
          const IconComponent = ICON_MAP[catGroup.iconName] || Layers;

          return (
            <div
              key={catGroup.category}
              className="bento-card p-6 flex flex-col justify-between border-cyan-500/20 hover:border-cyan-500/50 transition-all"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-200/80 dark:border-white/10">
                  <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display text-slate-900 dark:text-white">
                    {catGroup.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {catGroup.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 font-sans">
                          {skill.featured && (
                            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          )}
                          {skill.name}
                        </span>
                        <span className="font-mono text-cyan-600 dark:text-cyan-400 text-[11px] font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 transition-all duration-1000 shadow-sm shadow-cyan-400/50"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span>{catGroup.skills.length} Specializations</span>
                <span className="text-emerald-500 font-bold">● VERIFIED PRODUCTION</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
