"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { WorkflowStep } from "./types";

export function WorkflowDiagram({
  headline,
  steps,
}: {
  headline: string;
  steps: WorkflowStep[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold text-heading sm:text-2xl">
        {headline}
      </h3>
      <div className="mt-8 flex flex-col items-center gap-2">
        {steps.map((step, i) => (
          <div key={step.label} className="flex w-full max-w-md flex-col items-center">
            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative w-full rounded-xl border border-white/10 bg-elevated px-5 py-4 text-center shadow-[0_0_30px_rgba(0,212,255,0.08)]"
            >
              {!reduceMotion && i > 0 && (
                <motion.span
                  className="absolute -top-3 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_8px_#00d4ff]"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
              )}
              <p className="font-display text-sm font-semibold text-heading">
                {step.label}
              </p>
              {step.detail && (
                <p className="mt-0.5 text-xs text-muted">{step.detail}</p>
              )}
            </motion.div>
            {i < steps.length - 1 && (
              <ArrowDown className="my-1 h-4 w-4 text-accent/50" strokeWidth={2} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
