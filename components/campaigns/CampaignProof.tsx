import { Container, Section } from "@/components/layout/Section";
import type { Project } from "@/lib/schemas";

export function CampaignProof({ projects: proofProjects }: { projects: Project[] }) {
  if (proofProjects.length === 0) return null;

  return (
    <Section surface className="py-12 md:py-16">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Trusted by growing brands
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {proofProjects.map((project) => (
            <li key={project.slug}>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-sm font-semibold text-[#60d8b8] underline decoration-[#60d8b8]/40 underline-offset-4 transition-colors hover:text-[#7ee0c4] hover:decoration-[#60d8b8] md:text-base"
                >
                  {project.title}
                </a>
              ) : (
                <span className="font-display text-sm font-semibold text-heading/80 md:text-base">
                  {project.title}
                </span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
