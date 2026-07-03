"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FtwAgencyLogoBadge } from "@/components/about/FtwAgencyLogoBadge";
import { AboutHeroBackground } from "@/components/about/AboutHeroBackground";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const STAT_TILES = [
  { label: "Built by", value: "Entrepreneurs" },
  { label: "Model", value: "One Partner" },
  { label: "Focus", value: "Systems" },
  { label: "Outcome", value: "Revenue" },
];

function HeroEmblem({ className }: { className?: string }) {
  return (
    <div className={cn("w-full text-center", className)}>
      <div className="origin-center scale-[0.88] sm:scale-100 md:scale-110 lg:scale-[1.18] xl:scale-[1.28] 2xl:scale-[1.35]">
        <FtwAgencyLogoBadge variant="emblem" centerGlobe />
      </div>

      <div className="mx-auto mt-8 grid max-w-[17rem] grid-cols-2 gap-3 sm:max-w-[20rem] sm:gap-3.5 md:mt-10 md:max-w-[22rem] lg:max-w-[24rem]">
        {STAT_TILES.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3.5 py-3 backdrop-blur-sm sm:px-4 sm:py-3.5"
          >
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted sm:text-[0.65rem]">
              {item.label}
            </p>
            <p className="mt-0.5 font-display text-xs font-semibold text-heading sm:text-sm">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AboutHero() {
  const reduceMotion = useReducedMotion();

  const enter = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.75, ease: EASE },
        };

  return (
    <section className="relative flex min-h-[88vh] flex-col overflow-hidden border-b border-white/5 bg-[#0B0F14] md:min-h-[92vh]">
      <AboutHeroBackground />

      <Container className="relative z-10 flex flex-1 flex-col px-4 pb-16 pt-28 sm:px-5 md:pb-20 md:pt-32 lg:px-6 lg:pt-36">
        <motion.div {...enter(0)} className="ml-6 sm:ml-10 md:ml-14 lg:ml-20">
          <div className="[&_nav]:mb-0">
            <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
          </div>
        </motion.div>

        <div className="flex flex-1 flex-col items-center justify-center py-10 md:py-14">
          <motion.div {...enter(0.12)} className="w-full">
            <HeroEmblem />
          </motion.div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0B0F14]" />
    </section>
  );
}
