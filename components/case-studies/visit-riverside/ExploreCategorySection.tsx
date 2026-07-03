"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import {
  visitRiversideCategoryExplorer,
  visitRiversideExecution,
  type VisitRiversideCategoryId,
  type VisitRiversideInteractiveCategory,
} from "@/content/case-studies/visit-riverside";
import { BrowserFrame } from "./DestinationUI";
import { InteractiveDirectoryView } from "./InteractiveDirectoryView";
import { StaticCategoryScreenshot } from "./StaticCategoryScreenshot";
import { VisitRiversideLogo } from "./VisitRiversideLogo";

const EASE = [0.22, 1, 0.36, 1] as const;

function isInteractiveCategory(
  tab: (typeof visitRiversideCategoryExplorer)[number],
): tab is VisitRiversideInteractiveCategory {
  return tab.interactive === true;
}

export function ExploreCategorySection() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<VisitRiversideCategoryId>("restaurants");
  const active =
    visitRiversideCategoryExplorer.find((tab) => tab.id === activeId) ??
    visitRiversideCategoryExplorer[0];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <BrowserFrame url="visitriverside.com" className="relative z-10 overflow-hidden">
              <motion.div
                key={active.id}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                {isInteractiveCategory(active) ? (
                  <InteractiveDirectoryView category={active} />
                ) : (
                  <StaticCategoryScreenshot category={active} />
                )}
              </motion.div>
            </BrowserFrame>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="eyebrow mb-4">{visitRiversideExecution.eyebrow}</p>
            <h2 className="text-3xl font-semibold leading-tight text-heading md:text-4xl">
              {visitRiversideExecution.headline}
            </h2>
            <p className="mt-6 text-base leading-[1.75] text-body md:text-lg">
              {visitRiversideExecution.body}
            </p>
            <p className="mt-4 text-sm text-muted">
              {isInteractiveCategory(active)
                ? "Click a category, then explore listings and map pins inside the mockup."
                : "Browse category pages built for discovery across Riverside."}
            </p>
            <div className="mt-8 overflow-hidden rounded-xl border border-[#1a2744]/60 bg-[#1a2744] shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
              <div className="border-b border-white/10 px-4 py-3 md:px-5">
                <VisitRiversideLogo size="sm" />
              </div>
              <div className="flex gap-0 overflow-x-auto">
                {visitRiversideCategoryExplorer.map((tab) => {
                  const isActive = tab.id === activeId;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveId(tab.id)}
                      className={cn(
                        "shrink-0 border-b-2 px-3 py-3 text-[11px] font-semibold uppercase tracking-wide transition-colors duration-200 md:px-4 md:text-xs",
                        isActive
                          ? "border-[#f26522] bg-white/5 text-white"
                          : "border-transparent text-white/55 hover:bg-white/[0.03] hover:text-white/85",
                      )}
                      aria-pressed={isActive}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
