import type { Experience } from "@/types/experience";
import techlosetLogo from "@/public/assets/images/techloset-logo.png";
import aivexLogo from "@/public/assets/images/aivex-logo.png";

export const experiences: Experience[] = [
  {
    company: "Techloset",
    companyImage: techlosetLogo,
    role: "Full-Stack & Agentic AI Bootcamp",
    period: "Jul 2025 — Nov 2025",
    description:
      "Completed Techloset’s 4-month Full-Stack & Agentic AI Bootcamp.",
    highlights: [
      "Delivered production-ready projects across web, mobile, and AI-focused tracks during the bootcamp.",
      "Built stronger full-stack execution across Next.js, MERN, React Native, and FastAPI by shipping complete product workflows end to end.",
      "Developed practical engineering judgment in architecture decisions, API integration, state management, and production deployment.",
    ],
  },
  {
    company: "Aivex",
    companyImage: aivexLogo,
    role: "Next.js Intern",
    period: "Apr 2025 — Jun 2025",
    description:
      "Worked on a live Next.js product during my internship at Aivex.",
    highlights: [
      "Implemented and maintained user-facing features in a production Next.js codebase.",
      "Integrated REST APIs and shipped stable CRUD flows used in core product screens.",
      "Fixed UI bottlenecks and improved responsiveness across key user journeys.",
    ],
  },
];
