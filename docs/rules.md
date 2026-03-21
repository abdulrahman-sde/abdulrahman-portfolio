# Next.js Portfolio — Rules

## Folder Structure

```
app/
  layout.tsx
  page.tsx
  about/page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  contact/page.tsx
components/
  ui/          # primitives: Button, Badge, Input
  shared/      # composed reusables: SectionHeader, animate-fade-in dText
  layout/      # Navbar, Footer, MobileMenu
  core/
    landing/
    projects/
    about/
    blog/
    contact/
constants/     # all mock/static data goes here
types/         # all TypeScript types/interfaces go here
lib/           # utils.ts, cn.ts, helpers
public/
```

## Rendering

- Server Components by default — always.
- `"use client"` only for interactivity (forms, animations, DOM events). Keep them small leaf components.
- No `useEffect` for data fetching — fetch inside async Server Components.

## Data & Types

- All mock/static data → `constants/` (e.g. `constants/projects.ts`, `constants/skills.ts`)
- All types/interfaces → `types/` (e.g. `types/project.ts`, `types/blog.ts`)
- No inline types for shared shapes — always reference from `types/`

## Styling

- Tailwind CSS only. No CSS Modules, no inline styles.
- Use `cn()` from `clsx` + `tailwind-merge` for conditional classes.
- Mobile-first. Dark mode via `dark:` class strategy.

## Next.js

- App Router only. No Pages Router.
- `generateMetadata()` on every page — no `next/head`.
- `next/image` for all images (with `alt`, `width`, `height`).
- `next/font` for all fonts.
- `generateStaticParams()` for dynamic routes.

## TypeScript

- Strict mode on. No `any`.
- All component props explicitly typed.

## Conventions

- Components: `PascalCase`. Routes/folders: `kebab-case`. Functions: `camelCase`.
- Named exports for components. Default exports for pages/layouts only.
- No `console.log` in production.
- Max ~150 lines per file — split if larger.
