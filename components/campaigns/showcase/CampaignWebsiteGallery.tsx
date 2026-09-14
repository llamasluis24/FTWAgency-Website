import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";
import { getCampaignPortfolioProof, getPortfolioHeroImage } from "@/lib/campaigns/content";

export function CampaignWebsiteGallery({ slugs }: { slugs: string[] }) {
  const projects = getCampaignPortfolioProof(slugs);

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Real work"
          title="Sites We’ve *Actually Shipped*"
          lede="Approved FTW projects — proof of craft and conversion focus, without sending you off-page."
          align="center"
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const image = getPortfolioHeroImage(project);
            return (
              <li
                key={project.slug}
                className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[rgba(18,24,33,0.72)] shadow-[0_24px_60px_-36px_rgba(0,0,0,0.65)]"
              >
                <div className="relative aspect-[16/10] bg-[#0a0f14]">
                  {image ? (
                    <Image
                      src={image}
                      alt={project.screenshots.find((s) => s.src)?.alt ?? project.title}
                      fill
                      className="object-contain object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : null}
                </div>
                <div className="border-t border-white/8 p-5">
                  <h3 className="font-display text-lg font-semibold !text-heading">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-body">{project.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
