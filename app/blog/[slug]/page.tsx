import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import { blogPosts } from "@/constants/blog";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <Container className="py-16">
      <div className="animate-fade-in  mb-2" style={{ animationDelay: "0ms" }}>
        <Button href="/blog" variant="link" className="text-xs">
          &larr; All Posts
        </Button>
      </div>

      <h1
        className="animate-fade-in  text-3xl font-medium tracking-tight sm:text-4xl"
        style={{ animationDelay: "80ms" }}
      >
        {post.title}
      </h1>

      <div
        className="animate-fade-in  mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground"
        style={{ animationDelay: "160ms" }}
      >
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>

      <div
        className="animate-fade-in  mt-4 flex flex-wrap gap-1.5"
        style={{ animationDelay: "240ms" }}
      >
        {post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <Separator
        className="animate-fade-in -fade-in my-8"
        style={{ animationDelay: "320ms" }}
      />

      <article className="prose-custom space-y-5 text-foreground/85 leading-[1.75]">
        {post.content.split("\n\n").map((block, i) => {
          if (block.startsWith("## ")) {
            return (
              <h2
                key={i}
                className="animate-fade-in  mt-10 mb-4 font-serif text-xl font-medium text-foreground"
                style={{ animationDelay: `${400 + i * 80}ms` }}
              >
                {block.replace("## ", "")}
              </h2>
            );
          }
          if (block.startsWith("1. ") || block.match(/^\d+\.\s/)) {
            const items = block.split("\n").filter(Boolean);
            return (
              <ol
                key={i}
                className="animate-fade-in  list-decimal pl-5 space-y-1"
                style={{ animationDelay: `${400 + i * 80}ms` }}
              >
                {items.map((item, j) => (
                  <li key={j}>{item.replace(/^\d+\.\s/, "")}</li>
                ))}
              </ol>
            );
          }
          if (block.startsWith("- ")) {
            const items = block.split("\n").filter(Boolean);
            return (
              <ul
                key={i}
                className="animate-fade-in  list-disc pl-5 space-y-1"
                style={{ animationDelay: `${400 + i * 80}ms` }}
              >
                {items.map((item, j) => (
                  <li key={j}>{item.replace(/^-\s/, "")}</li>
                ))}
              </ul>
            );
          }
          return (
            <p
              key={i}
              className="animate-fade-in "
              style={{ animationDelay: `${400 + i * 80}ms` }}
            >
              {block}
            </p>
          );
        })}
      </article>
    </Container>
  );
}
