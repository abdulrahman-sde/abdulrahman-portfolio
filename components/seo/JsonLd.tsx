/* eslint-disable @typescript-eslint/no-explicit-any */

interface JsonLdProps {
  data: Record<string, any> | Record<string, any>[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ────────────────────────────────────────────────
 * Pre-built schema generators
 * ──────────────────────────────────────────────── */

import { siteConfig } from "@/constants/site";

/** Person schema — used on homepage */
export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.fullName,
    alternateName: ["Abdul Rahman", "Abdulrahman Asif", "Abdulrahman"],
    url: siteConfig.url,
    image: siteConfig.ogImage,
    email: siteConfig.email,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Techloset",
    },
    knowsAbout: [
      "Full-Stack Web Development",
      "Agentic AI",
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Python",
      "Node.js",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Supabase",
      "Firebase",
      "Prisma ORM",
      "Machine Learning",
      "RAG Systems",
    ],
    sameAs: [
      siteConfig.socialProfiles.github,
      siteConfig.socialProfiles.linkedin,
    ],
  };
}

/** WebSite schema — used globally in layout */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: `${siteConfig.fullName} — Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    author: { "@id": `${siteConfig.url}/#person` },
    publisher: { "@id": `${siteConfig.url}/#person` },
    inLanguage: "en-US",
  };
}

/** ProfilePage schema — homepage */
export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#profilepage`,
    name: `${siteConfig.fullName} — Software Engineer Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    mainEntity: { "@id": `${siteConfig.url}/#person` },
    isPartOf: { "@id": `${siteConfig.url}/#website` },
  };
}

/** BreadcrumbList schema — for interior pages */
export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** SoftwareApplication / CreativeWork schema — for individual projects */
export function getProjectSchema(project: {
  title: string;
  description: string;
  slug: string;
  technologies: { name: string }[];
  liveUrl?: string;
  githubUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/projects/${project.slug}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    author: { "@id": `${siteConfig.url}/#person` },
    creator: { "@id": `${siteConfig.url}/#person` },
    programmingLanguage: project.technologies.map((t) => t.name),
    ...(project.liveUrl && { installUrl: project.liveUrl }),
    ...(project.githubUrl && {
      codeRepository: project.githubUrl,
    }),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/OnlineOnly",
    },
  };
}

/** CollectionPage schema — for projects listing page */
export function getProjectsCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects — Full-Stack & AI Portfolio",
    description:
      "Full-stack and AI projects by Abdul Rahman Asif — agentic pipelines, RAG systems, mobile apps, and developer tools.",
    url: `${siteConfig.url}/projects`,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    author: { "@id": `${siteConfig.url}/#person` },
  };
}

/** CollectionPage schema — for blog listing page */
export function getBlogCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog — Engineering Insights & Software Development",
    description:
      "Read engineering articles on full-stack development, React, Next.js, AI integrations, and software architecture.",
    url: `${siteConfig.url}/blog`,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    author: { "@id": `${siteConfig.url}/#person` },
  };
}

/** Article schema — for single blog posts */
export function getArticleSchema(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: siteConfig.ogImage,
    author: {
      "@type": "Person",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: `${siteConfig.fullName} — Portfolio`,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.ogImage,
      },
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags?.join(", ") || "",
  };
}
