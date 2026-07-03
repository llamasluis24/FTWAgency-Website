"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import type { WorkflowStage } from "@/content/case-studies/mobilehomecrm-cal-star";
import { cn } from "@/lib/utils";
import { WorkflowStageVisual } from "./WorkflowStageVisual";

const EASE = [0.22, 1, 0.36, 1] as const;

export function StorySection({
  stage,
  index,
}: {
  stage: WorkflowStage;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const visualFirst = index % 2 === 1;

  return (
    <section
      ref={ref}
      id={stage.id}
      className={cn(
        "scroll-mt-28 rounded-3xl border px-5 py-10 transition-[border-color,box-shadow] duration-700 md:px-8 md:py-14",
        isInView
          ? "border-accent/20 bg-accent/[0.03] shadow-[0_0_80px_rgba(0,212,255,0.06)]"
          : "border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
          visualFirst && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
        )}
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: visualFirst ? 24 : -24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="eyebrow mb-3">
            {stage.step} — {stage.eyebrow}
          </p>
          <h2 className="text-2xl font-semibold leading-tight text-heading md:text-3xl lg:text-4xl">
            {stage.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-body md:text-lg">{stage.body}</p>
          <ul className="mt-7 space-y-3">
            {stage.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-body md:text-base">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15">
                  <Check className="h-3 w-3 text-success" strokeWidth={2.5} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        <WorkflowStageVisual stageId={stage.id} active={isInView} />
      </div>
    </section>
  );
}
