"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Section";
import { vertexSitemap } from "@/content/case-studies/vertex-services";
import { BrowserChrome, SectionIntro, SteelPanel } from "./VertexChrome";

function formatPreviewUrl(path: string) {
  return path === "/" ? "vertex-services.co" : `vertex-services.co${path}`;
}

function getPreviewAspectRatio(preview: (typeof vertexSitemap)[number]) {
  return "imageAspect" in preview && preview.imageAspect ? preview.imageAspect : 16 / 10;
}

function getPreviewObjectFit(preview: (typeof vertexSitemap)[number]) {
  return "imageFit" in preview && preview.imageFit === "contain" ? "contain" : "cover";
}

export function VertexSearchArchitecture() {
  const reduceMotion = useReducedMotion();
  const [hoveredId, setHoveredId] = useState<string | null>(vertexSitemap[0].id);
  const preview = vertexSitemap.find((n) => n.id === hoveredId) ?? vertexSitemap[0];

  return (
    <section className="bg-surface py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Search Architecture"
            headline="Built Around How Customers Search"
            body="Each page maps to a real search intent — from broad commercial services to emergency ice machine repair."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <SteelPanel className="border-white/10 p-6 md:p-8">
            <div className="flex flex-col items-center">
              {vertexSitemap.map((node, index) => (
                <div key={node.id} className="flex w-full max-w-xs flex-col items-center">
                  <button
                    type="button"
                    onMouseEnter={() => setHoveredId(node.id)}
                    onFocus={() => setHoveredId(node.id)}
                    onClick={() => setHoveredId(node.id)}
                    className={cn(
                      "w-full rounded-lg border px-4 py-3 text-center text-sm font-semibold transition-all duration-300",
                      hoveredId === node.id
                        ? "border-accent/40 bg-accent/10 text-accent shadow-[0_0_20px_rgba(0,212,255,0.12)]"
                        : "border-white/10 bg-[#0B0F14]/60 text-heading hover:border-white/20",
                    )}
                  >
                    {node.label}
                  </button>
                  {index < vertexSitemap.length - 1 && (
                    <ChevronDown className="my-1 h-4 w-4 text-accent/40" aria-hidden />
                  )}
                </div>
              ))}
            </div>
          </SteelPanel>

          <div className="flex items-stretch">
            <SteelPanel className="h-full w-full border-accent/20 p-4 md:p-6">
              <motion.div
                key={preview.id}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex h-full flex-col"
              >
                <div className="mb-4">
                  <p className="eyebrow mb-2">Page Preview</p>
                  <h3 className="text-xl font-semibold text-heading">{preview.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{preview.preview}</p>
                </div>

                <BrowserChrome url={formatPreviewUrl(preview.path)} className="flex-1">
                  <div
                    className="relative w-full bg-white"
                    style={{ aspectRatio: getPreviewAspectRatio(preview) }}
                  >
                    <Image
                      src={preview.image}
                      alt={preview.imageAlt}
                      fill
                      className={cn(
                        getPreviewObjectFit(preview) === "contain"
                          ? "object-contain object-top"
                          : "object-cover object-top",
                      )}
                      sizes="(max-width: 1024px) 100vw, 560px"
                      priority={preview.id === vertexSitemap[0].id}
                    />
                  </div>
                </BrowserChrome>
              </motion.div>
            </SteelPanel>
          </div>
        </div>
      </Container>
    </section>
  );
}
