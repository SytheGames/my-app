import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Custom Web Design in Chatham-Kent",
  description:
    "Custom web design services in Chatham-Kent focused on conversions, speed, mobile usability, and long-term growth. See real results from 25+ local client projects.",
  alternates: {
    canonical: "/services/web-design",
  },
  openGraph: {
    title: "Web Design in Chatham-Kent",
    description:
      "Custom web design services in Chatham and Southwestern Ontario focused on conversions, speed, and mobile usability.",
    url: "/services/web-design",
    type: "website",
    images: [{ url: "/arcstage.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design in Chatham-Kent",
    description:
      "Custom web design services in Chatham and Southwestern Ontario focused on conversions, speed, and mobile usability.",
    images: ["/arcstage.png"],
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
        "Most custom websites take 6–12 weeks from project start to launch, depending on the number of pages, content complexity, and integration requirements. We provide a detailed timeline during the discovery phase.",
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
      question: "What does web design cost in Chatham-Kent?",
      answer:
        "Website projects typically range from $2,200–$6,500+ depending on page count, features, and integrations. Starter Website packages begin at $2,200; Growth Websites range $3,800–$6,500. See our pricing page for details.",
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
        name: "Starter Website",
        priceCurrency: "CAD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 2200,
          maxPrice: 3500,
          priceCurrency: "CAD",
          unitText: "PROJECT",
        },
      },
      {
        "@type": "Offer",
        name: "Growth Website",
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
      <main className="split-page web-design-service" aria-label="Web design service">
        <SplitPageHero
          eyebrow="SERVICE"
          title="Custom Web Design in Chatham-Kent, Ontario"
          description="We design custom websites that balance visual quality with practical performance. Every build is optimized for mobile devices, clear navigation, and lead-focused user flows."
          imageSrc="/arcstage.png"
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
                tablet, or desktop. Mobile devices now account for 60–70% of web traffic; ignoring mobile is equivalent to
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
                  <strong><Link href="/portfolio/arcstage-growth-rebuild">Arcstage (London, Ontario):</Link></strong> A production
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
                Our pricing reflects the complexity and scope of your project. Most custom website projects land in these ranges
                depending on page count, integrations, and content depth.
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
                      <td>Starter Website</td>
                      <td>$2,200 – $3,500</td>
                      <td>New businesses or simple brochure sites needing a strong first impression with 5 core pages</td>
                    </tr>
                    <tr>
                      <td>Growth Website</td>
                      <td>$3,800 – $6,500</td>
                      <td>Established businesses wanting 6–15 custom pages with conversion focus, service/location SEO content, and integrations</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                For full pricing details,{' '}
                <Link href="/pricing">see our pricing page</Link> or{' '}
                <Link href="/contact">book a free consultation</Link> to discuss your specific project.
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
          copy="Share your goals and we will map a practical website strategy built for conversion and long-term growth."
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
