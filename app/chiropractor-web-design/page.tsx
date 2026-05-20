import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Chiropractor Website Design | Websites Built for Chiro Clinics",
  description:
    "Custom chiropractor website design that attracts new patients and fills your schedule. Fast, mobile-friendly sites with online booking, local SEO, and trust-building content. Serving Ontario clinics.",
  alternates: { canonical: "/chiropractor-web-design" },
  openGraph: {
    title: "Chiropractor Website Design | Websites Built for Chiro Clinics",
    description:
      "Custom chiropractor website design that attracts new patients and fills your schedule. Fast, mobile-friendly sites with online booking, local SEO, and trust-building content.",
    url: "/chiropractor-web-design",
    type: "website",
    images: [{ url: "/case-studies/Screenshot_20-5-2026_16178_www.daveychiropractic.com.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiropractor Website Design | Websites Built for Chiro Clinics",
    description:
      "Custom chiropractor website design that attracts new patients and fills your schedule. Fast, mobile-friendly sites with online booking, local SEO, and trust-building content.",
    images: ["/case-studies/Screenshot_20-5-2026_16178_www.daveychiropractic.com.jpeg"],
  },
};

export default function ChiropractorWebDesignPage() {
  const chiropractorServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Chiropractor Website Design",
    description:
      "Custom website design for chiropractic clinics in Ontario. Designed to attract new patients, support online booking, and rank in local search results.",
    areaServed: "Ontario, Canada",
    provider: { "@type": "Organization", name: "Kealey Design", url: siteUrl },
    url: `${siteUrl}/chiropractor-web-design`,
    serviceType: "Web Design",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a chiropractor website cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A custom chiropractor website typically starts around $2,000–$4,000 depending on the number of pages, features like online booking, and whether local SEO setup is included. We provide a detailed quote after a free consultation.",
        },
      },
      {
        "@type": "Question",
        name: "Can you integrate online booking into a chiropractic website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can integrate booking platforms such as Jane App, Mindbody, or a simple contact-based booking form directly into your website so patients can request appointments without picking up the phone.",
        },
      },
      {
        "@type": "Question",
        name: "Will my chiropractor website rank on Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every site we build is structured with local SEO best practices: fast load times, proper heading hierarchy, schema markup, and Google Business Profile alignment. We can also add an ongoing local SEO package to accelerate your rankings.",
        },
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Chiropractor Website Design">
        <SplitPageHero
          eyebrow="WEB DESIGN"
          title="Chiropractor Website Design That Fills Your Schedule"
          description="We build websites for chiropractic clinics that attract new patients, earn their trust, and make booking an appointment effortless."
          imageSrc="/case-studies/Screenshot_20-5-2026_16178_www.daveychiropractic.com.jpeg"
          imageAlt="Chiropractor website design preview"
          ctaLabel="Request a Free Consultation"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                Most chiropractic clinics rely on word-of-mouth, but today&apos;s new patients search Google
                first. If your website looks dated, loads slowly, or doesn&apos;t appear in local results,
                you are losing patients to competitors before they ever call you.
              </p>

              <h2>Common Problems with Chiropractic Clinic Websites</h2>
              <ul>
                <li>Outdated design that makes the clinic look less credible than it is</li>
                <li>No clear path for new patients to book or make contact</li>
                <li>Missing or buried reviews and patient testimonials</li>
                <li>Slow load times that push visitors away before the page loads</li>
                <li>Not ranking locally for searches like &ldquo;chiropractor near me&rdquo;</li>
                <li>No mobile-optimized layout, even though most patients search on their phones</li>
              </ul>

              <h2>What a Well-Built Chiropractic Website Includes</h2>
              <ul>
                <li><strong>Clear service pages</strong> — One page per treatment type so patients find exactly what they need and Google understands your full scope of care.</li>
                <li><strong>Online booking integration</strong> — Direct connection to Jane App, Mindbody, or a custom form so patients can book without calling.</li>
                <li><strong>Patient reviews and testimonials</strong> — Prominently placed trust signals that build confidence before a visitor even scrolls.</li>
                <li><strong>Doctor and team bios</strong> — Practitioner profiles with credentials and photos that establish a human connection early.</li>
                <li><strong>Local SEO structure</strong> — Schema markup, city-specific content, and Google Business Profile alignment built into every page.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <h2>Local SEO for Chiropractors</h2>
              <p>
                Ranking for searches like &ldquo;chiropractor in Chatham&rdquo; requires more than just
                having a website. We build the technical foundation — fast load times, proper heading
                structure, schema markup, and Google Business Profile alignment — into every project from
                day one. An ongoing local SEO package is also available for clinics that want to accelerate results.
              </p>

              <h2>Mobile-First Design</h2>
              <p>
                Over 70% of healthcare searches happen on mobile. Every site we design is built
                mobile-first so that tap targets, content hierarchy, and the booking flow are optimized
                for someone on their phone looking for help right now.
              </p>

              <h2>Trust Signals That Convert New Patients</h2>
              <p>
                Healthcare decisions are personal. We design credentials, patient reviews, and care
                philosophy into the visual flow of your pages so confidence builds naturally as a visitor
                scrolls toward booking.
              </p>
            </div>
          </div>
        </section>

        <section className="faq" aria-label="Frequently asked questions">
          <div className="faq__inner">
            <p className="faq__eyebrow">FAQ</p>
            <h2 className="faq__title">Chiropractor Website FAQs</h2>

            <div className="faq__columns">
              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">How much does a chiropractor website cost?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">A custom chiropractor website typically starts around $2,000–$4,000 depending on the number of pages, features like online booking, and whether local SEO setup is included. We provide a detailed quote after a free consultation.</p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can you integrate online booking into a chiropractic website?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">Yes. We can integrate booking platforms such as Jane App, Mindbody, or a simple contact-based booking form directly into your website so patients can request appointments without picking up the phone.</p>
                </details>
              </div>

              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Will my chiropractor website rank on Google?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">Every site we build is structured with local SEO best practices: fast load times, proper heading hierarchy, schema markup, and Google Business Profile alignment. We can also add an ongoing local SEO package to accelerate your rankings.</p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">How long does it take to build a chiropractic website?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">Most chiropractor websites are completed within 3–5 weeks from the time we receive your content, photos, and feedback. We keep the process straightforward with clear milestones so your clinic can get online quickly.</p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Ready to attract more patients online?"
          copy="Tell us about your clinic and we will outline a website strategy built to rank locally, earn patient trust, and fill your schedule."
          subject="New Chiropractor Web Design Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chiropractorServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
