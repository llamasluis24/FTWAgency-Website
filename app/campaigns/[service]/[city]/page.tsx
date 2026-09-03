import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllCampaignParams,
  getCampaignPage,
} from "@/content/campaigns/campaign-pages";
import type { CampaignCitySlug, CampaignServiceSlug } from "@/content/campaigns/types";
import { buildCampaignMetadata } from "@/lib/campaigns/metadata";
import { CampaignPageTemplate } from "@/components/campaigns/CampaignPageTemplate";

interface PageProps {
  params: Promise<{ service: string; city: string }>;
}

export async function generateStaticParams() {
  return getAllCampaignParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service, city } = await params;
  const page = getCampaignPage(service as CampaignServiceSlug, city as CampaignCitySlug);
  if (!page) return {};
  return buildCampaignMetadata(page);
}

export default async function CampaignLandingPage({ params }: PageProps) {
  const { service, city } = await params;
  const page = getCampaignPage(service as CampaignServiceSlug, city as CampaignCitySlug);

  if (!page) notFound();

  return <CampaignPageTemplate page={page} />;
}
