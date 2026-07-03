"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function FarmHouseBrandBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? (["0%", "0%"] as const) : (["-4%", "4%"] as const),
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden bg-[#0B0F14]">
      <motion.div
        className="relative flex min-h-[min(42vh,380px)] w-full flex-col justify-between px-6 py-8 md:min-h-[min(48vh,440px)] md:px-12 md:py-10 lg:px-16"
        style={{ y, opacity }}
      >
        <div className="flex items-start justify-between gap-6 text-[10px] font-normal tracking-wide text-heading/80 antialiased md:text-xs">
          <p>All rights reserved — 1952-2026</p>
          <p className="text-right">© The Farm House Collective</p>
        </div>

        <div className="mt-auto select-none pb-2 md:pb-4">
          <p className="font-display text-[clamp(3.5rem,14vw,9.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-heading antialiased">
            Farm House
          </p>
          <p className="font-display text-[clamp(3.5rem,14vw,9.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-heading antialiased">
            Collective
          </p>
        </div>
      </motion.div>
    </div>
  );
}
