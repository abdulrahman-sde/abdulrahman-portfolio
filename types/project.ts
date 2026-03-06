export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  link?: string;
  github?: string;
  video?: string;
  featured: boolean;
  year: string;
}
