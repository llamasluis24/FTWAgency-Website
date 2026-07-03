"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import type { Stat } from "@/lib/schemas";
import { cn } from "@/lib/utils";

/** Animated count-up metric with spring-like easing, triggered on viewport entry. */
export function StatCounter({
  stat,
  className,
  valueClassName,
}: {
  stat: Stat;
  className?: string;
  valueClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? stat.value : 0);
  const isFloat = !Number.isInteger(stat.value);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplay(stat.value * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, stat.value]);

  const formatted = isFloat
    ? display.toFixed(1)
    : Math.round(display).toLocaleString();

  return (
    <div ref={ref} className={className}>
      <div
        className={cn(
          "tnum font-display text-4xl font-bold text-heading md:text-5xl",
          valueClassName,
        )}
      >
        {stat.prefix}
        {formatted}
        <span className="text-accent">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-sm text-body">{stat.label}</div>
    </div>
  );
}
