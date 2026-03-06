import { SectionHeader } from "@/components/shared/SectionHeader";
import { socialLinks } from "@/constants/site";

export function ContactSection() {
  const emailLink = socialLinks.find((l) => l.url.startsWith("mailto:"));
  const email = emailLink?.url.replace("mailto:", "") ?? "";
  const socials = socialLinks.filter((l) => !l.url.startsWith("mailto:"));

  return (
    <section className="py-16">
      <SectionHeader label="Contact" title="Get in Touch" />
      <p className="max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
        Open to interesting conversations, collaborations, or just saying hello.
      </p>

      {/* Big email CTA */}
      {email && (
        <a
          href={`mailto:${email}`}
          className="group mt-6 inline-flex items-center gap-3 font-serif text-2xl italic text-foreground/70 transition-colors duration-200 hover:text-foreground sm:text-3xl"
        >
          {email}
          <span
            aria-hidden="true"
            className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      )}

      {/* Social links */}
      <div className="mt-8 flex flex-wrap items-center gap-5">
        {socials.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            {link.name}
            <span
              aria-hidden="true"
              className="absolute -bottom-px left-0 h-px w-0 bg-current transition-[width] duration-300 ease-out group-hover:w-full"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
