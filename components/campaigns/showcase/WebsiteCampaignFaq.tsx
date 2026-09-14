import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";
import type { WebsiteShowcaseFaqItem } from "@/content/campaigns/website-design-showcase";

export function WebsiteCampaignFaq({ faq }: { faq: WebsiteShowcaseFaqItem[] }) {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions Business Owners *Actually Ask*"
          lede="Straight answers about SEO, service pages, AI Search, ads, and what happens after launch."
          align="center"
        />
        <div className="mx-auto max-w-3xl">
          <Accordion items={faq} />
        </div>
      </Container>
    </Section>
  );
}
