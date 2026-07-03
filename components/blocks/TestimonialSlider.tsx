"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { Testimonial } from "@/lib/schemas";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function NavButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous testimonial" : "Next testimonial"}
      className={cn(
        "group absolute top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full",
        "border border-white/12 bg-[#0B0F14]/95 text-body backdrop-blur-md",
        "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        "transition-all duration-300 hover:border-accent/50 hover:bg-[#121821] hover:text-accent hover:shadow-[0_0_28px_rgba(0,212,255,0.25)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
        "disabled:pointer-events-none disabled:opacity-0",
        direction === "prev" ? "left-0 md:-left-2" : "right-0 md:-right-2",
      )}
    >
      <Icon className="h-5 w-5 transition-transform group-hover:scale-110" strokeWidth={2} />
    </button>
  );
}

export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const goPrev = () => setIndex((i) => (i - 1 + count) % count);
  const goNext = () => setIndex((i) => (i + 1) % count);

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => clearInterval(id);
  }, [paused, count]);

  if (count === 0) return null;

  const current = testimonials[index];
  const progress = ((index + 1) / count) * 100;

  return (
    <div
      className="mx-auto w-full max-w-3xl md:max-w-4xl lg:max-w-5xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div className="relative">
        <div className="relative px-12 md:px-14">
          <NavButton direction="prev" onClick={goPrev} disabled={count <= 1} />
          <NavButton direction="next" onClick={goNext} disabled={count <= 1} />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.company}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <TestimonialCard testimonial={current} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {count > 1 && (
        <div className="mt-12 flex flex-col items-center gap-5">
          <div className="flex items-center gap-3">
            <p className="tnum text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div className="relative h-px w-24 overflow-hidden rounded-full bg-white/10 md:w-32">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-accent shadow-[0_0_12px_rgba(0,212,255,0.5)]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.45, ease: EASE }}
              />
            </div>
            <p className="tnum text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              {String(count).padStart(2, "0")}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            {testimonials.map((t, i) => (
              <button
                key={t.company}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial from ${t.company}`}
                aria-current={i === index ? "true" : undefined}
                className={cn(
                  "rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
                  i === index
                    ? "h-2 w-8 bg-accent shadow-[0_0_14px_rgba(0,212,255,0.5)]"
                    : "h-2 w-2 bg-white/20 hover:bg-white/40",
                )}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
