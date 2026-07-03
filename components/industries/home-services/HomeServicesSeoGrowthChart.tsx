"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SeoGrowthDashboardMock } from "@/components/seo/SeoGrowthDashboardMock";
import type { homeServicesSeoModules } from "@/content/industries/modules/home-services-seo-modules";

export function HomeServicesSeoGrowthChart({
  content,
}: {
  content: typeof homeServicesSeoModules.growth;
}) {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />
        <Reveal>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-bg shadow-[0_0_48px_rgba(0,212,255,0.08)]">
            <div className="border-b border-white/10 bg-elevated px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="mx-auto text-[10px] text-muted">analytics.summitcomfort.com</span>
              </div>
            </div>
            <div className="p-5 sm:p-8">
              <SeoGrowthDashboardMock
                chartValues={[...content.chartValues]}
                metrics={[...content.metrics]}
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
