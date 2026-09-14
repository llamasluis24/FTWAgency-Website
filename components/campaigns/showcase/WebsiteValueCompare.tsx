import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";

const BASIC = ["Homepage", "About", "Services", "Contact"];
const GROWTH = [
  "Homepage",
  "Dedicated service pages",
  "Location / service-area architecture",
  "SEO foundation",
  "AI Search / AIO readiness",
  "Conversion paths",
  "Analytics",
  "Campaign & automation readiness",
];

export function WebsiteValueCompare() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="The difference"
          title="Your Website Should Do More Than *Look Good*"
          lede="A basic brochure site is not the same as growth infrastructure. Here’s the gap — fast."
          align="center"
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-[1.25rem] border border-white/10 bg-[rgba(18,24,33,0.55)] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Basic website
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold !text-heading">
              Looks fine. Stops short.
            </h3>
            <ul className="mt-6 space-y-3">
              {BASIC.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-white/5 pb-3 text-sm text-body last:border-0 last:pb-0"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/25" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.25rem] border border-accent/30 bg-accent/[0.04] p-6 shadow-[0_0_48px_rgba(0,212,255,0.08)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              FTW growth website
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold !text-heading">
              Built to get found and convert.
            </h3>
            <ul className="mt-6 space-y-3">
              {GROWTH.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-white/5 pb-3 text-sm text-body last:border-0 last:pb-0"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#60d8b8]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
