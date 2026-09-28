import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { ProductSearch } from "@/components/product-search";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

const heroImage = products[0]?.images[0];
const brandImage = products[3]?.images[0];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Online laddu catalogue</p>
            <h1>Explore the {site.name} laddu range.</h1>
            <p>{site.businessDescription} Browse the listings and contact us about product details or availability.</p>
            <div className="hero-actions">
              <Link className="button-link" href="/products">Explore products <span aria-hidden="true">→</span></Link>
              <WhatsappCta label="Ask us a question" className="text-link" />
            </div>
          </div>
          <div className="hero-art">
            <p className="service-area-note">Services are currently available only in Delhi.</p>
            <div className="hero-image-frame">
              {heroImage ? (
                <Image src={heroImage.src} alt={heroImage.alt} width={768} height={1367} preload sizes="(max-width: 680px) 70vw, 35vw" />
              ) : <span className="hero-image-fallback">Product photo unavailable</span>}
            </div>
            <span className="hero-note">A closer look<br />at the range</span>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="intro-grid reveal">
          <div>
            <p className="eyebrow">About {site.name}</p>
            <h2>A simple way to explore our range.</h2>
          </div>
          <div className="intro-copy">
            <p>Browse the current product listings, learn about the business, or contact us with a question.</p>
            <Link className="text-link" href="/about">Meet {site.name} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading reveal">
            <p className="eyebrow">The catalogue</p>
            <h2>Browse the current range.</h2>
            <p>Open a listing for product details and contact options.</p>
          </div>
          <ProductSearch id="homepage-product-search" />
          {products.length ? (
            <div className="product-grid">
              {products.slice(0, 4).map((product) => <ProductCard key={product.slug} product={product} />)}
            </div>
          ) : (
            <div className="empty-state">
              <div>
                <h3>No products are listed right now.</h3>
                <p>Contact us to ask about the current range.</p>
                <Link className="text-link" href="/products">Visit the product catalogue <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading reveal">
          <p className="eyebrow">Product information</p>
          <h2>Find the details you need.</h2>
        </div>
        <div className="value-grid">
          <article className="value-item reveal"><span className="value-number">01</span><h3>Product range</h3><p>Browse the current laddu listings.</p></article>
          <article className="value-item reveal"><span className="value-number">02</span><h3>Product questions</h3><p>Contact us to ask about ingredients and availability.</p></article>
          <article className="value-item reveal"><span className="value-number">03</span><h3>Ordering details</h3><p>Ask about delivery and ordering before you decide.</p></article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell image-band">
          <div className="image-band-visual">
            {brandImage ? (
              <Image src={brandImage.src} alt={brandImage.alt} width={768} height={1367} loading="lazy" sizes="(max-width: 680px) 100vw, 40vw" />
            ) : <span className="hero-image-fallback">Product photo unavailable</span>}
          </div>
          <div className="image-band-copy reveal">
            <p className="eyebrow">Explore T-NUTRIST</p>
            <h2>Product details, all in one place.</h2>
            <p>Browse the catalogue or contact us to ask about product details, availability, and ordering.</p>
            <Link className="text-link" href="/faq">Read about ordering and delivery <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell cta-band-inner">
          <h2>Have a question about the range?</h2>
          <WhatsappCta label="Start a conversation" className="button-link button-link--light" />
        </div>
      </section>
    </>
  );
}
