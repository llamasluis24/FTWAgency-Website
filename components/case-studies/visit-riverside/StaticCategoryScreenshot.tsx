"use client";

import Image from "next/image";
import type { VisitRiversideStaticCategory } from "@/content/case-studies/visit-riverside";

export function StaticCategoryScreenshot({ category }: { category: VisitRiversideStaticCategory }) {
  return (
    <div className="relative aspect-[1024/544] w-full bg-[#faf8f4]">
      <Image
        src={category.image}
        alt={category.alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 1024px) 100vw, 720px"
      />
    </div>
  );
}
