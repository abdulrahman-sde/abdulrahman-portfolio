export const skillCategories = {
  "AI & LLM": ["LangChain", "LangGraph"],
  Frontend: ["React", "Next.js", "React Native", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "Prisma ORM", "FastAPI", "Firebase"],
  "Databases & Infra": ["MongoDB", "PostgreSQL", "Redis", "Supabase", "Vercel"],
  Languages: ["JavaScript", "TypeScript", "Python"],
  Tools: ["Git", "GitHub"],
} as const;

export const skills = Object.values(skillCategories).flat();
