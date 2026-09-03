import type { Metadata } from "next";
import { VertexServicesCaseStudy } from "@/components/case-studies/vertex-services/VertexServicesCaseStudy";
import { vertexServices } from "@/content/case-studies/vertex-services";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${vertexServices.title} | FTW Agency Case Study`,
  description: vertexServices.summary,
  path: `/case-studies/${vertexServices.slug}`,
});

export default function VertexServicesPage() {
  return <VertexServicesCaseStudy />;
}
