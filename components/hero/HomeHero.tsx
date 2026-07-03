"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GrowthEngineCanvas } from "./GrowthEngineCanvas";
import { FloatingPanels } from "./FloatingPanels";
import { IndustrySwitcher } from "./IndustrySwitcher";
import { LiveTicker } from "./LiveTicker";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Section 1 — The FTW Growth Engine.
 * Staged cinematic entrance: ambient (0s) → network draw-in (0.8s) →
 * data flow (1.8s) → headline (2.0s) → CTAs + switcher (2.4s).
 */
export function HomeHero() {
  const reduceMotion = useReducedMotion();

  const enter = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.8, ease: EASE },
        };

  return (
    <section className="hero-section relative flex min-h-svh items-center overflow-hidden pb-16 pt-28 md:pt-24">
      {/* Layered dark environment */}
      <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_70%_at_60%_40%,black,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_70%_45%,rgba(0,212,255,0.07),transparent)]" />

      {/* The Growth Engine network */}
      <GrowthEngineCanvas
        staged
        mode="hero"
        className="absolute inset-0 h-full w-full opacity-60 md:opacity-100 lg:left-[22%] lg:w-[78%]"
      />

      {/* Floating UI panels */}
      <FloatingPanels />

      {/* Headline + CTAs + industry switcher */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p {...enter(2.0)} className="eyebrow mb-5">
            The FTW Growth Engine
          </motion.p>

          <motion.h1
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.05, duration: 0.8, ease: EASE }}
            className="text-[2.6rem] font-semibold leading-[1.06] tracking-[-0.02em] md:text-6xl lg:text-[4.25rem]"
          >
            Helping Businesses Generate More Leads, Automate Operations, and{" "}
            <span className="accent-serif">Scale</span>.
          </motion.h1>

          <motion.p {...enter(2.25)} className="mt-6 max-w-xl text-lg text-body md:text-xl">
            Custom Websites, SEO, AIO, Advertising, Automation, Mobile Apps, and
            Software Solutions designed to accelerate growth.
          </motion.p>

          <motion.div {...enter(2.45)} className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-[10px] bg-accent px-7 py-3.5 font-display text-base font-semibold text-[#04222b] transition-all hover:shadow-[0_0_36px_rgba(0,212,255,0.5)]"
            >
              Schedule Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-[10px] border border-white/15 px-7 py-3.5 font-display text-base font-semibold text-heading transition-colors hover:border-accent/50 hover:text-accent"
            >
              View Portfolio
            </Link>
          </motion.div>

          <motion.div {...enter(2.65)} className="relative z-30 mt-8">
            <IndustrySwitcher />
          </motion.div>

          <div className="relative z-0 mt-6">
            <LiveTicker />
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-bg" />
    </section>
  );
}
