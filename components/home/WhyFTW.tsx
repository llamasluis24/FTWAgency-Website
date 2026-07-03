import { Icon } from "@/components/ui/Icon";
import { StatCounter } from "@/components/ui/StatCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { whyFtw } from "@/content/site";

/** Section 7 — Authority and differentiation. */
export function WhyFTW() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Why FTW"
          title={whyFtw.headline}
          lede={whyFtw.sub}
        />

        {/* Stats band */}
        <Reveal className="card-surface mb-14 grid grid-cols-2 gap-8 p-8 text-center md:grid-cols-4 md:p-10">
          {whyFtw.stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </Reveal>

        {/* Differentiators */}
        <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyFtw.differentiators.map((d) => (
            <RevealItem key={d.title} className="card-surface card-hover p-6">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#60d8b8]/10">
                <Icon name={d.icon} className="h-5 w-5 text-[#60d8b8]" />
              </span>
              <h3 className="font-display text-base font-semibold text-heading">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{d.description}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
