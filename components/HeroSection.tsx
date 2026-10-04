'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Bot, 
  Sparkles, 
  Terminal, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  MapPin, 
  ShieldCheck, 
  Cloud,
  Copy,
  Check,
  Briefcase
} from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);
  const [typedTitleIndex, setTypedTitleIndex] = useState(0);

  const titles = [
    "Senior Generative AI Engineer",
    "Multi-Agent & RAG Architect",
    "Senior Full Stack Engineer (Python & React)",
    "Cloud-Native & Microservices Specialist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 cyber-bg-grid overflow-hidden">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-400/10 via-indigo-500/10 dark:from-brand-cyan/15 dark:via-brand-purple/20 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-gradient-to-bl from-purple-400/10 dark:from-brand-blue/15 to-transparent blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-dark-900/90 border border-slate-200 dark:border-brand-cyan/30 backdrop-blur-md shadow-sm dark:shadow-lg dark:shadow-brand-cyan/10 mb-6 group cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                Available for Senior Full Stack & GenAI Roles
              </span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="text-xs font-mono text-sky-600 dark:text-brand-cyan flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Hi, I'm <span className="text-gradient-cyan">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Dynamic Rotating Specialization */}
            <div className="h-10 sm:h-12 flex items-center mt-2">
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 dark:from-brand-cyan dark:via-brand-blue dark:to-purple-400 font-mono transition-all duration-500">
                {titles[typedTitleIndex]}
              </span>
            </div>

            {/* Summary description */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl mt-8">
              <div className="glass-card p-3 rounded-2xl text-center">
                <div className="text-2xl font-black text-sky-600 dark:text-brand-cyan">8+</div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">Years Exp</div>
              </div>
              <div className="glass-card p-3 rounded-2xl text-center">
                <div className="text-2xl font-black text-indigo-600 dark:text-purple-400">Agentic</div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">LangGraph RAG</div>
              </div>
              <div className="glass-card p-3 rounded-2xl text-center">
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">AWS Cloud</div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">Docker & CI/CD</div>
              </div>
              <div className="glass-card p-3 rounded-2xl text-center">
                <div className="text-2xl font-black text-amber-600 dark:text-amber-400">Full Stack</div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">React & Python</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mt-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white dark:text-black bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-brand-cyan dark:via-brand-blue dark:to-cyan-300 hover:shadow-xl hover:shadow-sky-500/20 dark:hover:shadow-brand-cyan/30 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>View Enterprise Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ai-simulator"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-dark-900/90 hover:bg-slate-50 dark:hover:bg-dark-800 border border-slate-300 dark:border-brand-cyan/40 hover:border-sky-500 dark:hover:border-brand-cyan transition-all group shadow-sm"
              >
                <Terminal className="w-4 h-4 text-sky-600 dark:text-brand-cyan group-hover:scale-110 transition-transform" />
                <span>Try Live AI Simulator</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-dark-900/50 hover:bg-slate-200 dark:hover:bg-dark-800 border border-slate-200 dark:border-white/10 transition-all"
                title="View formatted Resume"
              >
                <FileText className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                <span className="hidden sm:inline">Resume</span>
              </button>
            </div>

            {/* Social Links & One-Click Contact */}
            <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-800 dark:text-slate-300">Quick Connect:</span>
              
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10 hover:border-slate-800 hover:text-slate-900 dark:hover:border-white dark:hover:text-white transition-colors shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10 hover:border-sky-500 hover:text-sky-600 dark:hover:border-brand-cyan dark:hover:text-brand-cyan transition-colors shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive AI Terminal & Architecture Hub Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Hologram Aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 dark:from-brand-cyan dark:via-brand-purple dark:to-pink-500 rounded-3xl blur-xl opacity-20 dark:opacity-30 transition duration-1000 animate-pulse-slow"></div>

              {/* Main Card */}
              <div className="relative bg-white/95 dark:bg-dark-900/90 border border-slate-200/90 dark:border-white/15 rounded-3xl shadow-xl dark:shadow-2xl p-6 backdrop-blur-xl overflow-hidden">
                
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400">anil_kumar_profile.agent</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-sky-100 dark:bg-brand-cyan/10 text-sky-700 dark:text-brand-cyan border border-sky-300 dark:border-brand-cyan/30 rounded-md font-semibold">
                    GENAI ACTIVE
                  </span>
                </div>

                {/* Profile Core Highlights */}
                <div className="space-y-3.5">
                  
                  {/* Current Active Role */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-850/80 border border-slate-200/80 dark:border-white/5 flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Current Role</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Senior Software Engineer</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Lloyds Technology Centre (Jan 2026 – Present)</div>
                    </div>
                  </div>

                  {/* Core Specialization */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-850/80 border border-slate-200/80 dark:border-white/5 flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-brand-cyan/10 border border-sky-200 dark:border-brand-cyan/20 text-sky-600 dark:text-brand-cyan">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-brand-cyan">AI Specialization</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Agentic RAG & LangGraph Workflows</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Vector Embeddings, ChromaDB, FAISS, OpenAI</div>
                    </div>
                  </div>

                  {/* Cloud & Architecture */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-850/80 border border-slate-200/80 dark:border-white/5 flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">Cloud & Full Stack</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">FastAPI • Python • React • AWS • Docker</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Microservices, Redis caching & CI/CD Pipelines</div>
                    </div>
                  </div>

                  {/* Micro Terminal Live Output */}
                  <div className="p-3.5 rounded-2xl bg-slate-900 dark:bg-dark-950 border border-slate-800 dark:border-brand-cyan/20 font-mono text-xs text-slate-200 dark:text-slate-300">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5 pb-1 border-b border-slate-800 dark:border-white/5">
                      <span>sys.stdout.stream</span>
                      <span className="text-emerald-400">● READY</span>
                    </div>
                    <p className="text-sky-400 dark:text-brand-cyan">$ langgraph --invoke</p>
                    <p className="text-slate-300 dark:text-slate-400 mt-1">✓ Initialized Supervisor Agent</p>
                    <p className="text-slate-300 dark:text-slate-400">✓ Context loaded: 8+ Yrs Enterprise Exp</p>
                    <p className="text-slate-300 dark:text-slate-400">✓ RAG Vector Store status: 100% indexed</p>
                    <p className="text-emerald-400 mt-1">&gt; Ready for enterprise collaboration.</p>
                  </div>

                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>8+ Years Verified Enterprise Track Record</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
