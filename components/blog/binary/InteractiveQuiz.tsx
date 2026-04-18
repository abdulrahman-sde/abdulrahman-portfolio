'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface QuizProps {
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

export function InteractiveQuiz({
  question,
  options,
  answer,
  explanation,
}: QuizProps) {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const isCorrect = selected === answer;
  const hasOptions = options && options.length > 0;

  return (
    <div className="my-6 rounded-xl border border-border/60 bg-card/30 overflow-hidden">
      {/* Question */}
      <div className="px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-foreground/[0.05] dark:bg-foreground/[0.08]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <p className="text-sm font-medium leading-relaxed text-foreground/90">
            {question}
          </p>
        </div>

        {/* Options */}
        {hasOptions && !revealed && (
          <div className="mt-4 ml-9 flex flex-col gap-2">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelected(option);
                  setRevealed(true);
                }}
                className={`rounded-lg border border-border/60 px-4 py-2.5 text-left text-sm transition-all duration-150 hover:border-foreground/15 hover:bg-foreground/[0.03] active:scale-[0.99] ${
                  selected === option
                    ? 'border-foreground/20 bg-foreground/[0.05]'
                    : ''
                }`}
              >
                <span className="text-foreground/80">{option}</span>
              </button>
            ))}
          </div>
        )}

        {/* Reveal button (no options) */}
        {!hasOptions && !revealed && (
          <div className="mt-3 ml-9">
            <button
              onClick={() => setRevealed(true)}
              className="rounded-md border border-border/60 px-4 py-2 text-xs font-medium text-muted-foreground transition-all duration-150 hover:border-foreground/15 hover:text-foreground active:scale-[0.98]"
            >
              Reveal answer
            </button>
          </div>
        )}
      </div>

      {/* Answer */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            className="overflow-hidden"
          >
            <div className={`border-t px-5 py-4 ${
              hasOptions
                ? isCorrect
                  ? 'border-emerald-500/20 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.06]'
                  : 'border-rose-500/20 bg-rose-500/[0.04] dark:bg-rose-500/[0.06]'
                : 'border-border/40 bg-foreground/[0.02]'
            }`}>
              <div className="flex items-start gap-3">
                {hasOptions && (
                  <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                    isCorrect
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      : 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
                  }`}>
                    {isCorrect ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                  </div>
                )}
                <div className="min-w-0">
                  {hasOptions && !isCorrect && (
                    <p className="mb-1 text-xs font-medium text-foreground/70">
                      Answer: <span className="font-semibold">{answer}</span>
                    </p>
                  )}
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {explanation}
                  </p>
                  {revealed && (
                    <button
                      onClick={() => { setRevealed(false); setSelected(null); }}
                      className="mt-2 text-[11px] font-medium text-muted-foreground/50 transition-colors hover:text-muted-foreground"
                    >
                      Try again
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
