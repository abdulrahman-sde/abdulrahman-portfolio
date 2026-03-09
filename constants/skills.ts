export const skillCategories = {
  "AI & LLM": [
    "LangChain",
    "LangGraph",
    "Vercel AI SDK",
    "OpenAI API",
    "Gemini API",
    "RAG Pipelines",
    "Prompt Engineering",
  ],
  Frontend: [
    "React",
    "Next.js",
    "React Native",
    "Redux Toolkit",
    "RTK Query",
    "Tailwind CSS",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Prisma ORM",
    "REST APIs",
    "WebSockets",
    "Firebase",
  ],
  "Databases & Infra": [
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Supabase",
    "Vercel",
    "Cloudinary",
  ],
  Languages: ["JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
  Tools: ["Git", "GitHub", "JWT", "Zod", "Drizzle ORM", "Inngest", "Expo"],
} as const;

export const skills = Object.values(skillCategories).flat();
