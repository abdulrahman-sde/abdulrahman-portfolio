import { StaticImageData } from "next/image";

export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image: StaticImageData;
  technologies: Technology[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubUrlFrontend?: string;
  logo?: string;
  isApp?: boolean;
  featured?: boolean;
  postedDate?: string;
  badges?: string[];
}
