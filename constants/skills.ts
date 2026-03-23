export const skillCategories = {
  "AI & LLM": ["LangChain", "LangGraph"],
  Frontend: ["React", "Next.js", "React Native", "Tailwind CSS"],
  Backend: [
    "Node.js",
    "Express.js",
    "Prisma ORM",
    "FastAPI",
    "Firebase",
    "Supabase",
  ],
  "Databases & Infra": ["MongoDB", "PostgreSQL", "Redis", "Vercel"],
  Languages: ["JavaScript", "TypeScript", "Python"],
  Tools: ["Git", "GitHub", "Docker"],
} as const;

export const skills = Object.values(skillCategories).flat();
