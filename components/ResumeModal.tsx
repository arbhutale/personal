'use client';

import React from 'react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, EDUCATION } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Globe } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl my-auto max-h-[92vh] overflow-y-auto print:max-h-none print:shadow-none print:p-0 print:m-0 font-sans">
        
        {/* Floating Action Controls (Hidden on print) */}
        <div className="sticky top-0 right-0 z-20 flex items-center justify-end gap-2 pb-4 -mt-2 bg-white/90 backdrop-blur-sm print:hidden border-b border-slate-200 mb-6 font-mono">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Content Sheet */}
        <div className="space-y-6 text-slate-800">
          
          {/* Header */}
          <div className="text-center border-b border-slate-300 pb-5">
            <h1 className="text-3xl font-black text-slate-950 tracking-tight font-display">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-sm sm:text-base font-bold text-sky-700 uppercase tracking-wider mt-1 font-mono">
              {PERSONAL_INFO.title}
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-3 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-500" /> {PERSONAL_INFO.location}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-slate-500" /> {PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-slate-500" /> {PERSONAL_INFO.email}</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-2.5 text-xs font-mono text-sky-700 font-bold">
              <a href={PERSONAL_INFO.website} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-sky-600" />
                <span>ar.bhutale.in</span>
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-sky-600" />
                <span>linkedin.com/in/arbhutale</span>
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-sky-600" />
                <span>github.com/arbhutale</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-2">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed text-justify">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-2">
              Technical Skills
            </h3>
            <div className="space-y-1.5 text-xs">
              <div>
                <span className="font-bold text-slate-900">Generative AI: </span>
                <span className="text-slate-700">LangChain, LangGraph, RAG, AI Agents, Multi-Agent Systems, OpenAI & Azure OpenAI APIs, Vector Databases (FAISS, ChromaDB, Pinecone), Semantic Search</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Backend: </span>
                <span className="text-slate-700">Python, FastAPI, Node.js, Express.js, REST APIs, Microservices Architecture, Design Patterns</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Frontend: </span>
                <span className="text-slate-700">React.js, Next.js, Angular, JavaScript, TypeScript, HTML5, CSS3, Material UI, Tailwind CSS</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Databases: </span>
                <span className="text-slate-700">MongoDB, PostgreSQL, Redis</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Cloud & DevOps: </span>
                <span className="text-slate-700">AWS (EC2, S3, Lambda, ECS), Docker, Jenkins, Bamboo, GitHub Actions, CI/CD Pipelines</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-3">
              Professional Experience
            </h3>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span className="text-sm text-slate-950 font-black">{exp.company} — <span className="font-semibold text-slate-700">{exp.role}</span></span>
                    <span className="text-slate-600 font-mono text-[11px]">{exp.period} | {exp.location}</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 mt-1.5 space-y-1 text-slate-700 leading-relaxed">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-3">
              Key Projects
            </h3>
            <div className="space-y-3.5 text-xs">
              {PROJECTS.map((proj, pIdx) => (
                <div key={pIdx}>
                  <div className="font-bold text-slate-900 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-black text-slate-950">{proj.title}</span>
                  </div>
                  <div className="text-[11px] text-slate-600 font-mono italic mb-1">
                    Technologies: {proj.technologies.join(', ')}
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    • {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-2">
              Education
            </h3>
            <div className="space-y-2 text-xs">
              {EDUCATION.map((edu, eIdx) => (
                <div key={eIdx} className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900">{edu.institution}</span> — <span>{edu.degree}</span>
                  </div>
                  <span className="text-slate-600 font-mono text-[11px]">{edu.period} | {edu.location}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
