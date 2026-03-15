import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/constants/projects";
import RaisedButton from "@/components/ui/RaisedBtn";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen pb-24 pt-16">
      <Container>
        {/* Back Link */}
        <div
          className="animate-fade-up mb-10"
          style={{ animationDelay: "0ms" }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            All Projects
          </Link>
        </div>

        {/* Header Section */}
        <div className="">
          {/* Hero Image (Left Side) */}
          {/* <div
            className="animate-fade-up order-2 lg:order-1 relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-sm"
            style={{ animationDelay: "150ms" }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div> */}

          {/* Content (Right Side) */}
          <div
            className="animate-fade-up order-1 lg:order-2"
            style={{ animationDelay: "80ms" }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                {project.isApp ? "Mobile Application" : "Web Case Study"}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl  tracking-tight text-foreground text-balance">
              {project.title}
            </h1>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RaisedButton>View Live Demo</RaisedButton>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all duration-150 hover:bg-muted active:scale-[0.97]"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div
          className="animate-fade-up mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-[1fr_250px] lg:gap-24"
          style={{ animationDelay: "430ms" }}
        >
          {/* Features / Details */}
          <div>
            <h2 className="font-serif text-2xl  tracking-tight text-foreground">
              Key Features
            </h2>
            <div className="mt-8 space-y-4">
              {project.features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-muted">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-foreground"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Sidebar */}
          <div>
            <h3 className="font-serif text-xl  tracking-tight text-foreground">
              Tech Stack
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech.name} className="px-3 py-1">
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
