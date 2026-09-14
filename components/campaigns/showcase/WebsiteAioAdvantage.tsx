"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";
import type { WebsiteShowcaseAioSection } from "@/content/campaigns/website-design-showcase";
import { fireCampaignPrimaryCtaClick } from "@/lib/campaigns/conversions";
import { getCampaignFormAnchorId } from "@/lib/campaigns/metadata";

export function WebsiteAioAdvantage({
  section,
  trackingCampaignName,
  pagePath,
}: {
  section: WebsiteShowcaseAioSection;
  trackingCampaignName: string;
  pagePath: string;
}) {
  const formId = getCampaignFormAnchorId();
  const { education, urgency, buildPoints } = section;

  return (
    <Section id="aio">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          lede={section.lede}
          align="center"
        />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-[1.25rem] border border-white/10 bg-[rgba(18,24,33,0.55)] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Education
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold !text-heading">
              {education.heading}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-body md:text-base">
              {education.body}
            </p>
            <ul className="mt-6 space-y-3">
              {education.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 border-b border-white/5 pb-3 text-sm text-body last:border-0 last:pb-0"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/25" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.25rem] border border-accent/30 bg-accent/[0.04] p-6 shadow-[0_0_48px_rgba(0,212,255,0.08)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              First-mover window
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold !text-heading">
              {urgency.heading}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-body md:text-base">
              {urgency.body}
            </p>
            <p className="mt-6 border-l-2 border-[#60d8b8]/60 pl-3 text-sm font-medium text-[#60d8b8] md:text-base">
              {urgency.punchLine}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Built into your website
          </p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {buildPoints.map((point) => (
              <li
                key={point.title}
                className="rounded-[1.25rem] border border-white/[0.06] bg-[rgba(18,24,33,0.65)] p-5"
              >
                <h4 className="font-display text-base font-semibold !text-heading">
                  {point.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-body">{point.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={`#${formId}`}
            onClick={() =>
              fireCampaignPrimaryCtaClick({
                campaignName: trackingCampaignName,
                ctaLabel: section.ctaLabel,
                pagePath,
              })
            }
            className="inline-flex items-center justify-center rounded-[10px] bg-accent px-7 py-3.5 font-display text-base font-semibold text-[#04222b] transition-all hover:shadow-[0_0_32px_rgba(0,212,255,0.45)]"
          >
            {section.ctaLabel}
          </a>
        </div>
      </Container>
    </Section>
  );
}
