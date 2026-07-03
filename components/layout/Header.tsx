"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import type { NavData, NavLink } from "./nav-data";

const STAGE_LABELS: Record<string, string> = {
  attract: "Attract",
  convert: "Convert",
  automate: "Automate",
  scale: "Scale",
};

export function Header({ nav }: { nav: NavData }) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-bg/95 py-3 backdrop-blur-xl"
          : "bg-transparent py-5",
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex shrink-0 items-center">
          <Image
            src="/brand/logo-inverted.png"
            alt="FTW Agency"
            width={1024}
            height={682}
            priority
            className="h-14 w-auto transition-opacity group-hover:opacity-90 sm:h-16"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <MenuTrigger
            label="Services"
            open={openMenu === "services"}
            onHover={() => setOpenMenu("services")}
          />
          <MenuTrigger
            label="Industries"
            open={openMenu === "industries"}
            onHover={() => setOpenMenu("industries")}
          />
          <TopLink href="/portfolio" label="Portfolio" onHover={() => setOpenMenu(null)} />
          <TopLink href="/case-studies" label="Case Studies" onHover={() => setOpenMenu(null)} />
          <MenuTrigger
            label="Resources"
            open={openMenu === "resources"}
            onHover={() => setOpenMenu("resources")}
          />
          <TopLink href="/about" label="About" onHover={() => setOpenMenu(null)} />
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.dispatchEvent(new Event("ftw:open-palette"))}
            className="hidden items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-muted transition-colors hover:border-accent/40 hover:text-body md:flex"
            aria-label="Search (Cmd+K)"
          >
            <Search className="h-3.5 w-3.5" strokeWidth={2} />
            <kbd className="font-sans">⌘K</kbd>
          </button>
          <Link
            href="/portfolio"
            className="hidden rounded-[10px] border border-white/15 px-4 py-2 font-display text-sm font-semibold text-heading transition-colors hover:border-accent/50 hover:text-accent xl:block"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="hidden rounded-[10px] bg-accent px-4 py-2 font-display text-sm font-semibold text-[#04222b] transition-all hover:shadow-[0_0_24px_rgba(0,212,255,0.45)] lg:block"
          >
            Schedule Strategy Call
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg border border-white/10 p-2 text-heading lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Mega menus */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full hidden border-b border-white/5 bg-bg/98 shadow-card backdrop-blur-xl lg:block"
          >
            <div
              className={cn(
                "mx-auto max-w-7xl px-6",
                openMenu === "services" ? "py-4" : "px-8 py-8",
              )}
            >
              {openMenu === "services" && <ServicesMenu items={nav.services} />}
              {openMenu === "industries" && <GridMenu items={nav.industries} columns={5} />}
              {openMenu === "resources" && <GridMenu items={nav.resources} columns={4} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile nav */}
      <MobileNav nav={nav} open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function TopLink({
  href,
  label,
  onHover,
}: {
  href: string;
  label: string;
  onHover: () => void;
}) {
  return (
    <Link
      href={href}
      onMouseEnter={onHover}
      className="rounded-lg px-3 py-2 text-sm font-medium text-body transition-colors hover:text-heading"
    >
      {label}
    </Link>
  );
}

function MenuTrigger({
  label,
  open,
  onHover,
}: {
  label: string;
  open: boolean;
  onHover: () => void;
}) {
  return (
    <button
      onMouseEnter={onHover}
      onClick={onHover}
      aria-expanded={open}
      className={cn(
        "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        open ? "text-accent" : "text-body hover:text-heading",
      )}
    >
      {label}
      <ChevronDown
        className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
        strokeWidth={2}
      />
    </button>
  );
}

function ServicesMenu({ items }: { items: NavLink[] }) {
  const stages = ["attract", "convert", "automate", "scale"];
  return (
    <div className="grid grid-cols-4 gap-4 xl:gap-5">
      {stages.map((stage) => (
        <div key={stage}>
          <p className="eyebrow mb-2 text-[10px]">{STAGE_LABELS[stage]}</p>
          <ul className="space-y-0.5">
            {items
              .filter((s) => s.group === stage)
              .map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group flex items-start gap-2 rounded-md px-1.5 py-1.5 transition-colors hover:bg-white/[0.03]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/10">
                      <Icon name={s.icon ?? "Sparkles"} className="h-3.5 w-3.5 text-accent" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-[13px] font-semibold leading-tight text-heading group-hover:text-accent">
                        {s.label}
                      </span>
                      {s.description && (
                        <span className="mt-0.5 line-clamp-2 block text-[11px] leading-snug text-muted">
                          {s.description}
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function GridMenu({ items, columns }: { items: NavLink[]; columns: number }) {
  return (
    <ul
      className="grid gap-2"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-white/[0.03]"
          >
            {item.icon && (
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Icon name={item.icon} className="h-4 w-4 text-accent" />
              </span>
            )}
            <span>
              <span className="block font-display text-sm font-semibold text-heading group-hover:text-accent">
                {item.label}
              </span>
              {item.description && (
                <span className="mt-0.5 block text-xs text-muted">{item.description}</span>
              )}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ----------------------------- Mobile nav ---------------------------- */

function MobileNav({
  nav,
  open,
  onClose,
}: {
  nav: NavData;
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const sections: { key: string; label: string; items: NavLink[] }[] = [
    { key: "services", label: "Services", items: nav.services },
    { key: "industries", label: "Industries", items: nav.industries },
    { key: "resources", label: "Resources", items: nav.resources },
    { key: "locations", label: "Locations", items: nav.locations },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex flex-col bg-bg lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
            <Link href="/" className="flex shrink-0 items-center" onClick={onClose}>
              <Image
                src="/brand/logo-inverted.png"
                alt="FTW Agency"
                width={1024}
                height={682}
                className="h-14 w-auto"
              />
            </Link>
            <button
              onClick={onClose}
              className="rounded-lg border border-white/10 p-2 text-heading"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile">
            {sections.map((section) => (
              <div key={section.key} className="border-b border-white/5">
                <button
                  onClick={() =>
                    setExpanded(expanded === section.key ? null : section.key)
                  }
                  aria-expanded={expanded === section.key}
                  className="flex w-full items-center justify-between py-4 font-display text-base font-semibold text-heading"
                >
                  {section.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-muted transition-transform",
                      expanded === section.key && "rotate-180",
                    )}
                    strokeWidth={2}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {expanded === section.key && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="block py-2.5 pl-2 text-sm text-body"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {[
              { label: "Portfolio", href: "/portfolio" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block border-b border-white/5 py-4 font-display text-base font-semibold text-heading"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Pinned CTAs */}
          <div className="grid grid-cols-2 gap-3 border-t border-white/5 p-4">
            <Link
              href="/portfolio"
              onClick={onClose}
              className="rounded-[10px] border border-white/15 px-4 py-3 text-center font-display text-sm font-semibold text-heading"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="rounded-[10px] bg-accent px-4 py-3 text-center font-display text-sm font-semibold text-[#04222b]"
            >
              Strategy Call
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
