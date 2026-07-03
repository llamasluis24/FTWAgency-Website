"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { farmhouseShowcaseCards } from "@/content/case-studies/farmhouse-collective";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ScreenshotShowcaseGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {farmhouseShowcaseCards.map((card, i) => (
        <motion.article
          key={card.title}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
          whileHover={reduceMotion ? undefined : { y: -4 }}
          className="group glass overflow-hidden rounded-2xl border border-white/8 transition-[box-shadow,border-color] duration-500 hover:border-accent/25 hover:shadow-[0_0_48px_rgba(0,212,255,0.12)]"
        >
          <div
            className={cn(
              "relative overflow-hidden bg-[#0B0F14]",
              "mobile" in card && card.mobile ? "flex justify-center py-8" : "aspect-[16/10]",
            )}
          >
            {"mobile" in card && card.mobile ? (
              <div className="relative h-[420px] w-[220px] overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <Image src={card.image} alt={card.alt} fill className="object-cover object-top" sizes="220px" />
              </div>
            ) : (
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F14]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
          <div className="p-6 md:p-7">
            <h3 className="font-display text-xl font-semibold text-heading">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body md:text-base">{card.description}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
