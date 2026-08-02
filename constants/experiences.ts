import type { Experience } from "@/types/experience";
import techlosetLogo from "@/public/assets/images/techloset-logo.png";
import aivexLogo from "@/public/assets/images/aivex-logo.png";

export const experiences: Experience[] = [
  {
    company: "Techloset",
    companyImage: techlosetLogo,
    role: "Full-Stack & Agentic AI Intern",
    period: "Nov 2025 - Mar 2026",
    description: "Onsite",
    highlights: [
      "Shipped full-stack projects across Next.js, MERN, React Native, and FastAPI stacks over a 4-month internship.",
      "Delivered every project through senior-engineer architecture and deployment review before final sign-off.",
      "Enforced consistent API design and state-management patterns across four different stacks to keep multi-project codebases maintainable.",
      "Collaborated in an Agile workflow with sprint planning, code reviews, and daily standups across the team.",
    ],
    tools: ["Next.js", "React Native", "FastAPI", "LangGraph"],
  },
  {
    company: "Aivex",
    companyImage: aivexLogo,
    role: "Next.js Intern",
    period: "Apr 2025 - Aug 2025",
    description: "Remote",
    highlights: [
      "Shipped user-facing features in a live Next.js production codebase, meeting team code-review standards.",
      "Integrated REST APIs to power core CRUD functionality end-to-end, ensuring reliable data flow across the product.",
      "Migrated a React app to Next.js with SSR, reducing time-to-interactive and removing data-fetching waterfalls.",
      "Worked closely with backend and design teams to ship features aligned with product requirements on schedule.",
    ],
    tools: ["Next.js", "PostgreSQL", "Docker", "Tailwind CSS"],
  },
];
