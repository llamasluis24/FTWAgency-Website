import { TestimonialSlider } from "@/components/blocks/TestimonialSlider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/content/site";

export function HomeTestimonials() {
  return (
    <Section surface className="relative overflow-hidden py-24 md:py-32">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(0,212,255,0.07),transparent_65%)]"
        aria-hidden
      />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Businesses That *Grow*"
          lede="Real words from teams we've helped build systems that compound."
        />
        <Reveal className="mt-2 md:mt-4">
          <TestimonialSlider testimonials={testimonials} />
        </Reveal>
      </Container>
    </Section>
  );
}
