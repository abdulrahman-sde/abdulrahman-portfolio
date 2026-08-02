import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectGrid } from "@/components/core/projects/ProjectGrid";
import { projects } from "@/constants/projects";

export function FeaturedProjectsSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-16">
      <div className="animate-fade-in " style={{ animationDelay: "0ms" }}>
        <SectionHeader label="Work" title="Featured Projects" />
      </div>
      <ProjectGrid projects={featured} />
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
