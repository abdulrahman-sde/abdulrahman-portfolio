"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2">
      {projects.map((project) => (
        <Link
          href={`/projects/${project.slug}`}
          key={project.slug}
          className="group flex items-center gap-4 rounded-xl border border-border/80 bg-[#c1bebe2d] p-3 text-card-foreground shadow-xs transition-colors duration-150 hover:bg-[#c1bebe3d] dark:bg-[#a8a29e12] dark:hover:bg-[#a8a29e1f] focus:outline-none"
        >
          {/* Logo container */}
          {project.logo ? (
            <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-[9px] bg-[#c1bebe2d] p-2 dark:bg-[#a8a29e12]">
              <Image
                src={project.logo}
                width={30}
                height={30}
                alt=""
                className="size-7 object-contain rounded-md"
              />
            </div>
          ) : (
            <div className="flex size-14 shrink-0 items-center justify-center rounded-[9px] bg-[#c1bebe2d] font-serif text-lg font-bold text-foreground dark:bg-[#a8a29e12]">
              {project.title.charAt(0)}
            </div>
          )}

          {/* Text details */}
          <div className="flex flex-col min-w-0">
            <h4 className="font-sans text-[15px] font-bold text-foreground transition-colors group-hover:text-accent">
              {project.title}
            </h4>
            <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
              {project.subtitle || project.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-10 flex h-full flex-col justify-between rounded-2xl border border-border bg-[#c1bebe2d] p-5 text-card-foreground shadow-xs dark:bg-[#a8a29e12]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "font-serif text-lg font-bold tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-0.5 font-sans text-xs text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
};
