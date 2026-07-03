"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { AccentText } from "@/components/ui/AccentText";
import { Container, Section } from "@/components/layout/Section";
import type { AboutFounder } from "@/content/about";

const EASE = [0.22, 1, 0.36, 1] as const;

function FounderCard({ founder, index }: { founder: AboutFounder; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: EASE }}
      className="group flex flex-col items-center text-center"
    >
      <div className="relative mx-auto w-full max-w-[240px] overflow-hidden rounded-2xl border border-white/8 bg-surface sm:max-w-[260px] md:max-w-[280px]">
        <Image
          src={founder.image}
          alt={founder.name}
          width={560}
          height={747}
          className="aspect-[3/4] h-auto w-full object-cover object-top"
          sizes="(max-width: 768px) 240px, 280px"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(0,212,255,0.08),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent md:text-xs">
            {founder.role}
          </p>
          <h3 className="mt-1.5 font-display text-xl font-semibold text-heading md:text-2xl">
            {founder.name}
          </h3>
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-xs text-center text-sm leading-relaxed text-body md:mt-5 md:max-w-sm md:text-base">
        {founder.bio}
      </p>
    </motion.article>
  );
}

export function AboutFounders({
  eyebrow,
  title,
  founders,
}: {
  eyebrow: string;
  title: string;
  founders: AboutFounder[];
}) {
  return (
    <Section surface>
      <Container>
        <div className="mb-14 md:mb-20">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="max-w-2xl text-3xl font-semibold md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            <AccentText text={title} />
          </h2>
        </div>

        <div className="mx-auto grid max-w-3xl gap-10 md:grid-cols-2 md:gap-12 lg:max-w-4xl">
          {founders.map((founder, index) => (
            <FounderCard key={founder.name} founder={founder} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
