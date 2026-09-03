"use client";

import { useEffect, useState } from "react";
import { fireCampaignPrimaryCtaClick } from "@/lib/campaigns/conversions";
import { getCampaignFormAnchorId } from "@/lib/campaigns/metadata";
import type { ResolvedCampaignPage } from "@/content/campaigns/types";

export function CampaignStickyCTA({ page }: { page: ResolvedCampaignPage }) {
  const [visible, setVisible] = useState(false);
  const formId = getCampaignFormAnchorId();

  useEffect(() => {
    const formEl = document.getElementById(formId);
    if (!formEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry?.isIntersecting),
      { threshold: 0.1 },
    );

    observer.observe(formEl);
    return () => observer.disconnect();
  }, [formId]);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-bg/95 p-4 backdrop-blur-md md:hidden">
      <a
        href={`#${formId}`}
        onClick={() =>
          fireCampaignPrimaryCtaClick({
            campaignName: page.trackingCampaignName,
            ctaLabel: page.primaryCTA,
            pagePath: page.path,
          })
        }
        className="flex w-full items-center justify-center rounded-[10px] bg-accent px-6 py-3.5 font-display text-base font-semibold text-[#04222b]"
      >
        {page.primaryCTA}
      </a>
    </div>
  );
}
