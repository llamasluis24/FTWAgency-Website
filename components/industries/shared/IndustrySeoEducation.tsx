"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Icon } from "@/components/ui/Icon";
import type { IndustryModuleSeoEducation } from "@/content/industries/modules/types";
import { getSeoEducationBackgrounds } from "@/content/seo-education-backgrounds";
import { cn } from "@/lib/utils";

function TopicNavButton({
  title,
  icon,
  active,
  onClick,
  compact,
}: {
  title: string;
  icon: string;
  active: boolean;
  onClick: () => void;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-start gap-3 rounded-xl border px-4 py-3 text-left transition-colors",
        active
          ? "border-accent/40 bg-accent/10"
          : "border-white/10 bg-bg/40 hover:border-white/20 hover:bg-white/[0.03]",
        compact ? "shrink-0 snap-start max-w-[220px]" : "w-full",
      )}
    >
      <Icon name={icon} className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
      <span
        className={cn(
          "text-sm font-semibold leading-snug",
          active ? "text-heading" : "text-body",
          compact && "line-clamp-2",
        )}
      >
        {title}
      </span>
    </button>
  );
}

export function IndustrySeoEducation({
  content,
  industrySlug,
}: {
  content: IndustryModuleSeoEducation;
  industrySlug: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = content.insights[activeIndex];
  const backgrounds = getSeoEducationBackgrounds(industrySlug);
  const activeBackground = backgrounds[activeIndex];

  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />

        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex gap-2 overflow-x-auto pb-1 lg:hidden">
            {content.insights.map((insight, i) => (
              <TopicNavButton
                key={insight.title}
                title={insight.title}
                icon={insight.icon}
                active={activeIndex === i}
                onClick={() => setActiveIndex(i)}
                compact
              />
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start">
            <nav className="hidden flex-col gap-2 lg:flex" aria-label="SEO topics">
              {content.insights.map((insight, i) => (
                <TopicNavButton
                  key={insight.title}
                  title={insight.title}
                  icon={insight.icon}
                  active={activeIndex === i}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </nav>

            <div className="min-w-0">
              <article
                className={cn(
                  "relative overflow-hidden rounded-[var(--radius-card)] border border-white/[0.06] p-6 md:p-8",
                  !activeBackground && "card-surface",
                )}
              >
                {activeBackground && (
                  <div
                    key={activeIndex}
                    className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                    aria-hidden
                  >
                    <Image
                      src={activeBackground.src}
                      alt=""
                      fill
                      className="object-cover object-[center_35%] scale-105 brightness-[1.15] saturate-[1.12] contrast-[1.05]"
                      sizes="(max-width: 768px) 100vw, 720px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a2330] from-30% via-[#1a2330]/55 via-50% to-[#1a2330]/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2330]/75 via-[#1a2330]/20 to-[#1a2330]/25" />
                  </div>
                )}

                <div
                  className={cn(
                    "relative z-10 max-w-lg",
                    activeBackground && "[&_h3]:text-white [&_p]:text-white/90",
                  )}
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-black/30 backdrop-blur-sm">
                    <Icon name={active.icon} className="h-5 w-5 text-accent" />
                  </span>

                  <h3 className="font-display text-xl font-semibold leading-snug text-heading md:text-2xl">
                    {active.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body md:text-base">{active.body}</p>

                  <p className="mt-5 border-t border-white/15 pt-4 text-sm text-muted">
                    <span className="font-medium text-success">Bottom line: </span>
                    {active.takeaway}
                  </p>
                </div>
              </article>

              {content.audit && (
                <div className="mt-5 rounded-xl border border-white/10 bg-bg/60 p-5 md:p-6">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <p className="font-display text-sm font-semibold text-heading">
                      Technical baseline
                    </p>
                    <span className="tnum rounded-lg border border-success/20 bg-success/5 px-3 py-1 text-sm font-semibold text-success">
                      {content.audit.healthAfter} health · was {content.audit.healthBefore}
                    </span>
                  </div>

                  <ul className="grid gap-2 sm:grid-cols-2">
                    {content.audit.checks.map((check) => (
                      <li
                        key={check.label}
                        className="flex items-center gap-2 rounded-lg border border-white/5 bg-surface/50 px-3 py-2 text-sm text-body"
                      >
                        <Check
                          className={cn(
                            "h-3.5 w-3.5 shrink-0",
                            check.status === "pass"
                              ? "text-success"
                              : check.status === "warn"
                                ? "text-amber-400"
                                : "text-red-400",
                          )}
                          strokeWidth={2.5}
                        />
                        {check.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
