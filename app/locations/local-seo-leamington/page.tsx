import type { Metadata } from "next";
import { FileText, MapPin, Star, TrendingUp } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { ProofImageBand } from "@/components/ProofImageBand";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const localSeoFeatures = [
  {
    Icon: MapPin,
    label: "Google Maps Visibility",
    copy: "Stronger presence in the map pack and local pack for the searches that matter most.",
  },
  {
    Icon: Star,
    label: "Reviews & Reputation",
    copy: "A review system that builds trust signals Google and customers both notice.",
  },
  {
    Icon: FileText,
    label: "Citation Consistency",
    copy: "Accurate, matching business info across the directories that feed local rankings.",
  },
  {
    Icon: TrendingUp,
    label: "Ranking Growth",
    copy: "Ongoing content and profile work that compounds visibility over time.",
  },
];

export const metadata: Metadata = {
  title: "Local SEO Leamington",
  description: "Local SEO services for Leamington businesses that need stronger Google Maps visibility across the greenhouse and tourism seasons.",
  alternates: { canonical: "/locations/local-seo-leamington" },
  openGraph: {
    title: "Local SEO Leamington",
    description: "Local SEO services for Leamington businesses that need stronger Google Maps visibility across the greenhouse and tourism seasons.",
    url: "/locations/local-seo-leamington",
    type: "website",
    images: [{ url: "/images/locations-images/Lake_Erie_Leamington.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Leamington",
    description: "Local SEO services for Leamington businesses that need stronger Google Maps visibility across the greenhouse and tourism seasons.",
    images: ["/images/locations-images/Lake_Erie_Leamington.jpg"],
  },
};

export default function LocalSeoLeamingtonPage() {
  const leamingtonPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Local SEO Leamington",
        description: "Local SEO services for Leamington businesses that need stronger Google Maps visibility across the greenhouse and tourism seasons.",
        url: `${siteUrl}/locations/local-seo-leamington`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is local SEO worth it in a smaller market like Leamington?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Often more so than in a large city. Leamington has fewer businesses per category actively managing their Google Business Profile, so a complete, consistent profile and a handful of genuinely useful service pages tend to win map pack visibility faster and hold it longer than the same effort would in a saturated market.",
            },
          },
          {
            "@type": "Question",
            name: "Can local SEO help a greenhouse or agriculture-adjacent business in Leamington?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Leamington's greenhouse and agricultural suppliers, equipment dealers, and trades supporting that industry are often searchable but poorly represented online. A properly optimized profile and service pages that use real industry terminology can significantly improve how often those businesses appear and convert.",
            },
          },
          {
            "@type": "Question",
            name: "Does Point Pelee tourism traffic change local SEO strategy in Leamington?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, for businesses that benefit from seasonal visitors. Restaurants, accommodations, and recreational services near Point Pelee National Park should structure Google Business Profile content and service pages to capture that seasonal search spike, alongside the steady, local, year-round demand from residents.",
            },
          },
          {
            "@type": "Question",
            name: "What makes Leamington's local search market different from Chatham-Kent's?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "They share similar dynamics — both are tight, lower-competition markets where GBP completeness and citation consistency matter more than in a big city — but Leamington's greenhouse economy and Point Pelee tourism traffic create distinct seasonal and industry-specific search demand that Chatham-Kent's broader mix does not have in the same way.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Local SEO Leamington">
        <SplitPageHero
          eyebrow="LOCATION PAGE"
          title="Local SEO Leamington"
          description="Google Maps visibility and local search strategy for Leamington's greenhouse, agriculture, and tourism-driven economy."
          imageSrc="/images/locations-images/Lake_Erie_Leamington.jpg"
          imageAlt="Local SEO in Leamington"
          ctaLabel="Start your local SEO project"
          ctaHref="/contact"
          relatedLinks={[
            { label: "Local SEO Overview", href: "/local-seo" },
            { label: "GBP Management", href: "/google-business-profile-management" },
            { label: "All Locations", href: "/locations" },
          ]}
          breadcrumbs={[{ label: "Locations", href: "/locations" }, { label: "Local SEO Leamington" }]}
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
                Leamington is known as the Greenhouse Capital of North America, with an economy built around
                greenhouse growing, produce, and food processing, plus real seasonal tourism traffic from
                Point Pelee National Park and the Lake Erie shoreline. It is a tight, low-competition local
                search market similar to Chatham-Kent — few businesses per category are actively investing in
                their Google Business Profile or building real service content, which means the ones that do
                tend to win the map pack and hold it.
              </p>

              <h2>Greenhouse and Agricultural Local SEO</h2>
              <p>
                Leamington&apos;s nurseries, equipment suppliers, food processors, and trades supporting
                greenhouse operations are often significant local businesses that are nearly invisible in
                Google search. A profile and service pages built around real industry terminology — greenhouse
                supplies, agricultural equipment, produce logistics — can capture demand that referral-driven
                businesses have been leaving on the table for years.
              </p>

              <h2>Seasonal Demand from Point Pelee</h2>
              <p>
                Point Pelee National Park and the Lake Erie shoreline bring genuine seasonal search volume for
                restaurants, accommodations, and recreational businesses. Local SEO here should account for
                that seasonal spike in Google Business Profile activity and content, while still building the
                steady, year-round local signals that serve Leamington residents the rest of the year.
              </p>

              <h2>Who This Is For</h2>
              <p>
                Local SEO fits Leamington greenhouse and agriculture-adjacent suppliers, tourism and hospitality
                businesses near Point Pelee, and general trades and local retailers serving a tight-knit
                community. In a market this size, being the business with a complete profile and real service
                pages is often enough to be the one that shows up first.
              </p>

              <IconFeatureGrid features={localSeoFeatures} />
            </div>
          </div>
        </section>

        <ProofImageBand
          src="/case-studies/Screenshot_20-5-2026_16178_www.daveychiropractic.com.jpeg"
          alt="Davey Chiropractic website built by Kealey Design"
          caption="Davey Chiropractic — a real Chatham-Kent clinic rebuild that improved local trust and booking clarity."
          href="/portfolio/davey-chiro-conversion-refresh"
        />

        <section className="faq faq--location" aria-label="Leamington local SEO FAQs">
          <div className="faq__inner">
            <h2 className="faq__title">Leamington Local SEO FAQs</h2>
            <div className="faq__columns faq__columns--single">
              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Is local SEO worth it in a smaller market like Leamington?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Often more so than in a large city. Leamington has fewer businesses per category actively
                    managing their Google Business Profile, so a complete, consistent profile and a handful of
                    genuinely useful service pages tend to win map pack visibility faster and hold it longer
                    than the same effort would in a saturated market.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can local SEO help a greenhouse or agriculture-adjacent business in Leamington?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. Leamington&apos;s greenhouse and agricultural suppliers, equipment dealers, and trades
                    supporting that industry are often searchable but poorly represented online. A properly
                    optimized profile and service pages that use real industry terminology can significantly
                    improve how often those businesses appear and convert.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Does Point Pelee tourism traffic change local SEO strategy in Leamington?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes, for businesses that benefit from seasonal visitors. Restaurants, accommodations, and
                    recreational services near Point Pelee National Park should structure Google Business
                    Profile content and service pages to capture that seasonal search spike, alongside the
                    steady, local, year-round demand from residents.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">What makes Leamington&apos;s local search market different from Chatham-Kent&apos;s?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    They share similar dynamics — both are tight, lower-competition markets where GBP
                    completeness and citation consistency matter more than in a big city — but Leamington&apos;s
                    greenhouse economy and Point Pelee tourism traffic create distinct seasonal and
                    industry-specific search demand that Chatham-Kent&apos;s broader mix does not have in the
                    same way.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Ready for stronger local SEO in Leamington?"
          copy="Tell us about your business and service area and we will map the fastest path to better Google Maps visibility."
          subject="New Leamington Local SEO Inquiry - Kealey Design"
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
