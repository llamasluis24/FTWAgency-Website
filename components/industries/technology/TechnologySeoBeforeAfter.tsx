"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Search, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import type { TechModuleBeforeAfter } from "@/content/industries/technology-shared-types";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function MiniSerpPreview({
  variant,
  headline,
  label,
}: {
  variant: "before" | "after";
  headline: string;
  label: string;
}) {
  const isAfter = variant === "after";

  const results = isAfter
    ? [
        { title: "ClearPath — Workflow Automation Platform", rank: 1, highlight: true },
        { title: "Top 10 Workflow Automation Tools", rank: 2, highlight: false },
        { title: "Zapier vs Custom Workflow Software", rank: 3, highlight: false },
      ]
    : [
        { title: "Top 10 Workflow Automation Tools", rank: 1, highlight: false },
        { title: "Zapier vs Custom Workflow Software", rank: 2, highlight: false },
        { title: "ClearPath — Workflow Automation Platform", rank: 14, highlight: false },
      ];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border transition-shadow duration-300",
        isAfter
          ? "border-accent/25 shadow-[0_0_40px_rgba(0,212,255,0.12)]"
          : "border-white/10",
      )}
    >
      <div
        className={cn(
          "px-4 py-2.5 text-center text-[10px] font-semibold uppercase tracking-wider",
          isAfter ? "bg-accent/10 text-accent" : "bg-red-500/10 text-red-400",
        )}
      >
        {label}
      </div>

      <div className={cn("p-4", isAfter ? "bg-surface" : "bg-bg")}>
        <div className="mb-3 flex items-center gap-2 rounded-full border border-white/10 bg-elevated px-3 py-2">
          <Search className="h-3.5 w-3.5 text-muted" />
          <span className="text-xs text-body">workflow automation software</span>
        </div>

        <div className="space-y-2">
          {results.map((r) => (
            <div
              key={r.title}
              className={cn(
                "rounded-lg border px-3 py-2.5 transition-all",
                r.highlight
                  ? "border-accent/30 bg-accent/5"
                  : "border-white/5 bg-elevated/50",
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <p
                  className={cn(
                    "text-xs font-medium leading-snug",
                    r.highlight ? "text-accent" : "text-heading",
                  )}
                >
                  {r.title}
                </p>
                <span
                  className={cn(
                    "tnum shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold",
                    r.highlight
                      ? "bg-success/15 text-success"
                      : "bg-white/5 text-muted",
                  )}
                >
                  #{r.rank}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 font-display text-sm font-semibold text-heading">{headline}</p>
      </div>
    </div>
  );
}

export function TechnologySeoBeforeAfter({
  content,
}: {
  content: TechModuleBeforeAfter;
}) {
  const [active, setActive] = useState<"before" | "after" | "both">("both");
  const reduceMotion = useReducedMotion();

  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />

        <div className="mb-8 flex justify-center gap-2 md:hidden">
          {(["before", "after"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setActive(v)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                active === v ? "bg-accent text-bg" : "border border-white/10 text-body",
              )}
            >
              {content[v].label}
            </button>
          ))}
        </div>

        <RevealStagger className="grid gap-8 lg:grid-cols-2">
          <RevealItem className={cn(active === "after" && "hidden md:block")}>
            <MiniSerpPreview
              variant="before"
              label={content.before.label}
              headline={content.before.headline}
            />
            <ul className="mt-5 space-y-2.5">
              {content.before.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-body">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-500/15">
                    <X className="h-3.5 w-3.5 text-red-500" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem className={cn(active === "before" && "hidden md:block")}>
            <MiniSerpPreview
              variant="after"
              label={content.after.label}
              headline={content.after.headline}
            />
            <ul className="mt-5 space-y-2.5">
              {content.after.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-body">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-success/15">
                    <Check className="h-3.5 w-3.5 text-success" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>
        </RevealStagger>

        {!reduceMotion && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mx-auto mt-10 hidden h-px max-w-md bg-gradient-to-r from-transparent via-accent/50 to-transparent md:block"
          />
        )}
      </Container>
    </Section>
  );
}
