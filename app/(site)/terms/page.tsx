import type { Metadata } from "next";
import { Container, Section } from "@/components/layout/Section";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | FTW Agency",
  description: "Terms of service for FTW Agency website and services.",
  path: "/terms",
  robots: { index: false, follow: true },
});

export default function TermsPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="prose prose-invert mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-semibold text-heading">Terms of Service</h1>
          <p className="mt-4 text-body">
            This placeholder terms page will be replaced with counsel-reviewed language. Use of the
            FTW Agency website and services is subject to applicable agreements and project
            proposals.
          </p>
          <p className="mt-4 text-body">
            For questions, contact{" "}
            <a href="mailto:hello@ftwagency.com" className="text-accent">
              hello@ftwagency.com
            </a>
            .
          </p>
        </div>
      </Container>
    </Section>
  );
}
