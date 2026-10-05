export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  techStack: string[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  architectureDetails: string[];
  technologies: string[];
  metrics: string;
  badge: string;
  accentColor: string;
  flowSteps: { step: string; detail: string }[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: number; featured?: boolean }[];
}

export interface EvalMetric {
  name: string;
  score: string;
  benchmark: string;
  category: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Bhutale Anil Kumar",
  title: "Lead / Senior Full Stack & Generative AI Engineer",
  experienceYears: "9+",
  location: "Hyderabad, India",
  phone: "+91 8500004216",
  email: "anil-kumar.bhutale@outlook.com",
  linkedin: "https://www.linkedin.com/in/arbhutale/",
  github: "https://github.com/arbhutale",
  website: "https://ar.bhutale.in",
  tagline: "Architecting Enterprise AI Agents, RAG Evaluation Pipelines & Multi-Cloud Solutions (AWS / Google Cloud)",
  bio: "Lead / Senior Full Stack & Generative AI Engineer with 9+ years of expertise building enterprise-scale platforms, AI-powered systems, and multi-cloud solutions using Python, FastAPI, React.js, Node.js, Google Cloud (Vertex AI, Gemini, Cloud Run), AWS, and Docker. Proven specialist in orchestrating multi-agent RAG pipelines, LangGraph workflows, AI agent evaluation (Ragas, TruLens, LangSmith), vector retrieval benchmarks, and automated CI/CD DevOps architectures.",
};

export const EVAL_METRICS: EvalMetric[] = [
  {
    name: "RAG Faithfulness & Grounding",
    score: "98.4%",
    benchmark: "Ragas / TruLens Eval",
    category: "Hallucination Defense",
    description: "Evaluates whether claims made in generated answers are strictly grounded in retrieved context chunks without factual drift."
  },
  {
    name: "Answer Relevance Score",
    score: "96.8%",
    benchmark: "DeepEval / LLM Judge",
    category: "Synthesizer Quality",
    description: "Quantifies the contextual relevance of generated output with respect to original user queries across 2,000+ benchmark tests."
  },
  {
    name: "Context Precision & Recall",
    score: "97.2%",
    benchmark: "Hit Rate @ 5 / MRR",
    category: "Hybrid Vector Search",
    description: "Evaluates ChromaDB, FAISS, and Vertex AI Vector Search retrieval accuracy combining dense semantic and sparse BM25 scoring."
  },
  {
    name: "Multi-Agent Trajectory Accuracy",
    score: "99.1%",
    benchmark: "LangSmith / AgentBench",
    category: "Supervisor Execution",
    description: "Measures deterministic state transitions, tool execution success rates, and autonomous fallback routing under complex multi-agent DAGs."
  },
  {
    name: "Vertex AI & Gemini Latency SLA",
    score: "185ms",
    benchmark: "Google Cloud Benchmarks",
    category: "Inference Performance",
    description: "Sub-200ms end-to-end token streaming latency orchestrated via FastAPI on Google Cloud Run and AWS ECS."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Lloyds Technology Centre",
    role: "Senior Software Engineer",
    period: "Jan 2026 – Present",
    location: "Hyderabad, India",
    type: "Full-time",
    color: "from-emerald-500 to-teal-600",
    highlights: [
      "Design and engineer scalable enterprise applications utilizing React, Python, FastAPI, Google Cloud (Vertex AI), and AWS cloud infrastructure.",
      "Build production-grade Generative AI solutions, AI Agents, and multi-agent workflows leveraging LangChain, LangGraph, and Gemini 1.5 Pro.",
      "Implement comprehensive AI Agent Evaluation suites using Ragas, TruLens, and LangSmith for automated RAG faithfulness and tool trajectory testing.",
      "Implement high-performance semantic search and knowledge retrieval engines using vector databases (FAISS, ChromaDB, Vertex AI Vector Search).",
      "Automate enterprise CI/CD pipelines with Docker, GitHub Actions, Google Cloud Run, and resilient AWS microservices deployment."
    ],
    techStack: ["Python", "FastAPI", "React", "LangChain", "LangGraph", "Google Cloud (Vertex AI, Gemini)", "Ragas Eval", "Vector DBs", "AWS", "Docker", "GitHub Actions"]
  },
  {
    company: "Infosys",
    role: "Senior Consultant",
    period: "Nov 2023 – Jan 2026",
    location: "Hyderabad, India",
    type: "Full-time",
    color: "from-blue-500 to-indigo-600",
    highlights: [
      "Led full-stack architecture and engineering for mission-critical enterprise applications using React.js, Node.js, and FastAPI.",
      "Built AI-powered enterprise knowledge assistants and search solutions leveraging OpenAI, Azure OpenAI, Google Cloud, LangChain, and RAG pipelines.",
      "Engineered automated RAG evaluation frameworks with metric tracking for context precision, answer relevance, and red-teaming guardrails.",
      "Designed fault-tolerant microservices and cloud-native serverless architectures deployed on AWS and Google Cloud.",
      "Reduced deployment turnaround times substantially through automated containerization and CI/CD pipelines.",
      "Mentored junior engineers and spearheaded cross-functional technical design and architecture reviews."
    ],
    techStack: ["React.js", "Node.js", "FastAPI", "Azure OpenAI", "Google Cloud", "LangChain", "RAG & Eval", "AWS Lambda", "PostgreSQL", "Docker"]
  },
  {
    company: "Truelancer",
    role: "Consultant",
    period: "Jul 2022 – Nov 2023",
    location: "Remote",
    type: "Contract",
    color: "from-purple-500 to-pink-600",
    highlights: [
      "Delivered end-to-end full stack web platforms using React.js, Node.js, Express.js, Python, FastAPI, and MongoDB.",
      "Developed AI-powered document processing, automated content generation, and RAG workflows for enterprise contextual search.",
      "Containerized microservices applications using Docker and deployed highly available solutions on AWS and Google Cloud."
    ],
    techStack: ["React.js", "Node.js", "FastAPI", "MongoDB", "RAG", "Docker", "AWS", "Google Cloud"]
  },
  {
    company: "Qualcomm India",
    role: "Programmer Analyst",
    period: "Oct 2018 – Jul 2022",
    location: "Hyderabad, India",
    type: "Full-time",
    color: "from-amber-500 to-orange-600",
    highlights: [
      "Developed high-throughput enterprise applications, backend microservices, and engineering analytics dashboards using React.js and Django.",
      "Integrated Jenkins and Bamboo CI/CD pipelines for automated Docker-based build verification and multi-environment deployments.",
      "Optimized query performance and REST API throughput for internal engineering metrics and tooling."
    ],
    techStack: ["React.js", "Django", "Python", "REST APIs", "Jenkins", "Bamboo", "Docker"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "enterprise-rag-eval-assistant",
    title: "Enterprise AI Knowledge Assistant & Evaluation Suite",
    category: "Generative AI, Agentic RAG & Eval",
    description: "Enterprise multi-agent RAG platform featuring automated multi-format document ingestion (PDF, DOCX, Excel), hybrid semantic retrieval, and a continuous automated evaluation pipeline tracking faithfulness, context precision, and hallucination scores.",
    architectureDetails: [
      "Multi-Agent RAG pipeline orchestrated via LangChain & LangGraph with autonomous query rewriting and routing.",
      "Continuous automated RAG evaluation test bench utilizing Ragas, TruLens, and DeepEval measuring context recall and answer relevance.",
      "Multi-Cloud foundation supporting Google Cloud Vertex AI (Gemini 1.5 Pro), Azure OpenAI, and local FAISS/ChromaDB vector indices.",
      "Containerized microservices backend on FastAPI, deployed on scalable Google Cloud Run and AWS ECS."
    ],
    technologies: ["Python", "FastAPI", "LangChain", "LangGraph", "Google Cloud (Vertex AI, Gemini)", "Ragas", "TruLens", "ChromaDB", "FAISS", "React", "AWS", "Docker"],
    metrics: "98.4% Ragas Faithfulness Score with sub-second retrieval across 50,000+ enterprise docs",
    badge: "Flagship GenAI & Eval",
    accentColor: "#6366f1",
    flowSteps: [
      { step: "1. Multi-Format Ingestion", detail: "PDF / DOCX / Excel parsing & metadata extraction" },
      { step: "2. Hybrid Embedding & Indexing", detail: "Vertex AI & OpenAI embeddings + ChromaDB/FAISS vector stores" },
      { step: "3. LangGraph Agent Supervisor", detail: "Supervisor agent decomposes query and delegates to specialized tools" },
      { step: "4. Automated Eval & Guardrails", detail: "Ragas / DeepEval validation for faithfulness and red-teaming checks" },
      { step: "5. Streamed Grounded Response", detail: "Context-grounded citations streamed to React UI" }
    ]
  },
  {
    id: "ai-release-impact-platform",
    title: "AI Release Impact Analysis & Agent Testing Platform",
    category: "AI Agent Workflows & Eval Testing",
    description: "Autonomous multi-agent platform that analyzes RFCs, release notes, code diffs, and change requests to perform automated impact analysis, risk assessment, and dependency graph mapping with LangSmith regression testing.",
    architectureDetails: [
      "Stateful multi-agent system built using LangGraph with supervisor-worker feedback loops and deterministic evaluation suites.",
      "Automated risk scoring model evaluating commit histories, service dependencies, and rollback complexities.",
      "Multi-agent tool trajectory evaluation suite checking fallback paths, step limits, and token economy.",
      "Real-time caching layer using Redis and MongoDB document store for historical release regression tracking."
    ],
    technologies: ["LangChain", "LangGraph", "FastAPI", "Google Cloud Vertex AI", "OpenAI", "LangSmith", "Redis", "MongoDB", "AWS", "React"],
    metrics: "Reduced RFC impact analysis cycle from 4 days to under 15 minutes with 99.1% trajectory accuracy",
    badge: "Agent Testing & Workflows",
    accentColor: "#a855f7",
    flowSteps: [
      { step: "1. RFC / Diff Ingestion", detail: "Ingests PRs, release notes, and microservice dependencies" },
      { step: "2. Dependency Mapping", detail: "Builds service graph & highlights blast radius" },
      { step: "3. Risk Assessment Agent", detail: "Evaluates failure probability & rollback complexity" },
      { step: "4. LangSmith Eval Verification", detail: "Regression testing against historic change database" },
      { step: "5. Report Generation", detail: "Generates actionable executive summary & risk matrix" }
    ]
  },
  {
    id: "release-automation-platform",
    title: "Enterprise Multi-Cloud Release Automation Platform",
    category: "Google Cloud, AWS & DevOps Engineering",
    description: "Microservices-based release orchestration engine featuring multi-tier approval workflows, automated deployment monitoring, health check verifications, and multi-cloud container rollouts.",
    architectureDetails: [
      "Event-driven microservices architecture powered by FastAPI and asynchronous worker queues with Redis.",
      "Multi-pipeline orchestrator integrating Jenkins, Bamboo, and GitHub Actions across Google Cloud Run and AWS.",
      "Automated post-deployment verification synthetic checks and zero-downtime blue/green rollouts.",
      "Comprehensive compliance audit tracking guaranteeing SOX and enterprise security standards."
    ],
    technologies: ["Python", "FastAPI", "Google Cloud (Cloud Run, GKE)", "AWS", "Jenkins", "Bamboo", "GitHub Actions", "Docker", "Redis", "PostgreSQL"],
    metrics: "Processed 500+ monthly production releases with 99.9% automated success rate",
    badge: "Multi-Cloud DevOps",
    accentColor: "#10b981",
    flowSteps: [
      { step: "1. Trigger & Validation", detail: "Webhook triggers CI/CD verification & security scan" },
      { step: "2. Dynamic Approvals", detail: "Multi-tier role-based approval engine" },
      { step: "3. Orchestrated Deployment", detail: "Docker container blue/green switch on Cloud Run / AWS" },
      { step: "4. Live Health Canary", detail: "Synthetic transaction monitoring & automatic rollback safeguard" }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Generative AI & Agent Architectures",
    iconName: "BrainCircuit",
    skills: [
      { name: "LangChain & LangGraph", level: 96, featured: true },
      { name: "Multi-Agent Systems & Tool Calling", level: 94, featured: true },
      { name: "Hybrid RAG & Semantic Search", level: 97, featured: true },
      { name: "OpenAI, Azure OpenAI & Gemini APIs", level: 95, featured: true },
      { name: "Vector DBs (FAISS, ChromaDB, Vertex AI Vector)", level: 92, featured: true },
      { name: "Prompt Engineering & Context Caching", level: 94 }
    ]
  },
  {
    category: "AI Agent Testing, Eval & Guardrails",
    iconName: "ShieldCheck",
    skills: [
      { name: "Ragas Framework (Faithfulness, Relevancy)", level: 95, featured: true },
      { name: "TruLens & DeepEval Test Suites", level: 92, featured: true },
      { name: "LangSmith Tracing & Dataset Eval", level: 94, featured: true },
      { name: "LLM-as-a-Judge Evaluation & Benchmarking", level: 92, featured: true },
      { name: "Red-Teaming & Guardrails (NeMo, Llama-Guard)", level: 90, featured: true },
      { name: "Agent Trajectory & Hit Rate @ K Metrics", level: 92 }
    ]
  },
  {
    category: "Google Cloud (GCP) & Cloud Platforms",
    iconName: "Cloud",
    skills: [
      { name: "Google Cloud Vertex AI & Gemini Studio", level: 94, featured: true },
      { name: "Google Cloud Run & GKE (Kubernetes)", level: 90, featured: true },
      { name: "Google Cloud Storage & BigQuery", level: 88, featured: true },
      { name: "AWS (EC2, S3, Lambda, ECS, CloudWatch)", level: 92, featured: true },
      { name: "Docker Containerization & Multi-Stage Builds", level: 95, featured: true },
      { name: "GitHub Actions & CI/CD Pipelines", level: 94 }
    ]
  },
  {
    category: "Backend & Microservices Engineering",
    iconName: "Server",
    skills: [
      { name: "Python (FastAPI, Django, Pydantic)", level: 96, featured: true },
      { name: "Node.js & Express.js", level: 92, featured: true },
      { name: "REST APIs, SSE & WebSockets", level: 95, featured: true },
      { name: "Microservices Architecture & Event Queues", level: 94, featured: true },
      { name: "Design Patterns & Asynchronous Architecture", level: 92 }
    ]
  },
  {
    category: "Frontend, Web & Visualization",
    iconName: "Layout",
    skills: [
      { name: "React.js & Next.js", level: 94, featured: true },
      { name: "TypeScript & JavaScript (ES6+)", level: 92, featured: true },
      { name: "Tailwind CSS & Modern Design Systems", level: 92, featured: true },
      { name: "State Management & Streaming Telemetry", level: 90 },
      { name: "HTML5, CSS3 & Responsive Layouts", level: 95 }
    ]
  },
  {
    category: "Databases, Vector Stores & Caching",
    iconName: "Database",
    skills: [
      { name: "ChromaDB, FAISS & Pinecone", level: 92, featured: true },
      { name: "Redis Caching & Pub/Sub", level: 94, featured: true },
      { name: "MongoDB", level: 90, featured: true },
      { name: "PostgreSQL", level: 88, featured: true },
      { name: "Vector Index Tuning (HNSW, IVFFlat)", level: 88 }
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering (Information Technology)",
    institution: "Vasavi College of Engineering",
    period: "2014 – 2017",
    location: "Hyderabad, India",
    grade: "Distinction / First Class",
    description: "Specialized in Software Engineering, Distributed Systems, Data Structures, and Algorithm Design."
  },
  {
    degree: "Diploma in Computer Science Engineering",
    institution: "Mahaveer Institute of Science and Technology",
    period: "Completed",
    location: "Hyderabad, India",
    grade: "First Class",
    description: "Foundational studies in Computer Systems, Microprocessors, Operating Systems, and Object-Oriented Programming."
  }
];
