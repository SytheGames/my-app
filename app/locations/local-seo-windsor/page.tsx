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
  title: "Local SEO Windsor",
  description: "Local SEO services for Windsor businesses competing for Google Maps visibility in one of Southwestern Ontario's most competitive local markets.",
  alternates: { canonical: "/locations/local-seo-windsor" },
  openGraph: {
    title: "Local SEO Windsor",
    description: "Local SEO services for Windsor businesses competing for Google Maps visibility in one of Southwestern Ontario's most competitive local markets.",
    url: "/locations/local-seo-windsor",
    type: "website",
    images: [{ url: "/images/locations-images/Windsor,_Ontario_(aerial_view).jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Windsor",
    description: "Local SEO services for Windsor businesses competing for Google Maps visibility in one of Southwestern Ontario's most competitive local markets.",
    images: ["/images/locations-images/Windsor,_Ontario_(aerial_view).jpg"],
  },
};

export default function LocalSeoWindsorPage() {
  const windsorPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Local SEO Windsor",
        description: "Local SEO services for Windsor businesses competing for Google Maps visibility in one of Southwestern Ontario's most competitive local markets.",
        url: `${siteUrl}/locations/local-seo-windsor`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Why is local SEO harder to win in Windsor than in a smaller Ontario city?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Windsor has significantly more businesses competing per category than a market like Chatham-Kent, so the map pack is more contested. Profile completeness alone usually is not enough — you also need consistent review velocity, deeper citation coverage, and service pages that clearly outrank thinner competitor listings.",
            },
          },
          {
            "@type": "Question",
            name: "Does Windsor's cross-border location affect local SEO?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It can. Some Windsor businesses draw interest from Detroit-area searchers, but your Google Business Profile and local SEO should stay anchored to your real service area so Google keeps treating you as a genuine local result rather than diluting your relevance.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to see local SEO results in a competitive market like Windsor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Early movement in Google Business Profile visibility can show within 4 to 8 weeks, but meaningfully outranking established Windsor competitors in the map pack usually takes sustained review growth, citation work, and content over 3 to 6 months or longer.",
            },
          },
          {
            "@type": "Question",
            name: "What kind of Windsor businesses need the most aggressive local SEO effort?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Categories with a high number of active competitors — trades, auto-adjacent services, clinics, and hospitality — need the most sustained effort, since a complete profile is table stakes and ongoing review and content work is what actually separates the businesses that rank from the ones that do not.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Local SEO Windsor">
        <SplitPageHero
          eyebrow="LOCATION PAGE"
          title="Local SEO Windsor"
          description="Google Maps visibility and local search strategy for Windsor businesses competing in a crowded market."
          imageSrc="/images/locations-images/Windsor,_Ontario_(aerial_view).jpg"
          imageAlt="Local SEO in Windsor"
          ctaLabel="Start your local SEO project"
          ctaHref="/contact"
          relatedLinks={[
            { label: "Local SEO Overview", href: "/local-seo" },
            { label: "GBP Management", href: "/google-business-profile-management" },
            { label: "All Locations", href: "/locations" },
          ]}
          breadcrumbs={[{ label: "Locations", href: "/locations" }, { label: "Local SEO Windsor" }]}
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
                Windsor is Ontario&apos;s southernmost major city, sitting directly across the river from
                Detroit, with an economy shaped by the auto industry, cross-border logistics, and a large
                student population around the University of Windsor. That size and density cut both ways for
                local SEO: there is real search volume to capture, but there are also far more businesses per
                category actively competing for the same map pack spots than you would find in a smaller
                Southwestern Ontario market. Winning here takes more than a completed profile.
              </p>

              <h2>A More Competitive Map Pack</h2>
              <p>
                In Windsor, most established competitors already have a claimed, reasonably complete Google
                Business Profile. That means basic setup rarely wins the map pack on its own. What separates
                the businesses that rank is sustained review velocity, deeper and more consistent citation
                coverage, and service pages built around the exact language Windsor customers search — not
                generic regional copy. We treat Windsor local SEO as an ongoing competitive effort, not a
                one-time cleanup.
              </p>

              <h2>Who This Is For</h2>
              <p>
                Local SEO fits Windsor businesses in trades and home services, auto-adjacent and manufacturing
                supply chains, healthcare clinics, and hospitality — categories with enough search volume and
                competitive density that a disciplined, ongoing strategy pays off. If you are only running a
                light profile touch-up while your competitors are actively collecting reviews and building
                content, you will keep losing ground.
              </p>

              <h2>Serving Local and Cross-Border Demand Without Diluting Relevance</h2>
              <p>
                Some Windsor businesses genuinely serve customers from both sides of the border. Where that is
                real, we can shape service pages and content to speak to both audiences, but your Google
                Business Profile and core local SEO signals stay anchored to your actual Windsor service area.
                Diluting that focus to chase cross-border traffic usually costs you local map pack relevance
                without a reliable payoff.
              </p>

              <IconFeatureGrid features={localSeoFeatures} />
            </div>
          </div>
        </section>

        <ProofImageBand
          src="/case-studies/Screenshot_20-5-2026_161715_www.pebblesgravel.com.jpeg"
          alt="Pebbles Gravel website built by Kealey Design"
          caption="Pebbles Gravel — a real regional Southwestern Ontario project built for local lead flow, the same approach we bring to Windsor's more competitive market."
          href="/portfolio/pebbles-gravel-regional-lead-flow"
        />

        <section className="faq faq--location" aria-label="Windsor local SEO FAQs">
          <div className="faq__inner">
            <h2 className="faq__title">Windsor Local SEO FAQs</h2>
            <div className="faq__columns faq__columns--single">
              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Why is local SEO harder to win in Windsor than in a smaller Ontario city?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Windsor has significantly more businesses competing per category than a market like
                    Chatham-Kent, so the map pack is more contested. Profile completeness alone usually is not
                    enough — you also need consistent review velocity, deeper citation coverage, and service
                    pages that clearly outrank thinner competitor listings.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Does Windsor&apos;s cross-border location affect local SEO?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    It can. Some Windsor businesses draw interest from Detroit-area searchers, but your Google
                    Business Profile and local SEO should stay anchored to your real service area so Google
                    keeps treating you as a genuine local result rather than diluting your relevance.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">How long does it take to see local SEO results in a competitive market like Windsor?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Early movement in Google Business Profile visibility can show within 4 to 8 weeks, but
                    meaningfully outranking established Windsor competitors in the map pack usually takes
                    sustained review growth, citation work, and content over 3 to 6 months or longer.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">What kind of Windsor businesses need the most aggressive local SEO effort?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Categories with a high number of active competitors — trades, auto-adjacent services,
                    clinics, and hospitality — need the most sustained effort, since a complete profile is
                    table stakes and ongoing review and content work is what actually separates the businesses
                    that rank from the ones that do not.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Ready for stronger local SEO in Windsor?"
          copy="Tell us about your business and competitors and we will map the fastest path to better Google Maps visibility."
          subject="New Windsor Local SEO Inquiry - Kealey Design"
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
