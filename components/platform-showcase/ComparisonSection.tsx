"use client";

import { motion } from "framer-motion";
import type { ComparisonSide } from "./types";
import { cn } from "@/lib/utils";

export function ComparisonSection({
  before,
  after,
}: {
  before: ComparisonSide;
  after: ComparisonSide;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ComparisonPanel side={before} variant="before" />
      <ComparisonPanel side={after} variant="after" />
    </div>
  );
}

function ComparisonPanel({
  side,
  variant,
}: {
  side: ComparisonSide;
  variant: "before" | "after";
}) {
  const isAfter = variant === "after";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "rounded-2xl border p-6",
        isAfter
          ? "border-success/20 bg-success/5 shadow-[0_0_40px_rgba(46,212,122,0.08)]"
          : "border-white/5 bg-surface/40",
      )}
    >
      <p
        className={cn(
          "eyebrow mb-4",
          isAfter ? "!text-success" : "!text-muted",
        )}
      >
        {side.title}
      </p>
      <ul className="space-y-4">
        {side.items.map((item) => (
          <li key={item.label} className="flex items-center justify-between gap-4">
            <span className="text-sm text-body">{item.label}</span>
            <span
              className={cn(
                "tnum shrink-0 rounded-lg px-2.5 py-1 text-sm font-semibold",
                item.bad
                  ? "bg-red-500/10 text-red-400"
                  : isAfter
                    ? "bg-success/10 text-success"
                    : "bg-white/5 text-heading",
              )}
            >
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
