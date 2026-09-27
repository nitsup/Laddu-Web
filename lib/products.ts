export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  slug: string;
  name: string;
  summary: string;
  description: string[];
  images: ProductImage[];
  sizes: { label: string; grams: number; price: number }[];
  seoTitle: string;
  seoDescription: string;
};

export const products: Product[] = [
  {
    slug: "kale-til-laddu",
    name: "Kale Til Laddu",
    summary: "Black sesame and pumpkin seed laddu.",
    description: [
      "Made with nutrient-dense black sesame seeds, pumpkin seeds, and pure desi ghee, with zero added sugar.",
      "Packed with Zinc and Omega-3, they strengthen hair, relieve stress, and improve sleep quality.",
      "Enjoy this natural wellness boost in both winter and summer.",
    ],
    images: [{ src: "/images/products/kale-til-laddu.png", alt: "Kale Til Laddu product photo" }],
    sizes: [
      { label: "500 g", grams: 500, price: 299 },
      { label: "1 kg", grams: 1000, price: 599 },
    ],
    seoTitle: "Kale Til Laddu",
    seoDescription: "Explore Kale Til Laddu made with black sesame seeds, pumpkin seeds, and desi ghee. Available in 500 g and 1 kg sizes.",
  },
  {
    slug: "safed-til-laddu",
    name: "Safed Til Laddu",
    summary: "White sesame and pumpkin seed laddu.",
    description: [
      "Crafted with white sesame, pumpkin seeds, and pure desi ghee, with zero added sugar.",
      "Loaded with plant-based protein, iron, and zinc, they support muscle building, fight stress, and fulfill daily nutrients.",
      "Perfect to nourish your body in both winter and summer.",
    ],
    images: [{ src: "/images/products/Safed-til-laddu.png", alt: "Safed Til Laddu product photo" }],
    sizes: [
      { label: "500 g", grams: 500, price: 299 },
      { label: "1 kg", grams: 1000, price: 599 },
    ],
    seoTitle: "Safed Til Laddu",
    seoDescription: "Explore Safed Til Laddu made with white sesame, pumpkin seeds, and desi ghee. Available in 500 g and 1 kg sizes.",
  },
  {
    slug: "besan-dry-fruit-laddu",
    name: "Besan Dry Fruit Laddu",
    summary: "Slow-roasted besan laddu with crunchy dry fruits.",
    description: [
      "Celebrate every moment with our delicious Besan Dry Fruit Ladoos.",
      "Slow-roasted in pure desi ghee with zero added sugar, they combine aromatic besan with crunchy dry fruits for a rich boost of energy and protein.",
      "Perfect for budget-friendly occasion gifting, and delicious to enjoy in both winter and summer.",
    ],
    images: [{ src: "/images/products/atta-dry-fruit-laddu.png", alt: "Besan Dry Fruit Laddu product photo" }],
    sizes: [
      { label: "500 g", grams: 500, price: 349 },
      { label: "1 kg", grams: 1000, price: 699 },
    ],
    seoTitle: "Besan Dry Fruit Laddu",
    seoDescription: "Explore Besan Dry Fruit Laddu, slow-roasted with besan and dry fruits. Available in 500 g and 1 kg sizes.",
  },
  {
    slug: "gond-dry-fruit-laddu",
    name: "Gond Dry Fruit Laddu",
    summary: "Traditional gond and dry fruit laddu.",
    description: [
      "Nourish your joint health with our traditional Gond Dry Fruit Ladoos.",
      "Slow-cooked in pure desi ghee with zero added sugar, they blend edible gond with premium dry fruits to deliver rich protein and essential micronutrients.",
      "An excellent choice for orthopedic health, and the ultimate nutrient boost for winter wellness.",
    ],
    images: [{ src: "/images/products/moong-dal-laddu.png", alt: "Gond Dry Fruit Laddu product photo" }],
    sizes: [
      { label: "500 g", grams: 500, price: 399 },
      { label: "1 kg", grams: 1000, price: 799 },
    ],
    seoTitle: "Gond Dry Fruit Laddu",
    seoDescription: "Explore Gond Dry Fruit Laddu made with edible gond and dry fruits. Available in 500 g and 1 kg sizes.",
  },
  {
    slug: "dry-fruit-laddu",
    name: "Dry Fruit Laddu",
    summary: "Laddu made with whole dry fruits and desi ghee.",
    description: [
      "Made with premium whole dry fruits and pure desi ghee, they fulfill your daily nutrient needs with zero added sugar.",
      "Enhanced with Dakhni Mirch for digestion, they're perfect to enjoy in both winter and summer.",
    ],
    images: [{ src: "/images/products/Dry-fruit-laddu.png", alt: "Dry Fruit Laddu product photo" }],
    sizes: [
      { label: "500 g", grams: 500, price: 499 },
      { label: "1 kg", grams: 1000, price: 999 },
    ],
    seoTitle: "Dry Fruit Laddu",
    seoDescription: "Explore Dry Fruit Laddu made with whole dry fruits and desi ghee. Available in 500 g and 1 kg sizes.",
  },
];

export const bulkDiscounts = [
  { kilograms: 2, amount: 100 },
  { kilograms: 3, amount: 200 },
] as const;

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
