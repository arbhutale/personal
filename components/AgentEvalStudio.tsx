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
  Cloud,
  Check,
  Radio,
  Sliders
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
      { label: 'Faithfulness Score', score: '98.4%', threshold: '> 95%' },
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
      { label: 'Token Latency (TTFT)', score: '185ms', threshold: '< 300ms' },
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

    setTimeout(() => setEvalProgress(35), 300);
    setTimeout(() => setEvalProgress(70), 700);
    setTimeout(() => {
      setEvalProgress(100);
      setIsRunningEval(false);
    }, 1200);
  };

  return (
    <section id="eval-studio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b border-slate-200/80 dark:border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI AGENT TESTING, RAG EVALUATION & BENCHMARKING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            AI Agent & RAG Evaluation Studio
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md font-mono">
          Continuous evaluation testing suites ensuring zero hallucination, deterministic multi-agent tool execution, and sub-200ms latency across GCP & AWS.
        </p>
      </div>

      {/* Top 5 Metric Telemetry Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {EVAL_METRICS.map((metric, i) => (
          <div key={i} className="bento-card p-4 flex flex-col justify-between border-cyan-500/20 hover:border-cyan-500/40 transition-all">
            <div>
              <div className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                {metric.category}
              </div>
              <div className="text-2xl font-black font-mono text-slate-900 dark:text-white mt-1">
                {metric.score}
              </div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5 leading-snug">
                {metric.name}
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>{metric.benchmark}</span>
              <span className="text-emerald-500 font-bold">✓ PASS</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Studio Interactive Console */}
      <div className="bento-card p-6 sm:p-8 border-cyan-500/20 hover:border-cyan-500/50 transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Suite Selectors (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sliders className="w-4 h-4" />
              <span>AVAILABLE EVALUATION SUITES</span>
            </h3>

            {EVAL_SUITES.map((suite, idx) => {
              const isActive = activeSuiteIdx === idx;
              return (
                <div
                  key={suite.id}
                  onClick={() => handleRunEval(idx)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border font-mono text-xs ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-dark-900 border-cyan-500/50 shadow-md shadow-cyan-500/10'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-cyan-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-bold text-slate-900 dark:text-white font-sans text-sm">{suite.name}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                      PASSED
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                    Framework: <strong className="text-cyan-400">{suite.framework}</strong>
                  </div>
                  <div className="text-[10px] text-slate-400 flex items-center justify-between">
                    <span>Cloud: {suite.cloud}</span>
                    <span className="text-purple-400 font-bold">Run Test &gt;</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Execution Output & Trace Telemetry (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl p-6 border border-slate-800 font-mono text-xs text-slate-100 shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="font-bold text-slate-200">{currentSuite.name}</span>
              </div>
              <button
                onClick={() => handleRunEval(activeSuiteIdx)}
                disabled={isRunningEval}
                className="px-3 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-[11px] transition-all flex items-center gap-1.5 disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRunningEval ? 'animate-spin' : ''}`} />
                <span>{isRunningEval ? 'Executing...' : 'Re-Run Test'}</span>
              </button>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {currentSuite.metrics.map((m) => (
                <div key={m.label} className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-500 block">{m.label}</span>
                  <span className="text-base font-extrabold text-cyan-300 block my-0.5">{m.score}</span>
                  <span className="text-[9px] text-emerald-400 block font-bold">Target: {m.threshold}</span>
                </div>
              ))}
            </div>

            {/* Live Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                <span>EVALUATION SUITE PROGRESS</span>
                <span className="text-cyan-400 font-bold">{evalProgress}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300"
                  style={{ width: `${evalProgress}%` }}
                />
              </div>
            </div>

            {/* Trace Logs Box */}
            <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 space-y-2 min-h-[160px]">
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>EXECUTION TRACE LOGS</span>
              </div>
              {currentSuite.traceLog.map((log, i) => (
                <div key={i} className="text-[11px] leading-relaxed text-slate-300 flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
