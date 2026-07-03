"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  automationShowcaseCta,
  automationShowcaseIntro,
  automationShowcaseRows,
  type AutomationFeatureCard,
  type AutomationShowcaseRow,
} from "@/content/automation-showcase";
import { SmsConversationMock } from "./SmsConversationMock";
import { FollowUpTimelineMock } from "./FollowUpTimelineMock";
import { SchedulingMock } from "./SchedulingMock";
import { WorkflowHubMock } from "./WorkflowHubMock";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function FeatureRow({
  card,
  index,
  isActive,
}: {
  card: AutomationFeatureCard;
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

function ShowcaseVisual({
  row,
  isActive,
}: {
  row: AutomationShowcaseRow;
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
          ? "border-accent/30 shadow-[0_28px_80px_rgba(0,0,0,0.5),0_0_72px_rgba(0,212,255,0.16)]"
          : "border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(0,212,255,0.06)] hover:border-accent/20 hover:shadow-[0_24px_70px_rgba(0,0,0,0.45),0_0_56px_rgba(0,212,255,0.12)]",
      )}
    >
      <div className="rounded-xl bg-white p-3 sm:p-4 lg:p-5">
        {row.visualType === "sms" && row.smsMessages && (
          <SmsConversationMock messages={row.smsMessages} />
        )}
        {row.visualType === "timeline" && row.timelineSteps && (
          <FollowUpTimelineMock steps={row.timelineSteps} />
        )}
        {row.visualType === "scheduling" && row.schedulingSlots && row.selectedSlot && (
          <SchedulingMock slots={row.schedulingSlots} selectedSlot={row.selectedSlot} />
        )}
        {row.visualType === "workflow" && row.workflowNodes && row.metrics && (
          <WorkflowHubMock nodes={row.workflowNodes} metrics={row.metrics} />
        )}
      </div>
    </motion.div>
  );
}

function ShowcaseCopy({ row, isActive }: { row: AutomationShowcaseRow; isActive: boolean }) {
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

function StepNav({
  activeStep,
  onStepClick,
  className,
}: {
  activeStep: number;
  onStepClick: (id: string) => void;
  className?: string;
}) {
  return (
    <nav
      aria-label="Automation showcase steps"
      className={cn("z-10", className)}
    >
      <ul className="space-y-1 border-l border-white/10 pl-4">
        {automationShowcaseRows.map((row) => (
          <li key={row.id}>
            <button
              type="button"
              onClick={() => onStepClick(row.id)}
              className={cn(
                "group flex w-full items-start gap-2 py-2 text-left transition-colors",
                activeStep === row.stepNumber ? "text-accent" : "text-muted hover:text-body",
              )}
            >
              <span
                className={cn(
                  "tnum mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-all",
                  activeStep === row.stepNumber
                    ? "bg-accent text-[#04222b]"
                    : "bg-white/5 text-muted group-hover:bg-white/10",
                )}
              >
                {row.stepNumber}
              </span>
              <span className="text-xs leading-snug">{row.eyebrow}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ShowcaseRowPanel({
  row,
  onActive,
}: {
  row: AutomationShowcaseRow;
  onActive: (step: number) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const visualFirst = row.imagePosition === "left";

  useEffect(() => {
    if (isInView) onActive(row.stepNumber);
  }, [isInView, onActive, row.stepNumber]);

  return (
    <section
      ref={ref}
      id={`automation-step-${row.id}`}
      className="scroll-mt-28 py-12 md:py-16 lg:py-20"
    >
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        <div
          className={cn(
            "order-1 lg:col-span-5",
            visualFirst ? "lg:order-2" : "lg:order-1",
          )}
        >
          <ShowcaseCopy row={row} isActive={isInView} />
        </div>
        <div
          className={cn(
            "order-2 lg:col-span-7",
            visualFirst ? "lg:order-1" : "lg:order-2",
          )}
        >
          <ShowcaseVisual row={row} isActive={isInView} />
        </div>
      </div>
    </section>
  );
}

export function AutomationVisualDemonstration() {
  const [activeStep, setActiveStep] = useState(1);

  const scrollToStep = (id: string) => {
    document.getElementById(`automation-step-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Section surface className="bg-[#0B0F14]">
        <Container>
          <SectionHeading
            eyebrow={automationShowcaseIntro.eyebrow}
            title={automationShowcaseIntro.headline}
            lede={automationShowcaseIntro.subheadline}
          />

          <div className="mt-8 xl:mt-12">
            <div className="flex items-stretch gap-10">
              <aside className="hidden w-44 shrink-0 xl:block">
                <StepNav
                  activeStep={activeStep}
                  onStepClick={scrollToStep}
                  className="sticky top-28"
                />
              </aside>

              <div className="min-w-0 flex-1 divide-y divide-white/5">
                {automationShowcaseRows.map((row) => (
                  <ShowcaseRowPanel
                    key={row.id}
                    row={row}
                    onActive={setActiveStep}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 via-[#121821] to-[#0B0F14] px-6 py-10 text-center sm:px-10 sm:py-12">
            <h2 className="font-display text-2xl font-semibold text-heading md:text-3xl">
              {automationShowcaseCta.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-body">{automationShowcaseCta.body}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={automationShowcaseCta.primaryHref} size="lg" showArrow>
                {automationShowcaseCta.primaryLabel}
              </Button>
              <Button href={automationShowcaseCta.secondaryHref} variant="ghost" size="lg">
                {automationShowcaseCta.secondaryLabel}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
