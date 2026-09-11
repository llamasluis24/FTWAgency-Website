"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { getCampaignFormAnchorId } from "@/lib/campaigns/metadata";
import { fireCampaignPrimaryCtaClick } from "@/lib/campaigns/conversions";
import type { CampaignChromePage } from "@/content/campaigns/website-design-showcase";

export function CampaignHeader({ page }: { page: CampaignChromePage }) {
  const formId = getCampaignFormAnchorId();

  const handlePrimaryClick = () => {
    fireCampaignPrimaryCtaClick({
      campaignName: page.trackingCampaignName,
      ctaLabel: page.primaryCTA,
      pagePath: page.path,
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative block h-8 w-32 shrink-0" aria-label={`${siteConfig.name} home`}>
          <Image
            src="/brand/logo-inverted.png"
            alt={siteConfig.name}
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden text-sm text-body transition-colors hover:text-accent sm:inline"
          >
            Contact
          </a>
          <a
            href={`#${formId}`}
            onClick={handlePrimaryClick}
            className="rounded-[10px] bg-accent px-4 py-2.5 font-display text-sm font-semibold text-[#04222b] transition-all hover:shadow-[0_0_24px_rgba(0,212,255,0.35)]"
          >
            {page.primaryCTA}
          </a>
        </div>
      </div>
    </header>
  );
}
