import { loadMdx } from "@/lib/loadMdx";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const BlogContent = await loadMdx(slug);
  if (!BlogContent) notFound();

  return (
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
  );
}
