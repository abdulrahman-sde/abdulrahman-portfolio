import type { MDXComponents } from "mdx/types";
import { BinaryConverter } from "@/components/blog/binary/BinaryConverter";
import { VoltageVisualizer } from "@/components/blog/binary/VoltageVisualizer";
import { StorageMediumDiagram } from "@/components/blog/binary/StorageMediumDiagram";
import { BitJourney } from "@/components/blog/binary/BitJourney";

const components: MDXComponents = {
  /* ── Interactive blog components ─────────────────────────── */
  BinaryConverter,
  VoltageVisualizer,
  StorageMediumDiagram,
  BitJourney,

  /* ── Typography overrides for prose ─────────────────────── */
  h1: (props) => (
    <h1
      className="mb-4 mt-0 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mb-3 mt-12 font-serif text-xl font-semibold tracking-tight text-foreground first:mt-0 sm:text-2xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mb-2 mt-8 font-serif text-lg font-semibold tracking-tight text-foreground"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="mb-5 max-w-[593px] text-[15px] leading-[1.8] text-foreground/80"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mb-5 ml-1 list-none space-y-2 text-[15px] leading-[1.8] text-foreground/80"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mb-5 ml-5 list-decimal space-y-2 text-[15px] leading-[1.8] text-foreground/80 marker:text-muted-foreground/40"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-foreground/10 pl-5 text-[15px] italic leading-[1.8] text-foreground/60"
      {...props}
    />
  ),
  code: (props) => {
    // Inline code (not inside a pre)
    const isInline = typeof props.children === "string";
    if (isInline) {
      return (
        <code
          className="rounded bg-foreground/[0.06] px-1.5 py-0.5 font-mono text-[13px] text-foreground/80 dark:bg-foreground/[0.1]"
          {...props}
        />
      );
    }
    return <code {...props} />;
  },
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-border/60 bg-foreground/[0.02] px-5 py-4 font-mono text-[13px] leading-relaxed text-foreground/80 dark:bg-foreground/[0.04]"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-t border-border/50" />,
  a: (props) => (
    <a
      className="text-foreground/90 underline decoration-foreground/15 underline-offset-[3px] transition-colors hover:decoration-foreground/40"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  em: (props) => <em className="text-foreground/70" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
