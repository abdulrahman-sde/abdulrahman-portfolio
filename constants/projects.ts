import type { Project } from "@/types/project";
import healthpalImg from "@/public/assets/images/healthpal.png";
import chatappImg from "@/public/assets/images/chatapp.png";
import dealportImg from "@/public/assets/images/dealport.png";
import foodmanImg from "@/public/assets/images/foodman.png";
import logoaiImg from "@/public/assets/images/logo-ai.png";
import meditrackImg from "@/public/assets/images/meditrack.png";
import storeitImg from "@/public/assets/images/store-it.png";
import talkwithpdfImg from "@/public/assets/images/talkwithpdf.png";
import unrollaiImg from "@/public/assets/images/unroll-ai.png";
import astraBotImg from "@/public/assets/images/astrabot.png";
import midnightFusionImg from "@/public/assets/images/midnightFusion.jpeg";
import suxnixImg from "@/public/assets/images/suxnix.png";
import kairouiImg from "@/public/assets/images/kairoui.png";
export const projects: Project[] = [
  {
    slug: "dealport",
    title: "DealPort",
    description:
      "A full-stack e-commerce admin dashboard with advanced analytics. It features  visitor session tracking via Upstash Redis, GPT-4o powered content generation with streaming responses, and a nightly cron pipeline that snapshots sales, conversion funnels, and device analytics into daily metric records for high-performance reporting.",
    image: dealportImg,
    liveUrl: "https://dealport-frontened-powy.vercel.app/",
    githubUrl:
      "https://github.com/abdulrahman-sde/Dealport-Ecommerce-Admin-Dashboard-.git",
    technologies: [
      { name: "React", icon: "/assets/icons/react.svg" },
      { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
      { name: "Node.js", icon: "/assets/icons/nodejs.svg" },
      { name: "Prisma", icon: "/assets/icons/prisma.svg" },
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
    slug: "healthpal",
    title: "HealthPal",
    description:
      "A cross-platform React Native mobile app for doctor appointments with distinct doctor/patient role flows: booking, acceptance, rescheduling, and cancellation. Features Supabase for serverless auth & database, Redux Toolkit for global state, and Expo push notifications.",
    image: healthpalImg,

    githubUrl: "https://github.com/abdulrahman-sde/bootcamp-healthpal-prod.git",
    technologies: [
      { name: "React Native", icon: "/assets/icons/expo.svg" },
      { name: "Supabase", icon: "/assets/icons/supabase.svg" },
      { name: "Redux Toolkit", icon: "/assets/icons/redux.svg" },
      { name: "Expo", icon: "/assets/icons/expo.svg" },
      { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
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
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description:
      "An intelligent Resume Analyzer Agent that evaluates candidate resumes and provides structured hiring recommendations with a real-time voice agent. Features resume parsing, scoring logic, explainable decisions, a chatbot for queries, and a live voice agent powered by LiveKit, Deepgram, OpenAI, and ElevenLabs.",
    image: unrollaiImg,
    liveUrl: "https://unroll-ai-resume-analyzer.vercel.app/",
    githubUrl: "https://github.com/abdulrahman-sde/Resume-analyzer-prod.git",
    technologies: [
      { name: "LangGraph", icon: "/assets/icons/langgraph.svg" },
      { name: "FastAPI", icon: "/assets/icons/fastapi.svg" },
      { name: "Next.js", icon: "/assets/icons/nextjs2.svg" },
      { name: "LiveKit", icon: "/assets/icons/livekit.svg" },
      { name: "OpenAI", icon: "/assets/icons/openai.svg" },
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
    slug: "kairoui",
    title: "Kairo UI",
    description:
      "A growing collection of free, modern landing page templates built for developers. Copy, customize, and ship without sign-ups or paywalls.",
    image: kairouiImg,
    liveUrl: "https://kairoui.online/",
    githubUrl: "https://github.com/abdulrahman-sde/ui-abdulrahman-dev.git",
    technologies: [
      { name: "Next.js", icon: "/assets/icons/nextjs2.svg" },
      { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
      { name: "React", icon: "/assets/icons/react.svg" },
      { name: "Tailwind CSS", icon: "/assets/icons/tailwindcss.svg" },
      { name: "Shadcn UI", icon: "/assets/icons/shadcn-ui.svg" },
    ],
    features: [
      "Free landing page templates ready to copy and paste",
      "Built with Next.js 15, React 19, and Tailwind CSS",
      "Fully responsive and customizable layouts",
      "No sign-ups, no paywalls — developer-first approach",
    ],
    featured: true,
  },

  {
    slug: "chat-with-pdfs",
    title: "Talk with PDFs",
    description:
      "An AI document assistant with a custom RAG pipeline built from scratch — no LangChain — using Vercel AI SDK and pgvector. Streams AI responses directly into a chat UI with per-locument conversation state. Inngest background jobs automate PDF parsing and embedding generation.",
    image: talkwithpdfImg,
    liveUrl: "https://talkwithpdfs.vercel.app/",
    githubUrl: "https://github.com/abdulrahman-sde/talkwithpdfs.git",
    technologies: [
      { name: "Next.js 15", icon: "/assets/icons/nextjs2.svg" },
      { name: "Postgres", icon: "/assets/icons/postgres.png" },
      { name: "OpenAI", icon: "/assets/icons/openai.svg" },
      { name: "Vercel AI SDK", icon: "/assets/icons/ai-sdk.png" },
      { name: "Inngest", icon: "/assets/icons/inngest.png" },
    ],
    features: [
      "Custom RAG pipeline with pgvector — no LangChain",
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
    description:
      "An AI-powered logo generation platform with an end-to-end prompt-to-UI pipeline. User intent is enhanced through a prompt layer, sent to Gemini API + Pollinations AI, and rendered as a downloadable logo directly in the interface.",
    image: logoaiImg,

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
    description:
      "A Google Drive–inspired file management platform powered by Next.js 15. Features automatic categorization, smart dashboard with upload limits and usage statistics, efficient search, and seamless file uploads.",
    image: storeitImg,
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
  {
    slug: "suxnix-power-supplements",
    title: "Suxnix  ",
    description:
      "A modern, SEO-optimized nutrition and supplements website built with Next.js, TypeScript, Tailwind CSS, and Prismic CMS. Everything loads dynamically from Prismic CMS — including products, blogs, and all landing sections — using SSR/SSG for fast performance and strong SEO.",
    image: suxnixImg,
    liveUrl: "https://bootcamp-suxnix-new.vercel.app/",
    githubUrl: "https://github.com/abdulrahman-sde/bootcamp-suxnix-new.git",
    technologies: [
      { name: "Next.js", icon: "/assets/icons/react.svg" },
      { name: "TypeScript", icon: "/assets/icons/react.svg" },
      { name: "Tailwind CSS", icon: "/assets/icons/react.svg" },
      { name: "Prismic CMS", icon: "/assets/icons/react.svg" },
      { name: "SSR/SSG", icon: "/assets/icons/react.svg" },
    ],
    features: [
      "All content loads from Prismic CMS (products, blogs, and all sections)",
      "Landing page content (hero, featured products, offers) managed in Prismic CMS",
      "Features, ingredients, and benefits fetched dynamically from Prismic CMS",
      "Shop catalog and product detail content sourced from Prismic CMS",
      "Blog content and dynamic pages powered by Prismic CMS with SSR/SSG",
    ],
  },
  {
    slug: "astrabot",
    title: "AstraBot",
    description:
      "An advanced AI-powered chatbot built with Next.js 15 that delivers intelligent, context-aware responses. Maintains full conversation context, stores chat history in MongoDB, and uses Clerk for secure authentication.",
    image: astraBotImg,
    githubUrlFrontend: "https://astra-chatbot-peach.vercel.app/",
    githubUrl: "https://github.com/abdulrehman-codecrafter/astra-chatbot.git",
    technologies: [
      { name: "Next.js 15", icon: "/assets/icons/nextjs2.svg" },
      { name: "Gemini API", icon: "/assets/icons/gemini.svg" },
      { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
      { name: "Clerk", icon: "/assets/icons/clerk.webp" },
      { name: "Tailwind CSS", icon: "/assets/icons/tailwindcss.svg" },
    ],
    features: [
      "AI chatbot with Gemini API integration",
      "Maintains full conversation context",
      "User authentication with Clerk",
      "Chat history stored in MongoDB",
      "Seamless and responsive UI",
    ],
  },

  // ── Medium Complexity Applications ───────────────────────────
  {
    slug: "chatapp",
    title: "ChatApp",
    description:
      "A real-time mobile chat application built with React Native. Features friend requests, instant messaging via WebSockets, and persistent chat history stored in MongoDB.",
    image: chatappImg,
    githubUrl:
      "https://github.com/abdulrehman-codecrafter/chatapp-backened.git",
    githubUrlFrontend:
      "https://github.com/abdulrehman-codecrafter/ChatApp-Frontened.git",
    technologies: [
      { name: "React Native", icon: "/assets/icons/expo.svg" },
      { name: "WebSockets", icon: "/assets/icons/sockets.svg" },
      { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
      { name: "Node.js", icon: "/assets/icons/nodejs.svg" },
      { name: "JavaScript", icon: "/assets/icons/js.svg" },
    ],
    features: [
      "Send and manage friend requests",
      "Real-time messaging via WebSockets",
      "Persistent chat history",
      "Online status indicators",
    ],
    isApp: true,
  },
  {
    slug: "foodman",
    title: "Foodman",
    description:
      "A streamlined food ordering application for a local restaurant with an admin dashboard, order history, real-time order status tracking, and a responsive design that adapts across all devices.",
    image: foodmanImg,

    liveUrl: "https://hackathon-1e232.web.app/",
    githubUrl:
      "https://github.com/abdulrehman-codecrafter/Saylai-Hackathon.git",
    technologies: [
      { name: "React (Vite)", icon: "/assets/icons/vitejs.svg" },
      { name: "Firebase", icon: "/assets/icons/firebase.svg" },
      { name: "Vanilla CSS", icon: "/assets/icons/css3.svg" },
      { name: "JavaScript", icon: "/assets/icons/js.svg" },
    ],
    features: [
      "User-friendly food ordering interface",
      "Admin dashboard for restaurant management",
      "Order history and real-time status tracking",
      "Responsive design for mobile and desktop",
    ],
  },
  {
    slug: "meditrack",
    title: "Meditrack",
    description:
      "A comprehensive medical store billing web app for pharmacies. Features sales analytics, inventory management, automated invoice generation, and a responsive interface built with Next.js and Firebase.",
    image: meditrackImg,

    liveUrl: "https://store-billing.web.app/",
    githubUrl: "https://github.com/abdulrehman-codecrafter/medical-store.git",
    technologies: [
      { name: "Next.js", icon: "/assets/icons/nextjs2.svg" },
      { name: "Firebase", icon: "/assets/icons/firebase.svg" },
      { name: "Tailwind CSS", icon: "/assets/icons/tailwindcss.svg" },
      { name: "JavaScript", icon: "/assets/icons/js.svg" },
    ],
    features: [
      "Streamlined billing interface",
      "Inventory management system",
      "Sales analytics dashboard",
      "Automated invoice generation",
    ],
  },
  {
    slug: "midnight-fusion",
    title: "Midnight Fusion",
    description:
      "A meticulously designed VS Code theme combining deep dark tones with vibrant highlights. Optimized for readability and reduced eye strain with custom syntax highlighting for popular languages.",
    image: midnightFusionImg,
    liveUrl:
      "https://marketplace.visualstudio.com/items?itemName=Abdulrahmansde.midnight-fusion",
    githubUrl: "https://github.com/abdulrehman-codecrafter/Vscode-theme.git",
    technologies: [
      { name: "VS Code", icon: "/assets/icons/vscode.svg" },
      { name: "JSON", icon: "/assets/icons/json.svg" },
      { name: "JavaScript", icon: "/assets/icons/js.svg" },
    ],
    features: [
      "Deep dark background with vibrant highlights",
      "Optimized for readability and reduced eye strain",
      "Custom syntax highlighting for popular languages",
      "Consistent styling across UI components",
    ],
  },
];
