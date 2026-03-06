import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full  bg-[#fbfbfb00] dark:bg-[#00000016] px-2.5 py-0.5 text-xs font-medium text-muted-foreground",
        "shadow-sm transition-all duration-150",
        "hover:-translate-y-px hover:shadow-sm hover:border-foreground/20 hover:text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
