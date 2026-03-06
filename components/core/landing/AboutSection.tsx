import { SectionHeader } from "@/components/shared/SectionHeader";

export function AboutSection() {
  const baseDelay = 480;
  const paragraphs = [
    "I am a software developer and leader based in UK. I have a decade long experience working mostly with startups and scale-ups.",
    "Over the years, I have worked with a variety of technologies in a variety of domains and have worn many different hats.",
    "I am a Full-stack developer at heart with an eye for good design and expertise in all parts of the stack including the frontend, backend, databases, devops and cloud.",
    "I am a Google Developer Expert and a GitHub Star. I have been an opensource contributor since 2013. I also have a development related YouTube channel with 210k+ subscribers.",
  ];

  return (
    <section className="py-16">
      <div
        className="animate-fade-up"
        style={{ animationDelay: `${baseDelay}ms` }}
      >
        <SectionHeader label="About" title="A Bit About Me" />
      </div>
      <div className="max-w-[72ch] space-y-2 text-sm leading-[1.8] text-muted-foreground">
        {paragraphs.slice(0, 3).map((paragraph, i) => (
          <p
            key={paragraph}
            className="animate-fade-up"
            style={{ animationDelay: `${baseDelay + 80 + i * 80}ms` }}
          >
            {paragraph}
          </p>
        ))}
        <p
          className="animate-fade-up"
          style={{ animationDelay: `${baseDelay + 320}ms` }}
        >
          You might know me from{" "}
          <a
            href="https://roadmap.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-border underline-offset-[3px] transition-colors duration-150 hover:decoration-foreground"
          >
            roadmap.sh
          </a>
          . I have been working on it since 2017, but left my job and went
          full-time in 2022.
        </p>
        <p
          className="animate-fade-up"
          style={{ animationDelay: `${baseDelay + 400}ms` }}
        >
          {paragraphs[3]}
        </p>
      </div>
    </section>
  );
}
