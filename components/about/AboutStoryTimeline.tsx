"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AccentText } from "@/components/ui/AccentText";
import { Container, Section } from "@/components/layout/Section";
import type { AboutTimelineStep } from "@/content/about";

const EASE = [0.22, 1, 0.36, 1] as const;

function TimelineStep({
  step,
  index,
  isLast,
}: {
  step: AboutTimelineStep;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.05, ease: EASE }}
      className="relative grid gap-6 md:grid-cols-[minmax(0,7rem)_1fr] md:gap-10 lg:gap-16"
    >
      <div className="relative">
        <span className="tnum block font-display text-5xl font-bold leading-none text-accent/25 md:text-7xl lg:text-8xl">
          {step.number}
        </span>
        {!isLast && (
          <motion.div
            initial={reduceMotion ? false : { scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="absolute left-[1.35rem] top-[4.5rem] hidden h-[calc(100%+3rem)] w-px origin-top bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:block lg:left-[1.75rem] lg:top-[5.5rem]"
            aria-hidden
          />
        )}
      </div>

      <div className="pb-16 md:pb-24 lg:pb-28">
        <h3 className="font-display text-2xl font-semibold text-heading md:text-3xl lg:text-4xl">
          {step.title}
        </h3>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-body md:text-xl">
          {step.body}
        </p>
        {step.bullets && (
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 sm:gap-3">
            {step.bullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-xl border border-red-500/30 bg-red-500/[0.08] px-4 py-3 text-sm font-medium text-red-400 shadow-[0_0_24px_rgba(239,68,68,0.08)] md:text-base"
              >
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export function AboutStoryTimeline({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string;
  title: string;
  steps: AboutTimelineStep[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <Section id="story">
      <div ref={sectionRef}>
      <Container className="max-w-5xl">
        <motion.div style={{ y: parallax }} className="mb-16 md:mb-24 lg:mb-28">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="max-w-3xl text-3xl font-semibold md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            <AccentText text={title} />
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-[1.35rem] hidden w-px bg-white/5 md:block lg:left-[1.75rem]"
            aria-hidden
          />
          {steps.map((step, index) => (
            <TimelineStep
              key={step.number}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </Container>
      </div>
    </Section>
  );
}
