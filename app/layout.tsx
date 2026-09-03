import type { Metadata } from "next";
import "./globals.css";
import { generalSans, inter, instrumentSerif } from "@/lib/fonts";
import { siteConfig } from "@/content/site";
import { defaultOgImage } from "@/lib/metadata";

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
  return (
    <html lang="en">
      <body
        className={`${generalSans.variable} ${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
