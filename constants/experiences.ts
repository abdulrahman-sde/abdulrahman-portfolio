import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    company: "Acme Corp",
    role: "Senior Full-Stack Engineer",
    period: "2024 — Present",
    description:
      "Leading frontend architecture for the core product. Built the design system, migrated to Next.js App Router, and reduced bundle size by 40%.",
    current: true,
  },
  {
    company: "Nebula Labs",
    role: "Full-Stack Developer",
    period: "2022 — 2024",
    description:
      "Shipped key features across a React/Node.js SaaS platform. Designed and implemented real-time collaboration features used by 10k+ users.",
  },
  {
    company: "Pixel Studio",
    role: "Frontend Developer",
    period: "2021 — 2022",
    description:
      "Built responsive, accessible interfaces for client projects. Worked closely with designers to translate Figma mockups into production code.",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2019 — 2021",
    description:
      "Designed and developed websites for small businesses. Focused on performance, SEO, and clean code delivery.",
  },
];
