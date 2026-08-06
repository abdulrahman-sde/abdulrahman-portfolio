import { SectionHeader } from "@/components/shared/SectionHeader";
import { CursorCard } from "@/components/ui/cursor-card";

export function AboutSection() {
  const baseDelay = 480;

  return (
    <section className="py-8">
      <div
        className="animate-fade-in "
        style={{ animationDelay: `${baseDelay}ms` }}
      >
        <SectionHeader label="About" title="A Bit About Me" />
      </div>
      <div className="max-w-[72ch] space-y-2 text-sm leading-[1.8] text-muted-foreground">
        <p
          className="animate-fade-in "
          style={{ animationDelay: `${baseDelay + 80}ms` }}
        >
          I&apos;m a Computer Science graduate from GCU Faisalabad with a strong
          interest in full-stack engineering and AI.
        </p>
        <p
          className="animate-fade-in "
          style={{ animationDelay: `${baseDelay + 160}ms` }}
        >
          I enjoy building products that are technically solid, thoughtfully
          designed, and genuinely useful. That's reflected in{" "}
          <CursorCard
            className="hover:bg-neutral-300"
            href="https://kairoui.online"
            image="/assets/images/kairoui.png"
            description="Free landing page templates collection for Next.js."
          >
            Kairo Ui
          </CursorCard>
          , an open-source landing page library used by{" "}
          <strong>3,000+ developers</strong> showcasing my focus on clean,
          reusable systems and exceptional developer experience.
        </p>

        <p
          className="animate-fade-in "
          style={{ animationDelay: `${baseDelay + 320}ms` }}
        >
          If you&apos;re building something worth building, bring me in early.
          That&apos;s where I add the most value. Let&apos;s connect and make it
          something people can&apos;t ignore.
        </p>
      </div>
    </section>
  );
}
