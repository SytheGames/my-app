import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Local SEO in Chatham-Kent",
  description:
    "Hire a local SEO agency in Chatham-Kent with transparent pricing ($650-$2,400/mo), Google Business Profile optimization, and conversion-focused local growth.",
  alternates: {
    canonical: "/services/local-seo",
  },
  openGraph: {
    title: "Local SEO in Chatham-Kent",
    description:
      "Hire a local SEO agency in Chatham-Kent with transparent pricing ($650-$2,400/mo), Google Business Profile optimization, and conversion-focused local growth.",
    url: "/services/local-seo",
    type: "website",
    images: [{ url: "/daveychiro.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO in Chatham-Kent",
    description:
      "Hire a local SEO agency in Chatham-Kent with transparent pricing ($650-$2,400/mo), Google Business Profile optimization, and conversion-focused local growth.",
    images: ["/daveychiro.png"],
  },
};

export default function LocalSeoServicePage() {
  const faqs = [
    {
      question: "What does a local SEO agency in Chatham actually do?",
      answer:
        "A local SEO agency improves how often your business appears in Google Maps and local organic search for service-plus-city queries. At Kealey Design, that includes Google Business Profile optimization, citation consistency work, location-focused page strategy, and monthly performance reporting tied to calls and inquiries, not vanity metrics.",
    },
    {
      question: "How much does local SEO cost in Chatham-Kent?",
      answer:
        "Our local SEO service ranges from $650-$950/month for Local SEO Foundation and $1,200-$2,400/month for Growth Retainer. These ranges align with common Canadian small business local SEO pricing bands and are scoped based on competition, service area breadth, and website condition.",
    },
    {
      question: "How long does it take to see results from local SEO?",
      answer:
        "Most businesses see early improvements in profile visibility and map interactions within the first 4-8 weeks. Stronger ranking movement and steadier lead volume usually compound over 3-6 months when Google Business Profile updates, review velocity, and location-page improvements are maintained consistently.",
    },
    {
      question: "What is included in Kealey Design's local SEO service?",
      answer:
        "Deliverables can include profile optimization, category and services alignment, citation audits, local content updates, location/service page expansion, conversion tracking, and monthly action reporting. Scope depends on whether you choose Foundation or Growth and how aggressively you want to expand market coverage.",
    },
    {
      question: "How is Kealey Design different from other SEO agencies?",
      answer:
        "You work directly with Matt Kealey, not a layered account team. We combine local SEO with conversion-focused web strategy, publish clear pricing ranges, and build around Southwestern Ontario buyer intent instead of generic city-swapped templates.",
    },
    {
      question: "Do you work with businesses outside Chatham?",
      answer:
        "Yes. We support businesses across Windsor, London, Sarnia, Leamington, and broader Southwestern Ontario. If you serve multiple cities, we map service-plus-location structure so each market has focused, useful landing coverage.",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: "Kealey Design",
    url: siteUrl,
    telephone: "+1-519-401-1469",
    address: {
      "@type": "PostalAddress",
      streetAddress: "73 Marion Ave",
      addressLocality: "Chatham",
      addressRegion: "ON",
      postalCode: "N7M 5N7",
      addressCountry: "CA",
    },
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
  };

  const localSeoServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/local-seo#service`,
    name: "Local SEO",
    description:
      "Local SEO services for Chatham-Kent and Southwestern Ontario businesses, including Google Business Profile optimization, citation consistency, and location-specific growth strategy.",
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
    provider: { "@id": `${siteUrl}/#organization` },
    url: `${siteUrl}/services/local-seo`,
    offers: [
      {
        "@type": "Offer",
        name: "Local SEO Foundation",
        priceCurrency: "CAD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 650,
          maxPrice: 950,
          priceCurrency: "CAD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Growth Retainer",
        priceCurrency: "CAD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 1200,
          maxPrice: 2400,
          priceCurrency: "CAD",
          unitText: "MONTH",
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const faqColumns = [
    faqs.filter((_, index) => index % 2 === 0),
    faqs.filter((_, index) => index % 2 === 1),
  ];

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page local-seo-service" aria-label="Local SEO service">
        <SplitPageHero
          eyebrow="SERVICE"
          title="Local SEO in Chatham, Ontario"
          description="We help small businesses rank for local searches by improving website relevance, Google Business Profile quality, and location-specific authority signals."
          imageSrc="/daveychiro.png"
          imageAlt="Local SEO map rankings interface"
          ctaLabel="Get local SEO help"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <article className="split-page__prose local-seo-service__prose">
              <p className="local-seo-service__meta">
                <strong>Last updated: April 2026</strong> | By <Link href="/about">Matt Kealey, Founder - Kealey Design</Link>
              </p>

              <p>
                We help service businesses get found in Google Maps and local search with practical,
                conversion-focused SEO execution. Over the last 7 years, we have launched or rebuilt 25+
                websites across Southwestern Ontario with a 98% client satisfaction rate.
              </p>

              <h2>How Local SEO Works at Kealey Design</h2>
              <p>
                Local search behavior is concentrated in a narrow window: when a customer searches for your service
                plus their city ({`"chiropractor near Chatham"` } or {"concrete contractor in London"}), they are signaling
                active buying intent. Google rewards businesses that signal strong local relevance through three main
                factors: <a href="https://support.google.com/business/answer/3039617" rel="noreferrer noopener" target="_blank">Google Business Profile quality</a>,
                citation consistency (NAP data accuracy across directories), and location-specific website authority.
              </p>
              <p>
                Our approach combines technical SEO with conversion-focused website strategy. We don&apos;t chase vanity
                rankings. Instead, we focus on the locations and service types where your business profitably converts
                leads, then optimize aggressively around those high-intent buyer pathways.
              </p>

              <h2>Google Business Profile Optimization</h2>
              <p>
                We optimize your <a href="https://support.google.com/business/topic/4596156" rel="noreferrer noopener" target="_blank">Google Business Profile</a> categories,
                services, descriptions, media, and posting cadence to increase visibility in map and local pack results.
                This includes primary and secondary category alignment (choosing categories that match customer search
                intent, not just generic descriptors), rewriting service descriptions to target actual buyer language,
                uploading geo-tagged photos, and setting up a regular posting schedule that signals fresh activity to
                Google.
              </p>
              <p>
                For a Chatham-based chiropractor client, we restructured their GBP profile to clarify service offerings,
                unified their category selections, and implemented a monthly posting routine. Within 60 days, their profile
                views increased by 40% and inquiries from map searches improved. This pattern holds across industries—businesses
                that keep their GBP current see consistent bump in qualified lead volume.
              </p>

              <h2>City and Service Page Alignment</h2>
              <p>
                We build service-plus-location architecture so each market gets dedicated coverage that ranks and converts.
                This means creating location-specific landing pages ({`"Web Design Windsor" + "Web Design Chatham"`})
                plus service pages that serve multiple locations through structured internal linking. Work includes location
                intent mapping (determining which cities and service combinations your business should prioritize), internal
                linking cleanup, and page flow optimization so visitors move logically from location discovery to conversion.
              </p>
              <p>
                Many local businesses make the mistake of building a single generic service page and hoping it ranks in
                multiple cities. Instead, we build intentional coverage: one strong service page + dedicated location pages
                creates separate ranking opportunities for each market. For a contractor serving Windsor, Chatham, and
                London, this means three location pages plus a core service page—each optimized for different search intent.
                The result: more indexed pages, better crawl efficiency, and higher conversion potential across your service
                areas.
              </p>

              <h2>Citation and Trust Signal Cleanup</h2>
              <p>
                We standardize your business data (name, address, phone) and strengthen consistency signals that influence
                local relevance scoring. This includes NAP consistency audits across business directories and citation sources,
                correction of stale or incorrect business profile listings, and setup of a review response framework so you&apos;re
                actively engaging with customer feedback. According to <a href="https://www.brightlocal.com/learn/local-search-ranking-factors/" rel="noreferrer noopener" target="_blank">BrightLocal&apos;s local search ranking studies</a>,
                citation consistency and review velocity are two of the top factors influencing local pack rankings.
              </p>
              <p>
                Inconsistent NAP data ({`"123 Main St" on your website but "123 Main Street" in a directory`}) creates
                confusion signals that weigh against your rankings. We audit your current citations, flag inconsistencies,
                and coordinate corrections. We also help you respond systematically to reviews—not for self-promotion, but to
                demonstrate engagement and collect feedback that informs your service quality.
              </p>

              <h2>Lead-Focused Reporting</h2>
              <p>
                Reporting ties ranking movement to actual business outcomes: calls, form submissions, and inquiry quality.
                Monthly reports show what changed (rankings, map impressions), what happened as a result (inquiries, conversion
                rate), and what actions come next. You get clear priorities rather than vanity metrics. Most agencies report
                {`"rankings improved"`} or {`"traffic went up"`} without connecting those movements to revenue. We start with revenue
                and work backward: the only rankings that matter are the ones your customers actually use to find you.
              </p>
              <p>
                Each month, we provide clarity on lead quality (not just volume), cost per lead trends, and whether those leads
                are closing. If a market is ranking well but not converting, we flag it. If another market is converting but
                underranking, we reallocate effort. This feedback loop ensures every dollar spent on local SEO contributes to
                actual lead flow and revenue growth.
              </p>

              <div style={{ overflowX: 'auto', marginTop: '0.8rem', marginBottom: '0.8rem' }}>
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>Service Tier</th>
                      <th>Monthly Investment</th>
                      <th>Includes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Local SEO Foundation</td>
                      <td>$650–$950 / month</td>
                      <td>Google Business Profile optimization, citation audits and corrections, monthly content updates, ranking and inquiry reporting</td>
                    </tr>
                    <tr>
                      <td>Growth Retainer</td>
                      <td>$1,200–$2,400 / month</td>
                      <td>Everything in Foundation + location and service page expansion, conversion-rate optimization and split testing, deeper analytics roadmap, lead quality tracking</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                For full pricing details and package options,{' '}
                <Link href="/pricing">see our pricing page</Link> or{' '}
                <Link href="/contact">book a pricing conversation</Link> to discuss your specific needs.
              </p>

              <h2>Frequently Asked Questions</h2>
              <section>
                <div className="faq__columns">
                  {faqColumns.map((column, columnIndex) => (
                    <div key={`faq-column-${columnIndex}`} className="faq__column">
                      {column.map((item) => (
                        <details key={item.question} className="faq__item">
                          <summary className="faq__summary">
                            <span className="faq__question">{item.question}</span>
                            <span className="faq__indicator" aria-hidden="true">
                              +
                            </span>
                          </summary>
                          <p className="faq__answer">{item.answer}</p>
                        </details>
                      ))}
                    </div>
                  ))}
                </div>
              </section>

              <h2>References</h2>
              <section>
                <ul className="local-seo-service__sources">
                  <li>
                    <a href="https://support.google.com/business/answer/3039617" rel="noreferrer noopener" target="_blank">
                      Google Business Profile Help
                    </a>
                  </li>
                  <li>
                    <a href="https://www.brightlocal.com/research/local-consumer-review-survey/" rel="noreferrer noopener" target="_blank">
                      BrightLocal Local Consumer Review Survey
                    </a>
                  </li>
                  <li>
                    <a href="https://www.brightlocal.com/learn/local-search-ranking-factors/" rel="noreferrer noopener" target="_blank">
                      BrightLocal Local Search Ranking Factors
                    </a>
                  </li>
                </ul>
              </section>
            </article>

            <aside className="split-page__prose local-seo-service__aside" aria-label="Service area note">
              <h2>Service Areas</h2>
              <p>
                We support local SEO campaigns in Chatham-Kent, Windsor, London, Sarnia, Leamington, and
                surrounding Southwestern Ontario markets.
              </p>
              <p>
                Need location-specific web support as part of SEO implementation? Visit{" "}
                <Link href="/locations/web-design-chatham"> Web Design Chatham</Link>,
                <Link href="/locations/web-design-windsor"> Web Design Windsor</Link>, or
                <Link href="/locations/web-design-london"> Web Design London</Link>.
              </p>
            </aside>
          </div>
        </section>

        <PageContactSection
          heading="Want to improve local search visibility?"
          copy="Tell us your target cities and services and we will recommend a focused local SEO action plan."
          subject="New Local SEO Service Inquiry - Kealey Design"
        />
      </main>
      <ExitIntentPopup />
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSeoServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
