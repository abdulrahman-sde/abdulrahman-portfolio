import Image from "next/image";
import Link from "next/link";
import { siteConfig, socialLinks } from "@/constants/site";
import avatar from "@/public/avatar.png";
import { FlipWords } from "@/components/ui/FlipWords";
const words = ["Software Engineer", "Iterator"];

export function HeroSection() {
  return (
    <section className="py-16">
      <div className="flex flex-col max-w-[72ch]">
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
              className="object-cover scale-[1.13] object-[-20px_3px]"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className=" text-[25px] font-bold tracking-tighter text-foreground sm:text-[28px]">
              {siteConfig.name}
            </h1>
            <FlipWords
              words={words}
              duration={1000}
              className="mt-0.5 -ms-2 text-[15.5px] font-medium text-muted-foreground"
            />
          </div>
        </div>

        <div className="mt-8 animate" style={{ animationDelay: "80ms" }}>
          <p className="text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
            I build end-to-end web and mobile products with clean architecture,
            practical AI integrations, and production-ready execution. Based in
            Lahore.
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
            href="/abdulrahman.pdf"
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
