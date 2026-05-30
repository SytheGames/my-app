import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Chatham Small Business Website Design",
  description:
    "Chatham small-business website design for service companies that need clearer messaging, stronger local SEO foundations, and better lead conversion.",
  alternates: {
    canonical: "/services/web-design",
  },
  openGraph: {
    title: "Chatham Small Business Website Design",
    description:
      "Custom web design services in Chatham and Southwestern Ontario focused on conversions, speed, and mobile usability.",
    url: "/services/web-design",
    type: "website",
    images: [{ url: "https://www.kealeydesign.ca/case-studies/Screenshot_20-5-2026_161642_arcstage.ca.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatham Small Business Website Design",
    description:
      "Custom web design services in Chatham and Southwestern Ontario focused on conversions, speed, and mobile usability.",
    images: ["https://www.kealeydesign.ca/case-studies/Screenshot_20-5-2026_161642_arcstage.ca.jpeg"],
  },
};

export default function WebDesignServicePage() {
  const faqs = [
    {
      question: "What makes a good website for a service business?",
      answer:
        "A strong service website clearly communicates what you do, builds trust through credentials and client proof points, and makes it obvious how visitors should take the next step (call, form, quote). Speed, mobile performance, and clear navigation matter equally to design quality.",
    },
    {
      question: "How long does a custom web design project take?",
      answer:
        "Most custom websites take 6-12 weeks from project start to launch, depending on the number of pages, content complexity, and integration requirements. Launch Package projects can move faster when content and approvals are ready.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes. We audit your current site first to identify what&apos;s working and what needs improvement, then rebuild with modern design, better performance, and conversion-focused structure. See our /services/website-redesign page for details.",
    },
    {
      question: "What CMS or platform do you use?",
      answer:
        "We primarily build with Next.js and React for custom websites that need performance, SEO, and scalability. For simpler content-managed sites, we can also build on other platforms based on your long-term needs.",
    },
    {
      question: "Do you provide training and ongoing support?",
      answer:
        "Yes. Every project includes training on content updates and basic management. We also offer optional ongoing support for hosting, performance monitoring, and updates.",
    },
    {
      question: "Do you set up analytics and conversion tracking?",
      answer:
        "Yes. Website builds can include GA4, Search Console, form submission tracking, phone-click tracking, and a simple reporting baseline so future SEO and CRO decisions are based on real visitor and lead data.",
    },
    {
      question: "What does web design cost in Chatham-Kent?",
      answer:
        "Launch Package websites typically start around CA$2,500-$4,000. Larger custom growth builds are scoped by proposal, especially when SEO, CRO, lead-generation funnels, and analytics are included. See our pricing page for the current package structure.",
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

  const webDesignServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/web-design#service`,
    name: "Web Design",
    description:
      "Custom web design services focused on conversions, mobile usability, and long-term growth for service businesses across Chatham-Kent and Southwestern Ontario.",
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
    provider: { "@id": `${siteUrl}/#organization` },
    url: `${siteUrl}/services/web-design`,
    offers: [
      {
        "@type": "Offer",
        name: "Launch Package",
        priceCurrency: "CAD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 2500,
          maxPrice: 4000,
          priceCurrency: "CAD",
          unitText: "PROJECT",
        },
      },
      {
        "@type": "Offer",
        name: "Elite Package",
        priceCurrency: "CAD",
        description:
          "Custom proposal for full-service digital growth, including custom web design, SEO, CRO, lead-generation funnels, and advanced analytics.",
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
      <main className="split-page web-design-service" aria-label="Web design service">
        <SplitPageHero
          eyebrow="SERVICE"
          title="Custom Web Design in Chatham-Kent, Ontario"
          description="Chatham small-business website design that balances visual quality with practical performance. Every build is optimized for mobile devices, clear navigation, and lead-focused user flows."
          imageSrc="/web-design-service.svg"
          imageAlt="Web design showcase"
          ctaLabel="Start your project"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <article className="split-page__prose web-design-service__prose">
              <p className="web-design-service__meta">
                <strong>Last updated: April 2026</strong> | By <Link href="/about">Matt Kealey, Founder - Kealey Design</Link>
              </p>

              <p>
                Based in Chatham-Kent, our web design approach combines modern layouts, clear messaging, and conversion-focused
                structure that helps visitors understand your offer quickly and take action. Over 7 years, we&apos;ve designed and
                launched 25+ custom websites for service businesses, e-commerce brands, and local organizations across Southwestern
                Ontario with a 98% client satisfaction rate.
              </p>

              <h2>What Makes an Effective Website for Your Business</h2>
              <p>
                Most businesses invest in web design expecting it to look nice. But a high-performing website does three things
                simultaneously: it builds credibility through clear messaging and proof points, it guides visitors toward action
                (call, form, purchase), and it performs smoothly across desktop, tablet, and mobile devices. Poor mobile experience
                is one of the top reasons visitors leave. Clear conversion paths reduce friction. Speed improvements compound over
                time through better search rankings and lower bounce rates.
              </p>
              <p>
                We design with all three priorities in mind from the start, rather than treating performance and mobile as
                afterthoughts.
              </p>

              <h2>Mobile-Ready, Responsive Website Design</h2>
              <p>
                Every page is designed and tested to perform smoothly across all devices. We build responsive systems that keep
                your content readable, navigation clear, and calls-to-action easy to use whether someone visits from a phone,
                tablet, or desktop. Mobile devices now account for 60-70% of web traffic; ignoring mobile is equivalent to
                abandoning most of your audience.
              </p>
              <p>
                Our approach prioritizes mobile-first structure: we design for the smallest screens first, then enhance the
                experience for larger viewports. This ensures every visitor gets a practical, fast experience regardless of their
                device.
              </p>

              <h2>Conversion-Focused Page Structure and User Flow</h2>
              <p>
                Website visitors follow predictable patterns: they land, scan for whether you&apos;re relevant, then either leave
                or dig deeper. We design page hierarchy, messaging placement, and conversion points around this behavior. Each
                page section should answer a question, build confidence, or move the visitor closer to taking action. Weak call-to-action
                placement, unclear value propositions, and confusing navigation are silent lead killers.
              </p>
              <p>
                We map user journeys during design so that the path from &ldquo;landing&rdquo; to &ldquo;contacting you&rdquo; is
                obvious, intuitive, and friction-free.
              </p>

              <h2>Analytics, Conversion Tracking, and Reporting</h2>
              <p>
                A new website should launch with the measurement layer already in place. We can configure GA4,
                Google Search Console, form submission tracking, phone-click tracking, and key conversion events so
                you can see which pages, channels, and calls-to-action are generating leads after launch.
              </p>
              <p>
                For ongoing growth plans, that data becomes a monthly reporting dashboard covering SEO visibility,
                conversion rate, lead source, inquiry quality, and practical next steps. This makes recurring SEO and
                CRO work easier to evaluate because improvements are tied to outcomes, not assumptions.
              </p>

              <h2>Content Management Training</h2>
              <p>
                Your website should evolve with your business. We deliver manageable, modern content management systems and
                provide one-on-one training so your team can confidently update pages, publish new content, and manage imagery
                over time. The worst outcome is a beautiful website that gets outdated because your team can&apos;t maintain it.
              </p>

              <h2>Results from Real Web Design Projects</h2>
              <p>
                Our custom website work has driven measurable outcomes for clients across Southwestern Ontario. Here are recent
                examples:
              </p>
              <ul>
                <li>
                  <strong><Link href="/portfolio/arcstage-growth-rebuild">ARCstage (London, Ontario):</Link></strong> A production
                  company with an outdated site and poor lead flow. We redesigned their website with a portfolio showcase, clearer
                  service structure, and conversion-focused contact paths. Result: 45% increase in qualified inquiries, faster
                  project booking cycle.
                </li>
                <li>
                  <strong><Link href="/portfolio/one-hundred-king-brand-positioning">One Hundred King (Chatham):</Link></strong> A
                  real estate brand needing a modern, mobile-first presence. We built a custom site with property showcase, agent
                  profiles, and lead capture forms. Result: 60% increase in lead volume, improved agent branding visibility.
                </li>
                <li>
                  <strong><Link href="/portfolio/r3-restomod-showcase-to-sales">R3 Restomod (Southwestern Ontario):</Link></strong> A
                  specialty automotive business requiring a portfolio site with strong brand presence. We custom-designed a
                  showcase site with project galleries, team profiles, and conversion-focused layout. Result: 35% uplift in
                  qualified project inquiries.
                </li>
              </ul>

              <h2>Website Design Pricing in Chatham-Kent</h2>
              <p>
                Our pricing reflects the complexity and scope of your project. The current package structure is designed around
                a focused launch option, ongoing growth support, and deeper custom engagements for businesses ready to invest in
                web, SEO, CRO, and lead-generation systems together.
              </p>

              <div style={{ overflowX: 'auto', marginTop: '0.8rem', marginBottom: '0.8rem' }}>
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>Package</th>
                      <th>Investment Range</th>
                      <th>Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Launch Package</td>
                      <td>CA$2,500-$4,000</td>
                      <td>Semi-custom website on a proven framework with up to 5 pages, basic on-page SEO, and a two-week delivery window</td>
                    </tr>
                    <tr>
                      <td>Elite Package</td>
                      <td>Custom proposal</td>
                      <td>Full-service digital growth with custom web design, SEO, CRO, lead-generation funnels, analytics dashboards, and monthly retainers after launch</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                For full pricing details,{' '}
                <Link href="/pricing">see our pricing page</Link> or{' '}
                <Link href="/contact">request a conversion audit</Link> to discuss your specific project.
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
          heading="Ready to plan your web design project?"
          copy="Share your goals and we will map a practical website strategy built for conversion, analytics visibility, and long-term growth."
          subject="New Web Design Service Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDesignServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
