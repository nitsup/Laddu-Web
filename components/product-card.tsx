import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];

  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
        <div className="product-card-image">
          {image ? <Image src={image.src} alt={image.alt} width={960} height={720} sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 380px" /> : <span className="product-image-fallback">Product image coming soon</span>}
        </div>
        <div className="product-card-copy">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span className="text-link">View details <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  );
}