"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { PlatformSpreadMock } from "@/components/social/PlatformSpreadMock";
import type { RetailEcommerceSocialModules } from "@/content/industries/modules/retail-ecommerce-social-modules";

export function RetailEcommerceSocialPlatformSpread({
  content,
}: {
  content: RetailEcommerceSocialModules["platformSpread"];
}) {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />

        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-surface p-5 sm:p-8">
          <PlatformSpreadMock items={[...content.items]} />
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-lg text-body">{content.lede}</p>
      </Container>
    </Section>
  );
}
