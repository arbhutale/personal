'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  Bot, 
  Database, 
  Cloud, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Server,
  Globe
} from 'lucide-react';

interface ArchNode {
  id: string;
  title: string;
  category: string;
  icon: any;
  color: string;
  items: string[];
  description: string;
}

const ARCH_NODES: ArchNode[] = [
  {
    id: 'client',
    title: '1. Frontend & Client Layer',
    category: 'UI / UX & Streaming',
    icon: Globe,
    color: 'from-sky-500 to-blue-600',
    items: ['React.js / Next.js', 'Server-Sent Events (SSE)', 'WebSocket Streams', 'Responsive UI / Tailwind'],
    description: 'Ultra-fast responsive client delivering sub-second real-time streaming tokens and interactive visual telemetry.'
  },
  {
    id: 'gateway',
    title: '2. FastAPI Microservices',
    category: 'High-Throughput Gateway',
    icon: Server,
    color: 'from-blue-600 to-indigo-600',
    items: ['FastAPI & Python 3.11+', 'Pydantic Schema Validation', 'JWT Auth & Rate Limiting', 'Async Task Queues'],
    description: 'High-concurrency asynchronous API layer orchestrating requests and managing stateful agent lifecycles.'
  },
  {
    id: 'orchestrator',
    title: '3. LangGraph Multi-Agent Core',
    category: 'Agentic Reasoning',
    icon: Bot,
    color: 'from-purple-600 to-pink-600',
    items: ['Supervisor-Worker Architecture', 'Autonomous Routing Graphs', 'Tool Calling & Fallbacks', 'Context Grounding'],
    description: 'Stateful multi-agent system executing query decomposition, parallel retrieval, and hallucination-free synthesis.'
  },
  {
    id: 'vector',
    title: '4. Vector DB & Knowledge Store',
    category: 'Hybrid Retrieval Engine',
    icon: Database,
    color: 'from-emerald-500 to-teal-600',
    items: ['FAISS & ChromaDB (HNSW)', 'Pinecone / Vector Search', 'OpenAI text-embedding-3', 'Redis Semantic Cache'],
    description: 'High-density vector indexing supporting hybrid semantic + BM25 keyword matching with sub-10ms query lookup.'
  },
  {
    id: 'cloud',
    title: '5. AWS & DevOps Infrastructure',
    category: 'Cloud-Native Deployment',
    icon: Cloud,
    color: 'from-amber-500 to-orange-600',
    items: ['AWS ECS / EC2 / Lambda / S3', 'Docker Multi-Stage Containers', 'GitHub Actions & Jenkins CI/CD', 'CloudWatch Monitoring'],
    description: 'Automated CI/CD pipelines and resilient AWS cloud hosting with auto-scaling and zero-downtime blue/green deployments.'
  }
];

export default function ArchitectureVisualizer() {
  const [selectedNode, setSelectedNode] = useState<ArchNode>(ARCH_NODES[2]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const startPipelineSimulation = () => {
    setIsSimulating(true);
    let step = 0;
    setActiveStep(0);
    setSelectedNode(ARCH_NODES[0]);

    const interval = setInterval(() => {
      step++;
      if (step < ARCH_NODES.length) {
        setActiveStep(step);
        setSelectedNode(ARCH_NODES[step]);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setActiveStep(null);
      }
    }, 1200);
  };

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-100/40 dark:bg-dark-900/50 border-t border-b border-slate-200 dark:border-white/10 cyber-bg-grid">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-brand-emerald/10 border border-emerald-300 dark:border-brand-emerald/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENTERPRISE BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Production <span className="text-gradient-cyan">GenAI Architecture</span> Pattern
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Interactive visualization of how Anil architects enterprise-ready, low-latency Generative AI microservices from front-end ingestion to vector embeddings and cloud orchestration.
          </p>

          <button
            onClick={startPipelineSimulation}
            disabled={isSimulating}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-brand-cyan dark:to-brand-blue text-white dark:text-black hover:opacity-95 shadow-md dark:shadow-brand-cyan/20 transition-all disabled:opacity-50"
          >
            <Play className={`w-3.5 h-3.5 fill-current ${isSimulating ? 'animate-spin' : ''}`} />
            <span>{isSimulating ? 'Simulating Live Pipeline Trace...' : 'Simulate End-to-End Query Flow'}</span>
          </button>
        </div>

        {/* Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
          {ARCH_NODES.map((node, idx) => {
            const Icon = node.icon;
            const isCurrentActive = selectedNode.id === node.id;
            const isStepActive = activeStep === idx;

            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`text-left p-4 rounded-2xl border transition-all relative overflow-hidden flex flex-col justify-between ${
                  isStepActive
                    ? 'ring-2 ring-sky-500 dark:ring-brand-cyan scale-105 bg-white dark:bg-dark-800 shadow-xl shadow-sky-500/20 dark:shadow-brand-cyan/30'
                    : isCurrentActive
                    ? 'bg-white dark:bg-dark-850 border-sky-500 dark:border-brand-cyan/60 shadow-lg ring-1 ring-sky-500/20'
                    : 'bg-white/80 dark:bg-dark-950/80 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-dark-900 shadow-sm'
                }`}
              >
                <div>
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${node.color} p-[1px] mb-3 flex items-center justify-center`}>
                    <div className="w-full h-full bg-white dark:bg-dark-950 rounded-[11px] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-slate-800 dark:text-white" />
                    </div>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                    {node.title}
                  </h3>
                  <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                    {node.category}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-sky-600 dark:text-brand-cyan font-semibold">CLICK FOR SPECS</span>
                  <ArrowRight className={`w-3 h-3 ${isCurrentActive ? 'text-sky-600 dark:text-brand-cyan' : 'text-slate-400 dark:text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Node Deep Dive Panel */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/15 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-100 dark:bg-brand-cyan/20 text-sky-700 dark:text-brand-cyan border border-sky-300 dark:border-brand-cyan/40">
                  Node Specification
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {selectedNode.category}
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {selectedNode.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedNode.description}
              </p>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-3">
                  Core Technologies & Architecture Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedNode.items.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-950/80 border border-slate-200/80 dark:border-white/5 flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-brand-cyan shrink-0" />
                      <span className="text-xs font-mono text-slate-800 dark:text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-5 rounded-2xl bg-slate-950 dark:bg-dark-950 border border-slate-800 dark:border-brand-cyan/20 font-mono text-xs text-slate-300 space-y-2 shadow-xl">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 dark:border-white/10 text-slate-400">
                  <span>architecture_spec.json</span>
                  <span className="text-emerald-400">● 100% PRODUCTION READY</span>
                </div>
                <p className="text-sky-400 dark:text-brand-cyan">&#123;</p>
                <p className="pl-4 text-purple-300">"layer": <span className="text-emerald-300">"{selectedNode.title}"</span>,</p>
                <p className="pl-4 text-purple-300">"category": <span className="text-emerald-300">"{selectedNode.category}"</span>,</p>
                <p className="pl-4 text-purple-300">"latency_sla": <span className="text-amber-300">"&lt; 200ms"</span>,</p>
                <p className="pl-4 text-purple-300">"fault_tolerance": <span className="text-sky-300 dark:text-brand-cyan">"Active-Active Multi-AZ"</span>,</p>
                <p className="pl-4 text-purple-300">"orchestration": <span className="text-emerald-300">"LangGraph + Docker + AWS"</span></p>
                <p className="text-sky-400 dark:text-brand-cyan">&#125;</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
