import Image from "next/image";
import Link from "next/link";
import { siteConfig, socialLinks } from "@/constants/site";
import avatar from "@/public/avatar.jpg";
export function HeroSection() {
  return (
    <section className="py-16">
      <div className="flex flex-col max-w-[72ch]">
        {/* ── Avatar and Title/Role ────────────────── */}
        <div
          className="flex items-center gap-5 animate"
          style={{ animationDelay: "0ms" }}
        >
          <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
            <Image
              src={avatar}
              alt={siteConfig.name}
              fill
              placeholder="blur"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-[28px] tracking-tight text-foreground sm:text-[32px]">
              {siteConfig.name}
            </h1>
            <p className="mt-1 text-[15px] font-medium text-muted-foreground">
              Full-Stack Engineer
            </p>
          </div>
        </div>

        <div className="mt-8 animate" style={{ animationDelay: "80ms" }}>
          <p className="text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
            I build thoughtful web &amp; app experiences — clean architecture,
            considered design, shipped code. Based in Lahore.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 animate"
          style={{ animationDelay: "160ms" }}
        >
          <Link
            href="/blog"
            className="text-[14px] font-medium text-foreground underline decoration-border underline-offset-[3px] transition-colors duration-150 hover:decoration-foreground"
          >
            Read Blog
          </Link>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
