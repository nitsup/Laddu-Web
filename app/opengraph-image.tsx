import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} product and business information`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#e9ecdf", color: "#183b32" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 30, fontWeight: 700 }}>
          <div style={{ width: 58, height: 58, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 40, background: "#f2c752" }}>T</div>
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontFamily: "serif", fontSize: 76, lineHeight: 1.06 }}>Product &amp; business information</div>
          <div style={{ fontSize: 28, color: "#5d7068" }}>Explore the range. Get in touch.</div>
        </div>
        <div style={{ width: 72, height: 8, background: "#d95b43" }} />
      </div>
    ),
    size,
  );
}