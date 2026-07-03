import Image from "next/image";
import { GlobeWireframeGrid } from "@/components/ui/GlobeWireframeGrid";

/** Premium hero backdrop for the About page — dark base, accent spotlight, logo watermark. */
export function AboutBrandHeroBackground({ logoSrc }: { logoSrc: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      {/* Unified dark base — matches site bg */}
      <div className="absolute inset-0 bg-[#0B0F14]" />

      {/* Site-wide top accent wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(0,212,255,0.1),transparent_62%)]" />

      {/* Logo spotlight — cyan + success, same palette throughout */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_62%_48%,rgba(0,212,255,0.16),transparent_68%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_60%_50%,rgba(46,212,122,0.07),transparent_70%)]" />

      {/* Gentle left scrim — same hue, keeps copy readable without a color seam */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14] via-[#0B0F14]/50 via-[42%] to-transparent" />

      {/* Logo watermark */}
      <div className="absolute inset-y-0 right-0 flex w-[72%] items-center justify-end pr-[2%] md:w-[68%] md:pr-[4%] lg:w-[64%] lg:pr-[6%]">
        {/* Desktop: logo mark nested inside the globe oval (mockup layout) */}
        <div className="relative hidden aspect-[46/18] w-[min(185vw,170rem)] md:block">
          <GlobeWireframeGrid className="absolute inset-0" />
          <div className="absolute inset-0 flex items-center justify-center px-[5%] py-[8%]">
            <div className="relative flex h-[78%] w-[88%] items-center justify-center">
              <div className="absolute -inset-4 rounded-full bg-accent/[0.05] blur-lg" />
              <div className="absolute -inset-2 rounded-full bg-success/[0.03] blur-md" />
              <Image
                src={logoSrc}
                alt=""
                width={1024}
                height={682}
                priority
                className="relative h-full w-auto max-w-full object-contain opacity-[0.24] saturate-[0.85] lg:opacity-[0.28]"
                sizes="170rem"
              />
            </div>
          </div>
        </div>

        {/* Mobile: logo only (no grid) */}
        <div className="relative w-[min(88vw,28rem)] md:hidden">
          <div className="absolute -inset-6 rounded-full bg-accent/[0.06] blur-xl" />
          <div className="absolute -inset-3 rounded-full bg-success/[0.04] blur-lg" />
          <Image
            src={logoSrc}
            alt=""
            width={1024}
            height={682}
            priority
            className="relative h-auto w-full opacity-[0.18] saturate-[0.85]"
            sizes="(max-width: 768px) 90vw, 36rem"
          />
        </div>
      </div>
    </div>
  );
}
