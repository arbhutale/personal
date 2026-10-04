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
  Zap
} from 'lucide-react';

interface HeroBentoProps {
  onOpenResume: () => void;
}

const INTERACTIVE_NODES = [
  { id: 'langgraph', label: 'LangGraph & Multi-Agent', category: 'Agentic Core', x: '50%', y: '48%', color: 'from-purple-500 to-indigo-600', desc: 'Stateful multi-agent supervisor loops with deterministic state transitions.' },
  { id: 'rag', label: 'RAG & Ragas Eval', category: 'Knowledge Retrieval', x: '20%', y: '25%', color: 'from-cyan-400 to-blue-500', desc: 'FAISS, ChromaDB & Ragas evaluation test suites for 98.4% faithfulness.' },
  { id: 'gcp', label: 'Google Cloud Vertex AI', category: 'LLM & Multi-Cloud', x: '80%', y: '25%', color: 'from-blue-500 to-sky-400', desc: 'Gemini 1.5 Pro / Flash, Vertex AI Vector Search, and Cloud Run scaling.' },
  { id: 'fastapi', label: 'FastAPI & Python', category: 'High-Throughput API', x: '20%', y: '75%', color: 'from-emerald-400 to-teal-500', desc: 'Asynchronous event gateway with Pydantic validation & SSE streaming.' },
  { id: 'aws', label: 'AWS & Docker', category: 'Cloud Infrastructure', x: '80%', y: '75%', color: 'from-amber-400 to-orange-500', desc: 'Multi-stage Docker containers with blue/green deployment pipelines.' },
];

export default function HeroBento({ onOpenResume }: HeroBentoProps) {
  const [copied, setCopied] = useState(false);
  const [activeNode, setActiveNode] = useState(INTERACTIVE_NODES[0]);
  const [typedTitleIndex, setTypedTitleIndex] = useState(0);
  const [simulating, setSimulating] = useState(false);
  const [streamedText, setStreamedText] = useState("Anil is a Senior Full Stack & Generative AI Engineer with 8+ years experience specializing in LangGraph multi-agent systems, RAG & Ragas evaluation, Google Cloud (Vertex AI), and AWS cloud microservices.");

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

  const handleRunAgentPrompt = (queryType: string) => {
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
    }, 15);
  };

  return (
    <section id="hero" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto geo-canvas">
      
      {/* Bento Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Unit 1: Hero Identity Box (7 Cols) */}
        <div className="lg:col-span-7 bento-card p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Senior Engineering Leadership</span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{PERSONAL_INFO.location}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              B. Anil Kumar
            </h1>

            {/* Dynamic Rotating Title */}
            <div className="h-8 sm:h-10 flex items-center mt-2">
              <span className="text-lg sm:text-xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
                {titles[typedTitleIndex]}
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
                className="px-5 py-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-xs hover:opacity-90 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>View Architectures</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 font-semibold text-xs border border-slate-200 dark:border-white/10 transition-all flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Curriculum Vitae</span>
              </button>
            </div>

            {/* Quick Contacts */}
            <div className="flex items-center gap-2">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-white/10 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-white/10 transition-colors"
                title="GitHub Repositories"
              >
                <Github className="w-4 h-4" />
              </a>
              <button 
                onClick={handleCopyEmail}
                className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-white/10 transition-colors"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

        {/* Unit 2: Interactive Architecture Graph Visualizer (5 Cols) */}
        <div className="lg:col-span-5 bento-card p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-dark-900 dark:to-dark-950">
          
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80 dark:border-white/10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Architecture Graph</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 font-semibold border border-indigo-200 dark:border-indigo-500/20">
                INTERACTIVE
              </span>
            </div>

            {/* Interactive Nodes Canvas */}
            <div className="relative h-44 rounded-2xl bg-slate-100/70 dark:bg-dark-950/80 border border-slate-200/80 dark:border-white/10 p-3 overflow-hidden">
              
              {/* Center Graph Node lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <line x1="50%" y1="48%" x2="20%" y2="25%" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="50%" y1="48%" x2="80%" y2="25%" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="50%" y1="48%" x2="20%" y2="75%" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="50%" y1="48%" x2="80%" y2="75%" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>

              {/* Nodes */}
              {INTERACTIVE_NODES.map((node) => {
                const isSelected = activeNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node)}
                    style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
                    className={`absolute px-3 py-1.5 rounded-xl font-mono text-[11px] font-bold transition-all shadow-sm ${
                      isSelected
                        ? 'bg-indigo-600 text-white scale-110 ring-2 ring-indigo-400 ring-offset-2 dark:ring-offset-dark-900 z-20'
                        : 'bg-white dark:bg-dark-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/15 hover:scale-105'
                    }`}
                  >
                    {node.label}
                  </button>
                );
              })}
            </div>

            {/* Selected Node Spec Details */}
            <div className="mt-3 p-3.5 rounded-xl bg-white dark:bg-dark-850 border border-slate-200/80 dark:border-white/10">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900 dark:text-white font-mono">{activeNode.label}</span>
                <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 uppercase font-semibold">{activeNode.category}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                {activeNode.desc}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span>Orchestration Layer</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">● ACTIVE</span>
          </div>

        </div>

      </div>

      {/* Bento Secondary Row: Production Telemetry & Interactive AI Prompt Sandbox */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-5">
        
        {/* Telemetry Stats (4 Cols) */}
        <div className="md:col-span-4 bento-card p-6 flex flex-col justify-between">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-200/80 dark:border-white/10 flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Verified Production Telemetry</span>
          </div>

          <div className="grid grid-cols-2 gap-3 my-4">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-850 border border-slate-200/60 dark:border-white/5">
              <div className="text-2xl font-black font-display text-slate-900 dark:text-white">8+</div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">Years Experience</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-850 border border-slate-200/60 dark:border-white/5">
              <div className="text-2xl font-black font-display text-indigo-600 dark:text-indigo-400">&lt;200ms</div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">RAG Query Latency</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-850 border border-slate-200/60 dark:border-white/5">
              <div className="text-2xl font-black font-display text-emerald-600 dark:text-emerald-400">50K+</div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">Vectors Indexed</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-850 border border-slate-200/60 dark:border-white/5">
              <div className="text-2xl font-black font-display text-amber-600 dark:text-amber-400">99.9%</div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">CI/CD Uptime</div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
            <span>Cloud Stack</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">AWS • Docker • ECS</span>
          </div>
        </div>

        {/* Interactive AI Agent Prompt Sandbox (8 Cols) */}
        <div className="md:col-span-8 bento-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200/80 dark:border-white/10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Bot className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Live Agentic Prompt Sandbox</span>
              </span>

              {/* Quick Query Pills */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleRunAgentPrompt('rag')}
                  disabled={simulating}
                  className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-white/10 transition-colors"
                >
                  Prompt: RAG Flow
                </button>
                <button
                  onClick={() => handleRunAgentPrompt('stack')}
                  disabled={simulating}
                  className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-white/10 transition-colors"
                >
                  Prompt: Tech Stack
                </button>
                <button
                  onClick={() => handleRunAgentPrompt('dossier')}
                  disabled={simulating}
                  className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-white/10 transition-colors"
                >
                  Prompt: Career Log
                </button>
              </div>
            </div>

            {/* Streamed Output Canvas */}
            <div className="p-4 rounded-2xl bg-slate-900 dark:bg-dark-950 text-slate-100 border border-slate-800 dark:border-white/10 font-mono text-xs leading-relaxed min-h-[90px] flex items-start gap-3">
              <span className="text-emerald-400 shrink-0 mt-0.5">●</span>
              <p className="text-slate-200">
                {streamedText}
                {simulating && <span className="inline-block w-1.5 h-3 bg-indigo-400 ml-1 animate-pulse" />}
              </p>
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span>Powered by LangChain & LangGraph Vector Search</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Sub-Second Execution</span>
          </div>
        </div>

      </div>

    </section>
  );
}
