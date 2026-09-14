import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";
import type { WebsiteShowcasePillar } from "@/content/campaigns/website-design-showcase";

export function WebsiteGrowthPillars({ pillars }: { pillars: WebsiteShowcasePillar[] }) {
  return (
    <Section surface>
      <Container>
        <SectionHeading
          eyebrow="What FTW builds in"
          title="What FTW Builds Into Your *Website*"
          lede="Every technical layer exists for a business outcome — visibility, trust, leads, and room to scale."
          align="center"
        />
        <ul className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <li
              key={pillar.title}
              className="rounded-[1.25rem] border border-white/[0.06] bg-[rgba(18,24,33,0.65)] p-5 md:p-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold !text-heading">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{pillar.explain}</p>
              <p className="mt-4 border-l-2 border-[#60d8b8]/60 pl-3 text-sm font-medium text-[#60d8b8]">
                {pillar.businessValue}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
