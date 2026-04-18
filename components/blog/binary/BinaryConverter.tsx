"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

function charToBinary(char: string): string {
  return char.charCodeAt(0).toString(2).padStart(8, "0");
}

function CharacterBreakdown({ char, index }: { char: string; index: number }) {
  const binary = charToBinary(char);
  const decimal = char.charCodeAt(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        delay: index * 0.06,
      }}
      className="flex w-full items-center gap-2 overflow-x-auto rounded-lg border border-border/60 bg-card/50 \
        bg-[url(/noise-compressed.png)] bg-[size:auto_50px] px-3 py-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-3 sm:px-4 [&::-webkit-scrollbar]:hidden"
    >
      {/* Character */}
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-foreground/[0.04] font-serif text-base font-semibold text-foreground sm:h-10 sm:w-10 sm:text-lg dark:bg-foreground/[0.02]">
        {char === " " ? "␣" : char}
      </span>

      {/* Arrow */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="shrink-0 text-muted-foreground/50"
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Decimal */}
      <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
        {decimal}
      </span>

      {/* Arrow */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="shrink-0 text-muted-foreground/50"
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Binary bits */}
      <div className="flex gap-[3px]">
        {binary.split("").map((bit, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: index * 0.06 + i * 0.03,
            }}
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded font-mono text-[10px] font-medium tabular-nums transition-colors duration-200 sm:h-7 sm:w-7 sm:text-xs ${
              bit === "1"
                ? "bg-foreground text-background"
                : "bg-foreground/[0.06] text-muted-foreground dark:bg-foreground/[0.1]"
            }`}
          >
            {bit}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export function BinaryConverter() {
  const [input, setInput] = useState("Hi");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const characters = useMemo(() => {
    if (mode === "encode") {
      return input.slice(0, 12).split("");
    }
    // Decode mode: parse binary string into characters
    const cleaned = input.replace(/[^01]/g, "");
    const chars: string[] = [];
    for (let i = 0; i < cleaned.length; i += 8) {
      const byte = cleaned.slice(i, i + 8);
      if (byte.length === 8) {
        chars.push(String.fromCharCode(parseInt(byte, 2)));
      }
    }
    return chars;
  }, [input, mode]);

  const binaryOutput = useMemo(() => {
    if (mode === "encode") {
      return input
        .slice(0, 12)
        .split("")
        .map((c) => charToBinary(c))
        .join(" ");
    }
    return characters.map((c) => c).join("");
  }, [input, characters, mode]);

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border/60 bg-[url(/noise-compressed.png)] bg-size-[auto_50px] dark:bg-[#27272b00]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Binary Converter
          </span>
        </div>

        {/* Mode toggle */}
        <div className="flex shrink-0 rounded-md border border-border/60 text-[11px]">
          <button
            onClick={() => {
              setMode("encode");
              setInput("Hi");
            }}
            className={`px-3 py-1.5 font-medium transition-colors ${
              mode === "encode"
                ? "bg-foreground/[0.06] text-foreground dark:bg-foreground/[0.1]"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Text → Binary
          </button>
          <button
            onClick={() => {
              setMode("decode");
              setInput("01001000 01101001");
            }}
            className={`border-l border-border/60 px-3 py-1.5 font-medium transition-colors ${
              mode === "decode"
                ? "bg-foreground/[0.06] text-foreground dark:bg-foreground/[0.1]"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Binary → Text
          </button>
        </div>
      </div>

      {/* Input */}
      <div className="border-b border-border/40 px-5 py-4">
        <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {mode === "encode" ? "Type something" : "Enter binary"}
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "encode" ? "Hello" : "01001000 01101001"}
          maxLength={mode === "encode" ? 12 : 96}
          className="w-full rounded-md border border-border/60 bg-background bg-[url(/noise-compressed.png)] bg-[size:auto_50px] px-3 py-2 font-mono text-xs text-foreground outline-none transition-colors placeholder:text-muted-foreground/40 focus:border-foreground/20 sm:text-sm"
          spellCheck={false}
        />
      </div>

      {/* Output */}
      <div className="px-5 py-4">
        {/* Result line */}
        {binaryOutput && (
          <div className="mb-4 rounded-md bg-foreground/[0.03] bg-[url(/noise-compressed.png)] bg-[size:auto_50px] px-4 py-2.5 dark:bg-foreground/[0.05]">
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              {mode === "encode" ? "Binary output" : "Decoded text"}
            </span>
            <p className="mt-1 break-all font-mono text-sm leading-relaxed text-foreground/80">
              {binaryOutput}
            </p>
          </div>
        )}

        {/* Character breakdown */}
        <div className="space-y-2">
          <AnimatePresence mode="popLayout">
            {characters.map((char, i) => (
              <CharacterBreakdown
                key={`${char}-${i}-${input}`}
                char={char}
                index={i}
              />
            ))}
          </AnimatePresence>
        </div>

        {characters.length === 0 && (
          <p className="py-6 text-center text-sm text-muted-foreground/60">
            {mode === "encode"
              ? "Start typing to see the binary breakdown"
              : "Enter 8-bit binary sequences (e.g. 01001000)"}
          </p>
        )}
      </div>
    </div>
  );
}
