import { SectionHeader } from "@/components/shared/SectionHeader";

export function AboutSection() {
  const baseDelay = 480;

  return (
    <section className="py-16">
      <div
        className="animate-fade-up"
        style={{ animationDelay: `${baseDelay}ms` }}
      >
        <SectionHeader label="About" title="A Bit About Me" />
      </div>
      <div className="max-w-[72ch] space-y-2 text-sm leading-[1.8] text-muted-foreground">
        <p
          className="animate-fade-up"
          style={{ animationDelay: `${baseDelay + 80}ms` }}
        >
          I&apos;m a full-stack developer and AI enthusiast currently pursuing
          my BS in Computer Science at GCU Faisalabad with a 3.84 CGPA. I
          specialize in building intelligent, production-grade web applications
          using Next.js, React, and Node.js.
        </p>
        <p
          className="animate-fade-up"
          style={{ animationDelay: `${baseDelay + 160}ms` }}
        >
          My recent focus has been on Agentic AI — designing multi-agent
          pipelines with LangChain and LangGraph, building custom RAG systems,
          and integrating LLMs into production interfaces. I&apos;ve shipped AI
          features like GPT-4o–powered product description generation and
          real-time voice agents with LiveKit.
        </p>
        <p
          className="animate-fade-up"
          style={{ animationDelay: `${baseDelay + 240}ms` }}
        >
          Beyond AI, I have hands-on experience across the full stack — from
          React Native mobile apps with Supabase and Expo push notifications, to
          Express backends with Redis session management, JWT rotation, and
          Prisma ORM. I care deeply about clean architecture, developer
          experience, and shipping code that works.
        </p>
        <p
          className="animate-fade-up"
          style={{ animationDelay: `${baseDelay + 320}ms` }}
        >
          When I&apos;m not coding, you&apos;ll find me exploring new AI
          research, contributing to open-source, or refining my{" "}
          <a
            href="https://marketplace.visualstudio.com/items?itemName=Abdulrahmansde.midnight-fusion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-border underline-offset-[3px] transition-colors duration-150 hover:decoration-foreground"
          >
            Midnight Fusion
          </a>{" "}
          VS Code theme.
        </p>
      </div>
    </section>
  );
}
