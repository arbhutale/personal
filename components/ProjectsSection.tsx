'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { 
  FolderGit2, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Workflow, 
  X,
  Zap,
  Activity
} from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-100/50 dark:bg-dark-950">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-sky-400/10 dark:bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 dark:bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 dark:bg-brand-cyan/10 border border-sky-300 dark:border-brand-cyan/30 text-sky-700 dark:text-brand-cyan text-xs font-mono font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>ENTERPRISE KEY PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="text-gradient-cyan">AI & Cloud Platforms</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            High-impact production solutions engineered with Agentic RAG, stateful multi-agent workflows, FastAPI microservices, and automated AWS DevOps pipelines.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200 dark:border-white/10 hover:border-sky-400 dark:hover:border-brand-cyan/40 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 transition-opacity"
                style={{ background: `linear-gradient(90deg, ${project.accentColor}, #4facfe)` }}
              />

              <div>
                {/* Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                    {project.category}
                  </span>
                  <span 
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-black font-mono shadow-sm"
                    style={{ backgroundColor: project.accentColor }}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-brand-cyan transition-colors mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>

                {/* Production Impact Metric */}
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-dark-950/80 border border-emerald-200 dark:border-white/5 mb-6 flex items-start gap-2.5">
                  <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                    {project.metrics}
                  </p>
                </div>

                {/* Key Pipeline Steps Preview */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-mono">
                    Pipeline Architecture Flow:
                  </span>
                  {project.flowSteps.slice(0, 3).map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-brand-cyan" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{step.step}:</span>
                      <span className="truncate text-slate-500 dark:text-slate-400">{step.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tech Stack & Trigger */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono rounded-lg bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded-lg bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-white/10 text-sky-600 dark:text-brand-cyan font-bold">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-dark-900 dark:hover:bg-dark-850 border border-slate-200 dark:border-white/15 hover:border-sky-400 dark:hover:border-brand-cyan/40 text-xs font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2 group/btn transition-all shadow-sm"
                >
                  <Workflow className="w-3.5 h-3.5 text-sky-600 dark:text-brand-cyan" />
                  <span>Inspect Architecture & Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Architecture Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 dark:bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-dark-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors border border-slate-200 dark:border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="pr-8">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-100 dark:bg-brand-cyan/10 border border-sky-300 dark:border-brand-cyan/30 text-sky-700 dark:text-brand-cyan mb-2 inline-block">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
                {selectedProject.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Metrics Callout */}
            <div className="mt-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center gap-3">
              <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-mono">
                  Key Production Benchmark
                </div>
                <div className="text-sm font-semibold text-emerald-900 dark:text-emerald-200 mt-0.5">
                  {selectedProject.metrics}
                </div>
              </div>
            </div>

            {/* Architecture Details */}
            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-600 dark:text-brand-cyan" />
                Architectural Breakdown
              </h4>
              <div className="space-y-2.5">
                {selectedProject.architectureDetails.map((detail, dIdx) => (
                  <div key={dIdx} className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-950 border border-slate-200/80 dark:border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-brand-cyan shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Flow Pipeline */}
            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono flex items-center gap-2">
                <Workflow className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                End-to-End Processing Steps
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProject.flowSteps.map((step, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-850 border border-slate-200/80 dark:border-white/5">
                    <div className="text-xs font-bold text-sky-600 dark:text-brand-cyan font-mono">{step.step}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">{step.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-3">
                Full Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-dark-950 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-800 dark:text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
