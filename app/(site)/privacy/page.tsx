import type { Metadata } from "next";
import { Container, Section } from "@/components/layout/Section";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | FTW Agency",
  description: "Privacy policy for FTW Agency website and services.",
  path: "/privacy",
  robots: { index: false, follow: true },
});

export default function PrivacyPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="prose prose-invert mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-semibold text-heading">Privacy Policy</h1>
          <p className="mt-4 text-body">
            This placeholder privacy policy will be replaced with counsel-reviewed language. FTW
            Agency collects information you submit through contact and campaign forms to respond to
            your request and improve our services.
          </p>
          <p className="mt-4 text-body">
            For privacy questions, contact{" "}
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
