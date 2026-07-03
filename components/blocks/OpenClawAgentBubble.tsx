"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const AGENT_COMMANDS = [
  { command: "> route: website form", status: "Parsing lead intent…" },
  { command: "> qualify lead score", status: "Hot · Service match confirmed" },
  { command: "> respond via sms", status: "Reply sent in 8 seconds" },
  { command: "> book calendar slot", status: "Thu 2:30 PM locked in" },
  { command: "> sync crm pipeline", status: "Deal stage · nurture queued" },
] as const;

/**
 * Interactive OpenClaw agent in the qualification hub — cycles commands
 * to preview an agent acting on inbound leads.
 */
export function OpenClawAgentBubble() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = AGENT_COMMANDS[index];

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % AGENT_COMMANDS.length);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(advance, 3600);
    return () => clearInterval(id);
  }, [advance, reduceMotion]);

  return (
    <button
      type="button"
      onClick={advance}
      className="group mx-auto mb-2 flex w-[168px] shrink-0 flex-col items-center text-left"
      aria-label="OpenClaw qualification agent demo. Activate to run the next command."
    >
      <motion.div
        aria-hidden
        className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-gradient-to-br from-accent/20 via-[#1a2330] to-red-600/25 shadow-[0_0_48px_rgba(0,212,255,0.28)]"
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {!reduceMotion && (
          <motion.span
            className="absolute inset-0 rounded-full border border-accent/40"
            animate={{ scale: [1, 1.14, 1], opacity: [0.55, 0, 0.55] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1, rotate: index % 2 === 0 ? -4 : 4 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-[1] flex items-center justify-center"
          >
            <Image
              src="/partners/openclaw.svg"
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 drop-shadow-[0_4px_14px_rgba(255,77,77,0.5)]"
            />
          </motion.div>
        </AnimatePresence>

        {!reduceMotion && (
          <motion.span
            className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-success shadow-[0_0_10px_rgba(46,212,122,0.6)]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </motion.span>
        )}
      </motion.div>

      <div
        className="relative mt-2.5 h-[38px] w-[168px] shrink-0 overflow-hidden rounded-md border border-white/10 bg-[#0B0F14]/90 font-mono"
        aria-live="polite"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex flex-col justify-center px-2 py-1.5"
          >
            <p className="truncate text-[9px] font-medium leading-[11px] text-accent">
              {current.command}
            </p>
            <p className="mt-0.5 truncate text-[8px] leading-[11px] text-muted">
              {!reduceMotion && (
                <span className="mr-1 inline-flex gap-0.5 align-middle" aria-hidden>
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      key={dot}
                      className="inline-block h-0.5 w-0.5 rounded-full bg-accent/70"
                      animate={{ opacity: [0.25, 1, 0.25] }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        delay: dot * 0.18,
                      }}
                    />
                  ))}
                </span>
              )}
              {current.status}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-1 h-[10px] w-full shrink-0 text-center text-[8px] leading-[10px] text-muted/60 transition-colors group-hover:text-accent/80">
        Tap to run next command
      </p>
    </button>
  );
}
