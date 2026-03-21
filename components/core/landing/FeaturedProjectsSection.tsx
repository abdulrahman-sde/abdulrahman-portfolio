import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectCard } from "@/components/core/projects/ProjectCard";
import { projects } from "@/constants/projects";

export function FeaturedProjectsSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-16">
      <div className="animate-fade-in " style={{ animationDelay: "0ms" }}>
        <SectionHeader label="Work" title="Featured Projects" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((project, i) => (
          <div
            key={project.slug}
            className="animate-fade-in "
            style={{ animationDelay: `${80 + i * 80}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <div
        className="animate-fade-in  mt-8 text-center"
        style={{ animationDelay: "400ms" }}
      >
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
        >
          View all projects
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
