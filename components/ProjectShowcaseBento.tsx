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
  Cpu,
  Server,
  ShieldCheck,
  Code
} from 'lucide-react';

export default function ProjectShowcaseBento() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeDocType, setActiveDocType] = useState<'pdf' | 'docx' | 'xlsx'>('pdf');
  const [simulatingPipeline, setSimulatingPipeline] = useState(false);
  const [pipelineProgress, setPipelineProgress] = useState(4);
  const [activeFilter, setActiveFilter] = useState<'all' | 'genai' | 'devops'>('all');

  const docSnippets = {
    pdf: { name: 'Q4_Enterprise_Architecture.pdf', chunks: '1,420 chunks', confidence: '99.4%', vectors: 'Vertex AI & OpenAI embeddings' },
    docx: { name: 'RFC_904_Microservices_Spec.docx', chunks: '850 chunks', confidence: '98.8%', vectors: 'ChromaDB HNSW Index' },
    xlsx: { name: 'Infrastructure_Telemetry_Matrix.xlsx', chunks: '3,100 rows', confidence: '99.1%', vectors: 'FAISS IVFFlat Vector Store' }
  };

  const handleSimulatePipeline = () => {
    setSimulatingPipeline(true);
    setPipelineProgress(0);
    setTimeout(() => setPipelineProgress(1), 300);
    setTimeout(() => setPipelineProgress(2), 700);
    setTimeout(() => setPipelineProgress(3), 1100);
    setTimeout(() => {
      setPipelineProgress(4);
      setSimulatingPipeline(false);
    }, 1600);
  };

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'genai') return p.category.includes('Generative AI') || p.category.includes('Agent');
    if (activeFilter === 'devops') return p.category.includes('DevOps') || p.category.includes('Cloud');
    return true;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b border-slate-200/80 dark:border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRODUCTION BLUEPRINTS & ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Enterprise Architectures
          </h2>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10 font-mono text-xs self-start md:self-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-all font-bold ${
              activeFilter === 'all'
                ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            ALL ARCHITECTURES
          </button>
          <button
            onClick={() => setActiveFilter('genai')}
            className={`px-3 py-1.5 rounded-lg transition-all font-bold ${
              activeFilter === 'genai'
                ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            GENAI & AGENTS
          </button>
          <button
            onClick={() => setActiveFilter('devops')}
            className={`px-3 py-1.5 rounded-lg transition-all font-bold ${
              activeFilter === 'devops'
                ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            CLOUD & DEVOPS
          </button>
        </div>
      </div>

      {/* Hero Showcase Project: Enterprise AI Knowledge Assistant */}
      <div className="bento-card p-6 sm:p-9 mb-8 relative overflow-hidden border-cyan-500/20 hover:border-cyan-500/50 transition-all">
        
        {/* Glow background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                FLAGSHIP GENAI ARCHITECTURE
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                ● PRODUCTION VERIFIED
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
              Enterprise AI Knowledge Assistant
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Multi-agent RAG platform supporting automated multi-format document ingestion (PDF, DOCX, Excel) and low-latency semantic contextual retrieval across complex enterprise repositories.
            </p>

            {/* Impact Metric Callout */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-dark-850 border border-slate-200 dark:border-white/10 flex items-start gap-3">
              <Zap className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-700 dark:text-slate-200 font-mono">
                Sub-second query retrieval with 98.4% Ragas faithfulness across 50,000+ enterprise documents.
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {['Python', 'FastAPI', 'LangChain', 'LangGraph', 'Vertex AI (Gemini)', 'ChromaDB', 'FAISS', 'Ragas Eval', 'AWS', 'Docker'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono text-[11px]">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => setSelectedProject(PROJECTS[0])}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 font-bold text-xs hover:opacity-90 transition-all inline-flex items-center gap-2 shadow-md shadow-cyan-500/20 active:scale-95"
              >
                <Workflow className="w-4 h-4 text-cyan-400 dark:text-slate-950" />
                <span>Deep Dive Architecture</span>
              </button>
            </div>
          </div>

          {/* Interactive Ingestion Simulator Widget (Right Column) */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-slate-950 p-5 text-slate-100 border border-slate-800 font-mono text-xs shadow-xl">
              
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  rag_ingestion_simulator.py
                </span>
                <span className="text-emerald-400 text-[10px]">● LIVE SIMULATION</span>
              </div>

              {/* Document Type Switcher */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <button
                  onClick={() => setActiveDocType('pdf')}
                  className={`py-1.5 px-2 rounded-xl text-[11px] font-mono flex items-center justify-center gap-1.5 transition-all ${
                    activeDocType === 'pdf' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-3 h-3" />
                  <span>PDF Ingestion</span>
                </button>
                <button
                  onClick={() => setActiveDocType('docx')}
                  className={`py-1.5 px-2 rounded-xl text-[11px] font-mono flex items-center justify-center gap-1.5 transition-all ${
                    activeDocType === 'docx' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-3 h-3" />
                  <span>DOCX Spec</span>
                </button>
                <button
                  onClick={() => setActiveDocType('xlsx')}
                  className={`py-1.5 px-2 rounded-xl text-[11px] font-mono flex items-center justify-center gap-1.5 transition-all ${
                    activeDocType === 'xlsx' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  <FileSpreadsheet className="w-3 h-3" />
                  <span>XLSX Data</span>
                </button>
              </div>

              {/* Simulator Screen */}
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>FILE: <strong className="text-cyan-400">{docSnippets[activeDocType].name}</strong></span>
                  <span>CONFIDENCE: <strong className="text-emerald-400">{docSnippets[activeDocType].confidence}</strong></span>
                </div>

                <div className="text-[11px] text-slate-300">
                  <span>VECTOR INDEX: </span>
                  <span className="text-purple-300 font-bold">{docSnippets[activeDocType].vectors}</span>
                </div>

                {/* Progress Steps Bar */}
                <div className="space-y-1.5 pt-2">
                  {[
                    '1. Ingest & Parse Chunks',
                    '2. Generate Vector Embeddings',
                    '3. LangGraph Supervisor Route',
                    '4. Ragas Faithfulness Eval Check'
                  ].map((stepText, idx) => {
                    const isDone = pipelineProgress > idx;
                    const isCurrent = pipelineProgress === idx && simulatingPipeline;
                    return (
                      <div key={stepText} className="flex items-center justify-between text-[10px]">
                        <span className={isDone ? 'text-emerald-400 font-bold' : isCurrent ? 'text-cyan-400 animate-pulse font-bold' : 'text-slate-500'}>
                          {stepText}
                        </span>
                        {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={handleSimulatePipeline}
                  disabled={simulatingPipeline}
                  className="w-full py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center justify-center gap-1.5 disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{simulatingPipeline ? 'Executing Ingestion Pipeline...' : 'Run Pipeline Simulation'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Grid of Other Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.slice(1).map((project) => (
          <div
            key={project.id}
            className="bento-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group hover:border-purple-500/50 transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  {project.badge}
                </span>
                <span className="text-[11px] font-mono text-slate-400">{project.category}</span>
              </div>

              <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white mb-2">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-mono text-[10px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold truncate max-w-[220px]">
                ⚡ {project.metrics}
              </span>

              <button
                onClick={() => setSelectedProject(project)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-xs hover:opacity-90 transition-all flex items-center gap-1.5 shrink-0"
              >
                <span>Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-slate-800 relative max-h-[90vh] overflow-y-auto shadow-2xl font-mono text-xs">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {selectedProject.badge}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-slate-300 text-xs leading-relaxed mb-6 font-sans">
              {selectedProject.description}
            </p>

            {/* Workflow Steps */}
            <div className="space-y-3 mb-6">
              <h4 className="font-bold text-cyan-400 uppercase tracking-wider text-[11px]">System Execution Flow (DAG):</h4>
              <div className="space-y-2">
                {selectedProject.flowSteps.map((step, idx) => (
                  <div key={step.step} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <h5 className="font-bold text-slate-200">{step.step}</h5>
                      <p className="text-slate-400 text-[11px] font-sans mt-0.5">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Details */}
            <div className="space-y-2 mb-6">
              <h4 className="font-bold text-purple-400 uppercase tracking-wider text-[11px]">Key Architecture Highlights:</h4>
              <ul className="space-y-1.5 text-slate-300 font-sans text-xs">
                {selectedProject.architectureDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all"
              >
                Close Architecture View
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
