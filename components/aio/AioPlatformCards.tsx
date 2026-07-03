import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { aioPlatformCards } from "@/content/aio-demo";
import { PlatformLogo } from "./PlatformLogo";

export function AioPlatformCards() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="What's Included"
          title="AI Search Platforms We *Optimize For*"
          lede="Each AI platform surfaces recommendations differently — AIO builds the signals each one needs."
        />
        <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aioPlatformCards.map((platform) => (
            <RevealItem
              key={platform.name}
              className="group flex flex-col rounded-2xl border border-white/5 bg-[#121821] p-6 transition-colors hover:border-accent/20"
            >
              <div className="mb-4 flex items-center gap-3">
                <PlatformLogo theme={platform.theme} className="h-10 w-10" />
                <h3 className="font-display text-lg font-semibold text-heading transition-colors group-hover:text-accent">
                  {platform.name}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-body">{platform.description}</p>
              <div className="mt-4 space-y-3 border-t border-white/5 pt-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Optimization Focus
                  </p>
                  <p className="mt-1 text-xs text-body">{platform.optimizationFocus}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Example Use Case
                  </p>
                  <p className="mt-1 font-mono text-xs text-accent">{platform.useCase}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
