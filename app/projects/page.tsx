import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectCard } from "@/components/core/projects/ProjectCard";
import { projects } from "@/constants/projects";
import { siteConfig } from "@/constants/site";
import {
  JsonLd,
  getBreadcrumbSchema,
  getProjectsCollectionSchema,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Projects — Full-Stack & AI Developer Portfolio",
  description:
    "Explore full-stack and AI projects by Abdul Rahman Asif — agentic AI pipelines, RAG systems, React Native mobile apps, Next.js web applications, and developer tools. Software engineer portfolio showcasing production-grade work.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    title: "Projects — Abdul Rahman Asif | Full-Stack & AI Portfolio",
    description:
      "Full-stack and AI projects — from agentic pipelines and RAG systems to mobile apps and VS Code themes.",
    url: `${siteConfig.url}/projects`,
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Container className="py-16">
        <div className="animate-fade-in " style={{ animationDelay: "0ms" }}>
          <SectionHeader label="Work" title="Projects" />
        </div>
        <p
          className="animate-fade-in  mb-10 max-w-md text-muted-foreground leading-relaxed"
          style={{ animationDelay: "80ms" }}
        >
          A collection of things I&apos;ve built — AI agents, full-stack apps,
          mobile experiences, and developer tools.
        </p>

        <div
          className="mb-12 animate-fade-in "
          style={{ animationDelay: "160ms" }}
        >
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <div
                key={project.slug}
                className="animate-fade-in "
                style={{ animationDelay: `${240 + i * 80}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Structured data */}
      <JsonLd data={getProjectsCollectionSchema()} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Projects", url: `${siteConfig.url}/projects` },
        ])}
      />
    </>
  );
}
