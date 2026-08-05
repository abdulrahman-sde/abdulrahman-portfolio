import type { Project } from "@/types/project";
import healthpalImg from "@/public/assets/images/healthpal.png";
import dealportImg from "@/public/assets/images/dealport.png";
import logoaiImg from "@/public/assets/images/logo-ai.png";
import storeitImg from "@/public/assets/images/store-it.png";
import talkwithpdfImg from "@/public/assets/images/talkwithpdf.png";
import unrollaiImg from "@/public/assets/images/unroll-ai.png";

import kairouiImg from "@/public/assets/images/kairoui.png";
import triggerlyImg from "@/public/assets/images/kairoui.png";
export const projects: Project[] = [
  {
    slug: "triggerly",
    title: "Triggerly",
    subtitle: "Visual Workflow Automation",
    postedDate: "POSTED 2 DAYS AGO",
    badges: ["PROJECT BASED", "REMOTE", "FULL STACK", "NEXT.JS 15"],
    description:
      "A visual workflow automation platform with a drag-and-drop node editor. Connect apps, trigger actions, and automate processes without code, powered by tRPC, Prisma, PostgreSQL, and Inngest background jobs.",
    image: triggerlyImg,
    logo: "/assets/logos/projects/triggerly.svg",
    liveUrl: "https://www.triggerly.online/",
    githubUrl: "https://github.com/abdulrahman-sde/triggerly.git",
    technologies: [
      { name: "Next.js", icon: "/assets/icons/skills/nextjs.png" },
      { name: "Inngest", icon: "/assets/icons/skills/inngest.svg" },
      { name: "tRPC", icon: "/assets/icons/skills/trpc.svg" },
      { name: "Prisma", icon: "/assets/icons/skills/prisma.png" },
      { name: "Postgres", icon: "/assets/icons/skills/postgresql.png" },
      { name: "Tailwind CSS", icon: "/assets/icons/skills/tailwindcss.png" },
    ],
    features: [
      "Drag-and-drop node editor for building workflows visually",
      "tRPC end-to-end typed API with Prisma and PostgreSQL",
      "Inngest background jobs for workflow execution and scheduled triggers",
      "Webhook endpoints (e.g., Google Forms) that fire automations",
      "Better-auth authentication with role-based access",
    ],
    featured: true,
  },
  {
    slug: "kairoui",
    title: "Kairo UI",
    subtitle: "Free Landing Page Templates",
    postedDate: "POSTED 5 DAYS AGO",
    badges: ["OPEN SOURCE", "FREE", "NEXT.JS 15", "TAILWIND"],
    description:
      "A growing collection of free, modern landing page templates built for developers. Copy, customize, and ship without sign-ups or paywalls.",
    image: kairouiImg,
    logo: "/assets/logos/projects/kairoui.svg",
    liveUrl: "https://kairoui.online/",
    githubUrl: "https://github.com/abdulrahman-sde/ui-abdulrahman-dev.git",
    technologies: [
      { name: "Next.js", icon: "/assets/icons/skills/nextjs.png" },
      { name: "TypeScript", icon: "/assets/icons/skills/typescript.png" },
      { name: "React", icon: "/assets/icons/skills/react.png" },
      { name: "Tailwind CSS", icon: "/assets/icons/skills/tailwindcss.png" },
      { name: "Shadcn UI", icon: "/assets/icons/skills/shadcnui.svg" },
    ],
    features: [
      "Free landing page templates ready to copy and paste",
      "Built with Next.js 15, React 19, and Tailwind CSS",
      "Fully responsive and customizable layouts",
      "No sign-ups, no paywalls. Developer-first approach",
    ],
    featured: true,
  },
  {
    slug: "dealport",
    title: "DealPort",
    subtitle: "E-Commerce Admin & Analytics",
    postedDate: "POSTED 1 WEEK AGO",
    badges: ["FULL TIME", "REMOTE", "REDIS", "GPT-4O"],
    description:
      "A full-stack e-commerce admin dashboard with advanced analytics. It features  visitor session tracking via Upstash Redis, GPT-4o powered content generation with streaming responses, and a nightly cron pipeline that snapshots sales, conversion funnels, and device analytics into daily metric records for high-performance reporting.",
    image: dealportImg,
    logo: "/assets/icons/skills/dealport1.svg",
    liveUrl: "https://dealport-frontened-powy.vercel.app/",
    githubUrl:
      "https://github.com/abdulrahman-sde/Dealport-Ecommerce-Admin-Dashboard-.git",
    technologies: [
      { name: "React", icon: "/assets/icons/skills/react.png" },
      { name: "TypeScript", icon: "/assets/icons/skills/typescript.png" },
      { name: "Node.js", icon: "/assets/icons/skills/nodejs.png" },
      { name: "Prisma", icon: "/assets/icons/skills/prisma.png" },
      { name: "Upstash Redis", icon: "/assets/icons/skills/redis.png" },
    ],
    features: [
      "Redis-backed anonymous-to-customer session tracking with device/geo capture",
      "Nightly cron aggregates orders, sessions, and funnel metrics into DailyMetrics snapshots",
      "Redis-cached weekly KPI stats with 1-hour TTL via parallel Promise.all queries",
      "GPT-4o streaming for SEO product descriptions and admin bio refinement",
    ],
    featured: true,
  },

  {
    slug: "ai-resume-analyzer",
    title: "Unroll AI",
    subtitle: "Voice Agent & Evaluation AI",
    postedDate: "POSTED YESTERDAY",
    badges: ["AI AGENT", "REMOTE", "LANGGRAPH", "LIVEKIT"],
    description:
      "An intelligent Resume Analyzer Agent that evaluates candidate resumes and provides structured hiring recommendations with a real-time voice agent. Features resume parsing, scoring logic, explainable decisions, a chatbot for queries, and a live voice agent powered by LiveKit, Deepgram, OpenAI, and ElevenLabs.",
    image: unrollaiImg,
    logo: "/assets/logos/projects/unrollai.svg",
    liveUrl: "https://unroll-ai-resume-analyzer.vercel.app/",
    githubUrl: "https://github.com/abdulrahman-sde/Resume-analyzer-prod.git",
    technologies: [
      { name: "LangGraph", icon: "/assets/icons/skills/langgraph.png" },
      { name: "FastAPI", icon: "/assets/icons/skills/fastapi.png" },
      { name: "Next.js", icon: "/assets/icons/skills/nextjs.png" },
      { name: "LiveKit", icon: "/assets/icons/skills/livekit.svg" },
      { name: "OpenAI", icon: "/assets/icons/skills/openai.svg" },
    ],
    features: [
      "Agentic AI pipeline for structured resume evaluation",
      "Real-time voice agent with LiveKit + Deepgram + ElevenLabs",
      "Chatbot for resume-related queries",
      "Transparent scoring, strengths, and improvement suggestions",
      "FastAPI backend with LangGraph multi-agent orchestration",
    ],
    featured: true,
  },

  {
    slug: "healthpal",
    title: "HealthPal",
    subtitle: "Doctor Appointment Mobile App",
    postedDate: "POSTED 3 WEEKS AGO",
    badges: ["MOBILE APP", "REACT NATIVE", "SUPABASE", "EXPO"],
    description:
      "A cross-platform React Native mobile app for doctor appointments with distinct doctor/patient role flows: booking, acceptance, rescheduling, and cancellation. Features Supabase for serverless auth & database, Redux Toolkit for global state, and Expo push notifications.",
    image: healthpalImg,
    logo: "/assets/icons/skills/healthpal.svg",
    githubUrl: "https://github.com/abdulrahman-sde/bootcamp-healthpal-prod.git",
    technologies: [
      { name: "React Native", icon: "/assets/icons/skills/reactnative.png" },
      { name: "Supabase", icon: "/assets/icons/skills/supabase.png" },
      { name: "Redux Toolkit", icon: "/assets/icons/skills/redux.svg" },
      { name: "Expo", icon: "/assets/icons/skills/expo.svg" },
      { name: "TypeScript", icon: "/assets/icons/skills/typescript.png" },
    ],
    features: [
      "Distinct doctor & patient role-based flows",
      "Booking, acceptance, rescheduling & cancellation",
      "Supabase serverless auth and database",
      "Expo push notifications for appointment updates",
      "Redux Toolkit global state management",
    ],
    isApp: true,
    featured: true,
  },

  {
    slug: "chat-with-pdfs",
    title: "Talk with PDFs",
    subtitle: "Custom RAG Document Assistant",
    postedDate: "POSTED 1 MONTH AGO",
    badges: ["RAG PIPELINE", "REMOTE", "PGVECTOR", "OPENAI"],
    description:
      "An AI document assistant with a custom RAG pipeline built from scratch (no LangChain) using Vercel AI SDK and pgvector. Streams AI responses directly into a chat UI with per-locument conversation state. Inngest background jobs automate PDF parsing and embedding generation.",
    image: talkwithpdfImg,
    logo: "/assets/icons/skills/talkwithpdfs.svg",
    liveUrl: "https://talkwithpdfs.vercel.app/",
    githubUrl: "https://github.com/abdulrahman-sde/talkwithpdfs.git",
    technologies: [
      { name: "Next.js 15", icon: "/assets/icons/skills/nextjs.png" },
      { name: "Postgres", icon: "/assets/icons/skills/postgresql.png" },
      { name: "OpenAI", icon: "/assets/icons/skills/openai.svg" },
      { name: "Vercel AI SDK", icon: "/assets/icons/skills/vercel.png" },
      { name: "Inngest", icon: "/assets/icons/skills/inngest.svg" },
    ],
    features: [
      "Custom RAG pipeline with pgvector (no LangChain)",
      "Streaming AI responses in real-time chat UI",
      "Per-locument conversation state management",
      "Background PDF parsing & embedding generation via Inngest",
      "Contextual answers using OpenAI + Vercel AI SDK",
    ],
  },

  // ── Full-Stack Applications (Medium-High Complexity) ─────────
  {
    slug: "logoai",
    title: "LogoAI",
    subtitle: "AI Prompt-to-Logo Platform",
    postedDate: "POSTED 2 MONTHS AGO",
    badges: ["AI GENERATOR", "NEXT.JS", "GEMINI API", "B2B"],
    description:
      "An AI-powered logo generation platform with an end-to-end prompt-to-UI pipeline. User intent is enhanced through a prompt layer, sent to Gemini API + Pollinations AI, and rendered as a downloadable logo directly in the interface.",
    image: logoaiImg,
    logo: "/assets/icons/skills/logoai.svg",

    liveUrl: "https://logo-generator-tau.vercel.app/",
    githubUrl: "https://github.com/abdulrahman-sde/logo-generator.git",
    technologies: [
      { name: "Next.js", icon: "/assets/icons/nextjs2.svg" },
      { name: "Gemini API", icon: "/assets/icons/gemini.svg" },
      { name: "Pollinations AI", icon: "/assets/images/pollinations.png" },
      { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
      { name: "Cloudinary", icon: "/assets/icons/cloudinary.png" },
    ],
    features: [
      "AI-powered logo generation from text prompts",
      "Prompt enhancement with Gemini API",
      "High-quality designs via Pollinations AI API",
      "Server-side rendering for fast performance",
      "Secure storage and management with MongoDB & Cloudinary",
    ],
  },
  {
    slug: "storeit",
    title: "StoreIt",
    subtitle: "Cloud Storage & File Platform",
    postedDate: "POSTED 2 MONTHS AGO",
    badges: ["CLOUD STORAGE", "NEXT.JS 15", "CLERK", "FULL STACK"],
    description:
      "A Google Drive–inspired file management platform powered by Next.js 15. Features automatic categorization, smart dashboard with upload limits and usage statistics, efficient search, and seamless file uploads.",
    image: storeitImg,
    logo: "/assets/logos/projects/storeit.png",
    liveUrl: "https://store-it-flame.vercel.app/",
    githubUrl: "https://github.com/abdulrehman-codecrafter/storeIt.git",
    technologies: [
      { name: "Next.js 15", icon: "/assets/icons/nextjs2.svg" },
      { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
      { name: "Tailwind CSS", icon: "/assets/icons/tailwindcss.svg" },
      { name: "Cloudinary", icon: "/assets/icons/cloudinary.png" },
      { name: "Clerk", icon: "/assets/icons/clerk.webp" },
    ],
    features: [
      "Automatic file categorization (Documents, Images, Media, Others)",
      "Smart dashboard with upload limits, activity & stats",
      "Efficient search and download functionality",
      "Seamless file uploads with instant organization",
    ],
  },
];
