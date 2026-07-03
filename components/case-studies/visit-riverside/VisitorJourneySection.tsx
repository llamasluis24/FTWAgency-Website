"use client";

import { useState } from "react";
import {
  Compass,
  LayoutGrid,
  MapPinned,
  Navigation,
  Search,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { visitRiversideJourneySteps } from "@/content/case-studies/visit-riverside";
import { JourneyVisual } from "./DestinationUI";

const EASE = [0.22, 1, 0.36, 1] as const;

const STEP_ICONS = {
  search: Search,
  discover: Compass,
  explore: LayoutGrid,
  choose: MapPinned,
  visit: Navigation,
} as const;

export function VisitorJourneySection() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = visitRiversideJourneySteps[activeIndex];
  const ActiveIcon = STEP_ICONS[active.id as keyof typeof STEP_ICONS];

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,212,255,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">The Visitor Journey</p>
          <h2 className="text-3xl font-semibold text-heading md:text-[2.75rem]">
            From Search to Discovery
          </h2>
          <p className="mt-4 text-base text-body md:text-lg">
            Five moments that turn a search query into a real Riverside visit.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 md:mt-14">
          <div className="flex items-center justify-between gap-1 overflow-x-auto pb-2 md:gap-0 md:overflow-visible">
            {visitRiversideJourneySteps.map((step, index) => {
              const Icon = STEP_ICONS[step.id as keyof typeof STEP_ICONS];
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;

              return (
                <div key={step.id} className="flex flex-1 items-center">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className="group flex min-w-[72px] flex-col items-center gap-2 md:min-w-0"
                  >
                    <span
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300 md:h-12 md:w-12",
                        isActive
                          ? "border-[#60d8b8] bg-[#60d8b8]/15 text-[#60d8b8] shadow-[0_0_24px_rgba(96,216,184,0.35)]"
                          : isPast
                            ? "border-[#60d8b8]/40 bg-[#60d8b8]/5 text-[#60d8b8]/80"
                            : "border-white/10 bg-white/5 text-muted group-hover:border-[#60d8b8]/30 group-hover:text-body",
                      )}
                    >
                      <Icon className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={1.75} />
                    </span>
                    <span
                      className={cn(
                        "text-[10px] font-semibold uppercase tracking-[0.14em] md:text-[11px]",
                        isActive ? "text-[#60d8b8]" : isPast ? "text-[#60d8b8]/70" : "text-muted",
                      )}
                    >
                      {step.title}
                    </span>
                  </button>
                  {index < visitRiversideJourneySteps.length - 1 && (
                    <div
                      className={cn(
                        "mx-1 hidden h-px flex-1 md:block",
                        index < activeIndex ? "bg-[#60d8b8]/50" : "bg-white/10",
                      )}
                      aria-hidden
                    />
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-8 md:mt-10">
          <motion.div
            key={active.id}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-[#121821]/80 shadow-[0_0_60px_rgba(0,212,255,0.06)] backdrop-blur-sm"
          >
            <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <div className="flex flex-col justify-center border-b border-white/8 p-6 md:p-8 lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <ActiveIcon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p className="eyebrow text-accent">
                    Step {active.step} — {active.title}
                  </p>
                </div>
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-heading md:text-3xl">
                  {active.headline}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-body">
                  {active.body}
                </p>
                <div className="mt-6 flex items-center gap-2">
                  {visitRiversideJourneySteps.map((step, i) => (
                    <span
                      key={step.id}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === activeIndex ? "w-8 bg-accent" : "w-1.5 bg-white/15",
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="relative min-h-[280px] bg-[#0B0F14] p-4 md:min-h-[360px] md:p-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,212,255,0.06),transparent)]" />
                <div className="relative h-full min-h-[248px] md:min-h-[312px]">
                  <JourneyVisual stepId={active.id} variant="large" />
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
