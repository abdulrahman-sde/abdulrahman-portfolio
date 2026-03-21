import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { experiences } from "@/constants/experiences";

/**
 * PLACEHOLDER: Company logo — swap CompanyAvatar with next/image once you
 * have logo assets. e.g: <Image src={`/logos/${slug}.svg`} alt={name} .../>
 */
function CompanyAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-[10px] font-semibold tracking-wide text-muted-foreground"
    >
      {initials}
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section className="py-16">
      <div className="animate-fade-in " style={{ animationDelay: "0ms" }}>
        <SectionHeader label="Experience" title="Where I've Worked" />
      </div>
      <div>
        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            className={cn(
              "animate-fade-in  group py-5",
              i !== experiences.length - 1 && "border-b border-border",
            )}
            style={{ animationDelay: `${80 + i * 80}ms` }}
          >
            <div className="flex items-start gap-3">
              <CompanyAvatar name={exp.company} />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col justify-between gap-0.5 sm:flex-row sm:items-baseline">
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    <h3 className="truncate font-medium text-foreground">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="inline-flex shrink-0 items-center rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="shrink-0 text-sm tabular-nums text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
