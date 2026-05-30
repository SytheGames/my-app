import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Website Redesign Services in Ontario",
  description:
    "Website redesign for outdated sites: improved branding, faster performance, better user experience, and stronger conversion. Complete or partial site rebuilds for Southwestern Ontario businesses.",
  alternates: {
    canonical: "/services/website-redesign",
  },
  openGraph: {
    title: "Website Redesign in Ontario",
    description:
      "Website redesign services for Ontario businesses needing stronger branding, faster performance, and improved user journeys.",
    url: "/services/website-redesign",
    type: "website",
    images: [{ url: "https://www.kealeydesign.ca/case-studies/Screenshot_20-5-2026_16178_www.daveychiropractic.com.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Redesign in Ontario",
    description:
      "Website redesign services for Ontario businesses needing stronger branding, faster performance, and improved user journeys.",
    images: ["https://www.kealeydesign.ca/case-studies/Screenshot_20-5-2026_16178_www.daveychiropractic.com.jpeg"],
  },
};

export default function WebsiteRedesignServicePage() {
  const faqs = [
    {
      question: "When should I redesign my website?",
      answer:
        "Consider a redesign if your site is outdated, slow, hard to navigate, not mobile-friendly, or failing to generate inquiries. If your website is 3+ years old, slower than 3 seconds to load, or loses traffic to competitors, redesign is likely overdue.",
    },
    {
      question: "Do you redesign existing websites or rebuild from scratch?",
      answer:
        "We can do both. We audit your current site first to preserve what&apos;s working (existing rankings, brand equity, quality content) and rebuild what needs improvement. Partial redesigns are faster and cheaper; full rebuilds offer maximum transformation.",
    },
    {
      question: "Will a redesign hurt my search rankings?",
      answer:
        "If done correctly, no. We preserve your URL structure, maintain or improve page speed, and set up proper redirects so existing rankings stay intact. In fact, most redesigns improve rankings because of better performance and SEO setup.",
    },
    {
      question: "How long does a website redesign take?",
      answer:
        "Most redesigns take 8–14 weeks depending on site size and complexity. We provide a detailed timeline during the discovery phase. Partial redesigns (fewer pages) are faster than full-site rebuilds.",
    },
    {
      question: "What&apos;s included in your redesign process?",
      answer:
        "We start with an audit of your current performance (traffic, rankings, user behavior), then design and rebuild with modern structure, improved content flow, technical cleanup, and conversion optimization. We also provide training on the new site.",
    },
    {
      question: "How much does a website redesign cost?",
      answer:
        "Website redesign projects typically range $3,800–$6,500+ depending on page count, complexity, and whether you&apos;re redesigning the entire site or portions. See our pricing page for details or book a consultation.",
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

  const websiteRedesignServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/website-redesign#service`,
    name: "Website Redesign",
    description:
      "Website redesign services focused on modern branding, faster performance, better user experience, and improved conversion outcomes for established businesses.",
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
    provider: { "@id": `${siteUrl}/#organization` },
    url: `${siteUrl}/services/website-redesign`,
    offers: [
      {
        "@type": "Offer",
        name: "Growth Website Redesign",
        priceCurrency: "CAD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 3800,
          maxPrice: 6500,
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
      <main className="split-page website-redesign-service" aria-label="Website redesign service">
        <SplitPageHero
          eyebrow="SERVICE"
          title="Website Redesign for Outdated Sites"
          description="If your current site is outdated, slow, or hard to manage, we redesign it with modern structure that improves trust, readability, performance, and conversion quality."
          imageSrc="/website-redesign-service.svg"
          imageAlt="Website redesign before and after concept"
          ctaLabel="Book a consultation"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <article className="split-page__prose website-redesign-service__prose">
              <p className="website-redesign-service__meta">
                <strong>Last updated: April 2026</strong> | By <Link href="/about">Matt Kealey, Founder - Kealey Design</Link>
              </p>

              <p>
                A redesign is more than a visual refresh. We rebuild outdated websites with clearer structure, faster load times,
                stronger conversion pathways, and modern SEO foundations. Many businesses delay redesigns thinking a site is still
                working, but slowly losing traffic, leads, and credibility to competitors with fresher designs. A redesign doesn&apos;t
                mean starting from zero—it means preserving what works (existing traffic, rankings, trusted content) while fixing what
                doesn&apos;t.
              </p>

              <h2>Audit-First Redesign Strategy</h2>
              <p>
                Before we touch the design, we audit your current site deeply: traffic patterns from analytics, which pages rank and
                get clicks, user behavior heatmaps, current conversion rates, and customer feedback. We identify what&apos;s working (pages
                that rank well, sections that convert) and what needs fixing (slow pages, confusing navigation, weak calls-to-action).
              </p>
              <p>
                This audit prevents the common redesign pitfall of rebuilding everything and accidentally losing rankings or traffic on
                pages that were already performing. Instead, we preserve the good and rebuild only what needs improvement.
              </p>

              <h2>Improved UX and Content Flow</h2>
              <p>
                Outdated websites often suffer from unclear value propositions, scattered calls-to-action, and confusing page hierarchies.
                We reorganize your content structure, messaging placement, and section flow so visitors understand your offer quickly and
                move toward contact, quote, or purchase actions with less friction. This includes clearer navigation, simplified forms,
                prominent trust signals (testimonials, credentials), and obvious next steps.
              </p>
              <p>
                We also improve readability through modern typography, better spacing, and consistent design patterns. These changes are
                subtle but compound—lower bounce rates, more form submissions, and higher engagement metrics.
              </p>

              <h2>Modern Performance and SEO Baseline</h2>
              <p>
                Every redesign includes technical cleanup: faster image loading, code optimization, modern hosting or infrastructure
                upgrades, and mobile-first responsive design. We also audit and improve on-page SEO (title tags, meta descriptions,
                heading hierarchy, structured data) so your site has a strong SEO foundation from day one. Many outdated sites have technical
                debt that bleeds rankings; a performance-focused redesign often recovers lost search visibility alongside new improvements.
              </p>

              <h2>Preserving Your Search Rankings</h2>
              <p>
                A key concern with any redesign is search ranking impact. We protect your SEO by keeping URL structures intact, setting up
                proper 301 redirects for any page changes, maintaining or improving page speed, and preserving the quality and depth of your
                existing content. In most cases, redesigns improve rankings because of technical improvements and better overall site structure.
              </p>

              <h2>Website Redesign Pricing</h2>
              <p>
                Redesign projects typically range from $3,800–$6,500+ depending on site size, complexity, and how much of the existing site
                you want to keep versus rebuild. A partial redesign of key pages (homepage, service pages) is faster and less expensive than
                a full-site rebuild.
              </p>

              <div style={{ overflowX: 'auto', marginTop: '0.8rem', marginBottom: '0.8rem' }}>
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>Package</th>
                      <th>Investment Range</th>
                      <th>Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Growth Website Redesign</td>
                      <td>$3,800 – $6,500</td>
                      <td>6–15 page sites with modern design, improved UX, technical cleanup, and SEO foundation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                For full pricing and to discuss your redesign scope,{' '}
                <Link href="/pricing">see our pricing page</Link> or{' '}
                <Link href="/contact">book a free redesign consultation</Link>.
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
          heading="Thinking about a website redesign?"
          copy="Share your current site details, specific pain points, and redesign priorities, and we will outline the highest-impact changes and a realistic timeline."
          subject="New Website Redesign Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteRedesignServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}

