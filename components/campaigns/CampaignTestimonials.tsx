import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";
import type { Testimonial } from "@/lib/schemas";

export function CampaignTestimonials({ testimonials: items }: { testimonials: Testimonial[] }) {
  if (items.length === 0) return null;

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Client Proof"
          title="What Clients Say About *Working With FTW*"
          align="center"
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <li key={`${item.author}-${item.company}`} className="card-surface p-6">
              <blockquote className="text-body leading-relaxed">&ldquo;{item.quote}&rdquo;</blockquote>
              <footer className="mt-4 border-t border-white/10 pt-4">
                <p className="font-display text-sm font-semibold text-heading">{item.author}</p>
                <p className="text-xs text-muted">{item.role}</p>
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
