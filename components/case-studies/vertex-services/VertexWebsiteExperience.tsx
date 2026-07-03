"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Section";
import { vertexImages, vertexWebsitePages } from "@/content/case-studies/vertex-services";
import { BrowserChrome, SectionIntro } from "./VertexChrome";

export function VertexWebsiteExperience() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<(typeof vertexWebsitePages)[number]["id"]>(
    vertexWebsitePages[0].id,
  );
  const active = vertexWebsitePages.find((p) => p.id === activeId) ?? vertexWebsitePages[0];

  return (
    <section className="bg-surface py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Website Experience"
            headline="Built for Commercial Buyers"
            body="Service-specific pages, clear CTAs, and professional presentation — designed for evaluation-stage commercial buyers."
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {vertexWebsitePages.map((page) => (
            <button
              key={page.id}
              type="button"
              onClick={() => setActiveId(page.id)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-300",
                activeId === page.id
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-white/10 bg-[#121821] text-muted hover:text-heading",
              )}
            >
              {page.label}
            </button>
          ))}
        </div>

        <Reveal delay={0.08} className="mt-8">
          <BrowserChrome>
            <motion.div
              key={active.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative min-h-[320px] bg-[#1a2744] md:min-h-[380px]"
            >
              <div className="absolute inset-0">
                <Image
                  src={vertexImages.website}
                  alt=""
                  fill
                  className="object-cover object-top opacity-40"
                  sizes="800px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a2744]/95 via-[#1a2744]/80 to-[#1a2744]/60" />
              </div>
              <div className="relative flex h-full min-h-[320px] flex-col justify-between p-6 md:min-h-[380px] md:p-10">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7eb8ff]">
                    Vertex Services
                  </p>
                  <h3 className="mt-3 max-w-md text-2xl font-bold leading-tight text-white md:text-3xl">
                    {active.headline}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
                    Commercial ice, beverage, and foodservice equipment repair with preventative
                    maintenance programs built for multi-location operators.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#2563eb] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white">
                    Request Quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-white/30 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white">
                    <Phone className="h-3.5 w-3.5" />
                    Call Now
                  </span>
                </div>
              </div>
            </motion.div>
          </BrowserChrome>
        </Reveal>
      </Container>
    </section>
  );
}
