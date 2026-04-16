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
            name: "Is it worth investing in a website for a small market like Leamington?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Often more so than in larger cities. There are fewer well-optimized local competitors, which means a properly built site can rank faster and hold its position longer. The return on investment per lead tends to be stronger in smaller markets.",
            },
          },
          {
            "@type": "Question",
            name: "Can you help an agricultural or greenhouse-related business in Leamington get better online visibility?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Agriculture-adjacent businesses in Leamington are often searchable but poorly represented online. A clear service page, mobile-friendly layout, and accurate local SEO signals can make a significant difference in how often you appear and convert.",
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
                Leamington is known across Ontario as the tomato capital of Canada, and its economy reflects that
                agricultural foundation: a strong greenhouse and produce industry, food processing, and a
                manufacturing base that supports it all. The town also draws seasonal tourism through Point Pelee
                National Park and Lake Erie, which means some local businesses serve a mix of year-round residents
                and visitors. For Leamington businesses, a website needs to handle both audiences well — and do it
                without looking like an afterthought.
              </p>

              <h2>Agriculture-Adjacent Businesses and Online Credibility</h2>
              <p>
                Leamington&apos;s business community includes nurseries, equipment suppliers, food processors,
                trades supporting greenhouse operations, and agricultural services that are often invisible online
                despite doing serious volume. These businesses frequently rely on referrals and relationships, but
                when a new customer searches for them — or compares them to a competitor — the website is the
                deciding factor. A clear, professional site that lists services accurately and loads quickly on
                mobile converts that search into a call.
              </p>

              <h2>Point Pelee Tourism and Seasonal Visibility</h2>
              <p>
                Leamington sees real seasonal traffic because of Point Pelee National Park and the broader Lake
                Erie shoreline. If you run a restaurant, accommodation, recreational service, or retail business
                that benefits from tourist volume, your website should be structured to capture those visitors
                before they find a competitor. That means appearing in local search results, loading fast on
                mobile data, and communicating your offer clearly to someone who&apos;s never heard of you.
              </p>

              <h2>Getting Found in a Smaller Market</h2>
              <p>
                Leamington is a tighter market, which works in your favour. There are fewer businesses in most
                categories actively investing in their websites, so a properly built site tends to stand out
                more quickly. If your site is clearer, faster, and more specific than the alternatives, customers
                searching locally are much more likely to land on your page and reach out.
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
                    <h3 className="faq__question">Is it worth investing in a website for a small market like Leamington?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Often more so than in larger cities. There are fewer well-optimized local competitors, which
                    means a properly built site can rank faster and hold its position longer. The return on
                    investment per lead tends to be stronger in smaller markets.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can you help an agricultural or greenhouse-related business in Leamington get better online visibility?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. Agriculture-adjacent businesses in Leamington are often searchable but poorly represented
                    online. A clear service page, mobile-friendly layout, and accurate local SEO signals can
                    make a significant difference in how often you appear and convert.
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
