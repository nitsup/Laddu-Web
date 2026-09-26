const configuredHost =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
  process.env.VERCEL_URL?.trim() ||
  "http://localhost:3000";

function normalizeSiteUrl(value: string): string {
  const withProtocol = value.startsWith("http") ? value : `https://${value}`;
  return withProtocol.replace(/\/$/, "");
}

export const site = {
  name: "T-NUTRIST",
  description:
    "Explore the T-NUTRIST product range, learn about the business, and find information for product enquiries.",
  url: normalizeSiteUrl(configuredHost),
  contact: {
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
    phone: process.env.NEXT_PUBLIC_PHONE ?? "",
    email: process.env.NEXT_PUBLIC_EMAIL ?? "",
    location: process.env.NEXT_PUBLIC_LOCATION ?? "",
    serviceArea: process.env.NEXT_PUBLIC_SERVICE_AREA ?? "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  },
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, `${site.url}/`).toString();
}