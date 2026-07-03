import Image from "next/image";
import { AboutBrandHeroBackground } from "@/components/about/AboutBrandHeroBackground";
import { AccentText } from "@/components/ui/AccentText";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Section";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { cn } from "@/lib/utils";

interface HeroBackgroundImage {
  src: string;
  alt: string;
  /** "photo" = full-bleed cover (industry heroes). "brand" = logo watermark on the right. */
  variant?: "photo" | "brand";
}

interface CtaLink {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  sub?: string;
  crumbs?: Crumb[];
  showCtas?: boolean;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  /** Optional right-column visual (e.g. agent workflow diagram). */
  visual?: React.ReactNode;
  /** Optional decorative background layer (service-specific). */
  backgroundVisual?: React.ReactNode;
  /** Optional full-bleed hero photo with dark overlay for readability. */
  backgroundImage?: HeroBackgroundImage;
  /** Match Section surface background (#121821) instead of default page bg. */
  surface?: boolean;
  /** "none" = no grid. "blueprint" = cyan 40px grid. "blueprint-ftw" = FTW green grid. */
  grid?: "default" | "none" | "blueprint" | "blueprint-ftw";
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  headline,
  sub,
  crumbs,
  showCtas = true,
  primaryCta = { label: "Schedule Strategy Call", href: "/contact" },
  secondaryCta = { label: "View Portfolio", href: "/portfolio" },
  visual,
  backgroundVisual,
  backgroundImage,
  surface = false,
  grid = "default",
  children,
}: PageHeroProps) {
  const isBrandHero = backgroundImage?.variant === "brand";

  return (
    <div
      className={cn(
        "relative overflow-hidden border-b border-white/5 pb-16 pt-32 md:pb-20 md:pt-40",
        isBrandHero && "bg-[#0B0F14]",
        surface && !isBrandHero && "bg-surface",
        !backgroundImage && !surface && "bg-radial-accent",
      )}
    >
      {backgroundImage && (
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          {isBrandHero ? (
            <AboutBrandHeroBackground logoSrc={backgroundImage.src} />
          ) : (
            <>
              <Image
                src={backgroundImage.src}
                alt=""
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14] from-30% via-[#0B0F14]/88 via-50% to-[#0B0F14]/35" />
              <div className="absolute inset-0 bg-[#0B0F14]/25" />
            </>
          )}
        </div>
      )}
      {grid === "blueprint" || grid === "blueprint-ftw" ? (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-0 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent)]",
            grid === "blueprint-ftw"
              ? "bg-[linear-gradient(rgba(96,216,184,0.12)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(96,216,184,0.12)_1.5px,transparent_1.5px)]"
              : "bg-[linear-gradient(rgba(0,212,255,0.12)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,212,255,0.12)_1.5px,transparent_1.5px)]",
          )}
          aria-hidden
        />
      ) : grid !== "none" ? (
        <div
          className={cn(
            "bg-grid pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]",
            isBrandHero ? "opacity-30" : backgroundImage ? "opacity-25" : surface ? "opacity-30" : "opacity-60",
          )}
        />
      ) : null}
      {backgroundVisual}
      <Container className="relative z-10">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <div className={visual ? "lg:grid lg:grid-cols-2 lg:items-center lg:gap-12" : undefined}>
          <div className="relative z-10 max-w-3xl">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h1 className="text-4xl font-semibold leading-[1.08] md:text-6xl">
              <AccentText text={headline} />
            </h1>
            {sub && <p className="mt-6 max-w-2xl text-lg text-body md:text-xl">{sub}</p>}
            {showCtas && (
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={primaryCta.href} size="lg" showArrow>
                  {primaryCta.label}
                </Button>
                <Button href={secondaryCta.href} variant="ghost" size="lg">
                  {secondaryCta.label}
                </Button>
              </div>
            )}
            {children}
          </div>
          {visual && (
            <div className="relative hidden lg:flex lg:items-center lg:justify-center">{visual}</div>
          )}
        </div>
        {visual && (
          <div className="relative mt-10 flex items-center justify-center lg:hidden">{visual}</div>
        )}
      </Container>
    </div>
  );
}
