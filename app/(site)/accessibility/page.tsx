import type { Metadata } from "next";
import { Container, Section } from "@/components/layout/Section";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility | FTW Agency",
  description: "Accessibility statement for FTW Agency website.",
  path: "/accessibility",
  robots: { index: false, follow: true },
});

export default function AccessibilityPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="prose prose-invert mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-semibold text-heading">
            Accessibility Statement
          </h1>
          <p className="mt-4 text-body">
            FTW Agency is committed to providing a website that is accessible to the widest
            possible audience. We aim to follow WCAG 2.1 Level AA guidelines across our organic site
            and campaign landing pages.
          </p>
          <p className="mt-4 text-body">
            If you encounter accessibility barriers, contact{" "}
            <a href="mailto:hello@ftwagency.com" className="text-accent">
              hello@ftwagency.com
            </a>{" "}
            and we will work to address the issue.
          </p>
        </div>
      </Container>
    </Section>
  );
}
