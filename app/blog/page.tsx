import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BlogCard } from "@/components/core/blogs/BlogCard";
import { blogPosts } from "@/constants/blog";
import { siteConfig } from "@/constants/site";
import { JsonLd, getBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Blog — Engineering Insights & Software Development",
  description:
    "Read engineering articles by Abdul Rahman Asif on full-stack development, React, Next.js, AI integrations, and software architecture. Practical insights from a working software engineer.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Blog — Abdul Rahman Asif | Engineering & Development",
    description:
      "Practical engineering articles on code, design, architecture, and the craft of building software.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const isComingSoonFromContentful = true;
  return (
    <>
      <Container className="py-16">
        {isComingSoonFromContentful ? (
          <div
            className="animate-fade-in  py-2"
            style={{ animationDelay: "160ms" }}
          >
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Coming Soon
            </span>
            <h2 className="mt-3 font-serif text-xl tracking-tight text-foreground md:text-2xl">
              Blog posts are on the way.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground ">
              I&apos;m preparing practical write-ups on engineering decisions,
              product building, and lessons from real projects. The first articles
              will be published here soon.
            </p>
          </div>
        ) : (
          <div>
            <div className="animate-fade-in " style={{ animationDelay: "0ms" }}>
              <SectionHeader label="Writing" title="Blog" />
            </div>
            <p
              className="animate-fade-in  mb-10 max-w-md text-muted-foreground leading-relaxed"
              style={{ animationDelay: "80ms" }}
            >
              Thoughts on code, design, and the craft of building software.
            </p>
            {sorted.map((post, i) => (
              <div
                key={post.slug}
                className="animate-fade-in "
                style={{ animationDelay: `${160 + i * 80}ms` }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        )}
      </Container>

      {/* Structured data */}
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
        ])}
      />
    </>
  );
}
