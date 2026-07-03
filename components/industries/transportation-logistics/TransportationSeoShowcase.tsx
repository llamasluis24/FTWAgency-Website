"use client";

import { useRef, useState } from "react";
import { Map, Search } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SerpSearchMock } from "@/components/seo/SerpSearchMock";
import { KeywordMapMock } from "@/components/seo/KeywordMapMock";
import type { transportationLogisticsSeoModules } from "@/content/industries/modules/transportation-logistics-seo-modules";
import { cn } from "@/lib/utils";

export function TransportationSeoShowcase({
  content,
}: {
  content: typeof transportationLogisticsSeoModules.showcase;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
            <div className={cn(activePanel !== "keywords" && "hidden md:block")}>
              <KeywordMapMock nodes={content.keywordNodes} />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
