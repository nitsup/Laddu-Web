import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { ProductPricing } from "@/components/product-pricing";

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];

  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
        <div className="product-card-image">
          {image ? <Image src={image.src} alt={image.alt} width={768} height={1367} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 25vw" /> : <span className="product-image-fallback">Product photo unavailable</span>}
        </div>
        <div className="product-card-copy">
          <h3>{product.name}</h3>
          <p>{product.summary}</p>
          <ProductPricing sizes={product.sizes} />
          <span className="text-link">View details <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  );
}