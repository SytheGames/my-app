import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Ecommerce Website Development in Ontario",
  description:
    "Custom ecommerce website development focused on product discovery, checkout UX, and conversion performance. Scalable storefronts for product brands across Ontario.",
  alternates: {
    canonical: "/ecommerce-websites",
  },
  openGraph: {
    title: "Ecommerce Websites in Ontario",
    description:
      "Ecommerce website development for Ontario businesses focused on product discovery, checkout UX, and conversion performance.",
    url: "/ecommerce-websites",
    type: "website",
    images: [{ url: "https://www.kealeydesign.ca/website-mockup.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Websites in Ontario",
    description:
      "Ecommerce website development for Ontario businesses focused on product discovery, checkout UX, and conversion performance.",
    images: ["https://www.kealeydesign.ca/website-mockup.png"],
  },
};

export default function EcommerceWebsitesServicePage() {
  const faqs = [
    {
      question: "What makes a successful ecommerce website?",
      answer:
        "A successful store makes it easy to find products, builds trust through clear descriptions and reviews, streamlines checkout, and performs fast on mobile. Ecommerce conversion depends on checkout friction reduction, product page clarity, and trust signals.",
    },
    {
      question: "How long does it take to build an ecommerce site?",
      answer:
        "Most ecommerce projects take 10–16 weeks depending on product catalog size, feature complexity, and payment integrations. We provide a detailed timeline and milestone schedule during discovery.",
    },
    {
      question: "What platforms do you build on?",
      answer:
        "We primarily build custom ecommerce solutions using modern web frameworks that prioritize speed and conversion. We also work with Shopify, WooCommerce, and other platforms based on your needs and scale.",
    },
    {
      question: "Can you migrate my existing store?",
      answer:
        "Yes. We audit your current store, plan product data migration, preserve existing reviews and ratings where possible, and handle the technical cutover. Migration planning prevents downtime and lost SEO value.",
    },
    {
      question: "Do you optimize for conversions after launch?",
      answer:
        "Yes. We track key metrics (cart abandonment, conversion rate, average order value) and recommend ongoing optimizations like checkout flow changes, product page improvements, and promotional strategies.",
    },
    {
      question: "What does ecommerce development cost?",
      answer:
        "Ecommerce builds typically range $5,500–$12,000+ depending on catalog size, integrations (payment, shipping, CRM), and custom features. See our pricing page for details or book a consultation.",
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
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario", "Ontario"],
  };

  const ecommerceServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/ecommerce-websites#service`,
    name: "Ecommerce Website Development",
    description:
      "Custom ecommerce website development focused on product discovery, checkout UX, conversion performance, and scalable storefront architecture.",
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario", "Ontario"],
    provider: { "@id": `${siteUrl}/#organization` },
    url: `${siteUrl}/ecommerce-websites`,
    offers: [
      {
        "@type": "Offer",
        name: "Ecommerce Build",
        priceCurrency: "CAD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 5500,
          maxPrice: 12000,
          priceCurrency: "CAD",
          unitText: "PROJECT",
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
      <main className="split-page ecommerce-service" aria-label="Ecommerce websites service">
        <SplitPageHero
          eyebrow="SERVICE"
          title="Ecommerce Website Development for Ontario"
          description="We build ecommerce storefronts that make buying easy, from category browsing to checkout. Focus on smoother UX, stronger product pages, and measurable conversion outcomes."
          imageSrc="/ecommerce-service.svg"
          imageAlt="Ecommerce storefront concept"
          ctaLabel="Discuss your store"
          ctaHref="/contact"
          breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Ecommerce Websites" }]}
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <article className="split-page__prose ecommerce-service__prose">
              <p className="ecommerce-service__meta">
                <strong>Last updated: April 2026</strong> | By <Link href="/about">Matt Kealey, Founder - Kealey Design</Link>
              </p>

              <p>
                Ecommerce success depends on a storefront that is simple to browse, easy to trust, and seamless to buy from across
                all devices—especially mobile. Over 7 years, we&apos;ve built custom ecommerce sites for product brands across Ontario with
                a focus on checkout conversion, product discovery, and long-term scalability. A well-architected store reduces cart
                abandonment, increases average order value, and makes future expansion straightforward.
              </p>

              <h2>Store Architecture and Product Discovery</h2>
              <p>
                How customers find products is as important as the products themselves. We organize your catalog with intuitive category
                hierarchies, logical collection structures, and smart filtering that help visitors navigate toward purchase decisions
                naturally. This includes category page optimization (clear descriptions, image hierarchies), collection routing (popular
                items, new arrivals, seasonal bundles), and search functionality that anticipates customer intent.
              </p>
              <p>
                Strategic store structure also improves search ranking potential. Well-organized product categories and clear internal
                linking patterns signal relevance to search engines, which amplifies organic discovery alongside paid and direct traffic.
              </p>

              <h2>Conversion-Focused Product Pages and Checkout UX</h2>
              <p>
                Product pages are your most important conversion tool: they&apos;re where the buying decision lives or dies. We design product
                pages with clear, scannable layouts that present images, descriptions, pricing, and reviews in a hierarchy that builds
                confidence. Common friction points include unclear shipping costs, surprise fees at checkout, and payment option limits.
                We streamline checkout to reduce these barriers, testing for optimal field count, progress visibility, and payment method diversity.
              </p>
              <p>
                Even small improvements to checkout flow compound significantly. A 1% conversion rate improvement on a 10,000-visitor month
                translates to 100 additional purchases. That&apos;s why we obsess over checkout performance.
              </p>

              <h2>Performance Optimization and Ongoing Revenue Impact</h2>
              <p>
                Page speed directly impacts conversion: a 1-second delay can reduce conversion rates by 7%. We build ecommerce sites with
                fast image loading, optimized database queries, and efficient payment processing. We also set up analytics tracking for
                revenue metrics (average order value, cart abandonment rate, customer lifetime value) so you can measure performance
                throughout the year.
              </p>
              <p>
                After launch, we establish a performance roadmap covering seasonal campaigns, product recommendations, and conversion
                testing priorities so your store continuously improves.
              </p>

              <h2>Ecommerce Development Investment</h2>
              <p>
                Ecommerce projects typically range from $5,500–$12,000+ depending on catalog size, feature complexity, and integrations
                (payment processing, shipping APIs, inventory management, CRM). Custom ecommerce builds provide better long-term control
                and scalability compared to template-based platforms.
              </p>

              <div style={{ overflowX: 'auto', marginTop: '0.8rem', marginBottom: '0.8rem' }}>
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>Package</th>
                      <th>Investment Range</th>
                      <th>Includes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ecommerce Build</td>
                      <td>$5,500 – $12,000+</td>
                      <td>Store architecture, product catalog setup, checkout UX, payment/shipping/tax integrations, analytics tracking</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                For full details,{' '}
                <Link href="/pricing">see our pricing page</Link> or{' '}
                <Link href="/contact">book a consultation</Link> to discuss catalog size and feature requirements.
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
            </article>
          </div>
        </section>

        <PageContactSection
          heading="Planning a new ecommerce website?"
          copy="Share your store goals, catalog size, and current platform, and we will propose a conversion-focused build approach."
          subject="New Ecommerce Service Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
