import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Ordering & delivery",
  description: `Read about ordering, delivery, and returns for the ${site.name} catalogue. Contact us to confirm current terms.`,
  path: "/faq",
});

const questions = [
  {
    question: "How do I place an order?",
    answer: "This website is a product catalogue and does not process orders or payments. Contact us to confirm availability and discuss ordering.",
  },
  {
    question: "Where do you deliver?",
    answer: "Contact us to ask whether delivery is available for your location before purchasing.",
  },
  {
    question: "How long does delivery take, and what does it cost?",
    answer: "Delivery timing and charges depend on the order and destination. Please confirm both directly before placing an order.",
  },
  {
    question: "What is the return or exchange policy?",
    answer: "Please contact us to ask about the return or exchange terms that apply to your purchase.",
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
          <p className="eyebrow">Frequently asked questions</p>
          <h1>Ordering and delivery.</h1>
          <p>Find answers about the catalogue, ordering, and delivery. Contact us to confirm current terms before purchasing.</p>
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