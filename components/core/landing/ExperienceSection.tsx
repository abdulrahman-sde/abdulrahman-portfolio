"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Separator } from "@/components/ui/Separator";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/constants/experiences";
import type { Experience } from "@/types/experience";
import { Briefcase } from "reicon-react";
import { getTechSvgIcon } from "@/constants/tech-icons";

const MONTH_INDEX: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

function parsePeriod(period: string): { start: Date; end: Date | null } | null {
  const parts = period.split("-").map((s) => s.trim());
  if (parts.length !== 2) return null;

  const parse = (value: string) => {
    const match = value.match(/([A-Za-z]{3})\s+(\d{4})/);
    if (!match) return null;
    const month = MONTH_INDEX[match[1].toLowerCase()];
    if (month === undefined) return null;
    return new Date(parseInt(match[2], 10), month);
  };

  const start = parse(parts[0]);
  if (!start) return null;
  const end = /present/i.test(parts[1]) ? null : parse(parts[1]);
  return { start, end };
}

function formatDuration(period: string): string {
  const parsed = parsePeriod(period);
  if (!parsed) return "";
  const end = parsed.end ?? new Date();
  if (end < parsed.start) return "";

  const totalMonths =
    (end.getFullYear() - parsed.start.getFullYear()) * 12 +
    (end.getMonth() - parsed.start.getMonth()) +
    1;

  if (totalMonths < 12) return `${totalMonths}m`;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return months === 0 ? `${years}y` : `${years}y ${months}m`;
}

function InfinityIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Present"
    >
      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
    </svg>
  );
}

function ChevronsUpDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-4"
    >
      <motion.path
        d="M7 15L12 20L17 15"
        initial="normal"
        animate={open ? "animate" : "normal"}
        variants={{
          normal: { d: "M7 15L12 20L17 15" },
          animate: { d: "M7 20L12 15L17 20" },
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.path
        d="M7 9L12 4L17 9"
        initial="normal"
        animate={open ? "animate" : "normal"}
        variants={{
          normal: { d: "M7 9L12 4L17 9" },
          animate: { d: "M7 4L12 9L17 4" },
        }}
        transition={{ duration: 0.15 }}
      />
    </svg>
  );
}

function CompanyRow({ exp }: { exp: Experience }) {
  return (
    <div className="flex items-center gap-3">
      {exp.companyImage ? (
        <div className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md  border border-border/80 ">
          <Image
            src={exp.companyImage}
            alt={`${exp.company} logo`}
            width={18}
            height={18}
            className={cn(
              "size-7 object-contain",
              exp.company === "Aivex" && "size-6",
            )}
          />
        </div>
      ) : (
        <span className="size-2 shrink-0 rounded-lg bg-zinc-300 dark:bg-zinc-600" />
      )}

      <h3 className="text-lg font-semibold leading-snug text-foreground">
        {exp.company}
      </h3>

      {exp.current && (
        <span
          className="relative flex size-3 items-center justify-center"
          aria-label="Current Employer"
        >
          <span className="absolute inline-flex size-3 animate-ping rounded-full bg-accent opacity-50" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
      )}
    </div>
  );
}

function PositionItem({ exp }: { exp: Experience }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const hasDetails =
    Boolean(exp.description) || Boolean(exp.highlights?.length);

  const { start, end } = parsePeriod(exp.period) ?? { start: null, end: null };
  const duration = useMemo(() => formatDuration(exp.period), [exp.period]);

  return (
    <div className="relative ">
      <button
        type="button"
        disabled={!hasDetails}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={cn(
          "group/position relative block w-full select-none rounded-md px-2 py-1.5 text-left",
          "before:absolute before:-right-1 before:-bottom-1 before:left-8 before:-top-1 before:rounded-md",
          hasDetails && "hover:before:bg-muted/30",
        )}
      >
        <div className="relative z-1 flex items-center ms-6 gap-2.5 text-base">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-muted-foreground/15 px-1 bg-[#c1bebe2d] dark:bg-[#a8a29e12] text-muted-foreground">
            <Briefcase className="size-4" />
          </span>

          <h4 className="flex-1 font-medium text-balance text-foreground">
            {exp.role}
          </h4>

          {hasDetails && (
            <span className="shrink-0 text-muted-foreground">
              <ChevronsUpDownIcon open={open} />
            </span>
          )}
        </div>

        <dl className="relative z-1 flex flex-wrap items-center gap-x-2 gap-y-1 pl-14 mt-1 text-sm text-muted-foreground">
          <div>
            <dt className="sr-only">Employment Period</dt>
            <dd className="flex items-center gap-1 tabular-nums">
              <span>
                {start?.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span className="font-mono">-</span>
              {end ? (
                <span>
                  {end.toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              ) : (
                <InfinityIcon className="size-4 translate-y-px" />
              )}
            </dd>
          </div>

          {duration && (
            <>
              <Separator className="h-4 border-l border-border" />
              <div>
                <dt className="sr-only">Duration</dt>
                <dd className="tabular-nums">{duration}</dd>
              </div>
            </>
          )}
        </dl>
      </button>

      <AnimatePresence initial={false}>
        {open && hasDetails && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-2 pl-16 pr-2 pt-2">
              {exp.description && (
                <p className="text-sm leading-7 text-muted-foreground">
                  {exp.description}
                </p>
              )}
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {exp.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {exp.tools && exp.tools.length > 0 && (
        <ul className="flex flex-wrap gap-1.5 pl-15 pt-2.5">
          {exp.tools.map((tool) => (
            <li key={tool}>
              <Badge techIcon={getTechSvgIcon(tool)} techIconAlt={tool}>
                {tool}
              </Badge>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ExperienceItem({ exp }: { exp: Experience }) {
  return (
    <div className="space-y-4 py-4">
      <CompanyRow exp={exp} />
      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        <PositionItem exp={exp} />
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section className="py-16">
      <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
        <SectionHeader label="Experience" title="Where I've Worked" />
      </div>
      <div>
        {experiences.map((exp) => (
          <ExperienceItem key={exp.company} exp={exp} />
        ))}
      </div>
    </section>
  );
}
