import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectCard } from "@/components/core/projects/ProjectCard";
import { projects } from "@/constants/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built — side projects, tools, and experiments.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <Container className="py-16">
      <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
        <SectionHeader label="Work" title="Projects" />
      </div>
      <p
        className="animate-fade-up mb-10 max-w-md text-muted-foreground leading-relaxed"
        style={{ animationDelay: "80ms" }}
      >
        A collection of things I&apos;ve built — some shipped, some
        experimental, all crafted with care.
      </p>

      {featured.length > 0 && (
        <div
          className="mb-12 animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Featured
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project, i) => (
              <div
                key={project.slug}
                className="animate-fade-up"
                style={{ animationDelay: `${240 + i * 80}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      )}

      {other.length > 0 && (
        <div className="animate-fade-up" style={{ animationDelay: "240ms" }}>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Other
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {other.map((project, i) => (
              <div
                key={project.slug}
                className="animate-fade-up"
                style={{ animationDelay: `${320 + i * 80}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}
