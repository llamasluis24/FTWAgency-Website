import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";
import type { CampaignFaqItem } from "@/content/campaigns/campaign-faq";
import { CampaignFAQClient } from "./CampaignFAQClient";

export function CampaignFAQ({ items }: { items: CampaignFaqItem[] }) {
  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow="FAQ" title="Common *Questions*" align="center" />
        <CampaignFAQClient items={items} />
      </Container>
    </Section>
  );
}
