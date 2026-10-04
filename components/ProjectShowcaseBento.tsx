'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { 
  FolderGit2, 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  X,
  Zap,
  Activity,
  FileText,
  FileSpreadsheet,
  Layers,
  Play,
  Sparkles,
  Cpu
} from 'lucide-react';

export default function ProjectShowcaseBento() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeDocType, setActiveDocType] = useState<'pdf' | 'docx' | 'xlsx'>('pdf');
  const [simulatingPipeline, setSimulatingPipeline] = useState(false);
  const [pipelineProgress, setPipelineProgress] = useState(4);

  const docSnippets = {
    pdf: { name: 'Q4_Enterprise_Architecture.pdf', chunks: '1,420 chunks', confidence: '99.4%', vectors: 'OpenAI text-embedding-3 (1536-dim)' },
    docx: { name: 'RFC_904_Microservices_Spec.docx', chunks: '850 chunks', confidence: '98.8%', vectors: 'ChromaDB HNSW Index' },
    xlsx: { name: 'Infrastructure_Telemetry_Matrix.xlsx', chunks: '3,100 rows', confidence: '99.1%', vectors: 'FAISS IVFFlat Vector Store' }
  };

  const handleSimulatePipeline = () => {
    setSimulatingPipeline(true);
    setPipelineProgress(0);
    const t1 = setTimeout(() => setPipelineProgress(1), 300);
    const t2 = setTimeout(() => setPipelineProgress(2), 700);
    const t3 = setTimeout(() => setPipelineProgress(3), 1100);
    const t4 = setTimeout(() => {
      setPipelineProgress(4);
      setSimulatingPipeline(false);
    }, 1600);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-6 border-b border-slate-200/80 dark:border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-semibold mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRODUCTION BLUEPRINTS & ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Enterprise Architectures
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md font-mono">
          Proprietary agentic platforms engineered with stateful LangGraph workflows, high-density vector retrieval, and automated cloud deployments.
        </p>
      </div>

      {/* Hero Showcase Project: Enterprise AI Knowledge Assistant */}
      <div className="bento-card p-6 sm:p-9 mb-6 relative overflow-hidden bg-gradient-to-br from-white via-white to-slate-50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-950">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                FLAGSHIP GENAI ARCHITECTURE
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">
                PRODUCTION VERIFIED
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
              Enterprise AI Knowledge Assistant
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Multi-agent RAG platform supporting automated multi-format document ingestion (PDF, DOCX, Excel) and low-latency semantic contextual retrieval across complex enterprise repositories.
            </p>

            {/* Impact Metric Callout */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-850 border border-slate-200/80 dark:border-white/5 flex items-start gap-3">
              <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-700 dark:text-slate-200 font-mono">
                Sub-second query retrieval with 98% precision across 50,000+ enterprise documents.
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {['Python', 'FastAPI', 'LangChain', 'LangGraph', 'ChromaDB', 'FAISS', 'OpenAI', 'AWS', 'Docker'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-dark-950 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono text-[11px]">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => setSelectedProject(PROJECTS[0])}
                className="px-4 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-xs hover:opacity-90 transition-all inline-flex items-center gap-2"
              >
                <Workflow className="w-3.5 h-3.5 text-indigo-400" />
                <span>Deep Dive Architecture</span>
              </button>
            </div>
          </div>

          {/* Interactive Ingestion Simulator Widget (Right Column) */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-slate-900 dark:bg-dark-950 p-5 text-slate-100 border border-slate-800 dark:border-white/10 font-mono text-xs shadow-xl">
              
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  rag_pipeline_simulator.py
                </span>
                <span className="text-emerald-400 text-[10px]">● LIVE PREVIEW</span>
              </div>

              {/* Document Type Switcher */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <button
                  onClick={() => setActiveDocType('pdf')}
                  className={`py-1.5 px-2 rounded-xl text-[11px] font-mono flex items-center justify-center gap-1.5 transition-all ${
                    activeDocType === 'pdf' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-3 h-3" />
                  <span>PDF Ingestion</span>
                </button>
                <button
                  onClick={() => setActiveDocType('docx')}
                  className={`py-1.5 px-2 rounded-xl text-[11px] font-mono flex items-center justify-center gap-1.5 transition-all ${
                    activeDocType === 'docx' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-3 h-3" />
                  <span>DOCX Spec</span>
                </button>
                <button
                  onClick={() => setActiveDocType('xlsx')}
                  className={`py-1.5 px-2 rounded-xl text-[11px] font-mono flex items-center justify-center gap-1.5 transition-all ${
                    activeDocType === 'xlsx' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <FileSpreadsheet className="w-3 h-3" />
                  <span>Excel Sheet</span>
                </button>
              </div>

              {/* Active Doc Telemetry */}
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-[11px]">
                <div className="flex justify-between text-slate-400">
                  <span>File: <strong className="text-slate-200">{docSnippets[activeDocType].name}</strong></span>
                  <span className="text-indigo-400">{docSnippets[activeDocType].chunks}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Vector Embedding:</span>
                  <span className="text-emerald-400">{docSnippets[activeDocType].vectors}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Context Confidence:</span>
                  <span className="text-emerald-400 font-bold">{docSnippets[activeDocType].confidence}</span>
                </div>
              </div>

              {/* Progress visualizer */}
              <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                <button
                  onClick={handleSimulatePipeline}
                  disabled={simulatingPipeline}
                  className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-bold transition-all disabled:opacity-50 flex items-center gap-1"
                >
                  <Play className="w-2.5 h-2.5 fill-current" />
                  <span>{simulatingPipeline ? 'Ingesting...' : 'Test Ingestion'}</span>
                </button>
                <span>Pipeline Stage: {simulatingPipeline ? 'Chunking & Indexing...' : 'Completed (120ms)'}</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Secondary Project Cards: AI Release Impact & Release Automation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Project 2 */}
        <div className="bento-card p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20">
                AUTONOMOUS MULTI-AGENT
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">LangGraph Core</span>
            </div>

            <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white mb-2">
              {PROJECTS[1].title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {PROJECTS[1].description}
            </p>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200/70 dark:border-white/5 mb-4 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-start gap-2">
              <Activity className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>{PROJECTS[1].metrics}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {PROJECTS[1].technologies.slice(0, 4).map((t) => (
                <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded-lg bg-slate-100 dark:bg-dark-950 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={() => setSelectedProject(PROJECTS[1])}
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bento-card p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                ENTERPRISE DEVOPS
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">FastAPI & AWS</span>
            </div>

            <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white mb-2">
              {PROJECTS[2].title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {PROJECTS[2].description}
            </p>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200/70 dark:border-white/5 mb-4 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-start gap-2">
              <Activity className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>{PROJECTS[2].metrics}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {PROJECTS[2].technologies.slice(0, 4).map((t) => (
                <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded-lg bg-slate-100 dark:bg-dark-950 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={() => setSelectedProject(PROJECTS[2])}
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bento-card p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-dark-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-8">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 mb-2 inline-block">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
                {selectedProject.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center gap-3">
              <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-mono">
                  Production Benchmark
                </div>
                <div className="text-sm font-semibold text-emerald-900 dark:text-emerald-200 mt-0.5">
                  {selectedProject.metrics}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                Architectural Breakdown
              </h4>
              <div className="space-y-2.5">
                {selectedProject.architectureDetails.map((d, dIdx) => (
                  <div key={dIdx} className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-850 border border-slate-200/80 dark:border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      {d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-white/10">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Full Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-dark-950 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-800 dark:text-slate-200">
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
