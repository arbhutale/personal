import type { Metadata } from 'next';
import './globals.css';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
  description: `${PERSONAL_INFO.name} - Senior Full Stack & Generative AI Engineer with 8+ years experience in LangChain, LangGraph, RAG, Python, FastAPI, React, and AWS cloud solutions.`,
  keywords: [
    'B. Anil Kumar',
    'Generative AI Engineer',
    'Full Stack Engineer',
    'LangChain',
    'LangGraph',
    'RAG Architect',
    'FastAPI',
    'React Developer',
    'AWS Cloud Architect',
    'Vector Databases',
    'Hyderabad Software Engineer'
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.linkedin }],
  openGraph: {
    title: `${PERSONAL_INFO.name} — Senior Full Stack & Generative AI Engineer`,
    description: 'Explore the portfolio of B. Anil Kumar: 8+ Years building Enterprise AI Systems, Multi-Agent RAG Architectures, and Scalable Cloud Microservices.',
    type: 'website',
    locale: 'en_US',
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
    description: 'Enterprise AI & Full Stack Engineer with 8+ years experience.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
      </head>
      <body className="bg-slate-50 dark:bg-dark-950 text-slate-900 dark:text-slate-100 min-h-screen selection:bg-brand-cyan/30 selection:text-brand-cyan transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
