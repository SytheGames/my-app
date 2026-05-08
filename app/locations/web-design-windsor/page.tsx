import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Web Design Windsor",
  description: "Web design services in Windsor built for competitive local markets and measurable lead growth.",
  alternates: { canonical: "/locations/web-design-windsor" },
  openGraph: {
    title: "Web Design Windsor",
    description: "Web design services in Windsor built for competitive local markets and measurable lead growth.",
    url: "/locations/web-design-windsor",
    type: "website",
    images: [{ url: "/images/locations-images/Windsor,_Ontario_(aerial_view).jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Windsor",
    description: "Web design services in Windsor built for competitive local markets and measurable lead growth.",
    images: ["/images/locations-images/Windsor,_Ontario_(aerial_view).jpg"],
  },
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
            name: "Why do Windsor businesses need a more competitive website than businesses in smaller cities?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Windsor has more businesses competing for the same local customers, which means a basic website often is not enough to stand out. Clear service pages, consistent reviews, and a well-maintained Google Business Profile are the main things that separate businesses that get found from those that do not.",
            },
          },
          {
            "@type": "Question",
            name: "Do you build websites for Windsor companies that serve both local and cross-border customers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Where relevant, we can structure content and service language to speak to both a Windsor audience and US-based visitors without diluting your local SEO signal.",
            },
          },
          {
            "@type": "Question",
            name: "My Windsor business already has a website - is a rebuild worth it?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Often yes, but it depends on what is holding you back. We look at conversion rate, page speed, mobile usability, and content clarity before recommending a full rebuild. Sometimes targeted improvements on key pages deliver the fastest return.",
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
                Windsor is one of the larger cities in southwestern Ontario, with a business community that spans
                automotive and manufacturing supply chains, trades, healthcare, hospitality, and professional services.
                Customers here tend to do more research before picking a provider — they&apos;ll check your website,
                read your reviews, and compare you to a few others before reaching out. A clear, well-built website
                makes that comparison easy to win.
              </p>

              <h2>Getting Found by Windsor Customers</h2>
              <p>
                When someone in Windsor searches for your service, the businesses that show up and get clicked are
                the ones with specific, credible pages — not generic placeholders. A site that clearly lists what
                you do, where you serve, and why customers choose you gives Google the right signals and gives
                potential customers a reason to call you instead of the next result.
              </p>

              <h2>Dual Audiences: Local and Cross-Border Visibility</h2>
              <p>
                Windsor&apos;s proximity to Detroit means some businesses serve customers from both sides of the
                border. Whether your primary audience is local Windsor residents, Essex County businesses, or visitors
                and clients from Michigan, your site needs content and structure that speaks to the right people at the
                right moment. We can help shape page copy and service language around your actual audience mix rather
                than generic regional boilerplate.
              </p>

              <h2>A Stronger Online Presence for Windsor&apos;s Service Economy</h2>
              <p>
                Windsor&apos;s service sector — trades, health clinics, legal offices, accounting firms, restaurants,
                and retail — often has the most to gain from a well-structured website. These businesses rely on
                local trust and local search visibility more than any paid advertising budget. A properly built website
                with accurate service pages, real reviews, and a sensible Google Business Profile creates a compound
                return over time that one-off ads simply cannot. We focus on that kind of durable online presence.
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
                    <h3 className="faq__question">Why do Windsor businesses need a more competitive website than businesses in smaller cities?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Windsor has more businesses competing for the same local customers, which means a basic website
                    often isn&apos;t enough to stand out. Clear service pages, consistent reviews, and a
                    well-maintained Google Business Profile are the main things that separate businesses that
                    get found from those that don&apos;t.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Do you build websites for Windsor companies that serve both local and cross-border customers?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. Where relevant, we can structure content and service language to speak to both a Windsor
                    audience and US-based visitors without diluting your local SEO signal.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">My Windsor business already has a website — is a rebuild worth it?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Often yes, but it depends on what&apos;s holding you back. We look at conversion rate, page
                    speed, mobile usability, and content clarity before recommending a full rebuild. Sometimes
                    targeted improvements on key pages deliver the fastest return.
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
      <ExitIntentPopup />
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(windsorPageSchema) }}
      />
    </div>
  );
}
