import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BlogCard } from "@/components/core/blogs/BlogCard";
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
      <div className="animate" style={{ animationDelay: "0ms" }}>
        <SectionHeader label="Writing" title="Blog" />
      </div>
      <p
        className="animate mb-10 max-w-md text-muted-foreground leading-relaxed"
        style={{ animationDelay: "80ms" }}
      >
        Thoughts on code, design, and the craft of building software.
      </p>

      <div>
        {sorted.map((post, i) => (
          <div
            key={post.slug}
            className="animate"
            style={{ animationDelay: `${160 + i * 80}ms` }}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </Container>
  );
}
