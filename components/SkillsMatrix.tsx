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
  Sparkles
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  BrainCircuit,
  Server,
  Layout,
  Cloud,
  Database
};

export default function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories = selectedCategory === 'All' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white dark:bg-dark-950">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-sky-400/10 dark:bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 dark:bg-brand-cyan/10 border border-sky-300 dark:border-brand-cyan/30 text-sky-700 dark:text-brand-cyan text-xs font-mono font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY & MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive <span className="text-gradient-cyan">Skill Matrix</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A verified 8+ year toolkit spanning Agentic AI architectures, scalable Python/Node backends, modern React web applications, and enterprise cloud DevOps.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-brand-cyan dark:to-brand-blue text-white dark:text-black font-bold shadow-md dark:shadow-brand-cyan/20'
                    : 'bg-slate-100 dark:bg-dark-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-dark-850 border border-slate-200 dark:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup) => {
            const IconComponent = ICON_MAP[catGroup.iconName] || Layers;

            return (
              <div
                key={catGroup.category}
                className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-sky-400 dark:hover:border-brand-cyan/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-200 dark:border-white/10">
                    <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-brand-cyan/10 border border-sky-200 dark:border-brand-cyan/20 text-sky-600 dark:text-brand-cyan">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {catGroup.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {catGroup.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                            {skill.featured && (
                              <Sparkles className="w-3 h-3 text-sky-600 dark:text-brand-cyan" />
                            )}
                            {skill.name}
                          </span>
                          <span className="font-mono text-slate-500 dark:text-slate-400 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-dark-900 overflow-hidden border border-slate-200/60 dark:border-white/5">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 dark:from-brand-cyan dark:via-brand-blue dark:to-purple-500 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span>{catGroup.skills.length} Specialized Competencies</span>
                  <span className="text-sky-600 dark:text-brand-cyan font-semibold">PRODUCTION GRADE</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
