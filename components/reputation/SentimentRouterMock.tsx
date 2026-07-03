"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Lock, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SentimentRouterMock() {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<number | null>(null);

  const isPromoter = selected !== null && selected >= 4;
  const isDetractor = selected !== null && selected <= 3;

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          Interactive Demo
        </p>
        <p className="font-display text-base font-semibold text-slate-900">
          How was your experience?
        </p>
        <p className="mt-1 text-xs text-slate-500">Tap a rating to see where it routes</p>

        <div className="mt-4 flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              aria-label={`Rate ${star} stars`}
              onClick={() => setSelected(star)}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-xl border-2 transition-all",
                selected === star
                  ? "border-[#FBBC04] bg-amber-50 scale-110 shadow-md"
                  : selected !== null && star <= selected
                    ? "border-amber-200 bg-amber-50/50"
                    : "border-slate-200 bg-slate-50 hover:border-amber-300 hover:bg-amber-50",
              )}
            >
              <Star
                className={cn(
                  "h-5 w-5 transition-colors",
                  selected !== null && star <= selected
                    ? "fill-[#FBBC04] text-[#FBBC04]"
                    : "text-slate-300",
                )}
              />
            </button>
          ))}
        </div>

        <div className="relative mt-6 min-h-[140px]">
          {selected === null && (
            <p className="flex h-[140px] items-center justify-center text-sm text-slate-400">
              Select a star rating above
            </p>
          )}

          {isDetractor && (
            <motion.div
              key="private"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 text-amber-600">
                <ArrowRight className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Routed to private feedback
                </span>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-amber-600" />
                  <p className="text-sm font-semibold text-amber-900">Private Feedback Form</p>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-amber-800">
                  Tell us what went wrong — our manager will reach out within 2 hours to make it
                  right. Your feedback stays private.
                </p>
                <div className="mt-3 rounded-lg bg-white px-3 py-2 text-[11px] text-slate-500 ring-1 ring-amber-200">
                  Team alert sent · Recovery task created
                </div>
              </div>
            </motion.div>
          )}

          {isPromoter && (
            <motion.div
              key="public"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 text-emerald-600">
                <ArrowRight className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Routed to Google review
                </span>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-blue-600 ring-1 ring-slate-200">
                    G
                  </div>
                  <p className="text-sm font-semibold text-emerald-900">Leave a Google Review</p>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-emerald-800">
                  Glad you had a great experience! Share it on Google — it helps other customers
                  find us.
                </p>
                <div className="mt-3 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                  <span className="ml-2 text-[11px] font-medium text-emerald-700">
                    One tap to post
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
