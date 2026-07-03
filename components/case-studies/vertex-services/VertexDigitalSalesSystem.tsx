"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Section";
import { vertexSalesJourney } from "@/content/case-studies/vertex-services";
import { BlueprintGrid, SectionIntro, SteelPanel } from "./VertexChrome";

const EASE = [0.22, 1, 0.36, 1] as const;

export function VertexDigitalSalesSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!isInView || reduceMotion) {
      if (isInView && reduceMotion) setActiveIndex(vertexSalesJourney.length - 1);
      return;
    }
    setActiveIndex(0);
    const timers = vertexSalesJourney.map((_, index) =>
      window.setTimeout(() => setActiveIndex(index), index * 450),
    );
    return () => timers.forEach(clearTimeout);
  }, [isInView, reduceMotion]);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <BlueprintGrid className="opacity-30" />
      <Container className="relative">
        <Reveal className="text-center">
          <SectionIntro
            eyebrow="The Digital Sales System"
            headline="Every Customer Follows a Journey"
            body="From equipment failure to preventative maintenance — the platform supports the full commercial service lifecycle."
            centered
          />
        </Reveal>

        <div ref={ref} className="mx-auto mt-14 max-w-xl">
          {vertexSalesJourney.map((step, index) => {
            const isActive = activeIndex >= index;
            const isCurrent = activeIndex === index;
            return (
              <div key={step.id}>
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0.35,
                    scale: isActive ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <SteelPanel
                    className={cn(
                      "flex items-center gap-4 px-5 py-4",
                      isCurrent &&
                        "border-[#60d8b8]/40 shadow-[0_0_32px_rgba(96,216,184,0.18)]",
                    )}
                  >
                    <span
                      className={
                        isCurrent
                          ? "tnum flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#60d8b8] bg-[#60d8b8]/15 text-xs font-bold text-[#60d8b8] shadow-[0_0_24px_rgba(96,216,184,0.35)]"
                          : isActive
                            ? "tnum flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#60d8b8]/40 bg-[#60d8b8]/5 text-xs font-bold text-[#60d8b8]/80"
                            : "tnum flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-xs font-bold text-muted"
                      }
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-semibold text-heading md:text-base">{step.label}</p>
                  </SteelPanel>
                </motion.div>
                {index < vertexSalesJourney.length - 1 && (
                  <div className="flex justify-center py-1" aria-hidden>
                    <div
                      className={
                        isActive ? "h-6 w-px bg-[#60d8b8]/50" : "h-6 w-px bg-white/10"
                      }
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
