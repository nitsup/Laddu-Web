import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/products", "/about", "/contact", "/faq"];
  const productRoutes = products.map(({ slug }) => `/products/${slug}`);

  return [...staticRoutes, ...productRoutes].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/products" ? 0.9 : 0.7,
  }));
}