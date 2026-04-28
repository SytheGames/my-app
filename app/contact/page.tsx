import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const web3formsEndpoint = "https://api.web3forms.com/submit";
const web3formsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";
const thankYouUrl = `${siteUrl}/thank-you`;

export const metadata: Metadata = {
  title: "Contact Kealey Design | Free Website Audit",
  description: "Get a free website audit with a 24-hour turnaround from Kealey Design. We will send 3 quick wins to improve conversion, speed, and local visibility.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Kealey Design | Free Website Audit",
    description:
      "Get a free website audit with a 24-hour turnaround from Kealey Design. We will send 3 quick wins to improve conversion, speed, and local visibility.",
    url: "/contact",
    type: "website",
    images: [{ url: "/mockup.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kealey Design | Free Website Audit",
    description:
      "Get a free website audit with a 24-hour turnaround from Kealey Design. We will send 3 quick wins to improve conversion, speed, and local visibility.",
    images: ["/mockup.png"],
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Kealey Design",
    description:
      "Get a free website audit with a 24-hour turnaround from Kealey Design. We will send 3 quick wins to improve conversion, speed, and local visibility.",
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
              <h1 className="contact-page__title">Get a free website audit in 24 hours</h1>
              <p className="contact-page__lead">
                Send your website URL and we will reply with 3 quick wins you can apply right away
                to improve performance, clarity, and lead quality.
              </p>

              <ul className="contact-page__stats" aria-label="Trust highlights">
                <li className="contact-page__stat-item">25+ websites launched</li>
                <li className="contact-page__stat-item">98% client satisfaction</li>
                <li className="contact-page__stat-item">Serving Chatham, Windsor, London + nearby</li>
              </ul>

              <div className="contact-page__cta-row" aria-label="Contact page actions">
                <Link className="contact-page__cta-secondary" href="/portfolio">
                  View portfolio
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

            <form
              id="contact-form"
              className="contact-page__form"
              aria-label="Contact form"
              action={web3formsEndpoint}
              method="POST"
            >
              <input type="hidden" name="access_key" value={web3formsAccessKey} />
              <input type="hidden" name="subject" value="Free Audit Request - Kealey Design" />
              <input type="hidden" name="from_name" value="Kealey Design Website" />
              <input type="hidden" name="redirect" value={thankYouUrl} />
              <input
                type="checkbox"
                name="botcheck"
                aria-hidden="true"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              <label htmlFor="contact-full-name">Name</label>
              <input id="contact-full-name" type="text" name="name" placeholder="Your name" required />

              <label htmlFor="contact-email-page">Email</label>
              <input id="contact-email-page" type="email" name="email" placeholder="you@company.com" required />

              <label htmlFor="contact-message">Project Details</label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Website URL + what you want to improve"
                required
              />

              <button type="submit">Get My Free Audit</button>
            </form>
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
