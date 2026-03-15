import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex items-start justify-between gap-4 border-b border-border py-5 last:border-b-0"
    >
      <div className="min-w-0 flex-1">
        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
          <h3 className="font-medium text-foreground transition-colors duration-150 group-hover:text-accent">
            {post.title}
          </h3>
          <time
            dateTime={post.date}
            className="shrink-0 text-sm tabular-nums text-muted-foreground"
          >
            {formatDate(post.date)}
          </time>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {post.description}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xs text-muted-foreground">
            {post.readingTime}
          </span>
          <span aria-hidden="true" className="text-xs text-muted-foreground">
            ·
          </span>
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow — slides in + fades on hover */}
      <div
        aria-hidden="true"
        className="mt-0.5 shrink-0 translate-x-0 text-muted-foreground opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-x-1 group-hover:opacity-100"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
    </Link>
  );
}
