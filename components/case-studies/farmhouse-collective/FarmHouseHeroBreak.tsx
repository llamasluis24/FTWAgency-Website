"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const HERO_BG = "/showcases/websites/farmhouse-collective/break-home-hero-bg.jpg";

export function FarmHouseHeroBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? (["0%", "0%"] as const) : (["-5%", "5%"] as const),
  );

  return (
    <div ref={ref} className="relative w-full overflow-hidden bg-[#0B0F14]">
      <div className="relative min-h-[min(70vh,700px)] w-full">
        <motion.div className="absolute -inset-[10%] will-change-transform" style={{ y }}>
          <Image
            src={HERO_BG}
            alt="FarmHouse Collective courtyard at dusk"
            fill
            className="object-cover object-[50%_68%] brightness-[0.9] saturate-[0.98]"
            sizes="100vw"
            quality={100}
            unoptimized
            priority={false}
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-[#1a1210]/20" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0F14]/20 via-transparent to-[#0B0F14]/55" />

        <div className="relative flex min-h-[min(70vh,700px)] flex-col items-center justify-center px-6 py-14 text-center md:px-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <h2 className="font-display text-[clamp(1.85rem,5vw,3.25rem)] font-bold uppercase leading-[1.08] tracking-[0.05em] text-white antialiased">
              Grow Where You Are Planted
            </h2>
            <p className="mt-4 max-w-xl text-[clamp(0.62rem,1.2vw,0.72rem)] font-medium uppercase leading-[1.9] tracking-[0.2em] text-white/85 antialiased">
              A 1950&apos;s Motel Transformed Into a Unique Music Venue, Dining &amp; Retail
              Destination in Riverside, CA. Open Now.
            </p>

            <svg
              className="mt-5 h-7 w-7 text-white/85"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden
            >
              <path
                d="M16 4C12 4 10 8 10 12c0 4 2 8 6 12 4-4 6-8 6-12 0-4-2-8-6-8z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M16 8v4M14 10h4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
              <span className="min-w-[7.5rem] rounded-sm bg-[#6B1F28] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white antialiased md:min-w-[8.5rem] md:text-[11px]">
                Events
              </span>
              <span className="min-w-[10rem] rounded-sm border border-white/75 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white antialiased md:min-w-[11.5rem] md:text-[11px]">
                Explore the Collective
              </span>
              <span className="min-w-[7.5rem] rounded-sm bg-[#6B1F28] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white antialiased md:min-w-[8.5rem] md:text-[11px]">
                About
              </span>
            </div>

            <div className="mt-8 flex items-center gap-2" aria-hidden>
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
