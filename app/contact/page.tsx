import type { Metadata } from "next";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${site.name} about product details, availability, and ordering. WhatsApp enquiries go to CEO ${site.ceo}.`,
  path: "/contact",
});

export default function ContactPage() {
  const contactDetails = [
    ...(site.contact.phone ? [{ label: "Phone", value: site.contact.phone, href: `tel:${site.contact.phone}` }] : []),
    ...(site.contact.email ? [{ label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` }] : []),
    ...(site.contact.location ? [{ label: "Location", value: site.contact.location }] : []),
    ...(site.contact.serviceArea ? [{ label: "Service area", value: site.contact.serviceArea }] : []),
  ];

  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Get in touch</p>
          <h1>Let&apos;s talk.</h1>
          <p>Ask us about product details, availability, or ordering.</p>
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
          )) : <p className="body-copy">WhatsApp contact is currently unavailable. Please check back later.</p>}
          <WhatsappCta label={`Message ${site.ceo} on WhatsApp`} />
        </div>
        <aside className="contact-note">
          <p className="eyebrow">Before you order</p>
          <h2>Get the details that matter to you.</h2>
          <p>This website is a product catalogue and does not process orders or payments. Contact us to confirm availability, delivery options, timing, and costs before purchasing.</p>
        </aside>
      </section>
    </>
  );
}