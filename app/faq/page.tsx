import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "FAQ & delivery",
  description: `Find ordering, delivery, coverage, and returns information for ${site.name}.`,
  path: "/faq",
});

const questions = [
  {
    question: "How do I place an order?",
    answer: "This site is a product catalogue and does not accept orders or payments. Contact us to confirm availability and agree on the next steps before purchasing.",
  },
  {
    question: "Where do you deliver?",
    answer: "Delivery areas have not been confirmed for this site. Ask us to check your location before relying on delivery.",
  },
  {
    question: "How long does delivery take, and what does it cost?",
    answer: "Delivery timing and charges depend on the order and destination. Please confirm both directly before placing an order.",
  },
  {
    question: "What is the return or exchange policy?",
    answer: "Return and exchange terms have not been provided here. Please ask about the applicable terms before completing a purchase.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Helpful details</p>
          <h1>Ordering & delivery.</h1>
          <p>Information about ordering, delivery coverage, timing, and returns. Please confirm current terms directly before you purchase.</p>
        </div>
      </section>
      <section className="page-content shell">
        <div className="faq-list">
          {questions.map(({ question, answer }) => (
            <article className="faq-item" key={question}>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 42 }}><WhatsappCta label="Ask a question" /></div>
      </section>
    </>
  );
}