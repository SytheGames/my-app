import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Contact Kealey Design | Free Website Audit",
  description: "Request a free website audit from Kealey Design this week. We will send 3 quick wins to improve conversion, speed, and local visibility.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Kealey Design | Free Website Audit",
    description:
      "Request a free website audit from Kealey Design this week. We will send 3 quick wins to improve conversion, speed, and local visibility.",
    url: "/contact",
    type: "website",
    images: [{ url: "/mockup.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kealey Design | Free Website Audit",
    description:
      "Request a free website audit from Kealey Design this week. We will send 3 quick wins to improve conversion, speed, and local visibility.",
    images: ["/mockup.png"],
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Kealey Design",
    description:
      "Request a free website audit from Kealey Design this week. We will send 3 quick wins to improve conversion, speed, and local visibility.",
    url: `${siteUrl}/contact`,
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="contact-page" aria-label="Contact page">
        <div className="contact-page__inner">
          <div className="contact-page__layout">
            <div className="contact-page__visual">
              <p className="contact-page__eyebrow">CONTACT</p>
              <h1 className="contact-page__title">Get your free website audit this week</h1>
              <p className="contact-page__lead">
                Send your website URL and we will reply with 3 quick wins you can apply right away
                to improve performance, clarity, and lead quality.
              </p>

              <ul className="contact-page__stats" aria-label="Trust highlights">
                <li className="contact-page__stat-item">25+ websites launched</li>
                <li className="contact-page__stat-item">2 new-project spots this month</li>
                <li className="contact-page__stat-item">98% client satisfaction</li>
                <li className="contact-page__stat-item">Serving Chatham, Windsor, London + nearby</li>
              </ul>

              <div className="contact-page__cta-row" aria-label="Contact page actions">
                <Link className="contact-page__cta-secondary" href="/portfolio">
                  View portfolio
                </Link>
                <Link className="contact-page__cta-secondary" href="/careers/remote-appointment-setter">
                  We&apos;re hiring
                </Link>
              </div>

              <blockquote className="contact-page__testimonial" aria-label="Client testimonial">
                <p className="contact-page__testimonial-quote">
                  &quot;Matt built my website and manages it. Very knowledgeable and great to work with.&quot;
                </p>
                <p className="contact-page__testimonial-meta">
                  Enhanced Concrete · Verified Google Review
                </p>
              </blockquote>
            </div>

            <Suspense fallback={<div>Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          <section id="book-call" className="contact-page__scheduler" aria-label="Book an intro call">
            <h2 className="contact-page__scheduler-title">Prefer to book now?</h2>
            <div className="contact-page__scheduler-embed-wrap">
              <iframe
                src="https://cal.com/mattkealey/intro?embed=true"
                title="Book an intro call with Matt Kealey"
                className="contact-page__scheduler-embed"
                loading="lazy"
              />
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    </div>
  );
}
