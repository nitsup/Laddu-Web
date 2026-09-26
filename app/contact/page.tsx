import type { Metadata } from "next";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${site.name} with product, availability, or delivery questions.`,
  path: "/contact",
});

export default function ContactPage() {
  const contactDetails = [
    ...(site.contact.phone ? [{ label: "Phone", value: site.contact.phone, href: `tel:${site.contact.phone}` }] : []),
    ...(site.contact.email ? [{ label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` }] : []),
    ...(site.contact.whatsappNumber ? [{ label: "WhatsApp", value: "Start a conversation", href: `https://wa.me/${site.contact.whatsappNumber.replace(/\D/g, "")}` }] : []),
    ...(site.contact.location ? [{ label: "Location", value: site.contact.location }] : []),
    ...(site.contact.serviceArea ? [{ label: "Service area", value: site.contact.serviceArea }] : []),
  ];

  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Get in touch</p>
          <h1>Let&apos;s talk.</h1>
          <p>Ask us about products, current availability, delivery, or anything else you&apos;d like to know.</p>
        </div>
      </section>
      <section className="page-content shell contact-layout">
        <div className="contact-options" id="contact-details">
          <p className="eyebrow">Contact details</p>
          {contactDetails.length ? contactDetails.map((item) => (
            <div className="contact-option" key={item.label}>
              <span>{item.label}</span>
              {item.href ? <a href={item.href} target={item.href.startsWith("https:") ? "_blank" : undefined} rel={item.href.startsWith("https:") ? "noopener noreferrer" : undefined}>{item.value}</a> : <span>{item.value}</span>}
            </div>
          )) : <p className="body-copy">Direct contact details are being prepared. Please check back soon.</p>}
          {site.contact.whatsappNumber && <WhatsappCta label="Message on WhatsApp" />}
        </div>
        <aside className="contact-note">
          <p className="eyebrow">Before you order</p>
          <h2>Get the details that matter to you.</h2>
          <p>Product availability, delivery coverage, timing, and costs can change. Please confirm these directly before placing an order. This site doesn&apos;t accept orders or collect form submissions.</p>
        </aside>
      </section>
    </>
  );
}