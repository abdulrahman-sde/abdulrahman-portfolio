import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "building-a-design-system-from-scratch",
    title: "Building a Design System from Scratch",
    description:
      "Lessons from creating a component library that scales — tokens, variants, and the decisions that actually matter.",
    content: `When I started building the design system at Nebula Labs, I made every beginner mistake in the book. I over-abstracted, over-documented, and built components nobody asked for.

Here's what I learned after two years of iteration.

## Start with tokens, not components

The first thing you should build is not a Button. It's your spacing scale. Your color palette. Your type ramp. These are the atoms that every component will reference, and getting them wrong means rebuilding everything later.

I settled on an 8px grid for spacing, a 1.25 type scale, and a semantic color system with three tiers: primitive (raw hex values), semantic (background, foreground, border), and component (button-primary, input-border).

## Build what you need, not what you might need

Version one of our system had 47 components. We used 12 regularly. The rest rotted — no one updated them, no one tested them, and they became a source of bugs rather than productivity.

Now I follow a rule: a component earns its place in the system only after it's been copy-pasted across three or more features. Until then, it lives in the feature code.

## Variants are a spectrum

Not everything needs to be a prop. I've seen Button components with 15 props and a 200-line switch statement for styling. The better approach: a small set of meaningful variants (solid, outline, ghost) and composition for everything else.

## The documentation is the product

A design system without documentation is just a folder of components. We invested heavily in Storybook — not just for visual testing, but as the canonical reference for how to use each component. Every component page includes: when to use it, when not to use it, and at least two real-world examples.

## Closing thoughts

A design system is never done. It's a living product that serves your team. The best ones are small, opinionated, and well-documented. Start there.`,
    date: "2025-11-15",
    readingTime: "6 min read",
    tags: ["Design Systems", "React", "Frontend"],
  },
  {
    slug: "server-components-changed-everything",
    title: "Server Components Changed How I Think About React",
    description:
      "Moving from client-first to server-first React — the mental model shift and practical wins.",
    content: `I've been writing React since 2019. For years, my mental model was simple: everything renders on the client, data comes from API calls in useEffect, and state management libraries glue it all together.

Server Components broke that model — and I'm glad they did.

## The old world

In a typical React SPA, the flow looks like this: the browser downloads your JavaScript bundle, React boots up, components mount, useEffect fires, data fetches begin, loading spinners appear, data arrives, and finally the user sees content.

That's a lot of steps between "user clicks link" and "user sees page."

## The shift

With Server Components, the flow is: the server renders your component tree, resolves all data dependencies, and sends finished HTML to the browser. No loading states. No waterfalls. No bundle cost for server-only code.

The mental model shift is subtle but profound: instead of thinking "how do I fetch data and manage its lifecycle?", you think "what data does this component need?" and just... use it.

## What I kept client-side

Not everything belongs on the server. My rule of thumb:

- **Server**: data fetching, heavy computation, components that don't need interactivity
- **Client**: forms, animations, anything that responds to user events, anything using browser APIs

The key insight is that client components should be leaf nodes — small, focused interactive pieces that receive data from their server-rendered parents.

## The practical wins

1. **No loading states for initial data** — pages arrive complete
2. **Smaller bundles** — server-only code never ships to the browser
3. **Simpler data flow** — no client-side cache invalidation, no stale data bugs
4. **Better SEO** — search engines get fully rendered HTML

## It's not perfect

The DX can be rough. The "use client" boundary creates friction. Error messages are sometimes cryptic. And the mental overhead of thinking about where code runs is real.

But for content-heavy applications — portfolios, blogs, dashboards — the tradeoff is overwhelmingly positive.`,
    date: "2025-08-22",
    readingTime: "5 min read",
    tags: ["React", "Next.js", "Server Components"],
  },
  {
    slug: "on-simplicity",
    title: "On Simplicity in Software",
    description:
      "Why the best code is the code you didn't write — and how to resist the urge to over-engineer.",
    content: `Every developer I admire writes less code than I expect. Their solutions look obvious in hindsight. Their architectures have fewer layers, fewer abstractions, fewer moving parts.

This isn't laziness. It's discipline.

## The complexity trap

Early in my career, I equated complexity with sophistication. A custom state management solution felt more "professional" than just using React state. A microservices architecture felt more "scalable" than a monolith. Abstract factories, dependency injection containers, event buses — the more patterns I could name, the better I thought I was.

I was wrong.

## What simplicity actually looks like

Simple code does one thing clearly. It's boring. It reads like prose. You don't need a wiki page to understand the architecture because the architecture fits in your head.

Here's my checklist for simplicity:

1. **Can I explain this to a new team member in under 5 minutes?** If not, it's too complex.
2. **Am I solving a problem I actually have, or one I might have?** YAGNI is real.
3. **Would deleting this abstraction make the code harder to understand?** If not, delete it.
4. **How many files do I need to open to understand this feature?** Fewer is better.

## The courage to be boring

Choosing simplicity requires courage. It means saying "a PostgreSQL query is fine here" when someone suggests Elasticsearch. It means using a simple cron job instead of a message queue. It means writing a 50-line script instead of a "framework."

The best engineers I've worked with have this courage. They've seen enough complex systems fail to know that simplicity isn't a compromise — it's a competitive advantage.

## A personal rule

Before adding any abstraction, library, or architectural pattern, I ask: "What happens if I just... don't?" 

More often than not, the answer is: everything works fine.`,
    date: "2025-05-10",
    readingTime: "4 min read",
    tags: ["Engineering", "Philosophy", "Architecture"],
  },
];
