"use client";

import { useRef, useState } from "react";
import { MapPin, Search } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SerpSearchMock } from "@/components/seo/SerpSearchMock";
import type { restaurantsHospitalityGbpModules } from "@/content/industries/modules/restaurants-hospitality-gbp-modules";
import { cn } from "@/lib/utils";

export function RestaurantsHospitalityGbpShowcase({
  content,
}: {
  content: typeof restaurantsHospitalityGbpModules.showcase;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState<"serp" | "stats">("serp");

  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />

        <div className="mb-6 flex justify-center gap-2 md:hidden">
          {(
            [
              { id: "serp" as const, label: "Map Pack", icon: Search },
              { id: "stats" as const, label: "Profile Stats", icon: MapPin },
            ] as const
          ).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActivePanel(id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                activePanel === id ? "bg-accent text-bg" : "border border-white/10 text-body",
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <Reveal>
          <div ref={ref} className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div className={cn(activePanel !== "serp" && "hidden md:block")}>
              <SerpSearchMock query={content.searchQuery} results={content.serpResults} />
            </div>

            <div
              className={cn(
                "card-surface p-6 md:p-8",
                activePanel !== "stats" && "hidden md:block",
              )}
            >
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                Harvest & Table
              </p>
              <p className="mb-6 font-display text-lg font-semibold text-heading">
                Google Business Profile Performance
              </p>
              <div className="space-y-4">
                {content.profileStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-elevated px-4 py-4"
                  >
                    <span className="text-sm text-body">{stat.label}</span>
                    <span className="tnum font-display text-xl font-bold text-accent">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted">
                Optimized categories, review velocity, and weekly food posts compound map pack
                visibility across all locations.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
