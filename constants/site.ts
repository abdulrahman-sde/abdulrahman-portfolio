import type { NavItem, SocialLink } from "@/types/social";

export const siteConfig = {
  name: "Abdul Rahman",
  fullName: "Abdul Rahman Asif",
  title:
    "Abdul Rahman Asif — Full-Stack Developer & AI Engineer | Software Engineer Portfolio",
  description:
    "Abdul Rahman Asif is a full-stack developer and AI engineer specializing in Next.js, React, React Native, and Agentic AI. Explore projects, skills, and experience. Based in Lahore, Pakistan.",
  url: "https://www.abdulrahmanasif.dev",
  ogImage: "/avatar.png",
  email: "abdulrahman.sde@gmail.com",
  jobTitle: "Full-Stack Developer & AI Engineer",
  location: "Lahore, Pakistan",
  keywords: [
    "Abdul Rahman",
    "Abdulrahman Asif",
    "Abdul Rahman Asif",
    "Abdulrahman dev",
    "abdulrahman sde",
    "SDE",
    "software engineer",
    "software developer",
    "full stack developer",
    "full-stack developer",
    "AI developer",
    "AI engineer",
    "React developer",
    "Next.js developer",
    "React Native developer",
    "web developer",
    "frontend developer",
    "backend developer",
    "MERN stack developer",
    "TypeScript developer",
    "Python developer",
    "LangChain developer",
    "agentic AI",
    "portfolio",
    "developer portfolio",
    "software engineer portfolio",
    "Pakistan developer",
    "Lahore developer",
    "Faisalabad developer",
    "freelance developer Pakistan",
  ],
  socialProfiles: {
    github: "https://github.com/abdulrahman-sde",
    linkedin: "https://linkedin.com/in/abdul-rahman-sde",
    email: "mailto:abdulrahman.sde@gmail.com",
  },
  // Add your Google Search Console verification code here
  googleVerification: "",
};

export const navItems: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/abdulrahman-sde" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/abdul-rahman-sde",
  },
  { name: "Email", url: "mailto:abdulrahman.sde@gmail.com" },
];
