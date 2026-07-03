"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { GrowthMetric } from "@/content/seo-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function AnimatedCounter({
  value,
  active,
}: {
  value: string;
  active: boolean;
}) {
  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9,]/g, "");
  const [display, setDisplay] = useState(active ? value : "0" + suffix);

  useEffect(() => {
    if (!active || isNaN(numeric)) {
      setDisplay(value);
      return;
    }

    let frame: number;
    const start = performance.now();
    const duration = 1200;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(numeric * eased);
      setDisplay(current.toLocaleString() + suffix);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, numeric, suffix, value]);

  return <span className="tnum">{display}</span>;
}

export function SeoGrowthDashboardMock({
  chartValues,
  metrics,
}: {
  chartValues: number[];
  metrics: GrowthMetric[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  const max = Math.max(...chartValues);
  const width = 100 / (chartValues.length - 1);

  const points = chartValues
    .map((v, i) => `${i * width},${100 - (v / max) * 85}`)
    .join(" ");

  return (
    <div ref={ref} className="mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
        <div className="border-b border-slate-100 px-5 py-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            SEO Performance
          </p>
          <p className="font-display text-sm font-semibold text-slate-800">
            Organic Growth · Month 1 → Month 12
          </p>
        </div>

        <div className="p-5">
          <div className="relative h-36 w-full">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="h-full w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="seoChartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(0,212,255,0.25)" />
                  <stop offset="100%" stopColor="rgba(0,212,255,0)" />
                </linearGradient>
              </defs>
              <motion.polyline
                points={`0,100 ${points} 100,100`}
                fill="url(#seoChartGrad)"
                stroke="none"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.polyline
                points={points}
                fill="none"
                stroke="#00D4FF"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  isInView
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: reduceMotion ? 0 : 1.4, ease: EASE }}
              />
            </svg>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1, ease: EASE }}
                className="rounded-lg border border-slate-100 bg-slate-50 p-3 text-center"
              >
                <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                  {metric.label}
                </p>
                <div className="mt-1.5 flex items-center justify-center gap-1.5 text-xs">
                  <span className="text-slate-400 line-through">{metric.before}</span>
                  <span className="text-cyan-500">→</span>
                  <span className="font-display font-bold text-emerald-600">
                    <AnimatedCounter
                      value={metric.after.replace(/\/mo/g, "")}
                      active={isInView}
                    />
                    {metric.after.includes("/mo") && "/mo"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between rounded-lg bg-emerald-50 px-4 py-2.5 ring-1 ring-emerald-200">
            <span className="text-xs font-medium text-emerald-800">Month 6 vs Month 1</span>
            <span className="font-display text-sm font-bold text-emerald-700">+412% organic leads</span>
          </div>
        </div>
      </div>
    </div>
  );
}
