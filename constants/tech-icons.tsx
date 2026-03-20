import type { ReactNode } from "react";

const iconClassName = "h-3 w-3 shrink-0 text-foreground/80";

const iconPathByKey: Record<string, string> = {
  react: "/assets/icons/skills/react.png",
  "next.js": "/assets/icons/skills/nextjs.png",
  nextjs: "/assets/icons/skills/nextjs.png",
  "next.js 15": "/assets/icons/skills/nextjs.png",
  "nextjs 15": "/assets/icons/skills/nextjs.png",
  "react native": "/assets/icons/skills/reactnative.png",
  tailwind: "/assets/icons/skills/tailwindcss.png",
  "tailwind css": "/assets/icons/skills/tailwindcss.png",
  node: "/assets/icons/skills/nodejs.png",
  "node.js": "/assets/icons/skills/nodejs.png",
  express: "/assets/icons/skills/express.png",
  "express.js": "/assets/icons/skills/express.png",
  prisma: "/assets/icons/skills/prisma.png",
  "prisma orm": "/assets/icons/skills/prisma.png",
  fastapi: "/assets/icons/skills/fastapi.png",
  langchain: "/assets/icons/skills/langchain.png",
  langgraph: "/assets/icons/skills/langgraph.png",
  firebase: "/assets/icons/skills/firebase.png",
  postgresql: "/assets/icons/skills/postgresql.png",
  postgres: "/assets/icons/skills/postgresql.png",
  mongodb: "/assets/icons/skills/mongodb.png",
  redis: "/assets/icons/skills/redis.png",
  supabase: "/assets/icons/skills/supabase.png",
  vercel: "/assets/icons/skills/vercel.png",
  javascript: "/assets/icons/skills/javascript.png",
  typescript: "/assets/icons/skills/typescript.png",
  python: "/assets/icons/skills/python.png",
  github: "/assets/icons/skills/github.png",
  git: "/assets/icons/skills/git.png",
};

const genericIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={iconClassName}
    aria-hidden="true"
  >
    <path
      d="M8 8L4 12l4 4M16 8l4 4-4 4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10.5 19l3-14" strokeLinecap="round" />
  </svg>
);

export function getTechSvgIcon(name: string): string | ReactNode {
  const key = name.toLowerCase();

  for (const [match, iconPath] of Object.entries(iconPathByKey)) {
    if (key.includes(match)) {
      return iconPath;
    }
  }

  if (key.includes("react")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={iconClassName}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="8.5" ry="3.8" />
        <ellipse
          cx="12"
          cy="12"
          rx="8.5"
          ry="3.8"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="8.5"
          ry="3.8"
          transform="rotate(120 12 12)"
        />
      </svg>
    );
  }

  if (key.includes("next")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={iconClassName}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path
          d="M8.5 16V8l7 8V8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (key.includes("typescript")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={iconClassName}
        aria-hidden="true"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M7.5 9h6M10.5 9v6" strokeLinecap="round" />
      </svg>
    );
  }

  if (key.includes("node")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={iconClassName}
        aria-hidden="true"
      >
        <path d="M12 3.5L19 7.5v9L12 20.5 5 16.5v-9z" strokeLinejoin="round" />
        <path
          d="M9.5 14.5V9.3l5 5.2V9.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (key.includes("mongo")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={iconClassName}
        aria-hidden="true"
      >
        <path d="M12 4c2.7 3.1 4.1 5.8 4.1 8.5 0 3.1-1.7 5.7-4.1 7.5-2.4-1.8-4.1-4.4-4.1-7.5C7.9 9.8 9.3 7.1 12 4z" />
        <path d="M12 7v11" strokeLinecap="round" />
      </svg>
    );
  }

  if (key.includes("firebase")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={iconClassName}
        aria-hidden="true"
      >
        <path
          d="M6 17L10.5 5l2.3 5-2 2.8L14.5 6l3.5 10.2L12 20z"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (key.includes("tailwind")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={iconClassName}
        aria-hidden="true"
      >
        <path
          d="M6 10.5c1.2-1.8 2.6-2.6 4.2-2.1 1 .3 1.7 1.1 2.3 1.7 1 .9 1.9 1.8 4.5 1.8"
          strokeLinecap="round"
        />
        <path
          d="M7 15.5c1.2-1.8 2.6-2.6 4.2-2.1 1 .3 1.7 1.1 2.3 1.7 1 .9 1.9 1.8 4.5 1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (
    key.includes("openai") ||
    key.includes("gemini") ||
    key.includes("langgraph") ||
    key.includes("ai sdk")
  ) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={iconClassName}
        aria-hidden="true"
      >
        <path d="M12 4.5l3 1.8v3.4L12 11.5 9 9.7V6.3z" />
        <path d="M15 9.7l3 1.8v3.6L15 16.9 12 15.1v-3.4z" />
        <path d="M9 9.7l3 1.8v3.4l-3 1.8-3-1.8v-3.6z" />
      </svg>
    );
  }

  return genericIcon;
}
