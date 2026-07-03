"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ChartSeries } from "./types";
import { cn } from "@/lib/utils";

function seriesToPath(values: number[], w: number, h: number, pad = 8) {
  const max = Math.max(...values, 1);
  const step = (w - pad * 2) / (values.length - 1);
  const pts = values.map((v, i) => {
    const x = pad + i * step;
    const y = h - pad - (v / max) * (h - pad * 2);
    return `${i === 0 ? "M" : "L"}${x},${y}`;
  });
  return pts.join(" ");
}

function seriesToArea(values: number[], w: number, h: number, pad = 8) {
  const line = seriesToPath(values, w, h, pad);
  const lastX = pad + (values.length - 1) * ((w - pad * 2) / (values.length - 1));
  return `${line} L${lastX},${h - pad} L${pad},${h - pad} Z`;
}

export function LineChart({
  series,
  label,
  height = 140,
}: {
  series: ChartSeries[];
  label?: string;
  height?: number;
}) {
  const reduceMotion = useReducedMotion();
  const w = 400;
  const h = height;

  return (
    <div className="rounded-xl border border-white/5 bg-bg/40 p-4">
      {label && (
        <p className="mb-3 text-xs font-medium text-muted">{label}</p>
      )}
      <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" aria-hidden>
        {[0.25, 0.5, 0.75].map((pct) => (
          <line
            key={pct}
            x1={8}
            x2={w - 8}
            y1={h * pct}
            y2={h * pct}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth={1}
          />
        ))}
        {series.map((s, si) => {
          const color =
            s.color === "success"
              ? "#2ed47a"
              : s.color === "muted"
                ? "#5c6b7e"
                : "#00d4ff";
          const area = seriesToArea(s.values, w, h);
          const line = seriesToPath(s.values, w, h);
          return (
            <g key={si}>
              <defs>
                <linearGradient id={`grad-${si}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={0.35} />
                  <stop offset="100%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <path d={area} fill={`url(#grad-${si})`} />
              <motion.path
                d={line}
                fill="none"
                stroke={color}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={reduceMotion ? undefined : { pathLength: 0 }}
                animate={reduceMotion ? undefined : { pathLength: 1 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </g>
          );
        })}
      </svg>
      {series.length > 1 && (
        <div className="mt-2 flex gap-4">
          {series.map((s) => (
            <span key={s.label} className="flex items-center gap-1.5 text-[10px] text-muted">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  s.color === "success" ? "bg-success" : "bg-accent",
                )}
              />
              {s.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function BarChart({
  values,
  label,
}: {
  values: { label: string; value: number }[];
  label?: string;
}) {
  const max = Math.max(...values.map((v) => v.value), 1);
  return (
    <div className="rounded-xl border border-white/5 bg-bg/40 p-4">
      {label && (
        <p className="mb-3 text-xs font-medium text-muted">{label}</p>
      )}
      <div className="flex h-28 items-end gap-2">
        {values.map((v, i) => (
          <div key={v.label} className="flex flex-1 flex-col items-center gap-1">
            <motion.div
              className="w-full rounded-t-md bg-gradient-to-t from-accent/20 to-accent"
              initial={{ height: 0 }}
              whileInView={{ height: `${(v.value / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ minHeight: 4 }}
            />
            <span className="text-[9px] text-muted">{v.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FunnelChart({ steps }: { steps: { label: string; value: string; width: number }[] }) {
  return (
    <div className="space-y-2">
      {steps.map((step, i) => (
        <motion.div
          key={step.label}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="flex items-center gap-3"
        >
          <div
            className="rounded-lg border border-accent/20 bg-accent/10 px-3 py-2 text-center transition-all"
            style={{ width: `${step.width}%`, minWidth: "40%" }}
          >
            <p className="text-xs font-medium text-heading">{step.label}</p>
            <p className="text-[10px] text-accent">{step.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
