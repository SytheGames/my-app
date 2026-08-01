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
  title: "Local SEO London",
  description: "Local SEO services for London, Ontario businesses that need stronger Google Maps visibility across a large, multi-neighborhood market.",
  alternates: { canonical: "/locations/local-seo-london" },
  openGraph: {
    title: "Local SEO London",
    description: "Local SEO services for London, Ontario businesses that need stronger Google Maps visibility across a large, multi-neighborhood market.",
    url: "/locations/local-seo-london",
    type: "website",
    images: [{ url: "/images/locations-images/London_Ontario_Skyline_2017_(cropped).jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO London",
    description: "Local SEO services for London, Ontario businesses that need stronger Google Maps visibility across a large, multi-neighborhood market.",
    images: ["/images/locations-images/London_Ontario_Skyline_2017_(cropped).jpg"],
  },
};

export default function LocalSeoLondonPage() {
  const londonPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Local SEO London",
        description: "Local SEO services for London, Ontario businesses that need stronger Google Maps visibility across a large, multi-neighborhood market.",
        url: `${siteUrl}/locations/local-seo-london`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does London need one local SEO strategy or one per neighborhood?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It depends on how you actually operate. A downtown core clinic or professional service and a business built around suburban service-area calls face different search patterns, so we structure Google Business Profile service areas and page content around where your customers really are rather than treating London as a single search zone.",
            },
          },
          {
            "@type": "Question",
            name: "How does the university and hospital presence affect local SEO in London?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Western University and London Health Sciences Centre help drive a larger, more research-heavy population, which tends to produce buyers who compare several options and read reviews closely before contacting a business. Local SEO content needs to hold up to that scrutiny with specific, credible detail, not generic claims.",
            },
          },
          {
            "@type": "Question",
            name: "Can you target searches from nearby areas like Strathroy or St. Thomas along with London itself?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. If those areas are part of your real service area, we can build service-area content and profile settings that capture that regional demand without creating thin duplicate pages that hurt your core London rankings.",
            },
          },
          {
            "@type": "Question",
            name: "What kind of London businesses need local SEO the most?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Professional services, healthcare providers, retail, and home service businesses all compete in a broad, mixed local market in London, and the ones with clear service-area targeting and consistent Google Business Profile activity are the ones that consistently show up in the map pack.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Local SEO London">
        <SplitPageHero
          eyebrow="LOCATION PAGE"
          title="Local SEO London"
          description="Google Maps visibility and service-area strategy for London, Ontario businesses across a large regional market."
          imageSrc="/images/locations-images/London_Ontario_Skyline_2017_(cropped).jpg"
          imageAlt="Local SEO in London, Ontario"
          ctaLabel="Start your local SEO project"
          ctaHref="/contact"
          relatedLinks={[
            { label: "Local SEO Overview", href: "/local-seo" },
            { label: "GBP Management", href: "/google-business-profile-management" },
            { label: "All Locations", href: "/locations" },
          ]}
          breadcrumbs={[{ label: "Locations", href: "/locations" }, { label: "Local SEO London" }]}
        />

        <section className="split-page__section split-page__text" aria-label="Image credit">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>Image credit: Mcalpinestudios. Source: Wikipedia.</p>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                London is the largest regional hub in this part of Southwestern Ontario, anchored by Western
                University, London Health Sciences Centre, and a population large enough to support a broad
                mix of professional services, healthcare providers, and retail all competing for the same local
                search terms. Unlike a smaller single-center market, London is not one search zone — it is a
                collection of distinct neighborhoods and business districts, and local SEO here has to account
                for that.
              </p>

              <h2>Downtown Core vs. Suburban Service Areas</h2>
              <p>
                A downtown London business drawing foot traffic and appointment bookings has a different search
                pattern than a suburban home service company covering a wide delivery or service radius. We
                build Google Business Profile service areas and location content around how your business
                actually operates in London — not a single generic page that ignores the fact that customers in
                Byron, Hyde Park, White Oaks, or the core search differently and expect different proof points.
              </p>

              <h2>Who This Is For</h2>
              <p>
                Local SEO fits London businesses across professional services (legal, accounting, financial),
                healthcare and clinics benefiting from the hospital and university ecosystem, and home service
                or retail operators covering a broad metro service area. What they share is a large, comparison-driven
                customer base that checks reviews and service specifics before reaching out.
              </p>

              <h2>A More Research-Heavy Buyer</h2>
              <p>
                The university and hospital influence in London tends to produce customers who research more
                before contacting a business — comparing a few options, reading reviews, and checking service
                detail rather than calling the first result. Local SEO content in London needs to hold up under
                that scrutiny: specific service pages, real proof, transparent information, and a Google
                Business Profile that reinforces the same story as your website.
              </p>

              <IconFeatureGrid features={localSeoFeatures} />
            </div>
          </div>
        </section>

        <ProofImageBand
          src="/case-studies/Screenshot_20-5-2026_161642_arcstage.ca.jpeg"
          alt="ARCstage website built by Kealey Design"
          caption="ARCstage — a real Kealey Design rebuild focused on clarity and inquiry flow, the same approach we bring to London's multi-neighborhood market."
          href="/portfolio/arcstage-growth-rebuild"
        />

        <section className="faq faq--location" aria-label="London local SEO FAQs">
          <div className="faq__inner">
            <h2 className="faq__title">London Local SEO FAQs</h2>
            <div className="faq__columns faq__columns--single">
              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Does London need one local SEO strategy or one per neighborhood?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    It depends on how you actually operate. A downtown core clinic or professional service and
                    a business built around suburban service-area calls face different search patterns, so we
                    structure Google Business Profile service areas and page content around where your
                    customers really are rather than treating London as a single search zone.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">How does the university and hospital presence affect local SEO in London?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Western University and London Health Sciences Centre help drive a larger, more
                    research-heavy population, which tends to produce buyers who compare several options and
                    read reviews closely before contacting a business. Local SEO content needs to hold up to
                    that scrutiny with specific, credible detail, not generic claims.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can you target searches from nearby areas like Strathroy or St. Thomas along with London itself?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. If those areas are part of your real service area, we can build service-area content
                    and profile settings that capture that regional demand without creating thin duplicate
                    pages that hurt your core London rankings.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">What kind of London businesses need local SEO the most?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Professional services, healthcare providers, retail, and home service businesses all
                    compete in a broad, mixed local market in London, and the ones with clear service-area
                    targeting and consistent Google Business Profile activity are the ones that consistently
                    show up in the map pack.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Ready for stronger local SEO in London?"
          copy="Tell us about your service area and neighborhoods and we will map the fastest path to better Google Maps visibility."
          subject="New London Local SEO Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(londonPageSchema) }}
      />
    </div>
  );
}
