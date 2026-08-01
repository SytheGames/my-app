import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Free Website Audit | Kealey Design",
  description:
    "A free, practical audit of your website and Google Business Profile: technical SEO, local search visibility, conversion friction, and clear next steps. No obligation.",
  alternates: { canonical: "/free-website-audit" },
  openGraph: {
    title: "Free Website Audit | Kealey Design",
    description:
      "A free, practical audit of your website and Google Business Profile, with clear priorities and no obligation.",
    url: "/free-website-audit",
    type: "website",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Audit | Kealey Design",
    description:
      "A free, practical audit of your website and Google Business Profile, with clear priorities and no obligation.",
    images: ["/og-image.jpg"],
  },
};

const auditItems = [
  {
    heading: "Google Business Profile check",
    copy: "Categories, service descriptions, photos, posting activity, and whether your profile matches what your website actually says.",
  },
  {
    heading: "Local search visibility",
    copy: "Where you show up (or don't) for the service-plus-city searches that matter, and what's likely blocking map pack and organic visibility.",
  },
  {
    heading: "Technical and on-page SEO",
    copy: "Page speed, mobile usability, title tags, metadata, heading structure, and whether your site gives Google a clear reason to rank it.",
  },
  {
    heading: "Conversion friction",
    copy: "Whether visitors can actually tell what you do, why they should choose you, and how to contact you without hunting for it.",
  },
  {
    heading: "Content and structure gaps",
    copy: "Thin or missing service pages, weak internal linking, and where competitors are likely outranking you with deeper content.",
  },
  {
    heading: "Clear next steps",
    copy: "A short, prioritized list of what would move the needle first, whether or not you ever hire us.",
  },
];

const faqs = [
  {
    question: "Is the audit actually free?",
    answer:
      "Yes. There is no cost and no obligation. We review your site and Google Business Profile and send back what we find, including issues that matter and ones that don't.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Just your website URL and, if you have one, a link to your Google Business Profile. Everything else we can find ourselves.",
  },
  {
    question: "How long does it take to get results?",
    answer:
      "Most audits are turned around within a few business days. For more competitive markets or larger sites, it can take a little longer to review properly.",
  },
  {
    question: "Will I get a sales pitch?",
    answer:
      "You'll get an honest assessment and, if it makes sense, recommendations for what a project or retainer could look like. There's no pressure to move forward.",
  },
  {
    question: "Do you audit businesses outside Chatham-Kent?",
    answer:
      "Yes. We regularly work with businesses across Windsor, London, Sarnia, Leamington, and the broader Southwestern Ontario region.",
  },
];

export default function FreeWebsiteAuditPage() {
  const auditPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Free Website Audit",
        description:
          "A free, practical audit of your website and Google Business Profile, with clear priorities and no obligation.",
        url: `${siteUrl}/free-website-audit`,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Free website audit">
        <SplitPageHero
          eyebrow="FREE AUDIT"
          title="Get a Free Website and Local SEO Audit"
          description="Send us your website and we will tell you, in plain language, what's holding back your traffic, rankings, and leads, and what to fix first."
          imageSrc="/og-image.jpg"
          imageAlt="Website audit report preview"
          ctaLabel="Request your free audit"
          ctaHref="#audit-form"
          relatedLinks={[
            { label: "Local SEO", href: "/local-seo" },
            { label: "SEO Services", href: "/seo-services" },
            { label: "Portfolio", href: "/portfolio" },
          ]}
          breadcrumbs={[{ label: "Free Website Audit" }]}
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                Most business owners know their website could be doing more, but not exactly what to fix or in
                what order. This audit gives you a straight answer: what&apos;s working, what&apos;s costing you
                visibility or leads, and what would make the biggest difference first. No account access needed,
                no obligation, and no pressure to hire us afterward.
              </p>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text" aria-label="What the audit covers">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <h2>What&apos;s Included</h2>
              <ul>
                {auditItems.map((item) => (
                  <li key={item.heading}>
                    <strong>{item.heading}</strong> - {item.copy}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="faq faq--location" aria-label="Free website audit FAQs">
          <div className="faq__inner">
            <h2 className="faq__title">Free Audit FAQs</h2>
            <div className="faq__columns faq__columns--single">
              <div className="faq__column">
                {faqs.map((item) => (
                  <details key={item.question} className="faq__item">
                    <summary className="faq__summary">
                      <h3 className="faq__question">{item.question}</h3>
                      <span className="faq__indicator" aria-hidden>
                        +
                      </span>
                    </summary>
                    <p className="faq__answer">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div id="audit-form">
          <PageContactSection
            heading="Ready for your free audit?"
            copy="Send your website URL and Google Business Profile link (if you have one) and we will send back a clear, prioritized breakdown."
            subject="New Free Website Audit Request - Kealey Design"
          />
        </div>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditPageSchema) }}
      />
    </div>
  );
}
