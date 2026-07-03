import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutStoryTimeline } from "@/components/about/AboutStoryTimeline";
import { AboutFounders } from "@/components/about/AboutFounders";
import { AboutBeliefs } from "@/components/about/AboutBeliefs";
import { AboutFtwSystem } from "@/components/about/AboutFtwSystem";
import { AboutBuilding } from "@/components/about/AboutBuilding";
import { AboutIdealClient } from "@/components/about/AboutIdealClient";
import { AboutBrandSection } from "@/components/about/AboutBrandSection";
import { buildMetadata } from "@/lib/metadata";
import {
  aboutIntro,
  aboutStory,
  aboutFounders,
  aboutBeliefs,
  aboutFtwSystem,
  aboutBuilding,
  aboutIdealClient,
} from "@/content/about";

export const metadata: Metadata = buildMetadata({
  title: "About FTW Agency | Built by Founders, For Businesses That Want to Grow",
  description:
    "FTW Agency was founded by entrepreneurs who built businesses themselves—not agency veterans chasing retainers. One partner for marketing, software, automation, and growth.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <AboutIntro
        eyebrow={aboutIntro.eyebrow}
        headline={aboutIntro.headline}
        lead={aboutIntro.lead}
        body={aboutIntro.body}
        principles={aboutIntro.principles}
      />

      <AboutStoryTimeline
        eyebrow={aboutStory.eyebrow}
        title={aboutStory.title}
        steps={aboutStory.steps}
      />

      <AboutFounders
        eyebrow={aboutFounders.eyebrow}
        title={aboutFounders.title}
        founders={aboutFounders.founders}
      />

      <AboutBeliefs eyebrow={aboutBeliefs.eyebrow} statements={aboutBeliefs.statements} />

      <AboutFtwSystem
        eyebrow={aboutFtwSystem.eyebrow}
        title={aboutFtwSystem.title}
        lede={aboutFtwSystem.lede}
        nodes={aboutFtwSystem.nodes}
      />

      <AboutBuilding
        eyebrow={aboutBuilding.eyebrow}
        title={aboutBuilding.title}
        lede={aboutBuilding.lede}
        projects={aboutBuilding.projects}
      />

      <AboutIdealClient
        eyebrow={aboutIdealClient.eyebrow}
        title={aboutIdealClient.title}
        items={aboutIdealClient.items}
      />

      <AboutBrandSection />
    </>
  );
}
