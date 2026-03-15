import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import RaisedButton from "@/components/ui/RaisedBtn";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-[url(/noise.png)] bg-size-[auto_100px] dark:bg-background transition-all duration-300">
      <Link
        href={`/projects/${project.slug}`}
        className="relative  overflow-hidden bg-muted block aspect-3/2"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          placeholder="blur"
          className=" object-cover transition-transform duration-500  group-hover:scale-[1.03] w-full"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {project.isApp && (
          <div className="absolute right-3 top-3">
            <span className="inline-flex items-center rounded-full bg-foreground/80 px-2 py-0.5 text-[10px] font-semibold text-background backdrop-blur-sm">
              Mobile App
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="block flex-1 group/link"
          >
            <h3 className="font-medium text-foreground transition-colors duration-200 group-hover/link:text-accent group-hover/link:underline decoration-accent/50 underline-offset-4">
              {project.title}
            </h3>
          </Link>
          <Link
            href={`/projects/${project.slug}`}
            className="mt-0.5 shrink-0 text-muted-foreground/50 transition-all duration-300 hover:text-foreground hover:-translate-y-0.5 hover:translate-x-0.5"
            title="View Details"
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
          </Link>
        </div>

        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech icons row */}
        {/* <div className="mt-auto flex items-center gap-3 pt-4">
          <div className="flex -space-x-1">
            {project.technologies.slice(0, 5).map((tech, i) => (
              <div
                key={tech.name}
                className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-card bg-muted transition-transform duration-200 hover:z-10 hover:scale-110"
                style={{ zIndex: 5 - i }}
                title={tech.name}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain p-0.5"
                />
              </div>
            ))}
          </div>
          <span className="text-[11px] text-muted-foreground">
            {project.technologies.map((t) => t.name).join(" · ")}
          </span>
        </div> */}

        {/* Links */}
        <div className="mt-auto pt-5 flex items-center gap-2">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <RaisedButton className="px-3 py-1.5 text-[11px] h-auto rounded-lg whitespace-nowrap before:rounded-lg flex gap-1.5 items-center">
                Live Demo
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15,3 21,3 21,9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </RaisedButton>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Source Code"
              className="inline-flex text-muted-foreground transition-colors hover:text-foreground ml-2"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
