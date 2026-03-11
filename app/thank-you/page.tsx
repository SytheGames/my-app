import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thanks for contacting Kealey Design. Book an intro call to discuss your project.",
  alternates: { canonical: "/thank-you" },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  const thankYouPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Thank You",
    description: "Thanks for contacting Kealey Design. Book an intro call to discuss your project.",
    url: `${siteUrl}/thank-you`,
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="thank-you-page" aria-label="Thank you page">
        <section className="thank-you-page__intro">
          <div className="thank-you-page__inner">
            <p className="thank-you-page__eyebrow">THANK YOU</p>
            <h1 className="thank-you-page__title">Your message was sent successfully.</h1>
            <p className="thank-you-page__lead">
              We usually reply within one business day. If you want to move faster, book a short intro call below.
            </p>
            <Link href="/" className="thank-you-page__link">Return to homepage</Link>
            <p className="thank-you-page__lead">
              In the meantime, explore our <Link href="/services">services</Link> or browse recent <Link href="/portfolio">case studies</Link>.
            </p>
          </div>
        </section>

        <section className="thank-you-page__scheduler" aria-label="Schedule an intro call">
          <div className="thank-you-page__inner">
            <h2 className="thank-you-page__scheduler-title">Book an Intro Call</h2>
            <div className="thank-you-page__embed-wrap">
              <iframe
                src="https://cal.com/mattkealey/intro?embed=true"
                title="Book an intro call with Matt Kealey"
                className="thank-you-page__embed"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(thankYouPageSchema) }}
      />
    </div>
  );
}
