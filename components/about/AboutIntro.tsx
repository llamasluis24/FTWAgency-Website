"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AccentText } from "@/components/ui/AccentText";
import { Container, Section } from "@/components/layout/Section";
import type { AboutIntroPrinciple } from "@/content/about";

const EASE = [0.22, 1, 0.36, 1] as const;

interface AboutIntroProps {
  eyebrow: string;
  headline: string;
  lead: string;
  body: string;
  principles: AboutIntroPrinciple[];
}

function PrincipleCard({
  principle,
  index,
}: {
  principle: AboutIntroPrinciple;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
      className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-5 backdrop-blur-sm md:px-6 md:py-6"
    >
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#60d8b8] sm:text-[0.65rem]">
        {principle.label}
      </p>
      <p className="mt-2 font-display text-base font-semibold leading-snug text-heading md:text-lg">
        {principle.value}
      </p>
    </motion.div>
  );
}

export function AboutIntro({ eyebrow, headline, lead, body, principles }: AboutIntroProps) {
  const reduceMotion = useReducedMotion();

  const enter = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-8%" },
          transition: { delay, duration: 0.75, ease: EASE },
        };

  return (
    <Section className="relative overflow-hidden border-b border-white/5 bg-[#0B0F14] !py-24 md:!py-32 lg:!py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,212,255,0.08),transparent_65%)]"
        aria-hidden
      />
      <div
        className="bg-grid pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black,transparent)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" aria-hidden />

      <Container className="relative px-4 sm:px-5 lg:px-6">
        <motion.p
          {...enter(0)}
          className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#60d8b8] md:text-base"
        >
          {eyebrow}
        </motion.p>

        <motion.h2
          {...enter(0.06)}
          className="mx-auto mt-6 max-w-4xl text-center text-[2.1rem] font-semibold leading-[1.06] tracking-[-0.025em] md:mt-8 md:text-5xl lg:text-[3.25rem]"
        >
          <AccentText text={headline} />
        </motion.h2>

        <div className="mx-auto mt-14 grid max-w-6xl gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-16 xl:gap-20">
          <motion.div {...enter(0.12)} className="max-w-xl lg:max-w-none lg:pt-2">
            <p className="font-serif text-xl italic leading-relaxed text-heading/90 md:text-2xl">{lead}</p>
            <p className="mt-6 text-base leading-relaxed text-body md:text-lg">{body}</p>
          </motion.div>

          <div className="space-y-3 md:space-y-4">
            {principles.map((principle, index) => (
              <PrincipleCard key={principle.label} principle={principle} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
