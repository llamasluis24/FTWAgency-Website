import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryComboPage } from "@/components/industries/IndustryComboPage";
import { buildMetadata } from "@/lib/metadata";
import { industryServiceCopy } from "@/lib/combo";
import { getAllIndustries, getIndustry, getService } from "@/lib/content";

interface Props {
  params: Promise<{ industry: string; service: string }>;
}

/** Industry + Service combo pages — programmatic SEO surface with optional interactive modules. */
export function generateStaticParams() {
  return getAllIndustries().flatMap((industry) =>
    industry.serviceStack.map((item) => ({
      industry: industry.slug,
      service: item.service,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: iSlug, service: sSlug } = await params;
  const industry = getIndustry(iSlug);
  const service = getService(sSlug);
  if (!industry || !service) return {};
  const copy = industryServiceCopy(service, industry);
  return buildMetadata({
    title: copy.meta.title,
    description: copy.meta.description,
    path: `/industries/${industry.slug}/${service.slug}`,
  });
}

export default async function IndustryServicePage({ params }: Props) {
  const { industry: iSlug, service: sSlug } = await params;
  const industry = getIndustry(iSlug);
  const service = getService(sSlug);
  if (!industry || !service) notFound();

  return <IndustryComboPage industrySlug={iSlug} serviceSlug={sSlug} />;
}
