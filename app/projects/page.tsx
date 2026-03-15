import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectCard } from "@/components/core/projects/ProjectCard";
import { projects } from "@/constants/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack and AI projects — from agentic pipelines and RAG systems to mobile apps and VS Code themes.",
};

export default function ProjectsPage() {
  // const featured = projects.filter((p) => p.featured);
  // const other = projects.filter((p) => !p.featured);

  return (
    <Container className="py-16">
      <div className="animate" style={{ animationDelay: "0ms" }}>
        <SectionHeader label="Work" title="Projects" />
      </div>
      <p
        className="animate mb-10 max-w-md text-muted-foreground leading-relaxed"
        style={{ animationDelay: "80ms" }}
      >
        A collection of things I&apos;ve built — AI agents, full-stack apps,
        mobile experiences, and developer tools.
      </p>

      <div className="mb-12 animate" style={{ animationDelay: "160ms" }}>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className="animate"
              style={{ animationDelay: `${240 + i * 80}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
