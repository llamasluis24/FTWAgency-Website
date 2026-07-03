"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { KeywordNode } from "@/content/seo-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const targetColors: Record<string, string> = {
  "Service Page": "border-cyan-400/40 bg-cyan-50 text-cyan-700",
  "Category Page": "border-cyan-400/40 bg-cyan-50 text-cyan-700",
  "Product Page": "border-sky-400/40 bg-sky-50 text-sky-700",
  "Comparison Page": "border-orange-400/40 bg-orange-50 text-orange-700",
  "Pricing Page": "border-emerald-400/40 bg-emerald-50 text-emerald-700",
  "Location Page": "border-emerald-400/40 bg-emerald-50 text-emerald-700",
  "Blog / Guide": "border-violet-400/40 bg-violet-50 text-violet-700",
  "Guide / Blog": "border-violet-400/40 bg-violet-50 text-violet-700",
  "Industry Page": "border-amber-400/40 bg-amber-50 text-amber-700",
};

export function KeywordMapMock({ nodes }: { nodes: KeywordNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(nodes.length - 1);

  useEffect(() => {
    if (!isInView || reduceMotion) {
      setActiveIndex(nodes.length - 1);
      return;
    }

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
    <div ref={ref} className="mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-lg sm:p-6">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          Keyword → Page Mapping
        </p>

        <div className="relative mb-6 flex justify-center">
          <motion.div
            animate={
              isInView
                ? { boxShadow: "0 0 24px rgba(0,212,255,0.2)" }
                : {}
            }
            className="rounded-xl border-2 border-cyan-400/50 bg-cyan-50 px-6 py-4 text-center"
          >
            <p className="font-display text-sm font-bold text-cyan-800">Buyer Intent</p>
            <p className="mt-0.5 text-[10px] text-cyan-600">Central hub</p>
          </motion.div>
        </div>

        <div className="space-y-3">
          {nodes.map((node, i) => {
            const isActive = i <= activeIndex;
            return (
              <motion.div
                key={node.query}
                initial={reduceMotion ? undefined : { opacity: 0, x: -12 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.35, x: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="relative"
              >
                <div className="absolute left-4 top-0 h-3 w-0.5 bg-cyan-300/50" aria-hidden />
                <div className="flex items-stretch gap-3 pl-6">
                  <div className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
                    <p className="text-[10px] font-medium text-slate-400">Search query</p>
                    <p className="text-xs font-semibold text-slate-800">&ldquo;{node.query}&rdquo;</p>
                  </div>
                  <div className="flex items-center text-slate-300" aria-hidden>
                    →
                  </div>
                  <div
                    className={cn(
                      "flex shrink-0 items-center rounded-lg border px-3 py-2.5 text-[10px] font-bold",
                      targetColors[node.target] ?? "border-slate-200 bg-slate-50 text-slate-600",
                      isActive && "ring-2 ring-cyan-400/30",
                    )}
                  >
                    {node.target}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
