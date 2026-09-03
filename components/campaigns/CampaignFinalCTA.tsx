"use client";

import { Container, Section } from "@/components/layout/Section";
import { getCampaignFormAnchorId } from "@/lib/campaigns/metadata";
import { fireCampaignPrimaryCtaClick } from "@/lib/campaigns/conversions";
import type { ResolvedCampaignPage } from "@/content/campaigns/types";

export function CampaignFinalCTA({ page }: { page: ResolvedCampaignPage }) {
  const formId = getCampaignFormAnchorId();

  return (
    <Section className="pb-28 md:pb-32">
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl border border-accent/20 bg-accent/5 px-6 py-12 text-center md:px-12">
          <h2 className="font-display text-3xl font-semibold text-heading md:text-4xl">
            Ready for a Website That Works Harder for Your Business?
          </h2>
          <p className="mt-4 text-body">
            Get a clear website plan built around your goals, your market, and the customers you
            want to attract.
          </p>
          <a
            href={`#${formId}`}
            onClick={() =>
              fireCampaignPrimaryCtaClick({
                campaignName: page.trackingCampaignName,
                ctaLabel: page.primaryCTA,
                pagePath: page.path,
              })
            }
            className="mt-8 inline-flex items-center justify-center rounded-[10px] bg-accent px-8 py-3.5 font-display text-base font-semibold text-[#04222b] transition-all hover:shadow-[0_0_32px_rgba(0,212,255,0.45)]"
          >
            {page.primaryCTA}
          </a>
        </div>
      </Container>
    </Section>
  );
}
