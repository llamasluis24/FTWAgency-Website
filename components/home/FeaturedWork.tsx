import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { featuredWorkCarouselItems } from "@/content/featured-work-carousel";
import { FeaturedWorkCarousel } from "@/components/home/FeaturedWorkCarousel";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import type { CaseStudy } from "@/lib/schemas";

/** Section 4 — Featured portfolio carousel (software + websites). */
export function FeaturedPortfolio() {
  return (
    <Section id="portfolio">
      <Container>
        <SectionHeading
          eyebrow="Featured Work"
          title="Systems We've *Shipped*"
          lede="Websites, software, and growth systems — built for real businesses, measured in real results."
        />
        <FeaturedWorkCarousel items={featuredWorkCarouselItems} />
        <Reveal className="mt-10 text-center">
          <Button href="/portfolio" variant="ghost" showArrow>
            View Full Portfolio
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}

/** Section 5 — Featured Case Studies with headline metric callouts. */
export function FeaturedCaseStudies({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <Section surface id="case-studies">
      <Container>
        <SectionHeading
          eyebrow="Case Studies"
          title="Real Businesses. Real *Results*."
          lede="The numbers behind the systems — what happens when marketing, automation, and software work together."
        />
        <RevealStagger className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((cs) => (
            <RevealItem key={cs.slug}>
              <CaseStudyCard caseStudy={cs} />
            </RevealItem>
          ))}
        </RevealStagger>
        <Reveal className="mt-10 text-center">
          <Button href="/case-studies" variant="ghost" showArrow>
            Explore All Case Studies
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
