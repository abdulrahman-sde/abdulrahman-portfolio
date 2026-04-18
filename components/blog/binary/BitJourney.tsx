"use client";

const STAGES = [
  {
    id: "keyboard",
    label: "Keyboard",
    description:
      "A physical key press closes a circuit. A scan code (binary number) is sent to the keyboard controller.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="2"
          y="8"
          width="28"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect
          x="6"
          y="12"
          width="5"
          height="4"
          rx="1"
          className="fill-foreground/10"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        <rect
          x="13"
          y="12"
          width="5"
          height="4"
          rx="1"
          className="fill-foreground/10"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        <rect
          x="20"
          y="12"
          width="5"
          height="4"
          rx="1"
          className="fill-foreground/10"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        <rect
          x="8"
          y="18"
          width="16"
          height="4"
          rx="1"
          className="fill-foreground/10"
          stroke="currentColor"
          strokeWidth="0.6"
        />
      </svg>
    ),
    representation: "Electrical signal (switch closure)",
  },
  {
    id: "bus",
    label: "Data Bus",
    description:
      "The binary scan code travels as electrical voltage pulses across parallel copper traces on the motherboard.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        {[10, 14, 18, 22].map((y) => (
          <line
            key={y}
            x1="4"
            y1={y}
            x2="28"
            y2={y}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
        <circle cx="6" cy="10" r="1.5" className="fill-foreground" />
        <circle cx="6" cy="18" r="1.5" className="fill-foreground" />
        <circle cx="26" cy="14" r="1.5" className="fill-foreground" />
        <circle cx="26" cy="22" r="1.5" className="fill-foreground" />
      </svg>
    ),
    representation: "Voltage levels on parallel wires",
  },
  {
    id: "cpu",
    label: "CPU Register",
    description:
      "The processor stores the byte in a register — a tiny set of flip-flop circuits made of transistors that hold charge.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="8"
          y="8"
          width="16"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <text
          x="16"
          y="19"
          textAnchor="middle"
          className="fill-foreground text-[8px] font-mono font-bold"
        >
          CPU
        </text>
        {[12, 16, 20].map((y) => (
          <g key={`l-${y}`}>
            <line
              x1="2"
              y1={y}
              x2="8"
              y2={y}
              stroke="currentColor"
              strokeWidth="0.8"
            />
            <line
              x1="24"
              y1={y}
              x2="30"
              y2={y}
              stroke="currentColor"
              strokeWidth="0.8"
            />
          </g>
        ))}
      </svg>
    ),
    representation: "Transistor flip-flop states",
  },
  {
    id: "ram",
    label: "RAM",
    description:
      "The CPU writes the byte to main memory. Each bit becomes a charged (1) or discharged (0) capacitor.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="4"
          y="6"
          width="24"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect
          x="7"
          y="10"
          width="4"
          height="6"
          rx="0.5"
          className="fill-foreground/10"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <rect
          x="14"
          y="10"
          width="4"
          height="6"
          rx="0.5"
          className="fill-foreground/10"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <rect
          x="21"
          y="10"
          width="4"
          height="6"
          rx="0.5"
          className="fill-foreground/10"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        {[10, 14, 18, 22, 26].map((x) => (
          <line
            key={x}
            x1={x}
            y1="26"
            x2={x}
            y2="30"
            stroke="currentColor"
            strokeWidth="0.8"
          />
        ))}
      </svg>
    ),
    representation: "Capacitor charges (volatile)",
  },
  {
    id: "disk",
    label: "Storage (SSD)",
    description:
      "When saved, bits become electrons trapped in floating-gate transistors — persisting without power.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="4"
          y="8"
          width="24"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect
          x="8"
          y="12"
          width="8"
          height="4"
          rx="1"
          className="fill-foreground/10"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <circle
          cx="24"
          cy="18"
          r="2"
          className="fill-foreground/10"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </svg>
    ),
    representation: "Trapped electrons (non-volatile)",
  },
];

function StageCard({
  stage,
}: {
  stage: (typeof STAGES)[number];
}) {
  return (
    <div className="flex flex-col items-center">
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border/60 bg-card/60 text-foreground/70">
        {stage.icon}
      </div>

      {/* Label */}
      <span className="mt-2.5 text-xs font-semibold text-foreground">
        {stage.label}
      </span>

      {/* Description */}
      <p className="mt-1 max-w-[160px] text-center text-[10px] leading-relaxed text-muted-foreground/70">
        {stage.description}
      </p>

      {/* Physical form */}
      <span className="mt-2 rounded-full bg-foreground/[0.05] px-3.5 py-1 text-[9px] font-medium text-muted-foreground dark:bg-foreground/[0.08]">
        {stage.representation}
      </span>
    </div>
  );
}

export function BitJourney() {
  return (
    <div className="my-10">
      <div className="overflow-hidden rounded-xl border border-border/60 bg-[url(/noise-compressed.png)] bg-size-[auto_50px] dark:bg-[#27272b00]">
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-border/60 px-5 py-3">
          <div className="h-2 w-2 rounded-full bg-rose-500/80" />
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            The Journey of a Byte
          </span>
        </div>

        <div className="px-5 py-8">
          {/* Vertical journey on mobile, horizontal on desktop */}
          <div className="relative">
            {/* Connection line — vertical on mobile */}
            <div className="absolute left-7 top-14 bottom-14 w-px bg-border/40 md:hidden">
              <div className="absolute inset-x-0 top-0 h-full bg-foreground/20" />
            </div>

            {/* Connection line — horizontal on desktop */}
            <div className="absolute top-7 left-[56px] right-[56px] hidden h-px bg-border/40 md:block">
              <div className="absolute inset-y-0 left-0 h-full w-full bg-foreground/20" />
            </div>

            {/* Stages */}
            <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-4">
              {STAGES.map((stage) => (
                <StageCard
                  key={stage.id}
                  stage={stage}
                />
              ))}
            </div>
          </div>

          {/* Scrolling byte indicator */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/40">
              The same byte, different physical forms
            </span>
            <div className="flex gap-[2px]">
              {[0, 1, 0, 0, 1, 0, 0, 0].map((bit, i) => (
                <span
                  key={i}
                  className={`flex h-5 w-5 items-center justify-center rounded text-[9px] font-mono font-medium tabular-nums ${
                    bit
                      ? "bg-foreground/10 text-foreground/60"
                      : "bg-foreground/[0.03] text-muted-foreground/40"
                  }`}
                >
                  {bit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
