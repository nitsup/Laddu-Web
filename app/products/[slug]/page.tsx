import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { ProductGallery } from "@/components/product-gallery";
import { ProductPricing } from "@/components/product-pricing";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { pageMetadata } from "@/lib/metadata";
import { bulkDiscounts, getProduct, products } from "@/lib/products";
import { absoluteUrl, site } from "@/lib/site";

type ProductPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return pageMetadata({ title: "Product not found", description: "This product could not be found in the T-NUTRIST catalogue.", path: `/products/${slug}` });

  return pageMetadata({
    title: product.seoTitle,
    description: product.seoDescription,
    path: `/products/${product.slug}`,
    images: product.images.length ? product.images.map(({ src }) => src) : undefined,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description.join(" "),
    ...(site.url ? { url: absoluteUrl(`/products/${product.slug}`) } : {}),
    ...(site.url && product.images.length ? { image: product.images.map(({ src }) => absoluteUrl(src)) } : {}),
    offers: product.sizes.map(({ label, price }) => ({
        "@type": "Offer",
        price,
        priceCurrency: "INR",
        description: label,
        ...(site.url ? { url: absoluteUrl(`/products/${product.slug}`) } : {}),
      })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
      { "@type": "ListItem", position: 3, name: product.name, item: absoluteUrl(`/products/${product.slug}`) },
    ],
  };
  const relatedProducts = products.filter(({ slug: itemSlug }) => itemSlug !== product.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={productSchema} />
      {site.url && <JsonLd data={breadcrumbSchema} />}
      <section className="page-content shell">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span aria-current="page">{product.name}</span>
        </nav>
        <div className="product-detail-grid">
          <ProductGallery images={product.images} productName={product.name} />
          <div className="product-detail-copy">
            <p className="eyebrow">Product details</p>
            <h1>{product.name}</h1>
            <div className="product-description">
              {product.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <ProductPricing sizes={product.sizes} />
            <p className="bulk-discount-note">
              Bulk orders: save ₹{bulkDiscounts[0].amount} on 2 kg or ₹{bulkDiscounts[1].amount} on 3 kg.
            </p>
            <WhatsappCta productName={product.name} label={`Ask about ${product.name}`} />
          </div>
        </div>
        {relatedProducts.length > 0 && (
          <section className="related-products" aria-labelledby="related-heading">
            <div className="section-heading"><p className="eyebrow">More to explore</p><h2 id="related-heading">Related products</h2></div>
            <div className="product-grid">{relatedProducts.map((item) => <ProductCard key={item.slug} product={item} />)}</div>
          </section>
        )}
      </section>
    </>
  );
}