export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  slug: string;
  name: string;
  description: string;
  images: ProductImage[];
  specifications: { name: string; value: string }[];
  seoTitle: string;
  seoDescription: string;
  price?: { amount: number; currency: string };
};

// Add only confirmed products and facts here; routes and sitemap entries are generated from this list.
export const products: Product[] = [];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}