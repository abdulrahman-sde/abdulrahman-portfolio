import Image from "next/image";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { experiences } from "@/constants/experiences";
import { Badge } from "@/components/ui/Badge";
import { getTechSvgIcon } from "@/constants/tech-icons";

function CompanyAvatar({
  name,
  image,
}: {
  name: string;
  image?: (typeof experiences)[number]["companyImage"];
}) {
  if (image) {
    return (
      <div className="relative h-10 w-10 shrink-0 dark:bg-[#1b1b1b] bg-[#b8b7b730] overflow-hidden rounded-lg border border-border/80 flex items-center px-2 -mt-0.5">
        <Image
          src={image}
          alt={`${name} logo`}
          placeholder="blur"
          className="object-contain "
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

function ExperienceItem({
  exp,
  i,
  isLast,
}: {
  exp: (typeof experiences)[number];
  i: number;
  isLast: boolean;
}) {
  return (
    <div
      className={cn(
        "animate-fade-in group py-5",
        !isLast && "border-b border-border",
      )}
      style={{ animationDelay: `${80 + i * 80}ms` }}
    >
      <div className="flex items-start gap-4 group/item">
        <CompanyAvatar name={exp.company} image={exp.companyImage} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-col justify-between gap-0.5 sm:flex-row sm:items-baseline">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <h3 className="truncate font-semibold text-foreground group-hover/item:text-primary transition-colors">
                {exp.role}
              </h3>
            </div>
            <p className="shrink-0 text-sm tabular-nums text-muted-foreground">
              {exp.period}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-0.5">
            <p>{exp.company}</p>
          </div>

          {exp.highlights?.length ? (
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
              {exp.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {exp.description}
            </p>
          )}

          {exp.tools && exp.tools.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tools.map((tool) => (
                <Badge
                  key={tool}
                  techIcon={getTechSvgIcon(tool)}
                  techIconAlt={tool}
                >
                  {tool}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
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
          <ExperienceItem
            key={exp.company}
            exp={exp}
            i={i}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
