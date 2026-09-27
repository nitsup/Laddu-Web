import { existsSync } from "node:fs";
import { join } from "node:path";

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

const productRecords: Product[] = [
  {
    slug: "atta-dry-fruit-laddu",
    name: "Atta (Wheat Flour) & Dry Fruit Laddu",
    description: "Browse the Atta (Wheat Flour) & Dry Fruit Laddu listing and contact us to confirm ingredients, availability, and ordering details.",
    images: [{ src: "/images/products/atta-dry-fruit-laddu.png", alt: "Atta (Wheat Flour) & Dry Fruit Laddu product photo" }],
    specifications: [],
    seoTitle: "Atta (Wheat Flour) & Dry Fruit Laddu",
    seoDescription: "Explore Atta (Wheat Flour) & Dry Fruit Laddu in the T-NUTRIST catalogue. Contact us to confirm ingredients, availability, and ordering details.",
  },
  {
    slug: "multi-seed-dry-fruit-laddu",
    name: "Multi-Seed & Dry Fruit Laddu",
    description: "Browse the Multi-Seed & Dry Fruit Laddu listing and contact us to confirm ingredients, availability, and ordering details.",
    images: [{ src: "/images/products/multi-seed-dry-fruit-laddu.png", alt: "Multi-Seed & Dry Fruit Laddu product photo" }],
    specifications: [],
    seoTitle: "Multi-Seed & Dry Fruit Laddu",
    seoDescription: "Explore Multi-Seed & Dry Fruit Laddu in the T-NUTRIST catalogue. Contact us to confirm ingredients, availability, and ordering details.",
  },
  {
    slug: "moong-dal-laddu",
    name: "Moong Dal (Green Gram) Laddu",
    description: "Browse the Moong Dal (Green Gram) Laddu listing and contact us to confirm ingredients, availability, and ordering details.",
    images: [{ src: "/images/products/moong-dal-laddu.png", alt: "Moong Dal (Green Gram) Laddu product photo" }],
    specifications: [],
    seoTitle: "Moong Dal (Green Gram) Laddu",
    seoDescription: "Explore Moong Dal (Green Gram) Laddu in the T-NUTRIST catalogue. Contact us to confirm ingredients, availability, and ordering details.",
  },
  {
    slug: "besan-laddu",
    name: "Besan (Gram Flour) Laddu",
    description: "Browse the Besan (Gram Flour) Laddu listing and contact us to confirm ingredients, availability, and ordering details.",
    images: [{ src: "/images/products/besan-laddu.png", alt: "Besan (Gram Flour) Laddu product photo" }],
    specifications: [],
    seoTitle: "Besan (Gram Flour) Laddu",
    seoDescription: "Explore Besan (Gram Flour) Laddu in the T-NUTRIST catalogue. Contact us to confirm ingredients, availability, and ordering details.",
  },
];

function isAvailableLocalImage(image: ProductImage): boolean {
  if (!image.src.startsWith("/")) return false;
  return existsSync(join(process.cwd(), "public", image.src.slice(1)));
}

export const products = productRecords.map((product) => ({
  ...product,
  images: product.images.filter(isAvailableLocalImage),
}));

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}