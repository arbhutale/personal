# B. Anil Kumar — Senior Full Stack & Generative AI Engineer Portfolio

A state-of-the-art, responsive personal portfolio website optimized for Desktop, iPad/Tablets, and Mobile screens. Built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **Lucide Icons**.

---

## ✨ Key Highlights & Features

1. **Hero Section with Dynamic Roles**: Highlighting 8+ years of enterprise experience, Multi-Agent RAG architecture, FastAPI, Python, React, and AWS cloud native platforms.
2. **Interactive AI Agent & RAG Simulator**: Live interactive playground that simulates LangGraph multi-agent traversal, vector embedding lookup (FAISS / ChromaDB), and context-grounded answer synthesis.
3. **Professional Work Experience**: Interactive career timeline featuring Lloyds Technology Centre, Infosys, Truelancer, and Qualcomm India with measurable production impacts and tech stacks.
4. **Key Projects Showcase**: Deep-dive architecture cards for *Enterprise AI Knowledge Assistant*, *AI Release Impact Analysis Platform*, and *Enterprise Release Automation Platform*.
5. **Interactive GenAI & Microservices Architecture Blueprint**: Interactive 5-tier architecture visualizer with real-time end-to-end simulation flow.
6. **Skills Matrix**: Categorized proficiency meters across Generative AI, Backend & Microservices, Frontend, Cloud/DevOps, and Databases.
7. **Education & One-Click Contact Hub**: One-click email & phone copying, direct LinkedIn and GitHub links, interactive contact message form, and ATS-friendly printable resume modal.
8. **Fully Responsive**: Optimized for iOS Safari, Android Chrome, iPad/Tablets, and Ultrawide 4K monitors.

---

## 🚀 Running with Docker (Recommended)

To run the application using Docker Compose:

```bash
# Navigate to portfolio directory
cd portfolio

# Build and start container
docker compose up --build
```

The application will be accessible at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 💻 Running Locally with Node.js

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build
npm run start
```

---

## 📁 Repository Structure

```
portfolio/
├── app/
│   ├── globals.css           # Glowing cyber utilities, glassmorphism, scrollbars
│   ├── layout.tsx            # SEO metadata, OpenGraph, font imports
│   └── page.tsx              # Main application page
├── components/
│   ├── Navbar.tsx            # Responsive glassmorphism header & mobile drawer
│   ├── HeroSection.tsx       # Bio, quick stats, dynamic roles, quick CTAs
│   ├── AgentPlayground.tsx   # Interactive AI Agent & RAG simulator
│   ├── ExperienceSection.tsx # Lloyds, Infosys, Truelancer, Qualcomm
│   ├── ProjectsSection.tsx   # Enterprise GenAI & Cloud Projects
│   ├── ArchitectureVisualizer.tsx # 5-tier GenAI Architecture blueprint
│   ├── SkillsMatrix.tsx      # Filterable technical skills & progress bars
│   ├── EducationContactSection.tsx # Education, contact channels & form
│   └── ResumeModal.tsx       # Formatted printable ATS resume modal
├── data/
│   └── portfolioData.ts      # Structured profile & resume data
├── Dockerfile                # Multi-stage optimized production build
├── docker-compose.yml        # One-command containerized execution
├── tailwind.config.js        # Cyberpunk & obsidian executive theme
├── next.config.js            # Standalone Docker configuration
└── package.json
```
