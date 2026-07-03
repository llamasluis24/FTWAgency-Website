"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { WebsiteBeforeAfterComparison } from "@/components/portfolio/WebsiteBeforeAfterComparison";
import { websiteBeforeAfterExamples } from "@/content/website-portfolio-before-after";
import { cn } from "@/lib/utils";

export function WebsiteBeforeAfterShowcase() {
  const [activeExample, setActiveExample] = useState(0);
  const example = websiteBeforeAfterExamples[activeExample];

  return (
    <Section surface>
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Before & *After*"
          lede="See the dramatic difference a conversion-engineered website can make for your business."
        />

        <div className="mb-10 flex justify-center">
          <div className="inline-flex max-w-full flex-wrap justify-center gap-1 rounded-full border border-white/10 bg-elevated p-1">
            {websiteBeforeAfterExamples.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition-all md:px-4 md:text-sm",
                  activeExample === index
                    ? "border border-accent/40 bg-surface text-accent shadow-sm"
                    : "text-muted hover:text-body",
                )}
                onClick={() => setActiveExample(index)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <WebsiteBeforeAfterComparison example={example} />

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-btn bg-accent px-8 py-3.5 text-base font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Schedule Strategy Call
          </Link>
        </div>
      </Container>
    </Section>
  );
}
