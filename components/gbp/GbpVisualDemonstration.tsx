"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  gbpShowcaseCta,
  gbpShowcaseIntro,
  gbpShowcaseRows,
  type GbpFeatureCard,
  type GbpShowcaseRow,
} from "@/content/gbp-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function FeatureRow({
  card,
  index,
  isActive,
}: {
  card: GbpFeatureCard;
  index: number;
  isActive: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, x: -16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
      className={cn(
        "group flex gap-4 border-b border-white/5 py-5 last:border-b-0 transition-colors",
        isActive && "border-[#60d8b8]/10",
      )}
    >
      <span
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 bg-[#1A2330] transition-all duration-300",
          isActive
            ? "border-[#60d8b8]/50 shadow-[0_0_20px_rgba(96,216,184,0.25)]"
            : "border-[#60d8b8]/20 group-hover:border-[#60d8b8]/40 group-hover:shadow-[0_0_16px_rgba(96,216,184,0.15)]",
        )}
      >
        <Icon name={card.icon} className="h-5 w-5 text-[#60d8b8]" />
      </span>
      <div className="min-w-0 pt-0.5">
        <h4 className="font-display text-base font-semibold text-heading transition-colors group-hover:text-accent">
          {card.title}
        </h4>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{card.description}</p>
      </div>
    </motion.div>
  );
}

function ShowcaseImage({
  row,
  isActive,
}: {
  row: GbpShowcaseRow;
  isActive: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className={cn(
        "overflow-hidden rounded-2xl border bg-[#121821] p-2 transition-all duration-500 sm:p-3 lg:p-4",
        isActive
          ? "border-accent/30 shadow-[0_28px_80px_rgba(0,0,0,0.5),0_0_72px_rgba(0,212,255,0.16)]"
          : "border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(0,212,255,0.06)] hover:border-accent/20 hover:shadow-[0_24px_70px_rgba(0,0,0,0.45),0_0_56px_rgba(0,212,255,0.12)]",
      )}
    >
      <div className="flex items-center justify-center rounded-xl bg-white p-1 sm:p-2">
        <Image
          src={row.image.src}
          alt={row.image.alt}
          width={row.image.width}
          height={row.image.height}
          quality={100}
          sizes="(max-width: 1024px) 100vw, 900px"
          className="h-auto w-full object-contain"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}

function ShowcaseCopy({ row, isActive }: { row: GbpShowcaseRow; isActive: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <motion.p
        initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
      >
        {row.stepNumber}. {row.eyebrow}
      </motion.p>
      <motion.h3
        initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
        className="font-display text-2xl font-semibold leading-tight text-heading md:text-[2rem] lg:text-4xl"
      >
        {row.headline}
      </motion.h3>
      <motion.p
        initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        className="mt-4 text-base leading-relaxed text-body md:text-lg"
      >
        {row.body}
      </motion.p>
      <div className="mt-6 rounded-2xl border border-white/5 bg-[#121821]/80 px-2 sm:px-4">
        {row.cards.map((card, i) => (
          <FeatureRow key={card.title} card={card} index={i} isActive={isActive} />
        ))}
      </div>
    </div>
  );
}

function ShowcaseRowPanel({ row }: { row: GbpShowcaseRow }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const imageFirst = row.imagePosition === "left";
  const alignLeft = row.stepNumber === 1 || row.stepNumber === 3;

  return (
    <section
      ref={ref}
      id={`gbp-step-${row.id}`}
      className="scroll-mt-28 py-12 md:py-16 lg:py-20"
    >
      <div
        className={cn(
          "grid items-start gap-10 lg:gap-x-12 xl:gap-x-16",
          alignLeft ? "lg:mr-auto lg:justify-start" : "lg:ml-auto lg:justify-end",
          imageFirst
            ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]"
            : "lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)]",
        )}
      >
        <div className={cn("order-1", imageFirst ? "lg:order-2" : "lg:order-1")}>
          <ShowcaseCopy row={row} isActive={isInView} />
        </div>
        <div className={cn("order-2", imageFirst ? "lg:order-1" : "lg:order-2")}>
          <ShowcaseImage row={row} isActive={isInView} />
        </div>
      </div>
    </section>
  );
}

export function GbpVisualDemonstration() {
  return (
    <>
      <Section surface className="bg-[#0B0F14]">
        <Container>
          <SectionHeading
            eyebrow={gbpShowcaseIntro.eyebrow}
            title={gbpShowcaseIntro.headline}
            lede={gbpShowcaseIntro.subheadline}
          />

          <div className="mt-8 divide-y divide-white/5 xl:mt-12">
            {gbpShowcaseRows.map((row) => (
              <ShowcaseRowPanel key={row.id} row={row} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 via-[#121821] to-[#0B0F14] px-6 py-10 text-center sm:px-10 sm:py-12">
            <h2 className="font-display text-2xl font-semibold text-heading md:text-3xl">
              {gbpShowcaseCta.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-body">{gbpShowcaseCta.body}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={gbpShowcaseCta.primaryHref} size="lg" showArrow>
                {gbpShowcaseCta.primaryLabel}
              </Button>
              <Button href={gbpShowcaseCta.secondaryHref} variant="ghost" size="lg">
                {gbpShowcaseCta.secondaryLabel}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
