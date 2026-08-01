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
  title: "Local SEO Chatham",
  description: "Local SEO services for Chatham and Chatham-Kent businesses that need stronger Google Maps visibility, service-area content, and lead tracking.",
  alternates: { canonical: "/locations/local-seo-chatham" },
  openGraph: {
    title: "Local SEO Chatham",
    description: "Local SEO services for Chatham and Chatham-Kent businesses that need stronger Google Maps visibility, service-area content, and lead tracking.",
    url: "/locations/local-seo-chatham",
    type: "website",
    images: [{ url: "/images/locations-images/Chatham_ON_1.JPG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Chatham",
    description: "Local SEO services for Chatham and Chatham-Kent businesses that need stronger Google Maps visibility, service-area content, and lead tracking.",
    images: ["/images/locations-images/Chatham_ON_1.JPG"],
  },
};

export default function LocalSeoChathamPage() {
  const chathamPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Local SEO Chatham",
        description: "Local SEO services for Chatham and Chatham-Kent businesses that need stronger Google Maps visibility, service-area content, and lead tracking.",
        url: `${siteUrl}/locations/local-seo-chatham`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is local SEO worth it for a smaller market like Chatham-Kent?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Often more so than in a big city. Chatham-Kent has fewer businesses actively maintaining their Google Business Profile and building out real service-area content, so a complete, well-optimized profile and a few genuinely useful pages can move you into the map pack faster and hold that position longer.",
            },
          },
          {
            "@type": "Question",
            name: "Can you target searches from Wallaceburg, Tilbury, Blenheim, Ridgetown, and Dresden, not just Chatham?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. If you actually serve those communities, we can build service-area content and Google Business Profile service areas that reflect that honestly, without creating thin duplicate pages that Google filters out.",
            },
          },
          {
            "@type": "Question",
            name: "What Chatham-Kent businesses benefit most from local SEO?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Contractors and trades, agriculture-adjacent suppliers, healthcare clinics, and local retail all do well, mainly because Google Maps visibility is still an open opportunity here rather than a saturated one.",
            },
          },
          {
            "@type": "Question",
            name: "How is local SEO different from a one-time website build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A website build gets your pages in order. Local SEO is the ongoing work of keeping your Google Business Profile active, your citations consistent, your reviews coming in, and your service pages aligned with how Chatham-Kent customers actually search.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Local SEO Chatham">
        <SplitPageHero
          eyebrow="LOCATION PAGE"
          title="Local SEO Chatham"
          description="Google Maps visibility, service-area content, and lead tracking for Chatham and Chatham-Kent businesses."
          imageSrc="/images/locations-images/Chatham_ON_1.JPG"
          imageAlt="Local SEO in Chatham"
          ctaLabel="Start your local SEO project"
          ctaHref="/contact"
          relatedLinks={[
            { label: "Local SEO Overview", href: "/local-seo" },
            { label: "GBP Management", href: "/google-business-profile-management" },
            { label: "All Locations", href: "/locations" },
          ]}
          breadcrumbs={[{ label: "Locations", href: "/locations" }, { label: "Local SEO Chatham" }]}
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
                Chatham is the county seat of Chatham-Kent, and the local search market here is very different
                from a major city. Fewer businesses in most categories are actively managing their Google
                Business Profile or building out real service pages, which means the businesses that do put
                in the work tend to win the map pack and keep that position. Local SEO in Chatham-Kent is less
                about outspending competitors and more about being the business that actually shows up complete,
                consistent, and active.
              </p>

              <h2>A Municipality Made of Several Communities</h2>
              <p>
                Chatham-Kent is not just Chatham proper — it includes Wallaceburg, Tilbury, Blenheim, Ridgetown,
                and Dresden, each with its own local search demand. If your business genuinely serves several of
                these towns, your Google Business Profile service areas and your website should reflect that
                honestly, with content that speaks to real customers in each community rather than a single page
                that only mentions Chatham. Done carelessly, this becomes thin duplicate content. Done well, it
                captures search volume you would otherwise miss.
              </p>

              <h2>Who This Is For</h2>
              <p>
                Local SEO fits well for Chatham-Kent&apos;s agriculture and manufacturing-adjacent trades and
                suppliers, contractors and home service businesses, healthcare clinics, and local retail
                operators who rely on nearby customers finding them on Google rather than through paid ads. If
                your customers are searching &ldquo;near me&rdquo; or &ldquo;in Chatham&rdquo; before they call,
                this is where that decision gets made.
              </p>

              <h2>Where the Fastest Gains Come From</h2>
              <p>
                In a lower-competition market like Chatham-Kent, Google Business Profile completeness, accurate
                categories, consistent citations across directories, and a steady flow of reviews often move the
                needle faster than they would in a saturated city. We start by auditing what is missing or
                inconsistent, then build the profile, page, and citation foundation that lets your business hold
                its map pack position instead of losing it to the next competitor who finally claims their listing.
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

        <section className="faq faq--location" aria-label="Chatham local SEO FAQs">
          <div className="faq__inner">
            <h2 className="faq__title">Chatham Local SEO FAQs</h2>
            <div className="faq__columns faq__columns--single">
              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Is local SEO worth it for a smaller market like Chatham-Kent?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Often more so than in a big city. Chatham-Kent has fewer businesses actively maintaining
                    their Google Business Profile and building out real service-area content, so a complete,
                    well-optimized profile and a few genuinely useful pages can move you into the map pack
                    faster and hold that position longer.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can you target searches from Wallaceburg, Tilbury, Blenheim, Ridgetown, and Dresden, not just Chatham?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. If you actually serve those communities, we can build service-area content and Google
                    Business Profile service areas that reflect that honestly, without creating thin duplicate
                    pages that Google filters out.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">What Chatham-Kent businesses benefit most from local SEO?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Contractors and trades, agriculture-adjacent suppliers, healthcare clinics, and local retail
                    all do well, mainly because Google Maps visibility is still an open opportunity here rather
                    than a saturated one.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">How is local SEO different from a one-time website build?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    A website build gets your pages in order. Local SEO is the ongoing work of keeping your
                    Google Business Profile active, your citations consistent, your reviews coming in, and your
                    service pages aligned with how Chatham-Kent customers actually search.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Ready for stronger local SEO in Chatham?"
          copy="Tell us about your business and service area and we will map the fastest path to better Google Maps visibility."
          subject="New Chatham Local SEO Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chathamPageSchema) }}
      />
    </div>
  );
}
