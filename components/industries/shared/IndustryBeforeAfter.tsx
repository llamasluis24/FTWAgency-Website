"use client";

import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import type { IndustryModuleBeforeAfter } from "@/content/industries/modules/types";
import { cn } from "@/lib/utils";

function ComparisonColumn({
  variant,
  label,
  headline,
  items,
}: {
  variant: "before" | "after";
  label: string;
  headline: string;
  items: readonly string[];
}) {
  const isAfter = variant === "after";

  return (
    <div
      className={cn(
        "rounded-2xl border p-6 md:p-8",
        isAfter
          ? "border-accent/25 bg-accent/5 shadow-[0_0_40px_rgba(0,212,255,0.08)]"
          : "border-white/10 bg-surface",
      )}
    >
      <p
        className={cn(
          "mb-1 text-[10px] font-semibold uppercase tracking-wider",
          isAfter ? "text-accent" : "text-red-400",
        )}
      >
        {label}
      </p>
      <p className="mb-5 font-display text-lg font-semibold text-heading">{headline}</p>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-body">
            <span
              className={cn(
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-md",
                isAfter ? "bg-success/15" : "bg-red-500/15",
              )}
            >
              {isAfter ? (
                <Check className="h-3.5 w-3.5 text-success" strokeWidth={2.5} />
              ) : (
                <X className="h-3.5 w-3.5 text-red-500" strokeWidth={2.5} />
              )}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function IndustryBeforeAfter({
  content,
}: {
  content: IndustryModuleBeforeAfter;
}) {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />

        <Reveal>
          <RevealStagger className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <RevealItem>
              <ComparisonColumn
                variant="before"
                label={content.before.label}
                headline={content.before.headline}
                items={content.before.items}
              />
            </RevealItem>
            <RevealItem>
              <ComparisonColumn
                variant="after"
                label={content.after.label}
                headline={content.after.headline}
                items={content.after.items}
              />
            </RevealItem>
          </RevealStagger>
        </Reveal>
      </Container>
    </Section>
  );
}
