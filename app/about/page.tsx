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
          <Image src={imageUrl} alt="Atta and dry fruit laddu with a coarse texture and visible nut pieces" width={768} height={1367} loading="lazy" sizes="(max-width: 680px) 100vw, 40vw" />
        </div>
        <div className="image-band-copy">
          <p className="eyebrow">The business</p>
          <h2>The {site.name} catalogue.</h2>
          <p>{site.name} is an online business led by {site.ceo}, its CEO. This catalogue presents the current laddu range for customers to explore.</p>
          <p>Contact us to confirm product details, availability, and delivery options before ordering.</p>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">The catalogue</p><h2>Explore the range.</h2></div>
          <div className="value-grid">
            <article className="value-item"><span className="value-number">01</span><h3>Product listings</h3><p>Browse the current laddu range.</p></article>
            <article className="value-item"><span className="value-number">02</span><h3>Product enquiries</h3><p>Contact us with questions about the listings.</p></article>
            <article className="value-item"><span className="value-number">03</span><h3>Ordering information</h3><p>Ask about delivery and ordering before purchasing.</p></article>
          </div>
        </div>
      </section>
      <section className="cta-band"><div className="shell cta-band-inner"><h2>Questions about the range?</h2><WhatsappCta label={`Message ${site.ceo} on WhatsApp`} className="button-link button-link--light" /></div></section>
      <div className="shell" style={{ paddingBlock: 12 }}><Link className="text-link" href="/products">Browse the products <span aria-hidden="true">→</span></Link></div>
    </>
  );
}