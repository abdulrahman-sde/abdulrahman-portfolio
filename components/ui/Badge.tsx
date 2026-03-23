import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  techIcon?: string | ReactNode;
  techIconAlt?: string;
}

export function Badge({
  children,
  className,
  techIcon,
  techIconAlt,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full bg-[#c1bebe2d] px-2 py-1 text-[11px] font-medium text-accent dark:bg-[#a8a29e12]",
        className,
      )}
    >
      {typeof techIcon === "string" && (
        <Image
          src={techIcon}
          width={12}
          height={12}
          alt={techIconAlt ?? "technology icon"}
          className="shrink-0"
        />
      )}
      {typeof techIcon !== "string" && techIcon}
      {children}
    </span>
  );
}
