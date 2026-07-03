"use client";

import { useState } from "react";
import { Map, Search } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { SerpSearchMock } from "@/components/seo/SerpSearchMock";
import { KeywordMapMock } from "@/components/seo/KeywordMapMock";
import type { TechnologySeoModules } from "@/content/industries/technology-seo-modules";
import { cn } from "@/lib/utils";

export function TechnologySeoShowcase({
  content,
}: {
  content: TechnologySeoModules["showcase"];
}) {
  const [activePanel, setActivePanel] = useState<"serp" | "keywords">("serp");

  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />

        <div className="mb-6 flex justify-center gap-2 md:hidden">
          {(
            [
              { id: "serp" as const, label: "Search Results", icon: Search },
              { id: "keywords" as const, label: "Keyword Map", icon: Map },
            ] as const
          ).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActivePanel(id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                activePanel === id
                  ? "bg-accent text-bg"
                  : "border border-white/10 text-body",
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-bg shadow-[0_0_60px_rgba(0,212,255,0.08)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,212,255,0.12),transparent)]" />

          <div className="relative border-b border-white/10 bg-elevated px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="mx-auto rounded-md bg-white/5 px-4 py-1 text-[10px] text-muted">
                google.com/search
              </span>
            </div>
          </div>

          <div className="relative grid gap-0 md:grid-cols-2">
            <div
              className={cn(
                "border-b border-white/10 p-5 sm:p-8 md:border-b-0 md:border-r",
                activePanel !== "serp" && "hidden md:block",
              )}
            >
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-accent">
                Live search simulation
              </p>
              <SerpSearchMock query={content.searchQuery} results={[...content.serpResults]} />
            </div>

            <div
              className={cn(
                "bg-surface/50 p-5 sm:p-8",
                activePanel !== "keywords" && "hidden md:block",
              )}
            >
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-accent">
                Intent → page mapping
              </p>
              <KeywordMapMock nodes={[...content.keywordNodes]} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
