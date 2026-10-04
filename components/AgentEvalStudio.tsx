'use client';

import React, { useState } from 'react';
import { EVAL_METRICS, EvalMetric } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Play, 
  CheckCircle2, 
  Terminal, 
  RefreshCw, 
  Zap, 
  Cpu, 
  Database, 
  Activity, 
  Layers,
  Sparkles,
  Cloud
} from 'lucide-react';

interface EvalTest {
  id: string;
  name: string;
  framework: string;
  cloud: string;
  status: 'passed' | 'running';
  metrics: { label: string; score: string; threshold: string }[];
  traceLog: string[];
}

const EVAL_SUITES: EvalTest[] = [
  {
    id: 'ragas-faithfulness',
    name: 'RAG Triad & Faithfulness Eval Suite',
    framework: 'Ragas + TruLens + DeepEval',
    cloud: 'Google Cloud Vertex AI / AWS',
    status: 'passed',
    metrics: [
      { label: 'Faithfulness', score: '98.4%', threshold: '> 95%' },
      { label: 'Answer Relevancy', score: '96.8%', threshold: '> 90%' },
      { label: 'Context Precision', score: '97.2%', threshold: '> 92%' },
      { label: 'Context Recall', score: '96.5%', threshold: '> 90%' }
    ],
    traceLog: [
      "[INFO] Initializing Ragas Evaluation Suite with test dataset (n=2,400)",
      "[EVAL] Generating embeddings with Vertex AI textembedding-gecko@003",
      "[EVAL] Calculating Context Precision across top-5 hybrid retrieval chunks: 0.972",
      "[EVAL] LLM-as-a-Judge Faithfulness Verification (Gemini 1.5 Pro): Grounded 98.4%",
      "[ASSERT] All 4 RAG Triad thresholds PASSED. Zero hallucination detected."
    ]
  },
  {
    id: 'agent-trajectory',
    name: 'Multi-Agent Tool Trajectory & Safety Suite',
    framework: 'LangSmith + AgentBench + Guardrails',
    cloud: 'Google Cloud Run / AWS ECS',
    status: 'passed',
    metrics: [
      { label: 'Task Completion Rate', score: '99.1%', threshold: '> 95%' },
      { label: 'Tool Parameter Accuracy', score: '99.4%', threshold: '> 98%' },
      { label: 'Loop Termination Rate', score: '100%', threshold: '100%' },
      { label: 'Guardrail Defense Rate', score: '99.8%', threshold: '> 99%' }
    ],
    traceLog: [
      "[INFO] Running LangGraph multi-agent deterministic trajectory test",
      "[NODE 1] SupervisorAgent successfully decomposed multi-step user goal",
      "[NODE 2] SearchAgent retrieved vector chunks in 18ms",
      "[NODE 3] SynthesisAgent formulated final structured JSON output",
      "[GUARDRAIL] NeMo / Llama-Guard scan: 0 security or prompt injection risks detected",
      "[ASSERT] Trajectory completed in 3 steps with 100% deterministic success."
    ]
  },
  {
    id: 'gcp-vertex-benchmark',
    name: 'Google Cloud Vertex AI & Gemini Benchmark',
    framework: 'Google Cloud SDK + Vertex AI Eval',
    cloud: 'Google Cloud Platform (GCP)',
    status: 'passed',
    metrics: [
      { label: 'Token Latency (Time-to-First-Token)', score: '185ms', threshold: '< 300ms' },
      { label: 'Vertex AI Vector Latency', score: '12ms', threshold: '< 25ms' },
      { label: 'Context Cache Hit Ratio', score: '88.5%', threshold: '> 75%' },
      { label: 'Throughput (Concurrency)', score: '500 req/s', threshold: '> 250 req/s' }
    ],
    traceLog: [
      "[GCP] Connected to Vertex AI Studio in us-central1",
      "[BENCHMARK] Testing Gemini 1.5 Flash vs Gemini 1.5 Pro for live streaming",
      "[CACHE] Vertex AI Context Caching active: Reduced token cost by 48%",
      "[VECTOR] Vertex AI Vector Search ScaNN index latency: 12.4ms",
      "[DEPLOY] Verified Google Cloud Run auto-scaling from 0 to 50 container instances."
    ]
  }
];

export default function AgentEvalStudio() {
  const [activeSuiteIdx, setActiveSuiteIdx] = useState(0);
  const [isRunningEval, setIsRunningEval] = useState(false);
  const [evalProgress, setEvalProgress] = useState(100);

  const currentSuite = EVAL_SUITES[activeSuiteIdx];

  const handleRunEval = (idx: number) => {
    setActiveSuiteIdx(idx);
    setIsRunningEval(true);
    setEvalProgress(0);

    const timer1 = setTimeout(() => setEvalProgress(35), 300);
    const timer2 = setTimeout(() => setEvalProgress(70), 700);
    const timer3 = setTimeout(() => {
      setEvalProgress(100);
      setIsRunningEval(false);
    }, 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  return (
    <section id="eval-studio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-6 border-b border-slate-200/80 dark:border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>AI AGENT TESTING, RAG EVALUATION & BENCHMARKING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            AI Agent & RAG Evaluation Studio
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md font-mono">
          Rigorous testing frameworks ensuring deterministic agent execution, zero hallucination, and sub-200ms latency across Google Cloud (Vertex AI) & AWS.
        </p>
      </div>

      {/* Top 5 Key Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {EVAL_METRICS.map((metric, i) => (
          <div key={i} className="bento-card p-4 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 uppercase font-semibold">
                {metric.category}
              </div>
              <div className="text-2xl font-black font-display text-slate-900 dark:text-white mt-1">
                {metric.score}
              </div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5 leading-snug">
                {metric.name}
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-white/5 text-[10px] font-mono text-slate-400">
              {metric.benchmark}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Eval Test Bench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Test Suite Selector */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1 flex items-center justify-between">
            <span>Select Evaluation Suite</span>
            <span className="text-[10px] text-indigo-600 dark:text-indigo-400">3 SUITES</span>
          </div>

          {EVAL_SUITES.map((suite, idx) => {
            const isSelected = activeSuiteIdx === idx;
            return (
              <button
                key={suite.id}
                onClick={() => handleRunEval(idx)}
                className={`w-full text-left p-4 rounded-2xl transition-all border flex flex-col gap-2 ${
                  isSelected
                    ? 'bento-card border-indigo-500/60 dark:border-indigo-400/60 shadow-md ring-1 ring-indigo-500/20'
                    : 'bg-white/70 dark:bg-dark-900/60 border-slate-200/80 dark:border-white/5 hover:bg-white dark:hover:bg-dark-850'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                    {suite.framework}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>PASSED</span>
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {suite.name}
                </h3>

                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Cloud className="w-3 h-3 text-sky-500" />
                  <span>{suite.cloud}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Live Test Bench & Assertion Console */}
        <div className="lg:col-span-8 bento-card p-6 sm:p-7 flex flex-col justify-between">
          <div>
            
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200/80 dark:border-white/10">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                  {currentSuite.framework}
                </span>
                <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white">
                  {currentSuite.name}
                </h3>
              </div>

              <button
                onClick={() => handleRunEval(activeSuiteIdx)}
                disabled={isRunningEval}
                className="px-3.5 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-xs font-bold transition-all disabled:opacity-50 flex items-center gap-1.5 shadow-sm"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{isRunningEval ? 'Executing Eval...' : 'Re-run Benchmark'}</span>
              </button>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {currentSuite.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-3 rounded-2xl bg-slate-50 dark:bg-dark-850 border border-slate-200/70 dark:border-white/5">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{m.label}</div>
                  <div className="text-xl font-black font-display text-slate-900 dark:text-white mt-0.5">{m.score}</div>
                  <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                    Threshold: {m.threshold} ✓
                  </div>
                </div>
              ))}
            </div>

            {/* Live Trace Terminal Log */}
            <div className="rounded-2xl bg-slate-900 dark:bg-dark-950 p-4 font-mono text-xs text-slate-300 border border-slate-800 dark:border-white/10 space-y-1.5 shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-500 text-[11px]">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  eval_assertion_runner.py
                </span>
                <span className="text-emerald-400">STATUS: 100% VERIFIED</span>
              </div>

              {isRunningEval ? (
                <div className="py-6 flex flex-col items-center justify-center gap-2 text-indigo-400">
                  <div className="w-5 h-5 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
                  <p className="text-xs font-mono animate-pulse">Running test assertions & LLM-as-a-Judge evaluations...</p>
                </div>
              ) : (
                currentSuite.traceLog.map((line, lIdx) => (
                  <p key={lIdx} className={line.includes('PASSED') ? 'text-emerald-400 font-bold' : 'text-slate-300'}>
                    {line}
                  </p>
                ))
              )}
            </div>

          </div>

          <div className="pt-3 mt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span>Continuous Regression Testing</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Zero Hallucination Guaranteed</span>
          </div>
        </div>

      </div>

    </section>
  );
}
