import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.VERCEL_ENV === "preview";

  return {
    rules: { userAgent: "*", allow: isPreview ? undefined : "/", disallow: isPreview ? "/" : undefined },
    ...(site.url ? { sitemap: absoluteUrl("/sitemap.xml") } : {}),
  };
}