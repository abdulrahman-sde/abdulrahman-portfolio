import Image from "next/image";
import { siteConfig, socialLinks } from "@/constants/site";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="pb-16 pt-16">
      <div className="flex items-start justify-between gap-8">
        {/* ── Content ──────────────────────────────────── */}
        <div className="min-w-0 flex-1">
          {/* Status pill */}
          <div
            className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
            </span>
            <span className="text-[11px] text-muted-foreground">
              Available for new projects
            </span>
          </div>

          {/* Name — large italic serif */}
          <h1
            className="animate-fade-up font-serif  text-5xl italic leading-[1.08] tracking-tight text-foreground text-balance"
            style={{ animationDelay: "80ms" }}
          >
            {siteConfig.name}
          </h1>

          {/* Role */}
          <p
            className="animate-fade-up mt-2.5 text-sm font-medium text-muted-foreground"
            style={{ animationDelay: "160ms" }}
          >
            Full-Stack Developer
          </p>

          {/* Bio */}
          <p
            className="animate-fade-up mt-5 max-w-[38ch] text-sm leading-[1.8] text-muted-foreground"
            style={{ animationDelay: "240ms" }}
          >
            I build thoughtful web experiences — clean architecture, considered
            design, shipped code. Based in Riyadh.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "320ms" }}
          >
            <Button href="/projects" variant="default">
              View Projects
            </Button>
            <Button href="/blog" variant="outline">
              Read Blog
            </Button>
          </div>

          {/* Social links with slide-underline */}
          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
            style={{ animationDelay: "400ms" }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-[13px] text-muted-foreground transition-colors duration-150 hover:text-foreground"
              >
                {link.name}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-px left-0 h-px w-0 bg-current transition-[width] duration-300 ease-out group-hover:w-full"
                />
              </a>
            ))}
          </div>
        </div>

        {/* ── Avatar ───────────────────────────────────── */}
        <div
          className="animate-fade-in hidden shrink-0 sm:block"
          style={{ animationDelay: "150ms" }}
        >
          {/*
            PLACEHOLDER: Drop your photo as public/avatar.jpg and
            update src below from "/avatar.svg" to "/avatar.jpg".
          */}
          <div className="relative pt-20">
            <div className="relative h-[7.5rem] w-[7.5rem] overflow-hidden rounded-2xl ring-1 ring-border">
              <Image
                src="/avatar.jpg"
                alt={siteConfig.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative offset border */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-2 -right-2 h-[7.5rem] w-[7.5rem] rounded-2xl border border-border/60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
