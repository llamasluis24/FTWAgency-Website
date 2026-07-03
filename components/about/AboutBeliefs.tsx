"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Container, Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function BeliefStatement({
  statement,
  index,
  isActive,
  isPinned,
  onActivate,
  onPin,
}: {
  statement: string;
  index: number;
  isActive: boolean;
  isPinned: boolean;
  onActivate: (index: number) => void;
  onPin: (index: number) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) onActivate(index);
  }, [isInView, index, onActivate]);

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={() => onPin(index)}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.04, ease: EASE }}
      animate={
        reduceMotion
          ? undefined
          : {
              scale: isActive ? 1 : 0.98,
            }
      }
      className={cn(
        "group relative flex w-full min-h-[22vh] scroll-mt-28 snap-center items-center justify-center rounded-2xl px-4 py-10 transition-colors duration-500 md:min-h-[26vh] md:py-14 lg:min-h-[28vh] lg:py-16",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60d8b8]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]",
        isActive && "bg-white/[0.02]",
      )}
      aria-pressed={isPinned}
    >
      {isActive && (
        <motion.div
          layoutId="belief-glow"
          className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(96,216,184,0.08),transparent_70%)]"
          transition={{ duration: 0.45, ease: EASE }}
        />
      )}

      <p
        className={cn(
          "relative max-w-4xl text-center font-display text-3xl font-semibold leading-[1.12] transition-all duration-500 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
          isActive
            ? "text-heading"
            : "text-heading/20 group-hover:text-heading/45",
        )}
      >
        {statement}
      </p>

      <span
        className={cn(
          "absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300",
          isActive ? "text-[#60d8b8] opacity-100" : "text-muted opacity-0 group-hover:opacity-60",
        )}
      >
        {isPinned ? "Pinned" : "Click to focus"}
      </span>
    </motion.button>
  );
}

export function AboutBeliefs({
  eyebrow,
  statements,
}: {
  eyebrow: string;
  statements: string[];
}) {
  const [scrollActive, setScrollActive] = useState(0);
  const [pinned, setPinned] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const statementRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduceMotion = useReducedMotion();

  const active = hovered ?? pinned ?? scrollActive;

  const handleActivate = useCallback((index: number) => {
    setScrollActive(index);
  }, []);

  const handlePin = useCallback(
    (index: number) => {
      setPinned((prev) => (prev === index ? null : index));
    },
    [],
  );

  const scrollToStatement = useCallback(
    (index: number) => {
      statementRefs.current[index]?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "center",
      });
      setScrollActive(index);
      setPinned(index);
    },
    [reduceMotion],
  );

  return (
    <Section className="relative !py-20 md:!py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(96,216,184,0.06),transparent)]" />
      <Container>
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-accent sm:text-base md:mb-5 md:text-lg">
          {eyebrow}
        </p>
        <p className="mb-10 text-center text-base text-muted md:mb-14 md:text-lg">
          Scroll, hover, or click a statement to focus it.
        </p>

        <div className="relative mx-auto flex max-w-5xl gap-6 md:gap-10">
          {/* Progress rail — sticky while scrolling through beliefs */}
          <div className="hidden w-14 shrink-0 self-start md:block lg:w-16">
            <div
              className="sticky top-28 flex flex-col items-center gap-3 lg:top-32"
              role="tablist"
              aria-label="Beliefs"
            >
            {statements.map((statement, index) => (
              <button
                key={statement}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-label={statement}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => scrollToStatement(index)}
                className={cn(
                  "group flex items-center gap-3 transition-all duration-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60d8b8]/50 rounded-full",
                )}
              >
                <span
                  className={cn(
                    "tnum flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-bold transition-all duration-300",
                    active === index
                      ? "border-[#60d8b8] bg-[#60d8b8]/15 text-[#60d8b8] shadow-[0_0_16px_rgba(96,216,184,0.25)]"
                      : "border-white/10 bg-surface/60 text-muted group-hover:border-[#60d8b8]/30 group-hover:text-[#60d8b8]/80",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "h-px w-0 bg-[#60d8b8]/50 transition-all duration-300",
                    active === index && "w-6",
                  )}
                  aria-hidden
                />
              </button>
            ))}
            </div>
          </div>

          {/* Statements */}
          <div className="relative min-w-0 flex-1 snap-y snap-proximity">
            <div
              className="pointer-events-none absolute inset-y-8 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#60d8b8]/20 to-transparent"
              aria-hidden
            />
            {statements.map((statement, index) => (
              <div
                key={statement}
                ref={(el) => {
                  statementRefs.current[index] = el;
                }}
                className="scroll-mt-28"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <BeliefStatement
                  statement={statement}
                  index={index}
                  isActive={active === index}
                  isPinned={pinned === index}
                  onActivate={handleActivate}
                  onPin={handlePin}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile dots */}
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {statements.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to belief ${index + 1}`}
              onClick={() => scrollToStatement(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                active === index ? "w-6 bg-[#60d8b8]" : "w-1.5 bg-white/20",
              )}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
