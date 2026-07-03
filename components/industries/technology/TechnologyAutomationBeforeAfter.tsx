"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Clock, X, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import type { TechModuleBeforeAfter } from "@/content/industries/technology-shared-types";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function MiniOpsPreview({
  variant,
  headline,
  label,
}: {
  variant: "before" | "after";
  headline: string;
  label: string;
}) {
  const isAfter = variant === "after";

  const tasks = isAfter
    ? [
        { text: "Trial signup → welcome sent", done: true, auto: true },
        { text: "Demo request → SMS in 8 sec", done: true, auto: true },
        { text: "CRM updated automatically", done: true, auto: true },
        { text: "Reminder cadence scheduled", done: true, auto: true },
      ]
    : [
        { text: "Trial signup received", done: true, auto: false },
        { text: "Follow up tomorrow...", done: false, auto: false },
        { text: "Update CRM manually", done: false, auto: false },
        { text: "Send demo reminder?", done: false, auto: false },
      ];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border transition-shadow duration-300",
        isAfter
          ? "border-amber-400/25 shadow-[0_0_40px_rgba(255,176,32,0.12)]"
          : "border-white/10",
      )}
    >
      <div
        className={cn(
          "px-4 py-2.5 text-center text-[10px] font-semibold uppercase tracking-wider",
          isAfter ? "bg-amber-400/10 text-amber-300" : "bg-red-500/10 text-red-400",
        )}
      >
        {label}
      </div>

      <div className={cn("p-4", isAfter ? "bg-surface" : "bg-bg")}>
        <div className="mb-3 flex items-center justify-between rounded-lg border border-white/10 bg-elevated px-3 py-2">
          <span className="text-xs font-semibold text-heading">Lifecycle queue</span>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[10px] font-bold",
              isAfter ? "bg-success/15 text-success" : "bg-red-500/15 text-red-400",
            )}
          >
            {isAfter ? "4 automated" : "1 pending · 3 manual"}
          </span>
        </div>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.text}
              className={cn(
                "flex items-center gap-3 rounded-lg border px-3 py-2.5 text-xs",
                task.done && isAfter
                  ? "border-amber-400/20 bg-amber-400/5"
                  : task.done
                    ? "border-white/5 bg-elevated/50"
                    : "border-white/5 bg-elevated/30 opacity-60",
              )}
            >
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-md",
                  task.done && isAfter
                    ? "bg-success/15"
                    : task.done
                      ? "bg-white/5"
                      : "bg-red-500/10",
                )}
              >
                {task.done ? (
                  task.auto ? (
                    <Zap className="h-3.5 w-3.5 text-amber-400" strokeWidth={2.5} />
                  ) : (
                    <Check className="h-3.5 w-3.5 text-muted" strokeWidth={2.5} />
                  )
                ) : (
                  <Clock className="h-3.5 w-3.5 text-red-400" strokeWidth={2.5} />
                )}
              </span>
              <span className={cn("text-body", task.done && isAfter && "text-heading")}>
                {task.text}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-4 font-display text-sm font-semibold text-heading">{headline}</p>
      </div>
    </div>
  );
}

export function TechnologyAutomationBeforeAfter({
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
            <MiniOpsPreview
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
            <MiniOpsPreview
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
            className="mx-auto mt-10 hidden h-px max-w-md bg-gradient-to-r from-transparent via-amber-400/50 to-transparent md:block"
          />
        )}
      </Container>
    </Section>
  );
}
