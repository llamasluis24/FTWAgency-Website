import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LazyCommandPalette } from "@/components/ui/LazyCommandPalette";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema } from "@/lib/jsonld";
import { getSiteNav, getSitePaletteItems } from "@/lib/site-nav";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const nav = getSiteNav();
  const paletteItems = getSitePaletteItems();

  return (
    <>
      <JsonLd data={[organizationSchema()]} />
      <Header nav={nav} />
      <LazyCommandPalette items={paletteItems} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
