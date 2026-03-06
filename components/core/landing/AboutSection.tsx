import { SectionHeader } from "@/components/shared/SectionHeader";

export function AboutSection() {
  return (
    <section className="py-16">
      <SectionHeader label="About" title="A Bit About Me" />
      <div className="max-w-[72ch] space-y-2 text-sm leading-[1.8] text-muted-foreground">
        <p>
          I am a software developer and leader based in UK. I have a decade long
          experience working mostly with startups and scale-ups.
        </p>
        <p>
          Over the years, I have worked with a variety of technologies in a
          variety of domains and have worn many different hats.
        </p>
        <p>
          I am a Full-stack developer at heart with an eye for good design and
          expertise in all parts of the stack including the frontend, backend,
          databases, devops and cloud.
        </p>
        <p>
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
        <p>
          I am a Google Developer Expert and a GitHub Star. I have been an
          opensource contributor since 2013. I also have a development related
          YouTube channel with 210k+ subscribers.
        </p>
      </div>
    </section>
  );
}
