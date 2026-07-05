import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/jsonld";
import type { Faq } from "@/lib/schemas";
import { Reveal } from "@/components/ui/Reveal";

export function FAQSection({
  faqs,
  title = "Frequently Asked *Questions*",
  eyebrow = "FAQ",
  includeSchema = true,
}: {
  faqs: Faq[];
  title?: string;
  eyebrow?: string;
  includeSchema?: boolean;
}) {
  if (faqs.length === 0) return null;
  return (
    <Section>
      {includeSchema ? <JsonLd data={[faqSchema(faqs)]} /> : null}
      <Container className="max-w-3xl">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <Reveal>
          <Accordion items={faqs} />
        </Reveal>
      </Container>
    </Section>
  );
}
