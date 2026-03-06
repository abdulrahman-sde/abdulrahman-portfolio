import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "synapse",
    title: "Synapse",
    description:
      "A real-time collaborative workspace for distributed teams. Built with WebSocket architecture and conflict-free replicated data types.",
    longDescription:
      "Synapse is a real-time collaborative workspace designed for distributed teams who need more than just a shared document editor. It combines the immediacy of live cursors and presence indicators with a robust CRDT-based conflict resolution engine, ensuring that concurrent edits never result in data loss.\n\nThe frontend is built with React and Next.js, using a custom hook-based architecture for real-time state synchronization. The backend runs on Node.js with a WebSocket server handling thousands of concurrent connections, backed by Redis pub/sub for horizontal scaling.\n\nKey technical challenges included implementing operational transformation for rich-text editing, building a custom presence system that scales across multiple server instances, and designing an offline-first architecture that gracefully handles reconnection scenarios.",
    tech: ["React", "Next.js", "Node.js", "Redis", "PostgreSQL", "WebSocket"],
    link: "https://synapse-demo.vercel.app",
    github: "https://github.com/abdulrahman/synapse",
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    featured: true,
    year: "2025",
  },
  {
    slug: "kōdo",
    title: "Kōdo",
    description:
      "A minimal code snippet manager with syntax highlighting, tagging, and instant search. Designed for developers who think in fragments.",
    longDescription:
      "Kōdo (Japanese for 'code') is a deliberately minimal snippet manager built for developers who accumulate useful code fragments across projects and need a fast, keyboard-driven way to store and retrieve them.\n\nUnlike bloated note-taking apps, Kōdo focuses on one thing: making it effortless to save a snippet with context (language, tags, description) and find it again in under two seconds. The search is powered by a custom trigram index that handles fuzzy matching across snippet content, titles, and tags simultaneously.\n\nThe interface is intentionally sparse — a single input field that doubles as search and creation, a list of results with syntax-highlighted previews, and keyboard shortcuts for everything. No folders, no nested hierarchies, just flat tags and fast search.",
    tech: ["TypeScript", "Next.js", "SQLite", "Tailwind CSS"],
    link: "https://kodo-app.vercel.app",
    github: "https://github.com/abdulrahman/kodo",
    featured: true,
    year: "2024",
  },
  {
    slug: "terrace",
    title: "Terrace",
    description:
      "An open-source analytics dashboard with privacy-first tracking. No cookies, no personal data, just aggregate insights.",
    longDescription:
      "Terrace is a privacy-first analytics platform built as an alternative to Google Analytics. It collects only aggregate, anonymized data — page views, referrers, browser/OS breakdowns, and geographic regions — without cookies, fingerprinting, or personal data storage.\n\nThe dashboard is built with Next.js and D3.js for data visualization, offering real-time and historical views of traffic patterns. The ingestion pipeline uses a lightweight Node.js service that processes events through a Redis queue before writing to PostgreSQL.\n\nThe project prioritizes developer experience: a single script tag for integration, a clean REST API for custom queries, and a self-hostable Docker setup that takes under five minutes to deploy.",
    tech: ["Next.js", "D3.js", "Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com/abdulrahman/terrace",
    featured: true,
    year: "2024",
  },
  {
    slug: "dotfig",
    title: "Dotfig",
    description:
      "A CLI tool for managing and syncing dotfiles across machines. Version-controlled, encrypted secrets, zero dependencies.",
    longDescription:
      "Dotfig is a command-line tool for developers who maintain configurations across multiple machines. It wraps Git for version control, adds GPG-based encryption for sensitive files (SSH keys, API tokens), and provides a simple declarative config for specifying which files to track.\n\nThe tool is written in pure Node.js with zero external dependencies — it shells out to Git and GPG directly. The sync process is idempotent: running it on a fresh machine bootstraps your entire development environment, while running it on an existing setup only applies diffs.\n\nDesign philosophy: dotfiles management shouldn't require learning a new system. Dotfig stays close to Git conventions and gets out of your way.",
    tech: ["Node.js", "TypeScript", "CLI"],
    github: "https://github.com/abdulrahman/dotfig",
    featured: false,
    year: "2023",
  },
];
