"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { AccentText } from "@/components/ui/AccentText";
import { Container, Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AboutIdealClient({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const reduceMotion = useReducedMotion();

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <Section surface>
      <Container className="max-w-3xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="text-3xl font-semibold md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            <AccentText text={title} />
          </h2>
          <p className="mt-4 text-sm text-muted">Tap each statement that sounds like you.</p>
        </div>

        <ul className="space-y-3 md:space-y-4">
          {items.map((item, index) => {
            const isChecked = checked.has(index);
            return (
              <motion.li
                key={item}
                initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-pressed={isChecked}
                  className={cn(
                    "flex w-full items-center gap-4 rounded-2xl border px-5 py-5 text-left transition-all duration-300 md:px-7 md:py-6",
                    isChecked
                      ? "border-success/40 bg-success/[0.08] shadow-[0_0_32px_rgba(46,212,122,0.12)]"
                      : "border-white/8 bg-[#0B0F14]/40 hover:border-accent/25 hover:bg-surface/60",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-all duration-300",
                      isChecked
                        ? "border-success bg-success text-[#04222b]"
                        : "border-success/35 bg-success/10",
                    )}
                  >
                    <Check
                      className={cn("h-4 w-4", isChecked ? "text-[#04222b]" : "text-success")}
                      strokeWidth={2.5}
                    />
                  </span>
                  <span
                    className={cn(
                      "font-display text-base font-semibold leading-snug md:text-lg",
                      isChecked ? "text-heading" : "text-body",
                    )}
                  >
                    {item}
                  </span>
                </button>
              </motion.li>
            );
          })}
        </ul>

        {checked.size === items.length && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mt-8 text-center text-sm font-medium text-success"
          >
            Sounds like a fit — let&apos;s talk.
          </motion.p>
        )}
      </Container>
    </Section>
  );
}
