import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { pageMetadata } from "@/lib/metadata";
import { products } from "@/lib/products";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description: "Browse the T-NUTRIST laddu catalogue and contact us to confirm product details, ingredients, and availability.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">The catalogue</p>
          <h1>Browse the laddu range.</h1>
          <p>View product listings and contact us to confirm details, ingredients, and availability.</p>
        </div>
      </section>
      <section className="page-content shell" aria-live="polite" aria-labelledby="catalog-heading">
        <h2 className="sr-only" id="catalog-heading">Current product listings</h2>
        {products.length ? (
          <div className="product-grid">
            {products.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        ) : (
          <div className="empty-state">
            <div>
              <h2>No products are listed right now.</h2>
              <p>Contact us to ask about the current range.</p>
              <WhatsappCta label="Ask about availability" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}