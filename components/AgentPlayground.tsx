'use client';

import React, { useState } from 'react';
import { 
  Bot, 
  Terminal, 
  Play, 
  Sparkles, 
  Database, 
  RefreshCw
} from 'lucide-react';

interface QAPreset {
  query: string;
  category: string;
  agentChain: string[];
  retrievalDocs: { title: string; score: string; text: string }[];
  answer: string;
}

const PRESETS: QAPreset[] = [
  {
    query: "What is Anil's core experience in Generative AI, LangGraph, and Multi-Agent Systems?",
    category: "Generative AI",
    agentChain: [
      "SupervisorAgent: Classifying intent as 'GenAI Technical Expertise'",
      "VectorRetrievalAgent: Querying FAISS/ChromaDB with cosine distance",
      "LangGraphOrchestrator: Traversing multi-agent tool execution graph",
      "SynthesisAgent: Formulating grounded response with verified citations"
    ],
    retrievalDocs: [
      {
        title: "Lloyds Technology Centre & Infosys Knowledge Base",
        score: "0.984",
        text: "Senior Software Engineer designing and implementing production Multi-Agent workflows with LangChain & LangGraph, automated RAG pipelines, and hybrid semantic retrieval."
      },
      {
        title: "Key Projects: Enterprise AI Knowledge Assistant & Release Impact Platform",
        score: "0.962",
        text: "Built stateful multi-agent systems for RFC impact analysis, automated document ingestion (PDF, DOCX, Excel), and semantic contextual retrieval on AWS."
      }
    ],
    answer: "Anil is a Senior Full Stack & Generative AI Engineer with 8+ years of industry experience. At Lloyds Technology Centre and Infosys, he architects enterprise-scale Generative AI platforms utilizing LangChain and LangGraph for multi-agent autonomous workflows. His expertise spans automated multi-format RAG ingestion pipelines, vector databases (FAISS, ChromaDB, Pinecone), semantic search optimization, and production deployment using FastAPI, Docker, and AWS."
  },
  {
    query: "Explain the architecture of Anil's Enterprise AI Knowledge Assistant project.",
    category: "System Architecture",
    agentChain: [
      "SupervisorAgent: Matching entity 'Enterprise AI Knowledge Assistant'",
      "ArchitectureAnalyzer: Extracting ingestion, embedding, vector store & backend components",
      "SynthesisAgent: Structuring end-to-end technical flow"
    ],
    retrievalDocs: [
      {
        title: "Architecture Blueprint: Enterprise AI Assistant",
        score: "0.991",
        text: "Multi-agent RAG pipeline supporting automated document ingestion (PDF, DOCX, Excel) and low-latency semantic contextual retrieval across enterprise repositories."
      }
    ],
    answer: "The Enterprise AI Knowledge Assistant is an end-to-end agentic RAG platform: 1) Ingestion Layer parses unstructured PDFs, Word documents, and Excel spreadsheets; 2) Embedding Layer utilizes OpenAI embeddings with recursive chunking; 3) Vector Storage leverages ChromaDB & FAISS for hybrid semantic search; 4) Multi-Agent Orchestration via LangGraph routes queries through specialized retrieval and verification agents; 5) Microservices Backend is built in FastAPI & Docker on AWS with sub-second response times."
  },
  {
    query: "What full-stack backend, database, and cloud infrastructure technologies does Anil use?",
    category: "Full Stack & Cloud",
    agentChain: [
      "SupervisorAgent: Categorizing query as 'Full Stack & Infrastructure'",
      "SkillsVectorIndex: Querying Python, FastAPI, Node.js, AWS, and Docker modules",
      "SynthesisAgent: Generating comprehensive tech overview"
    ],
    retrievalDocs: [
      {
        title: "Technical Skills Matrix & Production Experience",
        score: "0.978",
        text: "Backend: Python, FastAPI, Node.js, Express.js. Frontend: React.js, Next.js, TypeScript. Cloud: AWS (EC2, S3, Lambda), Docker, GitHub Actions, Jenkins. Databases: MongoDB, PostgreSQL, Redis."
      }
    ],
    answer: "Anil's engineering stack includes: • Backend: Python (FastAPI, Django), Node.js, Express.js, REST APIs, Microservices; • Frontend: React.js, Next.js, TypeScript, Tailwind CSS, Material UI; • Databases: MongoDB, PostgreSQL, Redis (caching & pub/sub), Vector DBs (ChromaDB, FAISS); • Cloud & DevOps: AWS (EC2, S3, Lambda, ECS), Docker containerization, and automated CI/CD via GitHub Actions, Jenkins, and Bamboo."
  },
  {
    query: "Where has Anil worked and what were his key achievements?",
    category: "Career History",
    agentChain: [
      "SupervisorAgent: Querying career timeline spanning 8+ years",
      "ExperienceIndex: Aggregating Lloyds, Infosys, Truelancer, Qualcomm India",
      "SynthesisAgent: Compiling chronological career achievements"
    ],
    retrievalDocs: [
      {
        title: "Professional Work History",
        score: "0.995",
        text: "Lloyds Technology Centre (Senior Software Engineer, 2026-Pres), Infosys (Senior Consultant, 2023-2026), Truelancer (Consultant, 2022-2023), Qualcomm India (Programmer Analyst, 2018-2022)."
      }
    ],
    answer: "Anil's career encompasses 8+ years of enterprise engineering: 1) Lloyds Technology Centre (Senior Software Engineer): Leading GenAI solutions, multi-agent workflows, and AWS microservices; 2) Infosys (Senior Consultant): Architected enterprise platforms with React, FastAPI, Azure OpenAI, and slashed deployment times via CI/CD; 3) Truelancer (Consultant): Delivered full-stack AI document processing applications; 4) Qualcomm India (Programmer Analyst): Built engineering analytics dashboards with React/Django and automated Docker CI/CD pipelines."
  }
];

export default function AgentPlayground() {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'response' | 'reasoning' | 'context'>('response');
  const [isSimulating, setIsSimulating] = useState(false);
  const [progressStep, setProgressStep] = useState(4);
  const [customPrompt, setCustomPrompt] = useState('');
  const [displayedText, setDisplayedText] = useState(PRESETS[0].answer);

  const currentPreset = PRESETS[selectedPresetIndex];

  const runSimulation = (index: number) => {
    setSelectedPresetIndex(index);
    setIsSimulating(true);
    setProgressStep(0);
    setDisplayedText('');

    const timer1 = setTimeout(() => setProgressStep(1), 300);
    const timer2 = setTimeout(() => setProgressStep(2), 700);
    const timer3 = setTimeout(() => setProgressStep(3), 1100);
    const timer4 = setTimeout(() => {
      setProgressStep(4);
      setIsSimulating(false);
      setDisplayedText(PRESETS[index].answer);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;

    const lower = customPrompt.toLowerCase();
    let matched = 0;
    if (lower.includes('project') || lower.includes('knowledge') || lower.includes('rag') || lower.includes('assistant')) {
      matched = 1;
    } else if (lower.includes('stack') || lower.includes('cloud') || lower.includes('aws') || lower.includes('backend') || lower.includes('database')) {
      matched = 2;
    } else if (lower.includes('experience') || lower.includes('company') || lower.includes('work') || lower.includes('infosys') || lower.includes('qualcomm')) {
      matched = 3;
    }
    runSimulation(matched);
  };

  return (
    <section id="ai-simulator" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-dark-900/60 relative border-t border-b border-slate-200 dark:border-white/10 overflow-hidden">
      
      {/* Background Neon Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-400/10 dark:bg-brand-cyan/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-brand-purple/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 dark:bg-brand-cyan/10 border border-sky-300 dark:border-brand-cyan/30 text-sky-700 dark:text-brand-cyan text-xs font-mono font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE AI AGENT & RAG PLAYGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Test Anil's <span className="text-gradient-cyan">Agentic RAG Assistant</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Simulate a real-time LangGraph multi-agent traversal and vector retrieval query on Anil's professional experience, technical architecture, and accomplishments.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Preset Queries & Interactive Selector */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>Select Query to Run</span>
              <span className="text-[10px] font-mono text-sky-600 dark:text-brand-cyan">4 PRE-LOADED VECTORS</span>
            </div>

            <div className="space-y-2.5">
              {PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => runSimulation(idx)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 group ${
                    selectedPresetIndex === idx
                      ? 'bg-white dark:bg-dark-850 border-sky-500 dark:border-brand-cyan shadow-lg shadow-sky-500/10 dark:shadow-brand-cyan/10 ring-1 ring-sky-500/30'
                      : 'bg-white/80 dark:bg-dark-900/80 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-dark-850 shadow-sm'
                  }`}
                >
                  <div className={`p-2 rounded-xl mt-0.5 ${
                    selectedPresetIndex === idx
                      ? 'bg-sky-100 text-sky-600 dark:bg-brand-cyan/20 dark:text-brand-cyan'
                      : 'bg-slate-100 text-slate-500 dark:bg-dark-800 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200'
                  }`}>
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${
                        selectedPresetIndex === idx ? 'text-sky-600 dark:text-brand-cyan' : 'text-slate-500 dark:text-slate-400'
                      }`}>
                        {preset.category}
                      </span>
                      {selectedPresetIndex === idx && (
                        <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-brand-cyan animate-ping" />
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 mt-1 line-clamp-2">
                      {preset.query}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Query Input */}
            <form onSubmit={handleCustomSubmit} className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                Ask a Custom Query:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="e.g. What are Anil's AWS cloud skills?"
                  className="flex-1 bg-white dark:bg-dark-950 border border-slate-300 dark:border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-sky-500 dark:focus:border-brand-cyan shadow-sm"
                />
                <button
                  type="submit"
                  disabled={isSimulating}
                  className="px-3.5 py-2.5 bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-brand-cyan dark:to-brand-blue rounded-xl text-white dark:text-black font-bold text-xs hover:opacity-95 transition-opacity flex items-center justify-center disabled:opacity-50 shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Execution Terminal & Graph Trace */}
          <div className="lg:col-span-8">
            <div className="bg-slate-950 dark:bg-dark-950 border border-slate-800 dark:border-white/15 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Terminal Title Bar */}
              <div className="bg-slate-900 dark:bg-dark-900/90 px-4 py-3 border-b border-slate-800 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-sky-400 dark:text-brand-cyan" />
                    langgraph_agent_supervisor.py
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center bg-slate-950 dark:bg-dark-950 p-1 rounded-xl border border-slate-800 dark:border-white/10 text-xs">
                  <button
                    onClick={() => setActiveTab('response')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      activeTab === 'response' 
                        ? 'bg-sky-500 dark:bg-brand-cyan text-white dark:text-black font-bold shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Synthesized Output
                  </button>
                  <button
                    onClick={() => setActiveTab('reasoning')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      activeTab === 'reasoning' 
                        ? 'bg-sky-500 dark:bg-brand-cyan text-white dark:text-black font-bold shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Agent Trace ({currentPreset.agentChain.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('context')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      activeTab === 'context' 
                        ? 'bg-sky-500 dark:bg-brand-cyan text-white dark:text-black font-bold shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Vector Chunks ({currentPreset.retrievalDocs.length})
                  </button>
                </div>
              </div>

              {/* Execution Progress Bar */}
              <div className="px-5 py-3 bg-slate-900/60 dark:bg-dark-900/40 border-b border-slate-800 dark:border-white/5 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className={isSimulating ? 'text-sky-400 dark:text-brand-cyan animate-spin' : 'text-emerald-400'}>
                    <RefreshCw className="w-3 h-3" />
                  </span>
                  <span>Pipeline State: {isSimulating ? 'Executing Graph Nodes...' : 'Completed (Latency: 184ms)'}</span>
                </div>
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`w-6 h-1.5 rounded-full transition-all duration-300 ${
                        progressStep >= step + 1 ? 'bg-sky-400 dark:bg-brand-cyan' : 'bg-slate-800 dark:bg-dark-800'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Terminal Content Area */}
              <div className="p-6 min-h-[300px] max-h-[460px] overflow-y-auto">
                
                {activeTab === 'response' && (
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-2xl bg-slate-900 dark:bg-dark-900 border border-slate-800 dark:border-white/10 flex items-start gap-3">
                      <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400 dark:text-brand-cyan font-mono text-xs font-semibold">
                        USER_QUERY
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-200">
                        {currentPreset.query}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 dark:from-dark-850 dark:to-dark-900 border border-sky-500/30 dark:border-brand-cyan/30 shadow-inner">
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 dark:border-white/10 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 text-sky-400 dark:text-brand-cyan font-semibold">
                          <Bot className="w-4 h-4" />
                          LangGraph Synthesizer Output
                        </span>
                        <span className="text-emerald-400 font-bold">Confidence: 99.2%</span>
                      </div>

                      {isSimulating ? (
                        <div className="py-8 flex flex-col items-center justify-center gap-3 text-slate-400">
                          <div className="w-6 h-6 border-2 border-sky-400 dark:border-brand-cyan border-t-transparent rounded-full animate-spin" />
                          <p className="text-xs font-mono text-sky-400 dark:text-brand-cyan animate-pulse">
                            Traversing LangGraph Multi-Agent RAG nodes...
                          </p>
                        </div>
                      ) : (
                        <div className="text-sm text-slate-200 leading-relaxed font-sans space-y-3">
                          <p>{displayedText}</p>
                          
                          <div className="pt-3 border-t border-slate-800 dark:border-white/5 flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
                            <span className="px-2.5 py-0.5 rounded-lg bg-slate-950 dark:bg-dark-950 border border-slate-800 dark:border-white/10 text-sky-400 dark:text-brand-cyan">
                              Model: GPT-4o / Azure OpenAI
                            </span>
                            <span className="px-2.5 py-0.5 rounded-lg bg-slate-950 dark:bg-dark-950 border border-slate-800 dark:border-white/10 text-purple-400">
                              Framework: LangGraph + LangChain
                            </span>
                            <span className="px-2.5 py-0.5 rounded-lg bg-slate-950 dark:bg-dark-950 border border-slate-800 dark:border-white/10 text-emerald-400">
                              Vector Index: FAISS HNSW
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'reasoning' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="text-slate-400 pb-2 border-b border-slate-800 dark:border-white/5">
                      // Multi-Agent Execution Graph Trace
                    </div>
                    {currentPreset.agentChain.map((node, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-900 dark:bg-dark-900 border border-slate-800 dark:border-white/10 flex items-start gap-3"
                      >
                        <span className="px-2 py-0.5 rounded-lg bg-sky-500/20 text-sky-400 dark:bg-brand-cyan/20 dark:text-brand-cyan font-bold text-[10px]">
                          Node 0{i + 1}
                        </span>
                        <div className="text-slate-300 leading-relaxed">
                          {node}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'context' && (
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 dark:border-white/5">
                      // Top Vector Document Chunks (Distance Metric: Cosine Similarity)
                    </div>
                    {currentPreset.retrievalDocs.map((doc, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-2xl bg-slate-900 dark:bg-dark-900 border border-slate-800 dark:border-white/10 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                            <Database className="w-3.5 h-3.5 text-sky-400 dark:text-brand-cyan" />
                            {doc.title}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            Similarity: {doc.score}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans bg-slate-950 dark:bg-dark-950 p-2.5 rounded-xl border border-slate-800 dark:border-white/5">
                          "{doc.text}"
                        </p>
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
