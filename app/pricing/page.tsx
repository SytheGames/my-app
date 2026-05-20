import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const projectPackages = [
  {
    step: "01",
    name: "Launch Package",
    range: "CA$2,500-$4,000",
    rangeLabel: "Starting investment",
    bestFor: "Semi-custom website built on a proven framework for businesses that need a polished, practical launch.",
    outcome: "Launch in about two weeks with the core pages, structure, and SEO basics in place.",
    featured: false,
    includes: [
      "Up to 5 pages",
      "Semi-custom design and development",
      "Basic on-page SEO",
      "Mobile-friendly framework",
      "Two-week delivery window",
    ],
  },
  {
    step: "02",
    name: "Growth Package",
    range: "CA$600-$1,200/month",
    rangeLabel: "Monthly subscription",
    bestFor: "Ongoing local SEO and CRO management for service businesses that want steady improvement after launch.",
    outcome: "Keep visibility, content, profile quality, and conversion performance moving every month with reporting tied to calls, forms, and lead source.",
    includes: [
      "Citation building",
      "Google Business Profile management",
      "Content creation",
      "Conversion-rate optimization support",
      "Monthly SEO, conversion, and ROI report",
    ],
    featured: true,
  },
  {
    step: "03",
    name: "Elite Package",
    range: "Custom proposal",
    rangeLabel: "Full-service engagement",
    bestFor: "Full-service digital growth for businesses ready to invest in a deeper web, SEO, and lead-generation system.",
    outcome: "Initial builds commonly sit in the CA$8,000-$12,000 range, with monthly retainers after launch.",
    featured: false,
    includes: [
      "Custom web design",
      "SEO strategy and implementation",
      "Conversion-rate optimization",
      "Lead-generation funnels",
      "Advanced analytics dashboard with monthly retainers afterward",
    ],
  },
] as const;

const monthlyPlans = [
  {
    name: "Website-Care Plans",
    range: "Care",
    points: [
      "Hosting, updates, backups, and security",
      "Clear scope for predictable monthly delivery",
      "Automated billing for stable ongoing support",
    ],
  },
  {
    name: "SEO/CRO Subscriptions",
    range: "Growth",
    points: [
      "Local SEO execution with rank, map, and inquiry reporting",
      "Conversion improvements informed by GA4 and Search Console data",
      "Ongoing content and landing page refinement tied to lead quality",
    ],
  },
  {
    name: "Add-On Bundles",
    range: "Add-ons",
    points: [
      "Monthly blog post bundles",
      "Social media update bundles",
      "Conversion audits for targeted improvements",
    ],
  },
] as const;

const reportingMetrics = [
  {
    label: "SEO Visibility",
    points: ["Search Console clicks", "Ranking movement", "Google Business Profile views"],
  },
  {
    label: "Conversions",
    points: ["Form submissions", "Phone-click tracking", "Booking or quote requests"],
  },
  {
    label: "Lead Quality",
    points: ["Inquiry source", "Service or location intent", "Qualified vs. low-fit leads"],
  },
  {
    label: "ROI Signals",
    points: ["Cost per lead trends", "Best-performing pages", "Next-month priorities"],
  },
] as const;

export const metadata: Metadata = {
  title: "Website Pricing in Chatham-Kent",
  description:
    "Explore Launch, Growth, and Elite website and digital growth packages for Chatham-Kent businesses.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Website Pricing in Chatham-Kent",
    description:
      "Transparent Launch, Growth, and Elite package ranges for web design, SEO, CRO, and digital growth.",
    url: "/pricing",
    type: "website",
    images: [{ url: "/case-studies/Screenshot_20-5-2026_161642_arcstage.ca.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Pricing in Chatham-Kent",
    description:
      "Transparent Launch, Growth, and Elite package ranges for web design, SEO, CRO, and digital growth.",
    images: ["/case-studies/Screenshot_20-5-2026_161642_arcstage.ca.jpeg"],
  },
};

export default function PricingPage() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kealey Design Pricing",
    description:
      "Transparent package ranges for web design, SEO, CRO, and digital growth services.",
    url: `${siteUrl}/pricing`,
    mainEntity: {
      "@type": "OfferCatalog",
      name: "Kealey Design Service Pricing",
      itemListElement: projectPackages.map((pkg) => ({
        "@type": "Offer",
        name: pkg.name,
        description:
          pkg.name === "Elite Package"
            ? `${pkg.bestFor} ${pkg.outcome}`
            : `${pkg.bestFor} Investment ${pkg.range}.`,
      })),
    },
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Pricing page">
        <section className="split-page__section pricing-page__section" aria-label="Basic hero">
          <div className="pricing-page__inner">
            <h1 className="pricing-page__title">Website Pricing</h1>
            <p className="pricing-page__lead">
              Clear package options for website launches, local SEO, CRO, and full-service digital growth.
            </p>
          </div>
        </section>

        <section className="split-page__section pricing-page__section" aria-label="Project package pricing">
          <div className="pricing-page__inner">
            <p className="pricing-page__eyebrow">PACKAGE RANGES</p>
            <h2 className="pricing-page__title">Choose the Right Growth Path</h2>
            <p className="pricing-page__lead">
              Start with a focused website launch, build consistent monthly momentum, or invest in a
              full-service growth system with custom strategy, analytics, and lead generation.
            </p>
            <p className="pricing-page__note">
              Final scope depends on page count, content needs, competition, integrations, and timeline.
            </p>

            <div className="pricing-page__summary" aria-label="Pricing summary">
              <div>
                <span>Fastest Start</span>
                <strong>Launch</strong>
              </div>
              <div>
                <span>Best for Momentum</span>
                <strong>Growth</strong>
              </div>
              <div>
                <span>Deepest Support</span>
                <strong>Elite</strong>
              </div>
            </div>

            <div className="pricing-page__offer-board">
              {projectPackages.map((pkg) => (
                <article key={pkg.name} className={`pricing-page__offer ${pkg.featured ? "is-featured" : ""}`}>
                  <div className="pricing-page__offer-main">
                    <div className="pricing-page__offer-kicker">
                      <span>{pkg.step}</span>
                      {pkg.featured ? <p className="pricing-page__badge">Most Popular</p> : null}
                    </div>
                    <h3 className="pricing-page__card-title">{pkg.name}</h3>
                    <p className="pricing-page__best-for">{pkg.bestFor}</p>
                    <p className="pricing-page__outcome">{pkg.outcome}</p>
                  </div>
                  <div className="pricing-page__offer-details">
                    <p className="pricing-page__range-label">{pkg.rangeLabel}</p>
                    <p className="pricing-page__price">{pkg.range}</p>
                    <ul className="pricing-page__list">
                      {pkg.includes.map((item) => (
                        <li key={item}>
                          <Check aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/contact?plan=${encodeURIComponent(pkg.name)}`}
                      className="quote-button pricing-page__card-button"
                    >
                      Discuss {pkg.name}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="pricing-page__center-cta">
              <Link href="/contact" className="contact-page__cta">
                Talk Through the Right Package
              </Link>
            </div>
          </div>
        </section>

        <section className="split-page__section pricing-page__section" aria-label="Website care and growth subscriptions">
          <div className="pricing-page__inner">
            <h2 className="pricing-page__title">Recurring Revenue and Add-Ons</h2>
            <p className="pricing-page__lead">
              Website-care plans, SEO/CRO subscriptions, content bundles, and conversion audits create
              clear ongoing value when clients can see what changed, what converted, and what to do next.
            </p>
            <div className="pricing-page__mini-grid">
              {monthlyPlans.map((plan) => (
                <article key={plan.name} className="pricing-page__mini-card">
                  <p className="pricing-page__mini-label">{plan.range}</p>
                  <h3>{plan.name}</h3>
                  <ul className="pricing-page__list">
                    {plan.points.map((point) => (
                      <li key={point}>
                        <Check aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                    className="quote-button pricing-page__card-button"
                  >
                    Start {plan.name}
                  </Link>
                </article>
              ))}
            </div>
            <div className="pricing-page__center-cta pricing-page__center-cta--compact">
              <Link href="/contact" className="contact-page__cta">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section className="split-page__section pricing-page__section" aria-label="Reporting and dashboard metrics">
          <div className="pricing-page__inner">
            <p className="pricing-page__eyebrow">REPORTING</p>
            <h2 className="pricing-page__title">Dashboards That Show What Is Working</h2>
            <p className="pricing-page__lead">
              Monthly growth plans include practical reporting across SEO performance, conversion tracking,
              lead quality, and ROI signals so recurring work is tied to business outcomes instead of activity alone.
            </p>
            <div className="pricing-page__mini-grid">
              {reportingMetrics.map((metric) => (
                <article key={metric.label} className="pricing-page__mini-card">
                  <p className="pricing-page__mini-label">Dashboard</p>
                  <h3>{metric.label}</h3>
                  <ul className="pricing-page__list">
                    {metric.points.map((point) => (
                      <li key={point}>
                        <Check aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="split-page__section pricing-page__section" aria-label="Frequently asked questions about pricing">
          <div className="pricing-page__inner">
            <h2 className="pricing-page__title">Pricing FAQs</h2>
            <div className="pricing-page__faq-list">
              <details className="pricing-page__faq" open>
                <summary>What changes the final project cost?</summary>
                <p>
                  The biggest factors are page count, copywriting needs, integrations, and how much SEO
                  groundwork is needed. We provide a fixed scope quote before build starts.
                </p>
              </details>
              <details className="pricing-page__faq">
                <summary>Do you offer payment schedules?</summary>
                <p>
                  Yes. Most projects are split into milestone payments. This keeps momentum high while
                  spreading investment across planning, design, and launch phases.
                </p>
              </details>
              <details className="pricing-page__faq">
                <summary>Can I start small and expand later?</summary>
                <p>
                  Absolutely. Many clients begin with a focused launch and then grow into additional pages,
                  local SEO campaigns, and conversion improvements over time.
                </p>
              </details>
              <details className="pricing-page__faq">
                <summary>Do you offer financing?</summary>
                <p>
                  Yes. Financing is available for qualifying projects above a minimum threshold. We can
                  review eligibility and payment structure during your discovery call.
                </p>
              </details>
            </div>
            <p className="pricing-page__note">
              Need something custom? <Link href="/contact">Send your goals</Link> and we will map a scope
              and timeline that fits.
            </p>
          </div>
        </section>

        <PageContactSection
          heading="Want a tailored quote for your business?"
          copy="Share your goals, pages, and timeline. We will recommend the most practical package and provide a clear scope."
          subject="New Pricing Page Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
    </div>
  );
}
