"use client";

import Image from "next/image";
import { AccentText } from "@/components/ui/AccentText";
import { Container, Section } from "@/components/layout/Section";
import { getCampaignFormAnchorId } from "@/lib/campaigns/metadata";
import {
  fireCampaignPrimaryCtaClick,
  fireCampaignSecondaryCtaClick,
} from "@/lib/campaigns/conversions";
import type { ResolvedCampaignPage } from "@/content/campaigns/types";

export function CampaignHero({ page }: { page: ResolvedCampaignPage }) {
  const formId = getCampaignFormAnchorId();

  return (
    <div className="relative overflow-hidden border-b border-white/5 bg-radial-accent">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_20%,rgba(0,212,255,0.12),transparent_55%)]"
        aria-hidden
      />
      <Section className="relative pb-12 pt-16 md:pb-20 md:pt-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow mb-4">{page.eyebrow}</p>
              <h1 className="text-4xl font-semibold leading-tight text-heading md:text-5xl lg:text-[3.25rem]">
                <AccentText text={page.headline} />
              </h1>
              <p className="mt-5 max-w-xl text-lg text-body">{page.subheadline}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`#${formId}`}
                  onClick={() =>
                    fireCampaignPrimaryCtaClick({
                      campaignName: page.trackingCampaignName,
                      ctaLabel: page.primaryCTA,
                      pagePath: page.path,
                    })
                  }
                  className="inline-flex items-center justify-center rounded-[10px] bg-accent px-7 py-3.5 font-display text-base font-semibold text-[#04222b] transition-all hover:shadow-[0_0_32px_rgba(0,212,255,0.45)]"
                >
                  {page.primaryCTA}
                </a>
                <a
                  href="/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    fireCampaignSecondaryCtaClick({
                      campaignName: page.trackingCampaignName,
                      ctaLabel: page.secondaryCTA,
                      pagePath: page.path,
                    })
                  }
                  className="inline-flex items-center justify-center rounded-[10px] border border-white/15 px-7 py-3.5 font-display text-base font-semibold text-heading transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {page.secondaryCTA}
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-elevated/80 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={page.heroVisual.src}
                    alt={page.heroVisual.alt}
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
