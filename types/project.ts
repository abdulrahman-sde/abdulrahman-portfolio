export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubUrlFrontend?: string;
  isApp?: boolean;
  featured?: boolean;
}
