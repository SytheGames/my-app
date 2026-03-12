import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Web Design Leamington",
  description: "Web design services in Leamington for businesses that want a stronger online brand and predictable lead flow.",
  alternates: { canonical: "/locations/web-design-leamington" },
  openGraph: {
    title: "Web Design Leamington",
    description: "Web design services in Leamington for businesses that want a stronger online brand and predictable lead flow.",
    url: "/locations/web-design-leamington",
    type: "website",
    images: [{ url: "/images/locations-images/Lake_Erie_Leamington.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Leamington",
    description: "Web design services in Leamington for businesses that want a stronger online brand and predictable lead flow.",
    images: ["/images/locations-images/Lake_Erie_Leamington.jpg"],
  },
};

export default function WebDesignLeamingtonPage() {
  const leamingtonPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Web Design Leamington",
        description: "Web design services in Leamington for businesses that want a stronger online brand and predictable lead flow.",
        url: `${siteUrl}/locations/web-design-leamington`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you help a Leamington business improve online trust quickly?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We prioritize clear service messaging, proof sections, and stronger call-to-action placement so visitors can make decisions faster.",
            },
          },
          {
            "@type": "Question",
            name: "Do you support regional SEO beyond Leamington?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We can structure your site for Leamington while supporting nearby community and regional visibility through scalable location architecture.",
            },
          },
          {
            "@type": "Question",
            name: "What should we prepare before starting a Leamington web project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A simple list of services, target customer types, and ideal lead actions is enough to start. We can guide the rest of the planning process.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Web design Leamington">
        <SplitPageHero
          eyebrow="LOCATION PAGE"
          title="Web Design Leamington"
          description="Websites for Leamington businesses that need stronger brand trust, better SEO, and clearer conversion paths."
          imageSrc="/images/locations-images/Lake_Erie_Leamington.jpg"
          imageAlt="Web design in Leamington"
          ctaLabel="Start with a discovery call"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text" aria-label="Image credit">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>Image credit: Adam Bishop. Source: Wikipedia.</p>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                Leamington businesses benefit from websites that combine local visibility with strong brand trust.
                We build digital experiences that support both discovery and conversion.
              </p>

              <h2>Service Messaging That Builds Confidence</h2>
              <p>
                We shape page content around customer decision questions so visitors can quickly understand
                your offer, credibility, and next best action.
              </p>

              <h2>SEO-Ready Structure for Regional Growth</h2>
              <p>
                Website architecture is planned to support Leamington visibility while scaling into nearby
                towns and broader regional service coverage.
              </p>

              <h2>Built for Ongoing Optimization</h2>
              <p>
                Your site is delivered with a clean foundation that supports regular updates, content expansion,
                and measurable improvements over time.
              </p>
            </div>
          </div>
        </section>

        <section className="faq faq--location" aria-label="Leamington web design FAQs">
          <div className="faq__inner">
            <h2 className="faq__title">Leamington Web Design FAQs</h2>
            <div className="faq__columns faq__columns--single">
              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can you help a Leamington business improve online trust quickly?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. We prioritize clear service messaging, proof sections, and stronger call-to-action
                    placement so visitors can make decisions faster.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Do you support regional SEO beyond Leamington?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. We can structure your site for Leamington while supporting nearby community and regional
                    visibility through scalable location architecture.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">What should we prepare before starting a Leamington web project?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    A simple list of services, target customer types, and ideal lead actions is enough to start.
                    We can guide the rest of the planning process.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Want better results in Leamington?"
          copy="Send your goals and we will create a focused web strategy tailored to your local market."
          subject="New Leamington Location Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leamingtonPageSchema) }}
      />
    </div>
  );
}
