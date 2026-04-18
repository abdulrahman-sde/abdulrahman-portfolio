'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Medium = 'wire' | 'ram' | 'hdd' | 'ssd' | 'fiber';

const TABS: { id: Medium; label: string; color: string }[] = [
  { id: 'wire', label: 'Copper Wire', color: 'rgb(245, 158, 11)' },
  { id: 'ram', label: 'RAM', color: 'rgb(59, 130, 246)' },
  { id: 'hdd', label: 'Hard Drive', color: 'rgb(139, 92, 246)' },
  { id: 'ssd', label: 'SSD / Flash', color: 'rgb(16, 185, 129)' },
  { id: 'fiber', label: 'Fiber Optic', color: 'rgb(239, 68, 68)' },
];

/* ──────────────────────────────────────────────────────────── */
/* Wire — Voltage square wave                                  */
/* ──────────────────────────────────────────────────────────── */
function WireDiagram({ bits }: { bits: number[] }) {
  const highY = 25;
  const lowY = 65;
  const bitW = 48;

  let path = '';
  bits.forEach((bit, i) => {
    const y = bit ? highY : lowY;
    const prevY = i > 0 ? (bits[i - 1] ? highY : lowY) : lowY;
    if (i === 0) {
      path += `M 0 ${y}`;
    } else if (y !== prevY) {
      path += ` L ${i * bitW} ${prevY} L ${i * bitW} ${y}`;
    }
    path += ` L ${(i + 1) * bitW} ${y}`;
  });

  return (
    <svg viewBox={`-10 5 ${bitW * 8 + 20} 90`} className="w-full">
      <text x="-8" y={highY + 4} className="fill-muted-foreground text-[7px] font-mono" textAnchor="end">5V</text>
      <text x="-8" y={lowY + 4} className="fill-muted-foreground text-[7px] font-mono" textAnchor="end">0V</text>
      <line x1="0" y1={highY} x2={bitW * 8} y2={highY} stroke="currentColor" strokeWidth="0.4" opacity="0.08" strokeDasharray="3 3" />
      <line x1="0" y1={lowY} x2={bitW * 8} y2={lowY} stroke="currentColor" strokeWidth="0.4" opacity="0.08" strokeDasharray="3 3" />
      <motion.path
        d={path}
        fill="none"
        stroke="rgb(245, 158, 11)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      {bits.map((bit, i) => (
        <text key={i} x={i * bitW + bitW / 2} y="88" className="fill-foreground/60 text-[8px] font-mono" textAnchor="middle">{bit}</text>
      ))}
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────── */
/* RAM — Capacitor grid                                        */
/* ──────────────────────────────────────────────────────────── */
function RamDiagram({ bits }: { bits: number[] }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-8 gap-2">
        {bits.map((bit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, type: 'spring', stiffness: 150, damping: 15 }}
            className="flex flex-col items-center gap-1"
          >
            {/* Capacitor symbol */}
            <svg width="36" height="44" viewBox="0 0 36 44">
              {/* Wire top */}
              <line x1="18" y1="0" x2="18" y2="12" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/40" />
              {/* Top plate */}
              <rect x="6" y="12" width="24" height="3" rx="0.5" className={bit ? 'fill-blue-500/80' : 'fill-muted-foreground/15'} />
              {/* Gap (dielectric) */}
              <rect x="8" y="15" width="20" height="5" rx="0.5" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-muted-foreground/10" />
              {/* Bottom plate */}
              <rect x="6" y="20" width="24" height="3" rx="0.5" className={bit ? 'fill-blue-500/80' : 'fill-muted-foreground/15'} />
              {/* Wire bottom */}
              <line x1="18" y1="23" x2="18" y2="34" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/40" />
              {/* Charge indicator */}
              {bit === 1 && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <circle cx="18" cy="17.5" r="3" fill="rgb(59, 130, 246)" opacity="0.3" />
                  <text x="18" y="19.5" className="text-[6px] font-mono font-bold" fill="rgb(59, 130, 246)" textAnchor="middle">+</text>
                </motion.g>
              )}
              {/* Bit label */}
              <text x="18" y="43" className="fill-foreground/60 text-[8px] font-mono" textAnchor="middle">{bit}</text>
            </svg>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-[11px] text-muted-foreground/50">
        Charged capacitor = 1, discharged = 0. Charge leaks over milliseconds — that is why RAM needs constant refreshing.
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────── */
/* HDD — Magnetic domains on platter                           */
/* ──────────────────────────────────────────────────────────── */
function HddDiagram({ bits }: { bits: number[] }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Platter visualization */}
      <svg viewBox="0 0 380 80" className="w-full max-w-[380px]">
        {/* Track background */}
        <rect x="10" y="15" width={360} height="50" rx="6" className="fill-foreground/[0.03] dark:fill-foreground/[0.06]" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        
        {bits.map((bit, i) => {
          const x = 15 + i * 44;
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.06 }}
            >
              {/* Domain segment */}
              <rect x={x} y="20" width="38" height="40" rx="3" className={`${bit ? 'fill-violet-500/15 dark:fill-violet-400/10' : 'fill-foreground/[0.03] dark:fill-foreground/[0.05]'}`} />
              
              {/* Magnetic arrow */}
              <motion.g
                initial={{ rotate: bit ? 0 : 180 }}
                animate={{ rotate: bit ? 0 : 180 }}
                transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                style={{ transformOrigin: `${x + 19}px 40px` }}
              >
                <line x1={x + 19} y1="50" x2={x + 19} y2="28" stroke={bit ? 'rgb(139, 92, 246)' : 'currentColor'} strokeWidth="1.5" opacity={bit ? 0.8 : 0.25} />
                <polygon
                  points={`${x + 15},32 ${x + 19},24 ${x + 23},32`}
                  fill={bit ? 'rgb(139, 92, 246)' : 'currentColor'}
                  opacity={bit ? 0.8 : 0.25}
                />
              </motion.g>

              {/* N/S labels */}
              <text x={x + 19} y={bit ? 58 : 34} className={`text-[6px] font-mono font-bold ${bit ? 'fill-violet-500/60' : 'fill-muted-foreground/30'}`} textAnchor="middle">
                {bit ? 'N' : 'S'}
              </text>

              {/* Bit value */}
              <text x={x + 19} y="72" className="fill-foreground/60 text-[8px] font-mono" textAnchor="middle">{bit}</text>
            </motion.g>
          );
        })}
      </svg>
      <p className="text-center text-[11px] text-muted-foreground/50">
        Each magnetic domain points North (1) or South (0). Data persists without power — the magnetization holds.
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────── */
/* SSD — Floating gate transistors                              */
/* ──────────────────────────────────────────────────────────── */
function SsdDiagram({ bits }: { bits: number[] }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-8 gap-2">
        {bits.map((bit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col items-center gap-1"
          >
            <svg width="38" height="50" viewBox="0 0 38 50">
              {/* Control gate */}
              <rect x="4" y="2" width="30" height="6" rx="1" className="fill-muted-foreground/20" />
              <text x="19" y="7" className="text-[4px] fill-muted-foreground/50 font-mono" textAnchor="middle">CG</text>
              
              {/* Oxide layer */}
              <rect x="6" y="10" width="26" height="2" className="fill-muted-foreground/10" />
              
              {/* Floating gate */}
              <rect x="6" y="14" width="26" height="10" rx="1" className={bit ? 'fill-emerald-500/25 dark:fill-emerald-400/20' : 'fill-foreground/[0.04] dark:fill-foreground/[0.06]'} stroke={bit ? 'rgb(16, 185, 129)' : 'currentColor'} strokeWidth="0.5" strokeOpacity={bit ? 0.5 : 0.1} />
              
              {/* Trapped electrons */}
              {bit === 1 && (
                <>
                  {[10, 16, 22, 28].map((ex, j) => (
                    <motion.circle
                      key={j}
                      cx={ex}
                      cy={19}
                      r="1.5"
                      fill="rgb(16, 185, 129)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.4, 0.9, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: j * 0.2 }}
                    />
                  ))}
                  <text x="19" y="21" className="text-[4px] font-mono font-bold fill-emerald-600 dark:fill-emerald-400" textAnchor="middle">e-</text>
                </>
              )}
              
              {/* Oxide layer */}
              <rect x="6" y="26" width="26" height="2" className="fill-muted-foreground/10" />
              
              {/* Channel */}
              <rect x="2" y="30" width="34" height="6" rx="1" className="fill-muted-foreground/10" />
              <text x="19" y="35" className="text-[4px] fill-muted-foreground/40 font-mono" textAnchor="middle">CH</text>
              
              {/* Source / Drain */}
              <rect x="0" y="38" width="14" height="5" rx="1" className="fill-muted-foreground/15" />
              <rect x="24" y="38" width="14" height="5" rx="1" className="fill-muted-foreground/15" />
              <text x="7" y="42" className="text-[3.5px] fill-muted-foreground/40 font-mono" textAnchor="middle">S</text>
              <text x="31" y="42" className="text-[3.5px] fill-muted-foreground/40 font-mono" textAnchor="middle">D</text>
              
              {/* Bit label */}
              <text x="19" y="50" className="fill-foreground/60 text-[8px] font-mono" textAnchor="middle">{bit}</text>
            </svg>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-[11px] text-muted-foreground/50">
        Electrons trapped in the floating gate = 1. Empty gate = 0. No power needed to hold the charge.
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────── */
/* Fiber — Light pulses                                        */
/* ──────────────────────────────────────────────────────────── */
function FiberDiagram({ bits }: { bits: number[] }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <svg viewBox="0 0 400 70" className="w-full max-w-[400px]">
        {/* Fiber cable outline */}
        <rect x="10" y="15" width="380" height="30" rx="15" className="fill-foreground/[0.03] dark:fill-foreground/[0.06]" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        {/* Core */}
        <rect x="15" y="23" width="370" height="14" rx="7" className="fill-foreground/[0.02] dark:fill-foreground/[0.03]" />
        
        {bits.map((bit, i) => {
          const cx = 40 + i * 44;
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              {bit === 1 ? (
                <>
                  <motion.circle
                    cx={cx}
                    cy={30}
                    r="8"
                    fill="rgb(239, 68, 68)"
                    opacity={0.08}
                    animate={{ r: [8, 12, 8], opacity: [0.08, 0.15, 0.08] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
                  />
                  <motion.circle
                    cx={cx}
                    cy={30}
                    r="4"
                    fill="rgb(239, 68, 68)"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
                  />
                </>
              ) : (
                <circle cx={cx} cy={30} r="3" fill="currentColor" opacity="0.06" />
              )}
              <text x={cx} y="58" className="fill-foreground/60 text-[8px] font-mono" textAnchor="middle">{bit}</text>
            </motion.g>
          );
        })}
        
        {/* Direction arrow */}
        <polygon points="390,28 398,30 390,32" fill="currentColor" opacity="0.15" />
      </svg>
      <p className="text-center text-[11px] text-muted-foreground/50">
        Light pulse = 1, darkness = 0. Photons travel at ~200,000 km/s through glass fiber.
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────── */
/* Main component                                              */
/* ──────────────────────────────────────────────────────────── */
const DIAGRAMS: Record<Medium, React.ComponentType<{ bits: number[] }>> = {
  wire: WireDiagram,
  ram: RamDiagram,
  hdd: HddDiagram,
  ssd: SsdDiagram,
  fiber: FiberDiagram,
};

export function StorageMediumDiagram() {
  const [activeMedium, setActiveMedium] = useState<Medium>('wire');
  const [bits, setBits] = useState([0, 1, 0, 0, 1, 0, 0, 0]); // 'H'

  const ActiveDiagram = DIAGRAMS[activeMedium];
  const char = String.fromCharCode(parseInt(bits.join(''), 2));
  const activeTab = TABS.find((t) => t.id === activeMedium)!;

  const toggleBit = (i: number) => {
    setBits((prev) => {
      const next = [...prev];
      next[i] = next[i] === 0 ? 1 : 0;
      return next;
    });
  };

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border/60 bg-card/30">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
        <div className="flex items-center gap-2">
          <motion.div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: activeTab.color }}
            layoutId="medium-dot"
          />
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Storage Medium Comparison
          </span>
        </div>
        <span className="font-mono text-xs tabular-nums text-muted-foreground">
          {bits.join('')} = &quot;{char}&quot;
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 overflow-x-auto border-b border-border/40">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveMedium(tab.id)}
            className={`relative whitespace-nowrap px-4 py-2.5 text-xs font-medium transition-colors ${
              activeMedium === tab.id
                ? 'text-foreground'
                : 'text-muted-foreground/60 hover:text-muted-foreground'
            }`}
          >
            {tab.label}
            {activeMedium === tab.id && (
              <motion.div
                layoutId="medium-underline"
                className="absolute inset-x-0 bottom-0 h-[1.5px]"
                style={{ backgroundColor: tab.color }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Diagram area */}
      <div className="px-5 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMedium}
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
            transition={{ duration: 0.25 }}
          >
            <ActiveDiagram bits={bits} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Byte editor */}
      <div className="border-t border-border/40 px-5 py-4">
        <span className="mb-2 block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Edit the byte
        </span>
        <div className="flex gap-[3px]">
          {bits.map((bit, i) => (
            <motion.button
              key={i}
              onClick={() => toggleBit(i)}
              whileTap={{ scale: 0.92 }}
              className={`flex h-9 w-9 items-center justify-center rounded font-mono text-sm font-medium tabular-nums transition-colors duration-150 ${
                bit === 1
                  ? 'bg-foreground text-background'
                  : 'bg-foreground/[0.06] text-muted-foreground hover:bg-foreground/[0.1] dark:bg-foreground/[0.1] dark:hover:bg-foreground/[0.15]'
              }`}
            >
              {bit}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
