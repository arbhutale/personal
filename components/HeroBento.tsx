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
  ShieldCheck, 
  Cpu, 
  Database, 
  Cloud,
  CheckCircle2,
  Copy,
  Check,
  Briefcase,
  Play,
  Layers,
  Code2,
  Activity,
  Zap,
  Radio,
  Share2,
  Globe,
  Sliders
} from 'lucide-react';

interface HeroBentoProps {
  onOpenResume: () => void;
}

const INTERACTIVE_NODES = [
  { id: 'langgraph', label: 'LangGraph Multi-Agent', category: 'Agentic Core', x: '50%', y: '48%', color: 'from-purple-500 to-indigo-600', badge: 'Supervisor DAG', desc: 'Stateful multi-agent supervisor loops with deterministic state transitions & fallback routing.' },
  { id: 'rag', label: 'RAG & Ragas Eval', category: 'Knowledge Retrieval', x: '20%', y: '25%', color: 'from-cyan-400 to-blue-500', badge: '98.4% Faithfulness', desc: 'FAISS, ChromaDB & Ragas evaluation test suites for 98.4% faithfulness & context precision.' },
  { id: 'gcp', label: 'GCP Vertex AI & Gemini', category: 'LLM & Multi-Cloud', x: '80%', y: '25%', color: 'from-blue-500 to-sky-400', badge: 'Cloud Native', desc: 'Gemini 1.5 Pro / Flash, Vertex AI Vector Search, and Cloud Run autoscaling.' },
  { id: 'fastapi', label: 'FastAPI & Python', category: 'High-Throughput API', x: '20%', y: '75%', color: 'from-emerald-400 to-teal-500', badge: 'Sub-200ms SLA', desc: 'Asynchronous event gateway with Pydantic validation & SSE streaming.' },
  { id: 'aws', label: 'AWS & Docker DevOps', category: 'Cloud Infrastructure', x: '80%', y: '75%', color: 'from-amber-400 to-orange-500', badge: 'Blue/Green CI/CD', desc: 'Multi-stage Docker containers with blue/green deployment pipelines.' },
];

export default function HeroBento({ onOpenResume }: HeroBentoProps) {
  const [copied, setCopied] = useState(false);
  const [activeNode, setActiveNode] = useState(INTERACTIVE_NODES[0]);
  const [typedTitleIndex, setTypedTitleIndex] = useState(0);
  const [simulating, setSimulating] = useState(false);
  const [activePromptTab, setActivePromptTab] = useState<'rag' | 'stack' | 'exp'>('rag');
  const [streamedText, setStreamedText] = useState(
    "Anil is a Lead / Senior Full Stack & Generative AI Engineer with 9+ years experience specializing in LangGraph multi-agent systems, RAG & Ragas evaluation, Google Cloud (Vertex AI), and AWS cloud microservices."
  );

  const titles = [
    "Senior Generative AI & Agent Architect",
    "RAG & Agent Testing / Evaluation Specialist",
    "Google Cloud & AWS Cloud Architect",
    "Senior Full Stack Engineer (Python & React)"
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

  const handleRunAgentPrompt = (queryType: 'rag' | 'stack' | 'exp') => {
    setActivePromptTab(queryType);
    setSimulating(true);
    setStreamedText('');
    let response = '';

    if (queryType === 'rag') {
      response = "RAG & Evaluation Pipeline: Cosine similarity 0.992 on FAISS/ChromaDB. Ragas test suite reports 98.4% faithfulness and 97.2% context precision. Validated against Google Cloud Vertex AI & Gemini 1.5 Pro.";
    } else if (queryType === 'stack') {
      response = "Multi-Cloud Tech Stack: Google Cloud (Vertex AI, Gemini, Cloud Run, GKE), AWS (EC2, S3, Lambda, ECS), Python (FastAPI, LangGraph, Ragas, TruLens), React.js, Next.js, TypeScript, Docker, and CI/CD Pipelines.";
    } else {
      response = "Career Dossier: Senior Software Engineer at Lloyds Technology Centre (2026-Present), Senior Consultant at Infosys (2023-2026), Consultant at Truelancer (2022-2023), Programmer Analyst at Qualcomm India (2018-2022).";
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i < response.length) {
        setStreamedText(response.slice(0, i + 3));
        i += 3;
      } else {
        clearInterval(interval);
        setSimulating(false);
      }
    }, 12);
  };

  return (
    <section id="hero" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Top Banner Cyber Line */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">[SYSTEM // ONLINE]</span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="hidden sm:inline font-mono">LATENCY: 185ms SLA</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
          <span className="px-2 py-0.5 rounded bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-bold">
            v2.4.0-CYBER
          </span>
        </div>
      </div>

      {/* Bento Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Unit 1: Hero Identity Box (7 Cols) */}
        <div className="lg:col-span-7 bento-card p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group border-slate-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all">
          
          {/* Cyber Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/25 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-cyan-500/30 text-slate-800 dark:text-slate-200 text-xs font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold">AVAILABLE FOR SENIOR LEADERSHIP</span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{PERSONAL_INFO.location}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              Bhutale Anil <span className="gradient-accent">Kumar</span>
            </h1>

            {/* Dynamic Rotating Title */}
            <div className="h-9 sm:h-11 flex items-center mt-3">
              <span className="text-lg sm:text-2xl font-bold font-mono text-indigo-600 dark:text-brand-cyan tracking-tight">
                ⚡ {titles[typedTitleIndex]}
              </span>
            </div>

            {/* Bio Description */}
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Actions & Social Links */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 font-bold text-xs hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95"
              >
                <span>Explore Architectures</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 font-semibold text-xs border border-slate-200 dark:border-white/10 transition-all flex items-center gap-2 active:scale-95"
              >
                <FileText className="w-4 h-4 text-indigo-600 dark:text-brand-cyan" />
                <span>Curriculum Vitae</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-all relative group"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 text-white text-[10px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono whitespace-nowrap">
                  {copied ? 'Copied!' : 'Copy Email'}
                </span>
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Unit 2: Interactive Terminal AI Agent Sandbox (5 Cols) */}
        <div className="lg:col-span-5 bento-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden bg-slate-950 text-slate-100 border-slate-800 dark:border-cyan-500/30">
          <div>
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-400 ml-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>AI_AGENT_PROMPT_SHELL</span>
                </span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
                GEMINI 1.5 PRO
              </span>
            </div>

            {/* Quick Prompt Selectors */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <button
                onClick={() => handleRunAgentPrompt('rag')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-1 border ${
                  activePromptTab === 'rag'
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <Zap className="w-3 h-3" />
                <span>RAG Eval</span>
              </button>
              <button
                onClick={() => handleRunAgentPrompt('stack')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-1 border ${
                  activePromptTab === 'stack'
                    ? 'bg-purple-500/20 text-purple-300 border-purple-500/50 shadow-sm shadow-purple-500/20'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <Cpu className="w-3 h-3" />
                <span>Stack</span>
              </button>
              <button
                onClick={() => handleRunAgentPrompt('exp')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-1 border ${
                  activePromptTab === 'exp'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <Briefcase className="w-3 h-3" />
                <span>History</span>
              </button>
            </div>

            {/* Simulated Terminal Screen */}
            <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 font-mono text-xs text-slate-300 min-h-[160px] flex flex-col justify-between relative">
              <div>
                <div className="text-cyan-400 mb-2 flex items-center gap-2 font-bold">
                  <span>&gt; query_agent --model=gemini-1.5-pro --type={activePromptTab}</span>
                  {simulating && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                </div>
                <p className="leading-relaxed text-slate-200">
                  {streamedText}
                  {simulating && <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />}
                </p>
              </div>

              {/* Realtime Telemetry Stats */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <div className="flex items-center gap-3">
                  <span>STATUS: <strong className="text-emerald-400">200 OK</strong></span>
                  <span>FAITHFULNESS: <strong className="text-cyan-400">98.4%</strong></span>
                </div>
                <span>LATENCY: <strong className="text-purple-400">185ms</strong></span>
              </div>
            </div>
          </div>

          {/* Bottom Callout */}
          <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Ragas & TruLens Guardrails Active</span>
            </span>
            <a href="#eval-studio" className="text-cyan-400 hover:underline flex items-center gap-1 font-bold">
              <span>Full Studio</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

      {/* Unit 3: Interactive System DAG Visualizer & Metrics Bento */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Sub-Bento 1: Interactive Multi-Agent DAG Node Explorer (8 Cols) */}
        <div className="lg:col-span-8 bento-card p-6 sm:p-7 relative overflow-hidden border-slate-200 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Interactive System Architecture DAG</span>
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                Select Component to Inspect Technical Blueprint
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 font-bold self-start sm:self-auto">
              {activeNode.badge}
            </span>
          </div>

          {/* Nodes Interactive Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
            {INTERACTIVE_NODES.map((node) => {
              const isActive = activeNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold font-mono transition-all text-left flex flex-col justify-between border ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 border-transparent shadow-md shadow-cyan-500/20 scale-[1.02]'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10'
                  }`}
                >
                  <span className="text-[10px] opacity-70 block uppercase font-bold">{node.category}</span>
                  <span className="truncate block font-bold">{node.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <div className="bg-slate-50 dark:bg-dark-900 rounded-2xl p-5 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${activeNode.color}`} />
                <h4 className="font-bold text-sm text-slate-900 dark:text-white font-mono">{activeNode.label}</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                {activeNode.desc}
              </p>
            </div>
            <a
              href="#projects"
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 text-xs font-bold font-mono transition-all flex items-center gap-1.5 whitespace-nowrap self-stretch sm:self-auto justify-center"
            >
              <span>View In Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Sub-Bento 2: Key Metric Highlight Counters (4 Cols) */}
        <div className="lg:col-span-4 bento-card p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-br from-indigo-900 via-slate-950 to-purple-950 text-white border-indigo-500/30">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>BENCHMARK TELEMETRY</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                <span className="text-2xl font-extrabold font-mono text-cyan-300">98.4%</span>
                <span className="text-[10px] font-mono text-slate-400 block mt-1">RAG FAITHFULNESS</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                <span className="text-2xl font-extrabold font-mono text-emerald-300">185ms</span>
                <span className="text-[10px] font-mono text-slate-400 block mt-1">TOKEN LATENCY</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                <span className="text-2xl font-extrabold font-mono text-purple-300">99.1%</span>
                <span className="text-[10px] font-mono text-slate-400 block mt-1">AGENT TRAJECTORY</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                <span className="text-2xl font-extrabold font-mono text-amber-300">9+ Yrs</span>
                <span className="text-[10px] font-mono text-slate-400 block mt-1">ENGINEERING EXP</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400 font-mono flex items-center justify-between">
            <span>MULTI-CLOUD ARCHITECTURE</span>
            <span className="text-cyan-400 font-bold">AWS + GCP</span>
          </div>
        </div>

      </div>

    </section>
  );
}
