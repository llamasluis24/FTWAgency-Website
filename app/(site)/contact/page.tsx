import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { StrategyCallForm } from "@/components/contact/StrategyCallForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";
import { getAllIndustries, getAllServices } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Schedule a Strategy Call | FTW Agency",
  description:
    "Book a free 30-minute strategy call. We'll map your biggest growth constraint and the exact system that fixes it — no pitch deck, no pressure.",
  path: "/contact",
});

const EXPECT = [
  {
    step: "01",
    title: "We listen first",
    description: "Your business, your market, your goals — before any recommendations.",
  },
  {
    step: "02",
    title: "We diagnose the constraint",
    description: "Visibility, conversion, follow-up, or operations — where growth is actually leaking.",
  },
  {
    step: "03",
    title: "You leave with a map",
    description: "A clear picture of the system you need — whether you build it with us or not.",
  },
];

export default function ContactPage() {
  const industries = getAllIndustries().map((i) => ({
    value: i.slug,
    label: i.title,
  }));
  const services = getAllServices().map((s) => ({
    value: s.slug,
    label: s.shortTitle,
  }));

  return (
    <div className="bg-radial-accent pb-24 pt-32 md:pt-40">
      <Container>
        <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: framing */}
          <Reveal>
            <p className="eyebrow mb-4">Schedule Strategy Call</p>
            <h1 className="text-4xl font-semibold leading-[1.08] md:text-5xl">
              Let's Map Your <span className="accent-serif">Growth System</span>.
            </h1>
            <p className="mt-6 text-lg text-body">
              This isn't a sales call. It's a 30-minute working session where we
              diagnose your biggest growth constraint and map the system that
              fixes it.
            </p>

            <div className="mt-10 space-y-6">
              {EXPECT.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="tnum font-display text-sm font-bold text-accent">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-heading">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-body">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-3 border-t border-white/5 pt-8 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-body transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 text-accent" strokeWidth={2} />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-3 text-body">
                <MapPin className="h-4 w-4 text-accent" strokeWidth={2} />
                {siteConfig.address.street}, {siteConfig.address.city},{" "}
                {siteConfig.address.state} {siteConfig.address.zip}
              </p>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.15}>
            <StrategyCallForm industries={industries} services={services} />
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
