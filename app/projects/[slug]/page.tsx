import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/constants/projects";

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
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <Container className="py-16">
      <div className="animate-fade-up mb-2" style={{ animationDelay: "0ms" }}>
        <Button href="/projects" variant="link" className="text-xs">
          &larr; All Projects
        </Button>
      </div>

      <h1
        className="animate-fade-up text-3xl font-medium tracking-tight sm:text-4xl"
        style={{ animationDelay: "80ms" }}
      >
        {project.title}
      </h1>
      <p
        className="animate-fade-up mt-2 text-sm text-muted-foreground"
        style={{ animationDelay: "160ms" }}
      >
        {project.year}
      </p>

      <div
        className="animate-fade-up mt-4 flex flex-wrap gap-1.5"
        style={{ animationDelay: "240ms" }}
      >
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      {(project.link || project.github) && (
        <div
          className="animate-fade-up mt-6 flex items-center gap-3"
          style={{ animationDelay: "320ms" }}
        >
          {project.link && (
            <Button href={project.link} variant="default" external>
              Live Demo
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </Button>
          )}
          {project.github && (
            <Button href={project.github} variant="outline" external>
              Source Code
            </Button>
          )}
        </div>
      )}

      <div className="mt-12 space-y-4 text-muted-foreground leading-relaxed">
        {project.longDescription.split("\n\n").map((paragraph, i) => (
          <p
            key={i}
            className="animate-fade-up"
            style={{ animationDelay: `${400 + i * 80}ms` }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Container>
  );
}
