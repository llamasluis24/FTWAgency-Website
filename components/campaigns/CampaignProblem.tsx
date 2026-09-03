import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";
import type { ResolvedCampaignPage } from "@/content/campaigns/types";

export function CampaignProblem({ page }: { page: ResolvedCampaignPage }) {
  return (
    <Section surface>
      <Container>
        <SectionHeading
          title={page.problemHeadline}
          lede="Most business websites look fine on the surface — but fail to build trust, guide visitors, or turn traffic into qualified opportunities."
          align="center"
        />
        <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {page.problemPoints.map((point) => (
            <li key={point} className="card-surface flex gap-3 px-5 py-4 text-sm text-body">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#60d8b8]"
                aria-hidden
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
