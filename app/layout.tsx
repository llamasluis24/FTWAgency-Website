import type { Metadata } from "next";
import "./globals.css";
import { generalSans, inter, instrumentSerif } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LazyCommandPalette } from "@/components/ui/LazyCommandPalette";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema } from "@/lib/jsonld";
import { siteConfig } from "@/content/site";
import { defaultOgImage } from "@/lib/metadata";
import { getSiteNav, getSitePaletteItems } from "@/lib/site-nav";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Growth Systems for Modern Businesses`,
    template: `%s`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Growth Systems for Modern Businesses`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Growth Systems for Modern Businesses`,
    description: siteConfig.description,
    images: [defaultOgImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const nav = getSiteNav();
  const paletteItems = getSitePaletteItems();

  return (
    <html lang="en">
      <body
        className={`${generalSans.variable} ${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        <JsonLd data={[organizationSchema()]} />
        <Header nav={nav} />
        <LazyCommandPalette items={paletteItems} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
