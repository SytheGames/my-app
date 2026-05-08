import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Web Design Sarnia",
  description: "Local web design services in Sarnia for businesses looking to increase calls, leads, and regional visibility.",
  alternates: { canonical: "/locations/web-design-sarnia" },
  openGraph: {
    title: "Web Design Sarnia",
    description: "Local web design services in Sarnia for businesses looking to increase calls, leads, and regional visibility.",
    url: "/locations/web-design-sarnia",
    type: "website",
    images: [{ url: "/images/locations-images/Sarnia_skyline.JPG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Sarnia",
    description: "Local web design services in Sarnia for businesses looking to increase calls, leads, and regional visibility.",
    images: ["/images/locations-images/Sarnia_skyline.JPG"],
  },
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
            name: "Do trades and industrial businesses in Sarnia actually benefit from better websites?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Most trades businesses in Sarnia are found by word of mouth first, but a weak website loses leads at the validation stage. When someone hears your name and looks you up, the site needs to confirm your credibility immediately.",
            },
          },
          {
            "@type": "Question",
            name: "Can you help a Sarnia business rank for searches across Lambton County?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We can structure service area content to target Petrolia, Forest, Point Edward, and other Lambton communities without creating thin duplicate pages that Google filters out.",
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
                Sarnia is a mid-size industrial city with a distinct economic identity: petrochemicals,
                manufacturing, and cross-border trade through the Blue Water Bridge have shaped a local business
                community that values practicality, reliability, and clear communication. For service businesses
                and trades operating in Sarnia and across Lambton County, the challenge online isn&apos;t usually
                brand storytelling — it&apos;s being findable and credible when someone local searches for what
                you do. That&apos;s what a properly structured website delivers.
              </p>

              <h2>Trades and Industrial Services Need Credible Websites Too</h2>
              <p>
                Sarnia&apos;s economy is dominated by skilled trades, industrial contractors, and support services
                for the petrochemical sector. These businesses often have strong reputations locally, but weak
                or outdated websites that fail to reflect that quality online. A site that accurately represents
                your work, lists your services clearly, and makes it easy to request a quote can consistently
                generate leads that word-of-mouth alone cannot reach.
              </p>

              <h2>Cross-Border Traffic and the Blue Water Bridge Effect</h2>
              <p>
                Sarnia&apos;s position at the Port Huron crossing means some local businesses benefit from
                traffic and customer flow that has both Canadian and American dimensions. Whether you&apos;re in
                hospitality, automotive, or retail, your site should be structured to capture that attention
                rather than ignore it. Clear service areas, sensible contact options, and fast mobile loading
                matter when someone searches while crossing or visiting.
              </p>

              <h2>Lambton County Reach Beyond Sarnia Proper</h2>
              <p>
                Many Sarnia-based businesses also serve Point Edward, Forest, Petrolia, and other Lambton County
                communities. A well-structured website can reflect that coverage clearly so customers in those
                areas know you serve them — not just Sarnia proper.
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
                    <h3 className="faq__question">Do trades and industrial businesses in Sarnia actually benefit from better websites?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. Most trades businesses in Sarnia are found by word of mouth first, but a weak website
                    loses leads at the validation stage. When someone hears your name and looks you up, the
                    site needs to confirm your credibility immediately.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can you help a Sarnia business rank for searches across Lambton County?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. We can structure service area content to target Petrolia, Forest, Point Edward, and
                    other Lambton communities without creating thin duplicate pages that Google filters out.
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
      <ExitIntentPopup />
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sarniaPageSchema) }}
      />
    </div>
  );
}
