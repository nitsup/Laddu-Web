import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: `Learn about ${site.name}, its products, and the information available to customers.`,
  path: "/about",
});

const imageUrl = "/images/laddu-editorial.webp";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Our story</p>
          <h1>A little about {site.name}.</h1>
          <p>A place to learn about the business, explore its products, and find useful information before you get in touch.</p>
        </div>
      </section>
      <section className="section shell image-band">
        <div className="image-band-visual">
          <Image src={imageUrl} alt="Illustrative photograph of laddu sweets; this is not a T-NUTRIST product image." width={1280} height={853} loading="lazy" sizes="(max-width: 680px) 100vw, 50vw" />
        </div>
        <div className="image-band-copy">
          <p className="eyebrow">The business</p>
          <h2>Made clearer, one detail at a time.</h2>
          <p>{site.name} brings the business introduction, product information, and ordering guidance together. As confirmed details are added, this is where you&apos;ll be able to get a clearer picture of what&apos;s available and how to enquire.</p>
          <p>For now, please get in touch to confirm product availability, delivery coverage, and any other details important to your order.</p>
          <p className="image-credit">Illustrative photo by <a href="https://commons.wikimedia.org/wiki/File:Laddu_Sweet.JPG" target="_blank" rel="noopener noreferrer">Nandhinikandhasamy</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</p>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">Our approach</p><h2>Useful information, easy to find.</h2></div>
          <div className="value-grid">
            <article className="value-item"><span className="value-number">01</span><h3>Clear descriptions</h3><p>Product pages are designed for the information customers need to make an informed choice.</p></article>
            <article className="value-item"><span className="value-number">02</span><h3>Open conversation</h3><p>Questions about a product or an order deserve a direct answer.</p></article>
            <article className="value-item"><span className="value-number">03</span><h3>Details before decisions</h3><p>Delivery and ordering information should be clear before you commit.</p></article>
          </div>
        </div>
      </section>
      <section className="cta-band"><div className="shell cta-band-inner"><h2>Curious about the products?</h2><WhatsappCta label="Make an enquiry" className="button-link button-link--light" /></div></section>
      <div className="shell" style={{ paddingBlock: 12 }}><Link className="text-link" href="/products">Browse the products <span aria-hidden="true">→</span></Link></div>
    </>
  );
}