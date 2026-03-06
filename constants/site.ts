import type { NavItem, SocialLink } from "@/types/social";

export const siteConfig = {
  name: "Abdul Rahman",
  title: "Abdulrahman — Developer",
  description:
    "Full-stack developer building thoughtful, well-crafted web experiences.",
  url: "https://abdulrahman.dev",
};

export const navItems: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "X", url: "https://x.com" },
  { name: "Email", url: "mailto:hello@abdulrahman.dev" },
];
