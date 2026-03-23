import Image from "next/image";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { experiences } from "@/constants/experiences";

function CompanyAvatar({
  name,
  image,
}: {
  name: string;
  image?: (typeof experiences)[number]["companyImage"];
}) {
  if (image) {
    return (
      <div className="relative h-10 w-10 shrink-0 dark:bg-[#1b1b1b] bg-[#b8b7b730] overflow-hidden rounded-lg border border-border/80  p-1.5 -mt-0.5">
        <Image
          src={image}
          alt={`${name} logo`}
          placeholder="blur"
          className="object-contain"
          sizes="36px"
        />
      </div>
    );
  }

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-linear-to-br from-muted/90 to-background text-[10px] font-semibold tracking-wide text-muted-foreground"
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
              <CompanyAvatar name={exp.company} image={exp.companyImage} />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col justify-between gap-0.5 sm:flex-row sm:items-baseline">
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    <h3 className="truncate font-medium text-foreground">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="shrink-0 text-sm tabular-nums text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                {exp.highlights?.length ? (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {exp.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
