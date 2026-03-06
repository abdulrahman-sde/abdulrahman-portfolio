import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "default" | "outline" | "ghost" | "link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-foreground text-background hover:opacity-85 active:scale-[0.97] px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  outline:
    "border border-border text-foreground hover:bg-muted active:scale-[0.97] px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  ghost:
    "text-foreground hover:bg-muted active:scale-[0.97] px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  link: "text-muted-foreground hover:text-foreground underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
};

export function Button({
  children,
  href,
  variant = "default",
  className,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 text-sm font-medium touch-manipulation transition-[background-color,opacity,transform,color,border-color] duration-150",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
