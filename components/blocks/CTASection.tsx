import { AccentText } from "@/components/ui/AccentText";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function CTASection({
  headline = "Ready to Build Your *Growth Engine*?",
  sub = "Book a strategy call and we'll map the exact system your business needs to generate more leads, automate operations, and scale.",
  showSecondaryCta = true,
  primaryProminent = false,
}: {
  headline?: string;
  sub?: string;
  /** Hide the secondary “View Portfolio” button (e.g. on /portfolio). */
  showSecondaryCta?: boolean;
  /** Larger, stronger primary CTA when it’s the only action. */
  primaryProminent?: boolean;
}) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl border bg-surface px-6 py-16 text-center md:px-16 md:py-20",
              primaryProminent
                ? "border-accent/35 shadow-[0_0_80px_rgba(0,212,255,0.12)]"
                : "border-accent/20",
            )}
          >
            {/* Glow backdrop */}
            <div
              className={cn(
                "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_120%,rgba(0,212,255,0.18),transparent)]",
                primaryProminent &&
                  "bg-[radial-gradient(ellipse_55%_90%_at_50%_110%,rgba(0,212,255,0.28),transparent)]",
              )}
            />
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold md:text-5xl md:leading-[1.1]">
                <AccentText text={headline} />
              </h2>
              <p className="mt-5 text-lg text-body">{sub}</p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button
                  href="/contact"
                  size="lg"
                  showArrow
                  className={cn(
                    primaryProminent &&
                      "min-w-[min(100%,20rem)] px-10 py-4 text-lg shadow-[0_0_40px_rgba(0,212,255,0.35)] hover:shadow-[0_0_56px_rgba(0,212,255,0.5)]",
                  )}
                >
                  Schedule Strategy Call
                </Button>
                {showSecondaryCta ? (
                  <Button href="/portfolio" variant="ghost" size="lg">
                    View Portfolio
                  </Button>
                ) : null}
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
