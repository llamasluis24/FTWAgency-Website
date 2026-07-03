"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { AutomationMetric, WorkflowNode } from "@/content/automation-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const nodeStyles = {
  trigger: "border-accent/40 bg-accent/10 text-accent",
  condition: "border-amber-400/40 bg-amber-400/10 text-amber-600",
  action: "border-violet-400/40 bg-violet-400/10 text-violet-600",
  output: "border-emerald-400/40 bg-emerald-400/10 text-emerald-600",
};

function FlowConnector({ active }: { active: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex flex-1 items-center px-1" aria-hidden>
      <div className="relative h-0.5 w-full overflow-hidden rounded-full bg-slate-200">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-accent"
          initial={{ width: "0%" }}
          animate={{ width: active ? "100%" : "0%" }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: EASE }}
        />
        {!reduceMotion && active && (
          <motion.div
            className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_8px_rgba(0,212,255,0.6)]"
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>
    </div>
  );
}

function AnimatedMetric({ metric, delay }: { metric: AutomationMetric; delay: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: reduceMotion ? 0 : delay, ease: EASE }}
      className="rounded-lg border border-slate-100 bg-slate-50 p-3 text-center"
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {metric.label}
      </p>
      <div className="mt-2 flex items-center justify-center gap-2">
        <span className="text-xs text-slate-400 line-through">{metric.before}</span>
        <span className="text-accent">→</span>
        <span className="font-display text-sm font-bold text-emerald-600">{metric.after}</span>
      </div>
    </motion.div>
  );
}

export function WorkflowHubMock({
  nodes,
  metrics,
}: {
  nodes: WorkflowNode[];
  metrics: AutomationMetric[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(nodes.length - 1);

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    setActiveIndex(-1);
    let i = 0;
    let cancelled = false;

    const advance = () => {
      if (cancelled || i >= nodes.length) return;
      setActiveIndex(i);
      i += 1;
      setTimeout(advance, 600);
    };

    const t = setTimeout(advance, 300);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [isInView, nodes.length, reduceMotion]);

  return (
    <div ref={ref} className="w-full space-y-5">
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          Automation Workflow
        </p>

        <div className="flex items-center gap-0">
          {nodes.map((node, idx) => (
            <div key={node.id} className="flex flex-1 items-center">
              <motion.div
                initial={{ opacity: 0.3, scale: 0.9 }}
                animate={
                  idx <= activeIndex
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0.3, scale: 0.9 }
                }
                transition={{ duration: 0.4, ease: EASE }}
                className={cn(
                  "w-full rounded-xl border-2 px-2 py-3 text-center sm:px-3",
                  nodeStyles[node.type],
                  idx <= activeIndex && "shadow-[0_0_20px_rgba(0,212,255,0.12)]",
                )}
              >
                <p className="font-display text-[11px] font-bold sm:text-xs">{node.label}</p>
                <p className="mt-0.5 text-[9px] opacity-80 sm:text-[10px]">{node.detail}</p>
              </motion.div>
              {idx < nodes.length - 1 && (
                <FlowConnector active={idx < activeIndex} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {metrics.map((metric, i) => (
          <AnimatedMetric key={metric.label} metric={metric} delay={i * 0.1 + 0.4} />
        ))}
      </div>
    </div>
  );
}
