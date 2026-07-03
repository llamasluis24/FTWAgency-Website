"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ShowcaseMetric } from "./types";
import { cn } from "@/lib/utils";

export function MetricCard({ metric }: { metric: ShowcaseMetric }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(reduceMotion);

  useEffect(() => {
    if (inView) setVisible(true);
  }, [inView]);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-white/5 bg-surface/80 p-4 transition-all duration-700",
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
      )}
    >
      <p className="text-xs text-muted">{metric.label}</p>
      <p
        className={cn(
          "tnum mt-1 font-display text-2xl font-bold tracking-tight",
          metric.accent === "green" && "text-success",
          metric.accent === "cyan" && "text-accent",
          !metric.accent && "text-heading",
        )}
      >
        {metric.value}
      </p>
      {metric.change && (
        <p
          className={cn(
            "mt-1 text-xs font-medium",
            metric.positive ? "text-success" : "text-red-400",
          )}
        >
          {metric.change}
        </p>
      )}
    </div>
  );
}

export function MetricGrid({ metrics }: { metrics: ShowcaseMetric[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {metrics.map((m) => (
        <MetricCard key={m.label} metric={m} />
      ))}
    </div>
  );
}
