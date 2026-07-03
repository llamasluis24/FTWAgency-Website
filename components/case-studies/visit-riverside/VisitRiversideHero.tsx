"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { visitRiversideCategories, visitRiversideHero } from "@/content/case-studies/visit-riverside";
import { BrowserFrame, PlatformScreenshot } from "./DestinationUI";

export function VisitRiversideHero({ slug }: { slug: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[92vh] overflow-hidden bg-[#0B0F14]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(0,212,255,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0F14] via-transparent to-[#0B0F14]" />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 md:pt-36 lg:px-8"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <Breadcrumbs
              items={[
                { name: "Case Studies", path: "/case-studies" },
                { name: "Visit Riverside", path: `/case-studies/${slug}` },
              ]}
            />
            <p className="eyebrow mb-4 mt-6">{visitRiversideHero.eyebrow}</p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-white md:text-5xl lg:text-[3.25rem]">
              {visitRiversideHero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
              {visitRiversideHero.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {visitRiversideHero.tags.map((tag) => (
                <Badge key={tag} tone={tag === "Website Design" ? "accent" : "neutral"}>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -left-6 top-8 z-20 hidden rotate-[-6deg] rounded-xl border border-white/10 bg-[#121821]/90 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur md:block">
              Restaurants
            </div>
            <div className="absolute -right-4 top-16 z-20 hidden rotate-[5deg] rounded-xl border border-accent/30 bg-accent/10 px-3 py-2 text-xs font-semibold text-accent shadow-[0_0_24px_rgba(0,212,255,0.2)] backdrop-blur md:block">
              Events
            </div>
            <div className="absolute -left-2 bottom-12 z-20 hidden rotate-[4deg] rounded-xl border border-white/10 bg-[#121821]/90 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur md:block">
              Things To Do
            </div>
            <div className="absolute -right-6 bottom-8 z-20 hidden rotate-[-4deg] rounded-xl border border-white/10 bg-[#121821]/90 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur md:block">
              Arts & Culture
            </div>

            <BrowserFrame className="relative z-10">
              <PlatformScreenshot />
            </BrowserFrame>

            <div className="mt-4 flex flex-wrap justify-center gap-2 lg:hidden">
              {visitRiversideCategories.map((cat) => (
                <span
                  key={cat.label}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/80"
                >
                  {cat.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0F14] to-transparent" />
    </section>
  );
}
