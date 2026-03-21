import { SectionHeader } from "@/components/shared/SectionHeader";

export function AboutSection() {
  const baseDelay = 480;

  return (
    <section className="py-8">
      <div
        className="animate-fade-in "
        style={{ animationDelay: `${baseDelay}ms` }}
      >
        <SectionHeader label="About" title="A Bit About Me" />
      </div>
      <div className="max-w-[72ch] space-y-2 text-sm leading-[1.8] text-muted-foreground">
        <p
          className="animate-fade-in "
          style={{ animationDelay: `${baseDelay + 80}ms` }}
        >
          I&apos;m a Computer Science student at GCU Faisalabad with a strong
          interest in full-stack engineering and AI.
        </p>
        <p
          className="animate-fade-in "
          style={{ animationDelay: `${baseDelay + 160}ms` }}
        >
          Through Techloset&apos;s Full-Stack & Agentic AI Bootcamp and a
          hands-on internship at Aivex, I&apos;ve gone from learning the basics
          to shipping real products. I build end-to-end applications with
          Next.js, Node.js, and TypeScript, and work at the frontier of AI
          development with LangChain, LangGraph, and RAG pipelines.
        </p>
        <p
          className="animate-fade-in "
          style={{ animationDelay: `${baseDelay + 240}ms` }}
        >
          I care about the full picture: clean architecture, smooth UX, reliable
          backends, and AI that feels genuinely useful rather than bolted on.
        </p>

        <p
          className="animate-fade-in "
          style={{ animationDelay: `${baseDelay + 320}ms` }}
        >
          If you&apos;re building something worth building or just want to talk
          tech, AI, or ideas, I&apos;d genuinely love to connect.
        </p>
      </div>
    </section>
  );
}
