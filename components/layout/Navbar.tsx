import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { NavLinks } from "@/components/layout/NavLinks";
import { siteConfig } from "@/constants/site";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[url(/noise.png)] bg-background bg-size-[auto_80px]  backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground transition-opacity duration-150 hover:opacity-70"
        >
          <div className="border py-2.5  px-2 rounded-lg ">
            <Image
              src="/assets/logos/logo-2.png"
              alt="AR Logo"
              width={25}
              height={15}
              className="block   dark:hidden"
            />
            <Image
              src="/assets/logos/logo-1.png"
              alt="AR Logo"
              width={25}
              height={15}
              className="hidden   dark:block"
            />
          </div>
          <span className="text-sm font-medium tracking-tight">
            {siteConfig.name}
          </span>
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
