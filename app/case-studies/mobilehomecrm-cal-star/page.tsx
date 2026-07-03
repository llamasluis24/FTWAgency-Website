import type { Metadata } from "next";
import { MobileHomeCrmCaseStudy } from "@/components/case-studies/mobilehomecrm/MobileHomeCrmCaseStudy";
import { mobilehomecrmCalStar } from "@/content/case-studies/mobilehomecrm-cal-star";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${mobilehomecrmCalStar.title} | FTW Agency Case Study`,
  description: mobilehomecrmCalStar.summary,
  path: `/case-studies/${mobilehomecrmCalStar.slug}`,
});

export default function MobileHomeCrmCalStarPage() {
  return <MobileHomeCrmCaseStudy />;
}
