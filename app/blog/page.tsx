import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BlogCard } from "@/components/core/blog/BlogCard";
import { blogPosts } from "@/constants/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing about code, design, and the craft of building software.",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <Container className="py-16">
      <SectionHeader label="Writing" title="Blog" />
      <p className="mb-10 max-w-md text-muted-foreground leading-relaxed">
        Thoughts on code, design, and the craft of building software.
      </p>

      <div>
        {sorted.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
}
