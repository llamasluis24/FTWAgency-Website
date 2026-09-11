"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/content/site";
import { getCampaignPageByName } from "@/content/campaigns/campaign-pages";
import { websiteDesignShowcase } from "@/content/campaigns/website-design-showcase";
import { getCampaignAttribution } from "@/lib/campaigns/attribution";
import { fireCampaignFormConversion, fireCampaignCalendarOpen } from "@/lib/campaigns/conversions";
import { campaignTrackingConfig } from "@/lib/campaigns/tracking";
import { CampaignFooter } from "@/components/campaigns/CampaignFooter";
import { Container, Section } from "@/components/layout/Section";

export function CampaignThankYouClient() {
  const searchParams = useSearchParams();
  const conversionFired = useRef(false);

  const campaignName = searchParams.get("campaign") ?? "";
  const serviceParam = searchParams.get("service") ?? "";
  const cityParam = searchParams.get("city") ?? undefined;
  const geoPage = campaignName ? getCampaignPageByName(campaignName) : null;
  const isShowcase = campaignName === websiteDesignShowcase.trackingCampaignName;
  const backPath = geoPage?.path ?? (isShowcase ? websiteDesignShowcase.path : null);
  const bookingUrl = campaignTrackingConfig.bookingUrl;

  useEffect(() => {
    if (conversionFired.current || !campaignName) return;
    conversionFired.current = true;

    fireCampaignFormConversion({
      campaignName: geoPage?.trackingCampaignName ?? campaignName,
      service: geoPage?.service ?? serviceParam,
      city: geoPage?.city ?? cityParam,
      variant: geoPage?.experimentVariant,
      attribution: getCampaignAttribution(),
    });
  }, [campaignName, cityParam, geoPage, serviceParam]);

  return (
    <>
      <Section className="min-h-[60vh] pt-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <CheckCircle2 className="mx-auto mb-6 h-14 w-14 text-success" strokeWidth={1.5} />
            <h1 className="font-display text-3xl font-semibold text-heading md:text-4xl">
              Thank You — We Received Your Request
            </h1>
            <p className="mt-4 text-body">
              Our team will review your information and reach out within one business day with clear
              next steps for your website project.
            </p>
            {bookingUrl ? (
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  fireCampaignCalendarOpen({
                    campaignName: geoPage?.trackingCampaignName ?? campaignName,
                  })
                }
                className="mt-8 inline-flex items-center justify-center rounded-[10px] bg-accent px-8 py-3.5 font-display text-base font-semibold text-[#04222b] transition-all hover:shadow-[0_0_32px_rgba(0,212,255,0.45)]"
              >
                Schedule Your Strategy Call
              </a>
            ) : (
              <p className="mt-8 text-sm text-muted">
                Prefer to reach us directly? Email{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                  {siteConfig.email}
                </a>
              </p>
            )}
            {backPath ? (
              <Link
                href={backPath}
                className="mt-6 inline-block text-sm text-muted transition-colors hover:text-accent"
              >
                ← Back to campaign page
              </Link>
            ) : null}
          </div>
        </Container>
      </Section>
      <CampaignFooter />
    </>
  );
}
