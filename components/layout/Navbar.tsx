import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { NavLinks } from "@/components/layout/NavLinks";
import { siteConfig } from "@/constants/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[url(/noise.png)] bg-background bg-size-[auto_80px]  backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-mono text-foreground transition-opacity duration-150 hover:opacity-70"
        >
          {siteConfig.name}
        </Link>

        <nav className="flex items-center">
          <NavLinks />
          <div className="ml-2 border-l border-border pl-2">
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
