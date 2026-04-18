import { MetadataRoute } from "next";
import { projects } from "@/constants/projects";
import { blogPosts } from "@/constants/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.abdulrahmanasif.dev";
  const now = new Date().toISOString();

  const defaultPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...defaultPages, ...projectPages, ...blogPages];
}
