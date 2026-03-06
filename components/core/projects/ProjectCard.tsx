import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40"
    >
      {project.video && (
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="h-52 w-full object-cover"
        />
      )}

      <div className="flex items-start justify-between gap-4 p-5">
        <div className="min-w-0 flex-1">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <h3 className="font-medium text-foreground transition-colors duration-150 group-hover:text-accent">
              {project.title}
            </h3>
            <p className="shrink-0 text-sm tabular-nums text-muted-foreground">
              {project.year}
            </p>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <Badge key={t} className="text-[11px]">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Arrow — slides in + fades on hover */}
        <div
          aria-hidden="true"
          className="mt-0.5 shrink-0 translate-x-0 text-muted-foreground/70 opacity-70 transition-[transform,opacity,color] duration-200 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-accent"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
