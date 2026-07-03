"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { IndustryModuleFunnel } from "@/content/industries/modules/types";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const MIN_WIDTH_PCT = 36;
const MAX_WIDTH_PCT = 100;
const FTW_GREEN = "#60d8b8";

function stairWidth(index: number, total: number): number {
  if (total <= 1) return MAX_WIDTH_PCT;
  const step = (MAX_WIDTH_PCT - MIN_WIDTH_PCT) / (total - 1);
  return MAX_WIDTH_PCT - index * step;
}

function AnimatedValue({ value, active }: { value: number; active: boolean }) {
  const [display, setDisplay] = useState(active ? value : 0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!active || reduceMotion) {
      setDisplay(value);
      return;
    }
    let frame: number;
    const start = performance.now();
    const duration = 1200;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reduceMotion, value]);

  return <span className="tnum">{display.toLocaleString()}</span>;
}

export function IndustryFunnel({ content }: { content: IndustryModuleFunnel }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState<number | null>(null);
  const stageCount = content.stages.length;

  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />

        <div ref={ref} className="mx-auto max-w-3xl">
          <div className="space-y-1.5">
            {content.stages.map((stage, i) => {
              const widthPct = stairWidth(i, stageCount);
              const isOutcome = i === stageCount - 1;
              const isActive = hovered === null || hovered === i;
              const dropRate =
                i > 0
                  ? Math.round((stage.value / content.stages[i - 1].value) * 100)
                  : 100;

              return (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={cn(
                    "mx-auto transition-opacity duration-300",
                    !isActive && "opacity-45",
                  )}
                  style={{ width: `${widthPct}%` }}
                >
                  <div
                    className={cn(
                      "relative flex items-center justify-between gap-3 overflow-hidden rounded-lg px-4 py-3.5 text-bg transition-all duration-300 sm:gap-4 sm:px-5 sm:py-4",
                      !isOutcome && "bg-accent",
                      hovered === i &&
                        (isOutcome
                          ? "shadow-[0_0_28px_rgba(96,216,184,0.45)]"
                          : "shadow-[0_0_28px_rgba(0,212,255,0.35)]"),
                    )}
                    style={isOutcome ? { backgroundColor: FTW_GREEN } : undefined}
                  >
                    <span className="absolute bottom-0 left-0 top-0 w-1 bg-amber-400" />

                    <div className="min-w-0 pl-2">
                      <p className="font-display text-sm font-semibold leading-snug text-bg sm:text-base">
                        {stage.label}
                      </p>
                      {i > 0 && (
                        <p className="mt-0.5 text-[11px] text-bg/70 sm:text-xs">
                          {dropRate}% of previous stage
                        </p>
                      )}
                    </div>

                    <span className="tnum shrink-0 font-display text-base font-bold text-bg sm:text-lg">
                      <AnimatedValue value={stage.value} active={inView} />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <Reveal className="mt-10 text-center">
            <p className="mx-auto max-w-2xl text-lg text-body">{content.lede}</p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
