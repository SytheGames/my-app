import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Web Design Windsor",
  description: "Web design services in Windsor built for competitive local markets and measurable lead growth.",
  alternates: { canonical: "/locations/web-design-windsor" },
};

export default function WebDesignWindsorPage() {
  const windsorPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Web Design Windsor",
        description: "Web design services in Windsor built for competitive local markets and measurable lead growth.",
        url: `${siteUrl}/locations/web-design-windsor`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you help a Windsor business compete in a crowded market?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We focus on clearer positioning, stronger service-page messaging, and cleaner conversion paths so your value is obvious faster.",
            },
          },
          {
            "@type": "Question",
            name: "Do you build websites for Windsor companies serving both local and cross-border audiences?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We can. We structure content and calls-to-action around your primary audience mix so the site supports your real sales conversations.",
            },
          },
          {
            "@type": "Question",
            name: "How do you measure website performance after launch?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We track inquiry behavior, page engagement, and lead quality so improvements are based on business outcomes, not vanity metrics.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Web design Windsor">
        <SplitPageHero
          eyebrow="LOCATION PAGE"
          title="Web Design Windsor"
          description="Websites for Windsor companies that need stronger digital positioning in a competitive market."
          imageSrc="/images/locations-images/Windsor,_Ontario_(aerial_view).jpg"
          imageAlt="Web design in Windsor"
          ctaLabel="Book a consultation"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text" aria-label="Image credit">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>Image credit: WMrapids. Source: Wikipedia.</p>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                Windsor is a competitive market where website clarity and positioning make a direct impact on lead quality.
                We create websites that help service businesses stand out and convert faster.
              </p>

              <h2>Clear Messaging for Competitive Markets</h2>
              <p>
                We shape content around user intent so prospects can quickly understand your value and move toward
                quote or consultation actions without confusion.
              </p>

              <h2>Conversion-Ready User Experience</h2>
              <p>
                Navigation, page hierarchy, and CTA placement are designed to support stronger conversion behavior
                across both desktop and mobile devices.
              </p>

              <h2>Scalable SEO and Service Expansion</h2>
              <p>
                Website structure is planned to support new pages, additional service areas, and long-term local
                search visibility as your Windsor presence grows.
              </p>
            </div>
          </div>
        </section>

        <section className="faq faq--location" aria-label="Windsor web design FAQs">
          <div className="faq__inner">
            <h2 className="faq__title">Windsor Web Design FAQs</h2>
            <div className="faq__columns faq__columns--single">
              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can you help a Windsor business compete in a crowded market?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. We focus on clearer positioning, stronger service-page messaging, and cleaner conversion
                    paths so your value is obvious faster.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Do you build websites for Windsor companies serving both local and cross-border audiences?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    We can. We structure content and calls-to-action around your primary audience mix so the site
                    supports your real sales conversations.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">How do you measure website performance after launch?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    We track inquiry behavior, page engagement, and lead quality so improvements are based on
                    business outcomes, not vanity metrics.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Need a stronger Windsor website?"
          copy="Share your target audience and goals, and we will build a practical roadmap for better conversion performance."
          subject="New Windsor Location Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(windsorPageSchema) }}
      />
    </div>
  );
}
