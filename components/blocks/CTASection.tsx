import { AccentText } from "@/components/ui/AccentText";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection({
  headline = "Ready to Build Your *Growth Engine*?",
  sub = "Book a strategy call and we'll map the exact system your business needs to generate more leads, automate operations, and scale.",
}: {
  headline?: string;
  sub?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-surface px-6 py-16 text-center md:px-16 md:py-20">
            {/* Glow backdrop */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_120%,rgba(0,212,255,0.18),transparent)]" />
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold md:text-5xl md:leading-[1.1]">
                <AccentText text={headline} />
              </h2>
              <p className="mt-5 text-lg text-body">{sub}</p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button href="/contact" size="lg" showArrow>
                  Schedule Strategy Call
                </Button>
                <Button href="/portfolio" variant="ghost" size="lg">
                  View Portfolio
                </Button>
              </div>
              <p className="mt-6 text-xs text-muted">
                Free 30-minute call · No pressure · Clear next steps either way
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
