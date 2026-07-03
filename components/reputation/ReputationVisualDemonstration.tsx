"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  reputationShowcaseCta,
  reputationShowcaseIntro,
  reputationShowcaseRows,
  type ReputationFeatureCard,
  type ReputationShowcaseRow,
} from "@/content/reputation-showcase";
import { RatingBattleMock } from "./RatingBattleMock";
import { ReviewRequestPhoneMock } from "./ReviewRequestPhoneMock";
import { SentimentRouterMock } from "./SentimentRouterMock";
import { ReputationPulseMock } from "./ReputationPulseMock";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function FeatureRow({
  card,
  index,
  isActive,
}: {
  card: ReputationFeatureCard;
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
        isActive && "border-amber-500/10",
      )}
    >
      <span
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 bg-[#1A2330] transition-all duration-300",
          isActive
            ? "border-amber-400/50 shadow-[0_0_20px_rgba(251,188,4,0.2)]"
            : "border-amber-400/15 group-hover:border-amber-400/30 group-hover:shadow-[0_0_16px_rgba(251,188,4,0.12)]",
        )}
      >
        <Icon name={card.icon} className="h-5 w-5 text-amber-400" />
      </span>
      <div className="min-w-0 pt-0.5">
        <h4 className="font-display text-base font-semibold text-heading transition-colors group-hover:text-amber-300">
          {card.title}
        </h4>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{card.description}</p>
      </div>
    </motion.div>
  );
}

function ShowcaseVisual({
  row,
  isActive,
}: {
  row: ReputationShowcaseRow;
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
        "overflow-hidden rounded-2xl border bg-[#121821] p-3 transition-all duration-500 sm:p-4 lg:p-5",
        isActive
          ? "border-amber-400/25 shadow-[0_28px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(251,188,4,0.12)]"
          : "border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(251,188,4,0.04)] hover:border-amber-400/15 hover:shadow-[0_24px_70px_rgba(0,0,0,0.45),0_0_48px_rgba(251,188,4,0.08)]",
      )}
    >
      <div className="rounded-xl bg-white p-3 sm:p-4 lg:p-5">
        {row.visualType === "comparison" &&
          row.beforeProfile &&
          row.afterProfile &&
          row.competitorProfile && (
            <RatingBattleMock
              beforeProfile={row.beforeProfile}
              afterProfile={row.afterProfile}
              competitorProfile={row.competitorProfile}
            />
          )}
        {row.visualType === "request-flow" && row.smsMessages && (
          <ReviewRequestPhoneMock messages={row.smsMessages} />
        )}
        {row.visualType === "router" && <SentimentRouterMock />}
        {row.visualType === "pulse" && row.liveReviews && row.monthlyPulse && (
          <ReputationPulseMock
            liveReviews={row.liveReviews}
            monthlyPulse={row.monthlyPulse}
          />
        )}
      </div>
    </motion.div>
  );
}

function ShowcaseCopy({ row, isActive }: { row: ReputationShowcaseRow; isActive: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <motion.p
        initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400"
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
      {row.visualType === "router" && (
        <p className="mt-3 text-sm font-medium text-amber-400/80">
          Try the demo on the right — tap a star rating to see the routing logic.
        </p>
      )}
      <div className="mt-6 rounded-2xl border border-white/5 bg-[#121821]/80 px-2 sm:px-4">
        {row.cards.map((card, i) => (
          <FeatureRow key={card.title} card={card} index={i} isActive={isActive} />
        ))}
      </div>
    </div>
  );
}

function ShowcaseRowPanel({ row }: { row: ReputationShowcaseRow }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const visualFirst = row.imagePosition === "left";

  return (
    <section
      ref={ref}
      id={`reputation-step-${row.id}`}
      className="scroll-mt-28 py-12 md:py-16 lg:py-20"
    >
      <div
        className={cn(
          "grid items-start gap-10 lg:justify-start lg:gap-x-10 xl:gap-x-14",
          visualFirst
            ? "lg:grid-cols-[minmax(0,36rem)_minmax(0,28rem)]"
            : "lg:grid-cols-[minmax(0,28rem)_minmax(0,36rem)]",
        )}
      >
        <div className={cn("order-1", visualFirst ? "lg:order-2" : "lg:order-1")}>
          <ShowcaseCopy row={row} isActive={isInView} />
        </div>
        <div className={cn("order-2", visualFirst ? "lg:order-1" : "lg:order-2")}>
          <ShowcaseVisual row={row} isActive={isInView} />
        </div>
      </div>
    </section>
  );
}

export function ReputationVisualDemonstration() {
  return (
    <>
      <Section surface className="bg-[#0B0F14]">
        <Container>
          <SectionHeading
            eyebrow={reputationShowcaseIntro.eyebrow}
            title={reputationShowcaseIntro.headline}
            lede={reputationShowcaseIntro.subheadline}
          />

          <div className="mt-8 divide-y divide-white/5 xl:mt-12">
            {reputationShowcaseRows.map((row) => (
              <ShowcaseRowPanel key={row.id} row={row} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/5 via-[#121821] to-[#0B0F14] px-6 py-10 text-center sm:px-10 sm:py-12">
            <h2 className="font-display text-2xl font-semibold text-heading md:text-3xl">
              {reputationShowcaseCta.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-body">{reputationShowcaseCta.body}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={reputationShowcaseCta.primaryHref} size="lg" showArrow>
                {reputationShowcaseCta.primaryLabel}
              </Button>
              <Button href={reputationShowcaseCta.secondaryHref} variant="ghost" size="lg">
                {reputationShowcaseCta.secondaryLabel}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
