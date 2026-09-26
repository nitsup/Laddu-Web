import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

const imageUrl = "/images/laddu-editorial.webp";
const imageCredit = "https://commons.wikimedia.org/wiki/File:Laddu_Sweet.JPG";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">A closer look at {site.name}</p>
            <h1>Get to know what&apos;s on the table.</h1>
            <p>Explore the product range, learn about the business, and find the details you need before getting in touch.</p>
            <div className="hero-actions">
              <Link className="button-link" href="/products">Explore products <span aria-hidden="true">→</span></Link>
              <WhatsappCta label="Ask us a question" className="text-link" />
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-image-frame">
              <Image src={imageUrl} alt="Illustrative photograph of laddu sweets; this is not a T-NUTRIST product image." width={1280} height={853} priority sizes="(max-width: 680px) 90vw, 48vw" />
            </div>
            <span className="hero-note">Made for<br />the moment</span>
            <p className="image-credit hero-credit">Illustrative image · <a href={imageCredit} target="_blank" rel="noopener noreferrer">Nandhinikandhasamy / CC BY-SA 4.0</a></p>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="intro-grid reveal">
          <div>
            <p className="eyebrow">Welcome</p>
            <h2>A little more about what we do.</h2>
          </div>
          <div className="intro-copy">
            <p>{site.name} brings product information and business details together in one easy place. Browse what&apos;s available, get to know the business, and ask us about the things that matter to you.</p>
            <Link className="text-link" href="/about">Meet {site.name} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading reveal">
            <p className="eyebrow">The collection</p>
            <h2>Find your next favourite.</h2>
            <p>Explore the current range and open any item for its full details.</p>
          </div>
          {products.length ? (
            <div className="product-grid">
              {products.slice(0, 3).map((product) => <ProductCard key={product.slug} product={product} />)}
            </div>
          ) : (
            <div className="empty-state">
              <div>
                <h3>Products are being added.</h3>
                <p>Check back soon for the full range and product-specific information.</p>
                <Link className="text-link" href="/products">Visit the product catalogue <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading reveal">
          <p className="eyebrow">What matters</p>
          <h2>Good information makes choosing easier.</h2>
        </div>
        <div className="value-grid">
          <article className="value-item reveal"><span className="value-number">01</span><h3>Clear details</h3><p>Product information gathered in one place, so it&apos;s easy to compare and explore.</p></article>
          <article className="value-item reveal"><span className="value-number">02</span><h3>Direct answers</h3><p>A simple way to ask questions about products, availability, and delivery.</p></article>
          <article className="value-item reveal"><span className="value-number">03</span><h3>Know before you order</h3><p>Confirm the details that matter to you before you decide what&apos;s right.</p></article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell image-band">
          <div className="image-band-visual">
            <Image src={imageUrl} alt="Illustrative view of Indian laddu sweets; not a photograph of a T-NUTRIST product." width={1280} height={853} loading="lazy" sizes="(max-width: 680px) 100vw, 50vw" />
          </div>
          <div className="image-band-copy reveal">
            <p className="eyebrow">A little context</p>
            <h2>Made to be explored at your own pace.</h2>
            <p>Take a look around, read the available product information, or get in touch if you&apos;d like to know more about the range.</p>
            <Link className="text-link" href="/faq">Read about ordering and delivery <span aria-hidden="true">→</span></Link>
            <p className="image-credit" style={{ marginTop: 18 }}>Illustrative photo by <a href={imageCredit} target="_blank" rel="noopener noreferrer">Nandhinikandhasamy</a>, licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</p>
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
