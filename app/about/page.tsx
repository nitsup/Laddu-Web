import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: `Learn about ${site.name}, an online business led by CEO ${site.ceo}.`,
  path: "/about",
});

const imageUrl = "/images/products/atta-dry-fruit-laddu.png";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">About the business</p>
          <h1>About {site.name}.</h1>
          <p>{site.businessDescription} Explore the catalogue and contact us with questions.</p>
        </div>
      </section>
      <section className="section shell image-band">
        <div className="image-band-visual">
          <Image src={imageUrl} alt="Besan Dry Fruit Laddu product photo" width={768} height={1367} loading="lazy" sizes="(max-width: 680px) 100vw, 40vw" />
        </div>
        <div className="image-band-copy">
          <p className="eyebrow">The business</p>
          <h2>The {site.name} catalogue.</h2>
          <p>{site.businessDescription} This catalogue presents the current laddu range for customers to explore.</p>
          <p>Contact us to confirm product details, availability, and delivery options before ordering.</p>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">Our story</p><h2>Traditional taste for a new generation.</h2></div>
          <div className="value-grid">
            <article className="value-item"><span className="value-number">01</span><h3>Our aim</h3><p>Provide nutrient-rich ladoos to Gen Z while reconnecting people with the traditional Indian taste of ladoo.</p></article>
            <article className="value-item"><span className="value-number">02</span><h3>Founder</h3><p>{site.founder}, CEO and founder of T-NUTRIST.</p></article>
            <article className="value-item"><span className="value-number">03</span><h3>Our vision</h3><p>{site.vision}</p></article>
          </div>
        </div>
      </section>
      <section className="cta-band"><div className="shell cta-band-inner"><h2>Questions about the range?</h2><WhatsappCta label={`Message ${site.ceo} on WhatsApp`} className="button-link button-link--light" /></div></section>
      <div className="shell" style={{ paddingBlock: 12 }}><Link className="text-link" href="/products">Browse the products <span aria-hidden="true">→</span></Link></div>
    </>
  );
}