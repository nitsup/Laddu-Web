import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, getWhatsappUrl, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: {
    default: `${site.name} Laddu Catalogue`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  ...(site.url ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} Laddu Catalogue`,
    description: site.description,
    ...(site.url ? {
      url: "/",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} laddu catalogue` }],
    } : {}),
  },
  twitter: {
    card: site.url ? "summary_large_image" : "summary",
    title: `${site.name} Laddu Catalogue`,
    description: site.description,
    ...(site.url ? { images: ["/opengraph-image"] } : {}),
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const whatsappUrl = getWhatsappUrl();
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    ...(site.url ? {
      url: absoluteUrl("/"),
      logo: absoluteUrl("/images/t-nutrist-logo.webp"),
    } : {}),
    description: site.businessDescription,
    employee: { "@type": "Person", name: site.ceo, jobTitle: "CEO" },
    ...(whatsappUrl ? {
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer enquiries",
        url: whatsappUrl,
      },
    } : {}),
    ...(site.contact.instagram || site.contact.facebook
      ? { sameAs: [site.contact.instagram, site.contact.facebook].filter(Boolean) }
      : {}),
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <JsonLd data={organization} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
