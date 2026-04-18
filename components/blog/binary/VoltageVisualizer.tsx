'use client';

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';

const WIRE_LENGTH = 560;
const BIT_WIDTH = 70;
const HIGH_Y = 30;
const LOW_Y = 90;
const MID_Y = 120;

function generateWaveformPath(bits: number[]): string {
  if (bits.length === 0) return '';

  const points: string[] = [];
  let x = 0;

  bits.forEach((bit, i) => {
    const y = bit === 1 ? HIGH_Y : LOW_Y;
    const prevY = i > 0 ? (bits[i - 1] === 1 ? HIGH_Y : LOW_Y) : LOW_Y;

    if (i === 0) {
      // Start from left edge at the correct level
      points.push(`M 0 ${y}`);
    } else if (y !== prevY) {
      // Vertical transition with slight rounding
      points.push(`L ${x} ${prevY}`);
      points.push(`L ${x} ${y}`);
    }

    points.push(`L ${x + BIT_WIDTH} ${y}`);
    x += BIT_WIDTH;
  });

  return points.join(' ');
}

export function VoltageVisualizer() {
  const [bits, setBits] = useState([0, 1, 0, 0, 1, 0, 0, 0]); // 'H' = 72

  const toggleBit = (index: number) => {
    setBits((prev) => {
      const next = [...prev];
      next[index] = next[index] === 0 ? 1 : 0;
      return next;
    });
  };

  const waveformPath = useMemo(() => generateWaveformPath(bits), [bits]);
  const char = String.fromCharCode(parseInt(bits.join(''), 2));

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border/60 bg-card/30">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-amber-500/80" />
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Voltage Waveform
          </span>
        </div>
        <span className="font-mono text-xs tabular-nums text-muted-foreground">
          {bits.join('')} = &quot;{char}&quot;
        </span>
      </div>

      {/* Waveform SVG */}
      <div className="px-5 py-6">
        <div className="overflow-x-auto">
          <svg
            viewBox={`-40 0 ${WIRE_LENGTH + 80} ${MID_Y + 40}`}
            className="w-full min-w-[480px]"
            aria-label="Voltage waveform visualization"
          >
            {/* Grid lines */}
            <line x1="-30" y1={HIGH_Y} x2={WIRE_LENGTH + 10} y2={HIGH_Y} stroke="currentColor" strokeWidth="0.5" opacity="0.08" strokeDasharray="4 4" />
            <line x1="-30" y1={LOW_Y} x2={WIRE_LENGTH + 10} y2={LOW_Y} stroke="currentColor" strokeWidth="0.5" opacity="0.08" strokeDasharray="4 4" />

            {/* Voltage labels */}
            <text x="-38" y={HIGH_Y + 4} className="fill-muted-foreground text-[9px] font-mono" textAnchor="end">5V</text>
            <text x="-38" y={LOW_Y + 4} className="fill-muted-foreground text-[9px] font-mono" textAnchor="end">0V</text>

            {/* Logic level labels */}
            <text x="-38" y={HIGH_Y + 16} className="fill-muted-foreground/50 text-[8px]" textAnchor="end">HIGH</text>
            <text x="-38" y={LOW_Y - 8} className="fill-muted-foreground/50 text-[8px]" textAnchor="end">LOW</text>

            {/* Bit column separators */}
            {bits.map((_, i) => (
              <line
                key={`sep-${i}`}
                x1={i * BIT_WIDTH}
                y1={HIGH_Y - 10}
                x2={i * BIT_WIDTH}
                y2={LOW_Y + 10}
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.05"
              />
            ))}

            {/* Waveform */}
            <motion.path
              d={waveformPath}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground/70"
              initial={false}
              animate={{ d: waveformPath }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            />

            {/* Bit labels at top */}
            {bits.map((bit, i) => (
              <g key={`label-${i}`}>
                <text
                  x={i * BIT_WIDTH + BIT_WIDTH / 2}
                  y={HIGH_Y - 18}
                  className="fill-muted-foreground/40 text-[8px] font-mono"
                  textAnchor="middle"
                >
                  bit {7 - i}
                </text>
                <text
                  x={i * BIT_WIDTH + BIT_WIDTH / 2}
                  y={LOW_Y + 28}
                  className="fill-foreground text-[11px] font-mono font-medium"
                  textAnchor="middle"
                >
                  {bit}
                </text>
              </g>
            ))}

            {/* Time arrow at bottom */}
            <line x1="0" y1={MID_Y + 20} x2={WIRE_LENGTH - 20} y2={MID_Y + 20} stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
            <polygon points={`${WIRE_LENGTH - 20},${MID_Y + 17} ${WIRE_LENGTH - 10},${MID_Y + 20} ${WIRE_LENGTH - 20},${MID_Y + 23}`} fill="currentColor" opacity="0.15" />
            <text x={WIRE_LENGTH / 2} y={MID_Y + 35} className="fill-muted-foreground/40 text-[8px] uppercase tracking-[0.15em]" textAnchor="middle">time</text>
          </svg>
        </div>

        {/* Interactive bit toggles */}
        <div className="mt-5">
          <span className="mb-2 block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Toggle bits
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
                aria-label={`Toggle bit ${7 - i}, currently ${bit}`}
              >
                {bit}
              </motion.button>
            ))}
          </div>
          <p className="mt-2.5 text-xs text-muted-foreground/60">
            Click any bit to flip it and watch the voltage waveform change.
          </p>
        </div>
      </div>
    </div>
  );
}
