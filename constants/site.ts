import type { NavItem, SocialLink } from "@/types/social";

export const siteConfig = {
  name: "Abdul Rahman",
  title: "Abdul Rahman — Full-Stack & AI Developer",
  description:
    "Full-stack developer and AI enthusiast building intelligent web experiences with Next.js, React Native, and Agentic AI. Based in Faisalabad, Pakistan.",
  url: "https://www.abdulrahmanasif.dev",
};

export const navItems: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blog" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/abdulrahman-sde" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/abdul-rahman-sde",
  },
  { name: "Email", url: "mailto:abdulrahman.sde@gmail.com" },
];
