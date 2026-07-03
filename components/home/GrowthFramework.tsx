"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import {
  GrowthEngineCanvas,
  type EngineMode,
} from "@/components/hero/GrowthEngineCanvas";
import { AccentText } from "@/components/ui/AccentText";
import { cn } from "@/lib/utils";

interface Stage {
  key: EngineMode;
  title: string;
  description: string;
}

/**
 * Section 6 — The FTW Growth Framework. Scroll-pinned: the same Growth
 * Engine canvas from the hero reappears and rewires itself per stage.
 */
export function GrowthFramework({ stages }: { stages: Stage[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(stages.length - 1, Math.floor(v * stages.length));
    if (idx !== active) setActive(idx);
  });

  /* Mobile / reduced motion: simple stacked layout */
  const staticLayout = (
    <div className="space-y-6 lg:hidden">
      {stages.map((stage, i) => (
        <div key={stage.key} className="card-surface p-6">
          <span className="tnum font-display text-sm font-bold text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-heading">
            {stage.title}
          </h3>
          <p className="mt-2 text-body">{stage.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-surface py-20 md:py-0" id="framework">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:py-8 lg:px-8">
        <div className="mb-0 pt-0 text-center md:pt-20 lg:mb-0">
          <p className="eyebrow mb-3">The FTW Growth Framework</p>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold md:text-[2.75rem] md:leading-[1.1]">
            <AccentText text="One Engine. Four Stages. *Compounding* Growth." />
          </h2>
        </div>

        {staticLayout}

        {/* Pinned scroll experience (desktop) */}
        <div
          ref={containerRef}
          className="relative hidden lg:block"
          style={{ height: `${stages.length * 90}vh` }}
        >
          <div className="sticky top-0 flex h-screen items-center">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
              {/* Stage copy + progress */}
              <div>
                <div className="relative space-y-2 border-l border-white/10 pl-8">
                  {/* Progress line */}
                  <motion.div
                    className="absolute -left-px top-0 w-px bg-accent shadow-[0_0_12px_rgba(0,212,255,0.6)]"
                    animate={{
                      height: `${((active + 1) / stages.length) * 100}%`,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {stages.map((stage, i) => {
                    const isActive = i === active;
                    return (
                      <button
                        key={stage.key}
                        onClick={() => {
                          const el = containerRef.current;
                          if (!el) return;
                          const top =
                            el.offsetTop +
                            (i / stages.length) * el.offsetHeight;
                          window.scrollTo({
                            top,
                            behavior: reduceMotion ? "auto" : "smooth",
                          });
                        }}
                        className={cn(
                          "block w-full py-4 text-left transition-opacity duration-300",
                          isActive ? "opacity-100" : "opacity-35 hover:opacity-60",
                        )}
                      >
                        <span className="tnum font-display text-xs font-bold text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-1 font-display text-3xl font-semibold text-heading">
                          {stage.title}
                        </h3>
                        <p
                          className={cn(
                            "mt-2 max-w-md text-body transition-all duration-300",
                            isActive ? "max-h-32" : "max-h-0 overflow-hidden",
                          )}
                        >
                          {stage.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* The engine, rewired per stage */}
              <div
                className={cn(
                  "relative h-[70vh] overflow-hidden rounded-3xl border bg-bg transition-[border-color,box-shadow] duration-500",
                  stages[active].key === "automate"
                    ? "border-amber-400/35 shadow-[0_0_48px_rgba(255,176,32,0.14)]"
                    : stages[active].key === "convert"
                      ? "border-accent/25 shadow-[0_0_32px_rgba(0,212,255,0.08)]"
                      : stages[active].key === "scale"
                        ? "border-success/35 shadow-[0_0_48px_rgba(96,216,184,0.14)]"
                        : "border-white/5",
                )}
              >
                <div className="bg-grid absolute inset-0 opacity-40" />
                <GrowthEngineCanvas
                  mode={stages[active].key}
                  className="absolute inset-0 h-full w-full"
                />
                <div
                  className={cn(
                    "absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-bg/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur transition-colors duration-500",
                    stages[active].key === "automate"
                      ? "text-amber-300"
                      : stages[active].key === "scale"
                        ? "text-success"
                        : "text-accent",
                  )}
                >
                  {stages[active].title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
