"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Search } from "lucide-react";
import type { SerpResult } from "@/content/seo-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SerpSearchMock({
  query,
  results,
}: {
  query: string;
  results: SerpResult[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [typed, setTyped] = useState(query);
  const [showResults, setShowResults] = useState(true);
  const [highlightRank, setHighlightRank] = useState(reduceMotion ?? false);

  useEffect(() => {
    if (!isInView || reduceMotion) {
      setTyped(query);
      setShowResults(true);
      setHighlightRank(true);
      return;
    }

    setTyped("");
    setShowResults(false);
    setHighlightRank(false);
    let i = 0;
    let cancelled = false;

    const typeChar = () => {
      if (cancelled || i >= query.length) {
        setTimeout(() => !cancelled && setShowResults(true), 400);
        setTimeout(() => !cancelled && setHighlightRank(true), 1200);
        return;
      }
      setTyped(query.slice(0, i + 1));
      i += 1;
      setTimeout(typeChar, 55);
    };

    const t = setTimeout(typeChar, 300);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [isInView, query, reduceMotion]);

  const organicResults = results.filter((r) => !r.isAd);
  const highlightedIndex = organicResults.findIndex((r) => r.isHighlighted);

  return (
    <div ref={ref} className="mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
        <div className="border-b border-slate-100 px-4 py-3">
          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5">
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <span className="text-sm text-slate-800">
              {typed}
              {!reduceMotion && typed.length < query.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="ml-0.5 inline-block h-4 w-0.5 bg-slate-400 align-middle"
                />
              )}
            </span>
          </div>
        </div>

        <div className="space-y-0 p-3">
          {showResults &&
            results.map((result, idx) => (
              <motion.div
                key={result.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08, ease: EASE }}
                className={cn(
                  "rounded-lg px-3 py-3 transition-all duration-500",
                  result.isHighlighted &&
                    highlightRank &&
                    "bg-cyan-50 ring-2 ring-cyan-400/50 shadow-[0_0_20px_rgba(0,212,255,0.15)]",
                )}
              >
                {result.isAd && (
                  <span className="mb-1 inline-block rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-slate-500">
                    Ad
                  </span>
                )}
                <p
                  className={cn(
                    "text-sm font-medium leading-snug",
                    result.isHighlighted && highlightRank
                      ? "text-cyan-700"
                      : "text-blue-700",
                  )}
                >
                  {result.title.replace(/^Ad · /, "")}
                </p>
                <p className="mt-0.5 text-[11px] text-emerald-700">{result.url}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {result.description}
                </p>
                {result.isHighlighted && highlightRank && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700"
                  >
                    #1 Organic Result · Click
                  </motion.span>
                )}
              </motion.div>
            ))}
        </div>

        {highlightRank && highlightedIndex >= 0 && (
          <div className="border-t border-slate-100 bg-slate-50 px-4 py-2 text-center">
            <span className="text-[10px] font-medium text-slate-500">
              Rank improved: #4 → #1 over 90 days
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
