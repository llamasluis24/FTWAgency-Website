import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import type { PartnerPlatforms } from "@/lib/schemas";
import { cn } from "@/lib/utils";

const LOGO_STYLES: Record<
  string,
  { gradient: string; src: string; width: number; height: number }
> = {
  openclaw: {
    gradient: "from-cyan-500/20 via-accent/15 to-teal-500/10",
    src: "/partners/openclaw.svg",
    width: 80,
    height: 80,
  },
  hermes: {
    gradient: "from-violet-500/20 via-indigo-500/15 to-accent/10",
    src: "/partners/hermes.png",
    width: 80,
    height: 80,
  },
};

export function PartnerPlatformsSection({
  partnerPlatforms,
}: {
  partnerPlatforms: PartnerPlatforms;
}) {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Partner Technology"
          title={partnerPlatforms.headline}
          lede={partnerPlatforms.subheadline}
        />
        <RevealStagger className="grid gap-6 md:grid-cols-2">
          {partnerPlatforms.partners.map((partner) => {
            const style = LOGO_STYLES[partner.logoKey] ?? {
              gradient: "from-accent/15 to-accent/5",
              src: "",
              width: 80,
              height: 80,
            };
            return (
              <RevealItem
                key={partner.name}
                className="card-surface card-hover overflow-hidden"
              >
                <div className="border-b border-white/5 p-8">
                  <div
                    className={cn(
                      "flex h-28 w-full items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br",
                      style.gradient,
                    )}
                  >
                    {style.src ? (
                      <Image
                        src={style.src}
                        alt={`${partner.name} logo`}
                        width={style.width}
                        height={style.height}
                        className="h-16 w-16 object-contain"
                      />
                    ) : (
                      <span className="font-display text-2xl font-bold tracking-tight text-heading">
                        {partner.name}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-xl font-semibold text-heading">
                    {partner.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-body">{partner.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
        <Reveal className="mt-8 text-center text-sm text-muted">
          FTW implements, customizes, and supports agent deployments on these
          platforms — tailored to your workflows, not off-the-shelf templates.
        </Reveal>
      </Container>
    </Section>
  );
}
