import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const projectPackages = [
  {
    name: "Starter Website",
    range: "$2,200 - $3,500",
    bestFor: "New businesses or simple brochure sites that need a strong first impression.",
    featured: false,
    includes: [
      "Up to 5 core pages",
      "Mobile-first responsive design",
      "Basic on-page SEO setup",
      "Contact form and conversion tracking",
      "Training for edits and updates",
    ],
  },
  {
    name: "Growth Website",
    range: "$3,800 - $6,500",
    bestFor: "Established service businesses that want more leads and stronger conversion performance.",
    includes: [
      "6 to 15 custom pages",
      "Conversion-focused page structure",
      "Service + location SEO content planning",
      "Speed and technical performance tuning",
      "CRM, booking, or form integrations",
    ],
    featured: true,
  },
  {
    name: "Ecommerce Build",
    range: "$5,500 - $12,000+",
    bestFor: "Product-based brands needing catalog structure, checkout UX, and scalable storefront setup.",
    featured: false,
    includes: [
      "Store architecture and collection planning",
      "Product template and filter UX",
      "Checkout and cart conversion tuning",
      "Payment, shipping, and tax setup",
      "Analytics and event tracking",
    ],
  },
] as const;

const monthlyPlans = [
  {
    name: "Local SEO Foundation",
    range: "$650 - $950/mo",
    points: [
      "Google Business Profile optimization",
      "Citation and local listing consistency",
      "Monthly content and ranking improvements",
    ],
  },
  {
    name: "Growth Retainer",
    range: "$1,200 - $2,400/mo",
    points: [
      "SEO + CRO split testing support",
      "Landing page and service page expansion",
      "Performance, analytics, and iteration roadmap",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Website Pricing in Chatham-Kent",
  description:
    "Explore website design, redesign, ecommerce, and local SEO pricing ranges for Chatham-Kent businesses.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Website Pricing in Chatham-Kent",
    description:
      "Transparent pricing ranges for web design, redesign, ecommerce websites, and local SEO services.",
    url: "/pricing",
    type: "website",
    images: [{ url: "/arcstage.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Pricing in Chatham-Kent",
    description:
      "Transparent pricing ranges for web design, redesign, ecommerce websites, and local SEO services.",
    images: ["/arcstage.png"],
  },
};

export default function PricingPage() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kealey Design Pricing",
    description:
      "Transparent pricing ranges for web design, redesign, ecommerce websites, and local SEO services.",
    url: `${siteUrl}/pricing`,
    mainEntity: {
      "@type": "OfferCatalog",
      name: "Kealey Design Service Pricing",
      itemListElement: projectPackages.map((pkg) => ({
        "@type": "Offer",
        name: pkg.name,
        description: `${pkg.bestFor} Typical range ${pkg.range}.`,
      })),
    },
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Pricing page">
        <SplitPageHero
          eyebrow="PRICING"
          title="Transparent Website Pricing Ranges"
          description="Use these ranges to budget your project. Final pricing depends on scope, timeline, and complexity, but this gives you a practical starting point."
          imageSrc="/arcstage.png"
          imageAlt="Pricing and planning overview"
          ctaLabel="Book a pricing call"
          ctaHref="/contact#book-call"
          relatedLinks={[
            { label: "View services", href: "/services" },
            { label: "See portfolio", href: "/portfolio" },
          ]}
        />

        <section className="split-page__section pricing-page__section" aria-label="Project package pricing">
          <div className="pricing-page__inner">
            <p className="pricing-page__eyebrow">PROJECT RANGES</p>
            <h2 className="pricing-page__title">Typical Build Investment</h2>
            <p className="pricing-page__lead">
              Most projects in Chatham-Kent land inside these ranges. If your timeline is tight or your
              scope includes custom integrations, we will map that clearly during discovery.
            </p>
            <p className="pricing-page__note">
              Financing is available for qualifying projects above a minimum investment threshold.
            </p>

            <div className="pricing-page__grid">
              {projectPackages.map((pkg) => (
                <article key={pkg.name} className={`pricing-page__card ${pkg.featured ? "is-featured" : ""}`}>
                  {pkg.featured ? <p className="pricing-page__badge">Most Popular</p> : null}
                  <h3 className="pricing-page__card-title">{pkg.name}</h3>
                  <p className="pricing-page__price">{pkg.range}</p>
                  <p className="pricing-page__best-for">{pkg.bestFor}</p>
                  <ul className="pricing-page__list">
                    {pkg.includes.map((item) => (
                      <li key={item}>
                        <Check aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="split-page__section pricing-page__section" aria-label="Monthly SEO and growth plans">
          <div className="pricing-page__inner">
            <h2 className="pricing-page__title">Monthly SEO and Growth Support</h2>
            <p className="pricing-page__lead">
              For businesses that want ongoing momentum after launch, retainers combine SEO execution,
              site improvements, and conversion tuning.
            </p>
            <div className="pricing-page__mini-grid">
              {monthlyPlans.map((plan) => (
                <article key={plan.name} className="pricing-page__mini-card">
                  <h3>{plan.name}</h3>
                  <p className="pricing-page__price">{plan.range}</p>
                  <ul className="pricing-page__list">
                    {plan.points.map((point) => (
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