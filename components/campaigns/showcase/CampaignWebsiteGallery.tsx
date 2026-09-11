import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";
import { getCampaignPortfolioProof, getPortfolioHeroImage } from "@/lib/campaigns/content";

export function CampaignWebsiteGallery({ slugs }: { slugs: string[] }) {
  const projects = getCampaignPortfolioProof(slugs);

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="A Mix of Sites We’ve *Actually Shipped*"
          lede="Civic campaigns, hospitality destinations, contractors, tourism platforms — versatility without losing conversion focus."
          align="center"
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const image = getPortfolioHeroImage(project);
            return (
              <li
                key={project.slug}
                className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[rgba(18,24,33,0.72)] shadow-[0_24px_60px_-36px_rgba(0,0,0,0.65)] transition-colors hover:border-white/20"
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
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#60d8b8] transition-colors hover:text-[#7ee0c4]"
                    >
                      Visit Website
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                    </a>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center justify-center gap-2 font-display text-base font-semibold text-[#60d8b8] transition-colors hover:text-[#7ee0c4]"
          >
            View Full Portfolio
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
