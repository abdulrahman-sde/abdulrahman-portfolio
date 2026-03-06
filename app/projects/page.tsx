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
      <SectionHeader label="Work" title="Projects" />
      <p className="mb-10 max-w-md text-muted-foreground leading-relaxed">
        A collection of things I&apos;ve built — some shipped, some
        experimental, all crafted with care.
      </p>

      {featured.length > 0 && (
        <div className="mb-12">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Featured
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}

      {other.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Other
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {other.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}
