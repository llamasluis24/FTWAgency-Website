"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check, AlertTriangle } from "lucide-react";
import type { AuditCheck } from "@/content/seo-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const vitals = [
  { label: "LCP", value: 92, unit: "1.8s", good: true },
  { label: "CLS", value: 98, unit: "0.04", good: true },
  { label: "INP", value: 88, unit: "142ms", good: true },
];

export function TechnicalAuditMock({
  checks,
  healthBefore,
  healthAfter,
}: {
  checks: AuditCheck[];
  healthBefore: number;
  healthAfter: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [checkedCount, setCheckedCount] = useState(checks.length);
  const [score, setScore] = useState(healthAfter);

  useEffect(() => {
    if (!isInView || reduceMotion) {
      setCheckedCount(checks.length);
      setScore(healthAfter);
      return;
    }

    setCheckedCount(0);
    setScore(healthBefore);
    let i = 0;
    let cancelled = false;

    const advance = () => {
      if (cancelled || i >= checks.length) {
        setScore(healthAfter);
        return;
      }
      setCheckedCount(i + 1);
      setScore(Math.round(healthBefore + ((healthAfter - healthBefore) * (i + 1)) / checks.length));
      i += 1;
      setTimeout(advance, 500);
    };

    const t = setTimeout(advance, 400);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [isInView, checks.length, healthBefore, healthAfter, reduceMotion]);

  return (
    <div ref={ref} className="mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Site Health Audit
            </p>
            <p className="font-display text-sm font-semibold text-slate-800">Technical SEO Score</p>
          </div>
          <motion.div
            key={score}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-full font-display text-lg font-bold",
              score >= 90
                ? "bg-emerald-100 text-emerald-700"
                : score >= 70
                  ? "bg-amber-100 text-amber-700"
                  : "bg-red-100 text-red-600",
            )}
          >
            {score}
          </motion.div>
        </div>

        <div className="space-y-4 p-5">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Core Web Vitals
            </p>
            <div className="grid grid-cols-3 gap-3">
              {vitals.map((v, i) => (
                <div key={v.label} className="rounded-lg bg-slate-50 p-2.5 text-center">
                  <p className="text-[10px] font-semibold text-slate-500">{v.label}</p>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-200">
                    <motion.div
                      className="h-full rounded-full bg-emerald-500"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${v.value}%` } : { width: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.8, delay: i * 0.15, ease: EASE }}
                    />
                  </div>
                  <p className="tnum mt-1 text-xs font-bold text-emerald-600">{v.unit}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Index & Structure
            </p>
            <ul className="space-y-1.5">
              {checks.map((check, i) => {
                const done = i < checkedCount;
                return (
                  <motion.li
                    key={check.label}
                    initial={reduceMotion ? undefined : { opacity: 0.4, x: -8 }}
                    animate={done ? { opacity: 1, x: 0 } : { opacity: 0.4, x: -8 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
                  >
                    {done ? (
                      <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600" strokeWidth={2.5} />
                    ) : (
                      <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-slate-300" />
                    )}
                    <span className={cn("text-xs", done ? "text-slate-700" : "text-slate-400")}>
                      {check.label}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
