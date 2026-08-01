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
  title: "Local SEO Sarnia",
  description: "Local SEO services for Sarnia and Lambton County businesses that need stronger Google Maps visibility, service-area content, and lead tracking.",
  alternates: { canonical: "/locations/local-seo-sarnia" },
  openGraph: {
    title: "Local SEO Sarnia",
    description: "Local SEO services for Sarnia and Lambton County businesses that need stronger Google Maps visibility, service-area content, and lead tracking.",
    url: "/locations/local-seo-sarnia",
    type: "website",
    images: [{ url: "/images/locations-images/Sarnia_skyline.JPG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Sarnia",
    description: "Local SEO services for Sarnia and Lambton County businesses that need stronger Google Maps visibility, service-area content, and lead tracking.",
    images: ["/images/locations-images/Sarnia_skyline.JPG"],
  },
};

export default function LocalSeoSarniaPage() {
  const sarniaPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Local SEO Sarnia",
        description: "Local SEO services for Sarnia and Lambton County businesses that need stronger Google Maps visibility, service-area content, and lead tracking.",
        url: `${siteUrl}/locations/local-seo-sarnia`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do trades and industrial-adjacent businesses in Sarnia actually benefit from local SEO?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, often more than most categories. Sarnia's trades, contractors, and industrial-service businesses are frequently found first by word of mouth or reputation around Chemical Valley, but a weak or incomplete Google Business Profile loses that lead at the validation step, right when a prospect looks the business up to confirm it's legitimate.",
            },
          },
          {
            "@type": "Question",
            name: "Can you target searches across Lambton County, not just Sarnia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We can structure service-area content and Google Business Profile settings to reach Petrolia, Forest, Point Edward, and other Lambton communities you genuinely serve, without creating thin duplicate pages that Google filters out of the map pack.",
            },
          },
          {
            "@type": "Question",
            name: "How competitive is local SEO in Sarnia compared to a bigger city?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sarnia sits in the middle — more businesses actively compete here than in a smaller market like Chatham-Kent, but it is far less saturated than Windsor or London. A well-optimized, consistently maintained profile combined with real service-area content is usually enough to win and hold map pack positions.",
            },
          },
          {
            "@type": "Question",
            name: "Does Sarnia's petrochemical and industrial economy change how local SEO should be approached?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It shapes which services and terms matter. Businesses that support Chemical Valley operations, refineries, and the broader industrial base often search using industry-specific terminology alongside standard local terms, so service pages need to reflect both the trade language and the everyday customer search phrasing.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Local SEO Sarnia">
        <SplitPageHero
          eyebrow="LOCATION PAGE"
          title="Local SEO Sarnia"
          description="Google Maps visibility and service-area SEO for Sarnia and Lambton County trades, contractors, and service businesses."
          imageSrc="/images/locations-images/Sarnia_skyline.JPG"
          imageAlt="Local SEO in Sarnia"
          ctaLabel="Start your local SEO project"
          ctaHref="/contact"
          relatedLinks={[
            { label: "Local SEO Overview", href: "/local-seo" },
            { label: "GBP Management", href: "/google-business-profile-management" },
            { label: "All Locations", href: "/locations" },
          ]}
          breadcrumbs={[{ label: "Locations", href: "/locations" }, { label: "Local SEO Sarnia" }]}
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
                Sarnia is the seat of Lambton County, sitting on the St. Clair River across from Port Huron,
                Michigan, with an economy built heavily around the petrochemical and refining operations
                known locally as Chemical Valley. That industrial base supports a large ecosystem of trades,
                contractors, and industrial-service businesses, which makes Sarnia a strong local SEO fit — a
                mid-size, moderately competitive market where a well-run Google Business Profile and clear
                service pages can win real map pack visibility without the saturation of a bigger city.
              </p>

              <h2>Trades and Industrial-Adjacent Local SEO</h2>
              <p>
                Many Sarnia trades and industrial-service businesses win work through reputation and referral
                first, then get looked up on Google before a customer commits. That lookup moment is where
                local SEO pays off — a complete profile, accurate categories, recent reviews, and a service
                page that speaks the customer&apos;s language confirm the trust that word of mouth already
                started building. A thin or outdated profile loses that lead right at the finish line.
              </p>

              <h2>Who This Is For</h2>
              <p>
                Local SEO fits Sarnia contractors and home service trades, businesses supporting industrial and
                refinery-adjacent operations, and mid-size service companies covering Lambton County. These
                businesses typically have real search demand but incomplete or inconsistent online signals,
                which means the fastest wins usually come from profile cleanup, citation consistency, and
                service-specific content rather than a full rebuild.
              </p>

              <h2>Covering Lambton County Search Demand</h2>
              <p>
                Sarnia is the anchor, but Lambton County includes Petrolia, Forest, Point Edward, and other
                communities that generate their own local search volume. If your business genuinely serves
                those areas, we build service-area content and Google Business Profile settings that reflect
                that honestly, capturing county-wide demand instead of leaving it for a competitor to claim.
              </p>

              <IconFeatureGrid features={localSeoFeatures} />
            </div>
          </div>
        </section>

        <ProofImageBand
          src="/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg"
          alt="Enhanced Concrete website built by Kealey Design"
          caption="Enhanced Concrete — a real Chatham-Kent trades business built for local search demand, the same approach we bring to Sarnia's trades and industrial businesses."
          href="/portfolio/enhanced-concrete-local-seo"
        />

        <section className="faq faq--location" aria-label="Sarnia local SEO FAQs">
          <div className="faq__inner">
            <h2 className="faq__title">Sarnia Local SEO FAQs</h2>
            <div className="faq__columns faq__columns--single">
              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Do trades and industrial-adjacent businesses in Sarnia actually benefit from local SEO?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes, often more than most categories. Sarnia&apos;s trades, contractors, and
                    industrial-service businesses are frequently found first by word of mouth or reputation
                    around Chemical Valley, but a weak or incomplete Google Business Profile loses that lead
                    at the validation step, right when a prospect looks the business up to confirm it&apos;s
                    legitimate.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can you target searches across Lambton County, not just Sarnia?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. We can structure service-area content and Google Business Profile settings to reach
                    Petrolia, Forest, Point Edward, and other Lambton communities you genuinely serve, without
                    creating thin duplicate pages that Google filters out of the map pack.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">How competitive is local SEO in Sarnia compared to a bigger city?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Sarnia sits in the middle — more businesses actively compete here than in a smaller market
                    like Chatham-Kent, but it is far less saturated than Windsor or London. A well-optimized,
                    consistently maintained profile combined with real service-area content is usually enough
                    to win and hold map pack positions.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Does Sarnia&apos;s petrochemical and industrial economy change how local SEO should be approached?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    It shapes which services and terms matter. Businesses that support Chemical Valley
                    operations, refineries, and the broader industrial base often search using
                    industry-specific terminology alongside standard local terms, so service pages need to
                    reflect both the trade language and the everyday customer search phrasing.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Ready for stronger local SEO in Sarnia?"
          copy="Tell us about your business and service area and we will map the fastest path to better Google Maps visibility."
          subject="New Sarnia Local SEO Inquiry - Kealey Design"
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
