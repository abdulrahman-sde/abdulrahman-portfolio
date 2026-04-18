import { loadMdx } from "@/lib/loadMdx";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import type { Metadata } from "next";
import { blogPosts } from "@/constants/blog";
import { siteConfig } from "@/constants/site";
import { JsonLd, getArticleSchema, getBreadcrumbSchema } from "@/components/seo/JsonLd";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return;
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;
  const ogImage = siteConfig.ogImage;

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: new Date(post.date).toISOString(),
      authors: [siteConfig.url],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function Page({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  const BlogContent = await loadMdx(slug);
  if (!BlogContent) notFound();

  return (
    <>
      <Container className="py-16">
        {/* Back link */}
        <div className="animate-fade-in mb-8" style={{ animationDelay: "0ms" }}>
          <Button href="/blog" variant="link" className="text-xs">
            &larr; All Posts
          </Button>
        </div>

        <Separator
          className="animate-fade-in mb-10"
          style={{ animationDelay: "40ms" }}
        />

        {/* Article */}
        <article
          className="animate-fade-in"
          style={{ animationDelay: "80ms" }}
        >
          <BlogContent />
        </article>

        <Separator className="mt-16 mb-8" />

        <div className="mb-8">
          <Button href="/blog" variant="link" className="text-xs">
            &larr; Back to all posts
          </Button>
        </div>
      </Container>
      {post && (
        <>
          <JsonLd data={getArticleSchema(post)} />
          <JsonLd
            data={getBreadcrumbSchema([
              { name: "Home", url: siteConfig.url },
              { name: "Blog", url: `${siteConfig.url}/blog` },
              { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
            ])}
          />
        </>
      )}
    </>
  );
}
