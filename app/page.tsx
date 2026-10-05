'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroBento from '../components/HeroBento';
import ExperienceDossier from '../components/ExperienceDossier';
import ProjectShowcaseBento from '../components/ProjectShowcaseBento';
import AgentEvalStudio from '../components/AgentEvalStudio';
import SkillConstellation from '../components/SkillConstellation';
import ExecutiveContact from '../components/ExecutiveContact';
import ResumeModal from '../components/ResumeModal';
import CyberCanvas from '../components/CyberCanvas';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-400 relative transition-colors duration-300 overflow-x-hidden">
      
      {/* Dynamic Cyber Ambient Particle Canvas */}
      <CyberCanvas />

      {/* 1. Header Command Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Experience Canvas */}
      <main className="flex-grow relative z-10">
        {/* 2. Hero Bento & Interactive Agent Sandbox */}
        <HeroBento onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. Enterprise Career Dossier */}
        <ExperienceDossier />

        {/* 4. Key Production Blueprints & Ingestion Simulator */}
        <ProjectShowcaseBento />

        {/* 5. AI Agent Testing & RAG Evaluation Studio */}
        <AgentEvalStudio />

        {/* 6. Core Engineering Competency Matrix */}
        <SkillConstellation />

        {/* 7. Academic Foundation & Direct Collaboration Hub (with Footer) */}
        <ExecutiveContact />
      </main>

      {/* 8. ATS Formatted Resume Sheet Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
