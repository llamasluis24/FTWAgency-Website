import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";

const OUTCOMES = [
  {
    title: "Get found",
    body: "SEO + service and location structure create more relevant entry points.",
  },
  {
    title: "Get understood",
    body: "Clear messaging and AI-readable content help modern search interpret your business.",
  },
  {
    title: "Build trust",
    body: "Premium presentation and real proof make the first impression feel hire-ready.",
  },
  {
    title: "Convert traffic",
    body: "Forms, calls, and booking pathways turn attention into opportunities.",
  },
  {
    title: "Grow",
    body: "Ads, SEO, AIO, and automation can build on the same infrastructure.",
  },
] as const;

export function WebsiteWhyItMatters() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Business outcomes"
          title="Why This Matters to Your *Business*"
          lede="When the website is infrastructure — not decoration — every channel works harder."
          align="center"
        />
        <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {OUTCOMES.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-white/10 bg-surface/70 p-4 text-center lg:text-left"
            >
              <h3 className="font-display text-base font-semibold !text-heading">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-body md:text-sm">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
