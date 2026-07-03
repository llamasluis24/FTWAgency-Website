"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import type { LiveReview, MonthlyPulse } from "@/content/reputation-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ReputationPulseMock({
  liveReviews,
  monthlyPulse,
}: {
  liveReviews: LiveReview[];
  monthlyPulse: MonthlyPulse[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [reviewIndex, setReviewIndex] = useState(0);
  const maxReviews = Math.max(...monthlyPulse.map((m) => m.reviews));

  useEffect(() => {
    if (!isInView || reduceMotion) return;
    const interval = setInterval(() => {
      setReviewIndex((i) => (i + 1) % liveReviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView, liveReviews.length, reduceMotion]);

  const current = liveReviews[reviewIndex];
  const latest = monthlyPulse[monthlyPulse.length - 1];

  return (
    <div ref={ref} className="mx-auto w-full max-w-lg space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Review Velocity
            </p>
            <p className="font-display text-sm font-semibold text-slate-900">Monthly Growth</p>
          </div>
          <div className="text-right">
            <p className="tnum text-2xl font-bold text-emerald-600">{latest.avgRating}</p>
            <div className="flex justify-end gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-end gap-1.5" style={{ height: 100 }}>
          {monthlyPulse.map((month, i) => {
            const height = (month.reviews / maxReviews) * 100;
            return (
              <div key={month.month} className="flex flex-1 flex-col items-center gap-1">
                <motion.div
                  className="w-full rounded-t-md bg-gradient-to-t from-accent/80 to-cyan-300/80"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${height}%` } : { height: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
                  style={{ minHeight: 4 }}
                />
                <span className="text-[9px] font-medium text-slate-400">{month.month}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-2 ring-1 ring-emerald-200">
          <span className="text-xs text-emerald-800">Jul vs Jan</span>
          <span className="tnum text-sm font-bold text-emerald-700">+1,200% review volume</span>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
        <div className="border-b border-slate-100 px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Live Review Feed
          </p>
        </div>

        <div className="relative p-4" style={{ minHeight: 160 }}>
          <motion.div
            key={reviewIndex}
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                {current.author.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-slate-900">{current.author}</p>
                  <span className="text-[10px] text-slate-400">{current.daysAgo}</span>
                </div>
                <div className="mt-0.5 flex gap-0.5">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{current.text}</p>
                {current.response && (
                  <div className="mt-3 rounded-lg bg-slate-50 px-3 py-2 ring-1 ring-slate-100">
                    <p className="text-[10px] font-semibold text-slate-500">Owner response</p>
                    <p className="mt-0.5 text-xs text-slate-600">{current.response}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-3 right-4 flex gap-1">
            {liveReviews.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`View review ${i + 1}`}
                onClick={() => setReviewIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === reviewIndex ? "w-4 bg-accent" : "w-1.5 bg-slate-300",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
