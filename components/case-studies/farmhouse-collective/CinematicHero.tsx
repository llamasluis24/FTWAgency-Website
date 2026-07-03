"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { farmhouseHero } from "@/content/case-studies/farmhouse-collective";

type HeroContent = typeof farmhouseHero;

export function CinematicHero({ hero, slug }: { hero: HeroContent; slug: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], [0, 40]);

  return (
    <section ref={ref} className="relative min-h-[92vh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover object-[72%_38%] brightness-[1.06] saturate-[1.05]"
          sizes="100vw"
          quality={100}
          unoptimized
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/60 via-[#0B0F14]/10 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,15,20,0.62)_0%,rgba(11,15,20,0.15)_38%,transparent_58%)]" />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-start px-4 pb-16 pt-28 sm:px-6 md:pt-36 lg:px-8 lg:pt-40"
      >
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-x-16">
          <div className="-mt-[1in] max-w-2xl">
            <h1 className="mt-[0.5in] max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-white md:text-6xl lg:text-[4.25rem]">
              {hero.headline}
            </h1>
            <div className="mt-[2in]">
              <p className="max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
                {hero.subheadline}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {hero.tags.map((tag) => (
                  <Badge key={tag} tone={tag === "Website Design" ? "accent" : "neutral"}>
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="#the-story" size="lg" showArrow>
                  Explore the Project
                </Button>
                <Button href="https://farmhousecollective.com/" variant="ghost" size="lg">
                  Visit the Website
                </Button>
              </div>
            </div>
          </div>

          <div className="flex w-full max-w-lg flex-col items-start text-left lg:ml-auto lg:items-end lg:text-right [&_ol]:justify-start lg:[&_ol]:justify-end">
            <Breadcrumbs
              items={[
                { name: "Case Studies", path: "/case-studies" },
                { name: hero.title, path: `/case-studies/${slug}` },
              ]}
            />
            <p className="eyebrow mb-4 mt-6">{hero.eyebrow}</p>
            <p className="font-display text-lg font-medium tracking-wide text-white/70 md:text-xl">
              {hero.title}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
