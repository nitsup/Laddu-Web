import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { pageMetadata } from "@/lib/metadata";
import { products } from "@/lib/products";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description: "Browse the T-NUTRIST product range, read product details, and enquire about availability.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">The collection</p>
          <h1>Products to explore.</h1>
          <p>Browse the current range and open a product for its description, images, and confirmed details.</p>
        </div>
      </section>
      <section className="page-content shell" aria-live="polite">
        {products.length ? (
          <div className="product-grid">
            {products.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        ) : (
          <div className="empty-state">
            <div>
              <h2>The product catalogue is being prepared.</h2>
              <p>There are no product listings yet. Get in touch to ask about current availability.</p>
              <WhatsappCta label="Ask about availability" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}