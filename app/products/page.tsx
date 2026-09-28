import type { Metadata } from "next";
import { ProductCatalogue } from "@/components/product-catalogue";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { pageMetadata } from "@/lib/metadata";
import { bulkDiscounts, products } from "@/lib/products";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description: "Browse the T-NUTRIST laddu catalogue and contact us to confirm product details, ingredients, and availability.",
  path: "/products",
});

type ProductsPageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const query = Array.isArray(params.q) ? params.q[0] : params.q;

  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">The catalogue</p>
          <h1>Browse the laddu range.</h1>
          <p>View product listings and contact us to confirm details, ingredients, and availability.</p>
        </div>
      </section>
      <section className="page-content shell" aria-labelledby="catalog-heading">
        <h2 className="sr-only" id="catalog-heading">Current product listings</h2>
        {products.length ? (
          <>
            <p className="bulk-discount-note">
              Bulk orders: save ₹{bulkDiscounts[0].amount} on 2 kg or ₹{bulkDiscounts[1].amount} on 3 kg.
            </p>
            <ProductCatalogue key={query ?? ""} products={products} initialQuery={query ?? ""} />
          </>
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