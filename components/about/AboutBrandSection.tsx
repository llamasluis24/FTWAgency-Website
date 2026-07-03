import Image from "next/image";
import { siteConfig } from "@/content/site";

const YEAR = new Date().getFullYear();

/** Bold FTW Agency brand lockup — bottom-of-page section on About. */
export function AboutBrandSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-black">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-soft-light"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 md:pb-20 md:pt-10 lg:px-8 lg:pb-24">
        <div className="flex items-start justify-between gap-6 font-mono text-xs text-white/70 sm:text-sm">
          <p>All rights reserved - {YEAR}</p>
          <p>© {siteConfig.name}</p>
        </div>

        <div className="mt-14 grid items-end gap-10 md:mt-20 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <p className="font-serif text-[clamp(3.75rem,20vw,11.5rem)] font-bold leading-[0.82] tracking-[-0.045em] text-white">
              FTW
            </p>
            <p className="font-serif text-[clamp(3.75rem,20vw,11.5rem)] font-bold leading-[0.82] tracking-[-0.045em] text-white">
              AGENCY
            </p>
          </div>

          <div className="mx-auto w-full max-w-md shrink-0 lg:mx-0 lg:max-w-[min(100%,22rem)] xl:max-w-[26rem]">
            <Image
              src="/brand/about-brand-logo.png"
              alt={`${siteConfig.name} logo`}
              width={1200}
              height={900}
              className="h-auto w-full rounded-2xl"
              sizes="(max-width: 1024px) 80vw, 26rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
