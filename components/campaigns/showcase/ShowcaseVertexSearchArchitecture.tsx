"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { vertexSitemap } from "@/content/case-studies/vertex-services";
import {
  BrowserChrome,
  SteelPanel,
} from "@/components/case-studies/vertex-services/VertexChrome";

function formatPreviewUrl(path: string) {
  return path === "/" ? "vertex-services.co" : `vertex-services.co${path}`;
}

function getPreviewAspectRatio(preview: (typeof vertexSitemap)[number]) {
  return "imageAspect" in preview && preview.imageAspect ? preview.imageAspect : 16 / 10;
}

function getPreviewObjectFit(preview: (typeof vertexSitemap)[number]) {
  return "imageFit" in preview && preview.imageFit === "contain" ? "contain" : "cover";
}

/** Compact campaign fork — no section chrome; parent MiniCaseCard owns heading. */
export function ShowcaseVertexSearchArchitecture() {
  const reduceMotion = useReducedMotion();
  const [hoveredId, setHoveredId] = useState<string | null>(vertexSitemap[0].id);
  const preview = vertexSitemap.find((n) => n.id === hoveredId) ?? vertexSitemap[0];

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-6">
      <SteelPanel className="border-white/10 p-4 md:p-5">
        <div className="flex flex-col items-center">
          {vertexSitemap.map((node, index) => (
            <div key={node.id} className="flex w-full max-w-xs flex-col items-center">
              <button
                type="button"
                onMouseEnter={() => setHoveredId(node.id)}
                onFocus={() => setHoveredId(node.id)}
                onClick={() => setHoveredId(node.id)}
                className={cn(
                  "w-full rounded-lg border px-3 py-2.5 text-center text-xs font-semibold transition-all duration-300 md:text-sm",
                  hoveredId === node.id
                    ? "border-accent/40 bg-accent/10 text-accent shadow-[0_0_20px_rgba(0,212,255,0.12)]"
                    : "border-white/10 bg-[#0B0F14]/60 text-heading hover:border-white/20",
                )}
              >
                {node.label}
              </button>
              {index < vertexSitemap.length - 1 && (
                <ChevronDown className="my-0.5 h-3.5 w-3.5 text-accent/40" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </SteelPanel>

      <SteelPanel className="border-accent/20 p-3 md:p-4">
        <motion.div
          key={preview.id}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex h-full flex-col"
        >
          <div className="mb-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
              Page preview
            </p>
            <h4 className="mt-1 font-display text-base font-semibold !text-heading md:text-lg">
              {preview.label}
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-body md:text-sm">
              {preview.preview}
            </p>
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
                sizes="(max-width: 1024px) 100vw, 520px"
                priority={preview.id === vertexSitemap[0].id}
              />
            </div>
          </BrowserChrome>
        </motion.div>
      </SteelPanel>
    </div>
  );
}
