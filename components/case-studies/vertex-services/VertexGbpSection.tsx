"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, Globe, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Section";
import { vertexImages } from "@/content/case-studies/vertex-services";
import { SectionIntro, SteelPanel } from "./VertexChrome";

const REVIEWS = [
  { name: "Regional Foodservice Operator", text: "Responsive team — equipment back online fast.", stars: 5 },
  { name: "Restaurant Group", text: "Professional service and clear communication.", stars: 5 },
  { name: "Convenience Store Chain", text: "Reliable preventative maintenance program.", stars: 5 },
] as const;

const SERVICES = [
  "Ice Machine Repair",
  "Preventative Maintenance",
  "Beverage Equipment",
  "Emergency Service",
] as const;

export function VertexGbpSection() {
  const reduceMotion = useReducedMotion();
  const [reviewIndex, setReviewIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const reviewTimer = setInterval(() => {
      setReviewIndex((i) => (i + 1) % REVIEWS.length);
    }, 3500);
    const photoTimer = setInterval(() => {
      setPhotoIndex((i) => (i + 1) % vertexImages.gbpPhotos.length);
    }, 2800);
    return () => {
      clearInterval(reviewTimer);
      clearInterval(photoTimer);
    };
  }, [reduceMotion]);

  const review = REVIEWS[reviewIndex];

  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Google Business Profile"
            headline="Owning Local Search"
            body="Reviews, services, photos, and contact paths — optimized for commercial buyers searching on mobile."
          />
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-12 max-w-lg">
          <SteelPanel className="overflow-hidden border-white/10">
            <div className="border-b border-white/8 bg-white/[0.03] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-heading">Vertex Services</h3>
                  <div className="mt-1 flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                    <span className="ml-1 text-xs text-muted">Commercial equipment service</span>
                  </div>
                </div>
                <motion.button
                  type="button"
                  animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-full bg-accent px-3 py-2 text-xs font-bold text-[#04222b]"
                >
                  <Phone className="mr-1 inline h-3.5 w-3.5" />
                  Call
                </motion.button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-muted">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" /> Open · Commercial hours
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Service areas
                </span>
                <span className="inline-flex items-center gap-1">
                  <Globe className="h-3 w-3" /> vertex-services.co
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1 p-1">
              {vertexImages.gbpPhotos.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  animate={{ opacity: photoIndex === i ? 1 : 0.65 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#1a2330]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/8 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">Services</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {SERVICES.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-body"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/8 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">Reviews</p>
              <motion.div
                key={reviewIndex}
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 rounded-lg border border-white/8 bg-[#0B0F14]/50 p-3"
              >
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-sm text-body">&ldquo;{review.text}&rdquo;</p>
                <p className="mt-2 text-xs text-muted">— {review.name}</p>
              </motion.div>
            </div>
          </SteelPanel>
        </Reveal>
      </Container>
    </section>
  );
}
