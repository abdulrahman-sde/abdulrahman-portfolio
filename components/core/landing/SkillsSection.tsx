import { SectionHeader } from "@/components/shared/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/constants/skills";
import { getTechSvgIcon } from "@/constants/tech-icons";

export function SkillsSection() {
  return (
    <section className="py-16">
      <SectionHeader label="Stack" title="Technologies I Work With" />
      <div className="space-y-6">
        {Object.entries(skillCategories).map(([category, items]) => (
          <div key={category}>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Badge
                  key={skill}
                  techIcon={getTechSvgIcon(skill)}
                  techIconAlt={skill}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
