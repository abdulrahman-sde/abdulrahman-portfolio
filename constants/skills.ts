export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Prisma",
  "Redis",
  "Docker",
  "AWS",
  "Git",
  "Figma",
] as const;

export const skillCategories = {
  Frontend: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "PostgreSQL", "Prisma", "Redis"],
  DevOps: ["Docker", "AWS", "Git"],
  Design: ["Figma"],
} as const;
