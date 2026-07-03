"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import type { TechModuleBeforeAfter } from "@/content/industries/technology-shared-types";
import { PlatformLogo } from "@/components/aio/PlatformLogo";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function MiniAiPreview({
  variant,
  headline,
  label,
}: {
  variant: "before" | "after";
  headline: string;
  label: string;
}) {
  const isAfter = variant === "after";

  const recommendations = isAfter
    ? [
        { name: "ClearPath", highlight: true },
        { name: "AutomatePro Suite", highlight: false },
        { name: "FlowStack", highlight: false },
      ]
    : [
        { name: "AutomatePro Suite", highlight: false },
        { name: "FlowStack", highlight: false },
        { name: "ClearPath", highlight: false, faded: true },
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
        <div className="mb-3 flex justify-end">
          <div className="max-w-[90%] rounded-2xl rounded-br-md bg-elevated px-3 py-2 text-xs text-body">
            Best workflow automation software for SaaS teams?
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-elevated p-3">
          <div className="mb-3 flex items-center gap-2">
            <PlatformLogo theme="chatgpt" className="h-6 w-6 text-[10px]" />
            <span className="text-[10px] text-muted">ChatGPT</span>
          </div>

          <div className="space-y-2">
            {recommendations.map((rec, i) => (
              <div
                key={rec.name}
                className={cn(
                  "rounded-md border px-2.5 py-2 text-xs transition-all",
                  rec.highlight
                    ? "border-accent/30 bg-accent/5"
                    : "border-white/5 bg-surface/50",
                  "faded" in rec && rec.faded && "opacity-30",
                )}
              >
                <span className="flex items-center gap-2">
                  <span className="tnum text-[10px] text-muted">{i + 1}.</span>
                  <span
                    className={cn(
                      "font-semibold",
                      rec.highlight ? "text-accent" : "text-heading",
                    )}
                  >
                    {rec.name}
                  </span>
                  {rec.highlight && (
                    <span className="rounded-full bg-success/15 px-1.5 py-0.5 text-[9px] font-bold text-success">
                      Recommended
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>

          {!isAfter && (
            <p className="mt-3 flex items-center gap-1.5 text-[10px] text-red-400">
              <X className="h-3 w-3" strokeWidth={2.5} />
              Your product not mentioned
            </p>
          )}
          {isAfter && (
            <p className="mt-3 flex items-center gap-1.5 text-[10px] text-success">
              <Sparkles className="h-3 w-3" strokeWidth={2} />
              ClearPath recommended #1
            </p>
          )}
        </div>

        <p className="mt-4 font-display text-sm font-semibold text-heading">{headline}</p>
      </div>
    </div>
  );
}

export function TechnologyAioBeforeAfter({
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
            <MiniAiPreview
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
            <MiniAiPreview
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
