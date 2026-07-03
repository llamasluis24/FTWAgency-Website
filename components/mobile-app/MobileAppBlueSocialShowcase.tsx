"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WebsiteBeforeAfterComparison } from "@/components/portfolio/WebsiteBeforeAfterComparison";
import {
  blueSocialAppShowcaseExample,
  mobileAppBlueSocialShowcase,
} from "@/content/mobile-app-blue-social-showcase";

export function MobileAppBlueSocialShowcase() {
  const { appStoreLinks } = mobileAppBlueSocialShowcase;

  return (
    <Section surface>
      <Container>
        <SectionHeading
          eyebrow={mobileAppBlueSocialShowcase.eyebrow}
          title={mobileAppBlueSocialShowcase.headline}
          lede={mobileAppBlueSocialShowcase.lede}
        />

        <Reveal className="mx-auto mt-6 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-body md:text-lg">
            {mobileAppBlueSocialShowcase.body}
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {mobileAppBlueSocialShowcase.highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-[#60d8b8]/25 bg-[#60d8b8]/10 px-3 py-1.5 text-xs font-medium text-[#60d8b8]"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={appStoreLinks.googlePlay.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#60d8b8]/30 bg-[#60d8b8]/10 px-4 py-2 text-sm font-semibold text-[#60d8b8] transition-colors hover:border-[#60d8b8]/50 hover:bg-[#60d8b8]/15"
            >
              {appStoreLinks.googlePlay.label}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <Link
              href={appStoreLinks.appStore.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#60d8b8]/30 bg-[#60d8b8]/10 px-4 py-2 text-sm font-semibold text-[#60d8b8] transition-colors hover:border-[#60d8b8]/50 hover:bg-[#60d8b8]/15"
            >
              {appStoreLinks.appStore.label}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <SectionHeading
              eyebrow={mobileAppBlueSocialShowcase.comparisonEyebrow}
              title={mobileAppBlueSocialShowcase.comparisonTitle}
              lede={mobileAppBlueSocialShowcase.comparisonLede}
              className="mb-10 text-center [&_h2]:mx-auto [&_p]:mx-auto"
            />
          </Reveal>
          <WebsiteBeforeAfterComparison
            example={blueSocialAppShowcaseExample}
            showLabels={false}
          />
        </div>
      </Container>
    </Section>
  );
}
