import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Web Design Sarnia",
  description: "Local web design services in Sarnia for businesses looking to increase calls, leads, and regional visibility.",
  alternates: { canonical: "/locations/web-design-sarnia" },
};

export default function WebDesignSarniaPage() {
  const sarniaPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Web Design Sarnia",
        description: "Local web design services in Sarnia for businesses looking to increase calls, leads, and regional visibility.",
        url: `${siteUrl}/locations/web-design-sarnia`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you improve website trust signals for Sarnia service businesses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We improve trust through clearer proof sections, stronger service clarity, and better call-to-action flow for local visitors.",
            },
          },
          {
            "@type": "Question",
            name: "Do you help with local SEO in Sarnia and nearby Lambton areas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We do. Location-focused page architecture and local SEO fundamentals are part of how we improve discoverability in regional search.",
            },
          },
          {
            "@type": "Question",
            name: "How quickly can a Sarnia project typically launch?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most timelines depend on scope and content readiness, but practical projects often launch within a focused 4 to 8 week window.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Web design Sarnia">
        <SplitPageHero
          eyebrow="LOCATION PAGE"
          title="Web Design Sarnia"
          description="Practical websites for Sarnia businesses that need stronger local visibility and better conversion consistency."
          imageSrc="/images/locations-images/Sarnia_skyline.JPG"
          imageAlt="Web design in Sarnia"
          ctaLabel="Request a proposal"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text" aria-label="Image credit">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>Image credit: P199. Source: Wikipedia.</p>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                In Sarnia, clear service communication and trust signals are key to stronger conversion.
                We develop websites that explain your value fast and make next-step actions simple.
              </p>

              <h2>Local Relevance and Page Clarity</h2>
              <p>
                We align content with local user intent so visitors can quickly confirm your services,
                service area, and reasons to choose your business.
              </p>

              <h2>Conversion-Driven Structure</h2>
              <p>
                Service sections, social proof, and contact pathways are organized to reduce hesitation and
                support stronger call and form submission rates.
              </p>

              <h2>Practical Ongoing Improvements</h2>
              <p>
                After launch, your site can evolve with additional pages, performance refinements, and SEO
                updates that keep your local presence competitive.
              </p>
            </div>
          </div>
        </section>

        <section className="faq faq--location" aria-label="Sarnia web design FAQs">
          <div className="faq__inner">
            <h2 className="faq__title">Sarnia Web Design FAQs</h2>
            <div className="faq__columns faq__columns--single">
              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can you improve website trust signals for Sarnia service businesses?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. We improve trust through clearer proof sections, stronger service clarity, and better
                    call-to-action flow for local visitors.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Do you help with local SEO in Sarnia and nearby Lambton areas?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    We do. Location-focused page architecture and local SEO fundamentals are part of how we
                    improve discoverability in regional search.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">How quickly can a Sarnia project typically launch?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Most timelines depend on scope and content readiness, but practical projects often launch
                    within a focused 4 to 8 week window.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Need a better Sarnia web presence?"
          copy="Tell us what you want to improve and we will recommend the highest-impact next steps."
          subject="New Sarnia Location Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sarniaPageSchema) }}
      />
    </div>
  );
}
