import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const web3formsEndpoint = "https://api.web3forms.com/submit";
const web3formsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";
const thankYouUrl = `${siteUrl}/thank-you`;

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kealey Design to discuss your website, SEO, or ecommerce project.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact",
    description: "Contact Kealey Design to discuss your website, SEO, or ecommerce project.",
    url: "/contact",
    type: "website",
    images: [{ url: "/mockup.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description: "Contact Kealey Design to discuss your website, SEO, or ecommerce project.",
    images: ["/mockup.png"],
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Kealey Design",
    description: "Contact Kealey Design to discuss your website, SEO, or ecommerce project.",
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
              <h1 className="contact-page__title">Let&apos;s talk about your project</h1>
              <p className="contact-page__lead">
                Share your goals and we will map out the best direction for web design, SEO, or
                ecommerce growth.
              </p>
              <address className="contact-page__contact" aria-label="Business contact details">
                73 Marion Ave, Chatham, ON N7M 5N7
                <br />
                <a href="tel:+15194011469">+1 519 401-1469</a>
                <br />
                <a href="mailto:matt@kealeydesign.ca">matt@kealeydesign.ca</a>
              </address>
              <p className="contact-page__contact">
                <Link href="/services">View services</Link> | <Link href="/portfolio">See portfolio</Link>
              </p>
            </div>

            <form className="contact-page__form" aria-label="Contact form" action={web3formsEndpoint} method="POST">
              <input type="hidden" name="access_key" value={web3formsAccessKey} />
              <input type="hidden" name="subject" value="New Contact Page Inquiry - Kealey Design" />
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
              <textarea id="contact-message" name="message" rows={6} placeholder="Tell us what you need" required />

              <button type="submit">Send Message</button>
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
