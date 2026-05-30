import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, RefreshCw, Rocket, SearchCheck, ShieldCheck, Smartphone, Wrench } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "WordPress vs Webflow for Small Businesses (2026 Guide)",
  description:
    "Comparing WordPress and Webflow for small business websites in 2026. See cost, security, editing workflow, SEO, and why we build client sites in Webflow.",
  alternates: {
    canonical: "/wordpress-vs-webflow",
  },
  openGraph: {
    title: "WordPress vs Webflow for Small Businesses",
    description:
      "A practical breakdown of WordPress vs Webflow for performance, maintenance, SEO, and long-term ownership.",
    url: "/wordpress-vs-webflow",
    type: "article",
    images: [{ url: "/case-studies/Screenshot_20-5-2026_161642_arcstage.ca.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress vs Webflow for Small Businesses",
    description:
      "A practical breakdown of WordPress vs Webflow for performance, maintenance, SEO, and long-term ownership.",
    images: ["/case-studies/Screenshot_20-5-2026_161642_arcstage.ca.jpeg"],
  },
};

const comparisonRows = [
  {
    topic: "Speed and performance",
    Icon: Rocket,
    wordpress: "Depends on theme quality, plugins, host, and caching setup.",
    webflow: "Fast out of the box with clean code and managed hosting.",
    winner: "Webflow",
  },
  {
    topic: "Security and updates",
    Icon: ShieldCheck,
    wordpress: "Frequent core, theme, and plugin updates; higher attack surface.",
    webflow: "Managed platform with fewer moving parts and no plugin patching.",
    winner: "Webflow",
  },
  {
    topic: "Ease of content editing",
    Icon: Smartphone,
    wordpress: "Flexible, but can become cluttered with many plugin UIs.",
    webflow: "Structured CMS editor that is simpler for non-technical teams.",
    winner: "Webflow",
  },
  {
    topic: "Design control",
    Icon: Wrench,
    wordpress: "Excellent with custom development; template quality varies.",
    webflow: "Excellent visual control with cleaner handoff for content teams.",
    winner: "Tie",
  },
  {
    topic: "SEO fundamentals",
    Icon: SearchCheck,
    wordpress: "Strong with the right setup and technical maintenance.",
    webflow: "Strong native controls for meta tags, schema, and redirects.",
    winner: "Tie",
  },
  {
    topic: "Long-term maintenance",
    Icon: RefreshCw,
    wordpress: "Ongoing plugin conflicts and update checks are common.",
    webflow: "Lower maintenance overhead for most brochure and service sites.",
    winner: "Webflow",
  },
];

const faqs = [
  {
    question: "Is WordPress bad for SEO?",
    answer:
      "No. WordPress can rank very well when it is configured correctly. The tradeoff is that SEO performance often depends on hosting quality, plugin choices, and ongoing technical upkeep.",
  },
  {
    question: "When should a business choose WordPress instead of Webflow?",
    answer:
      "WordPress is often a fit when a business needs a very large plugin ecosystem, specific enterprise integrations, or a heavily customized publishing workflow that depends on WordPress tooling.",
  },
  {
    question: "Can I migrate from WordPress to Webflow later?",
    answer:
      "Yes. Most service-business websites can be migrated. We normally audit content, URL structure, metadata, and redirects first so rankings and lead flow stay stable during launch.",
  },
  {
    question: "Why do you build client sites in Webflow?",
    answer:
      "For most small and mid-sized businesses, Webflow gives a better balance of speed, security, editing simplicity, and lower maintenance cost. It also reduces plugin-related failure points.",
  },
];

const faqColumns = [
  faqs.filter((_, index) => index % 2 === 0),
  faqs.filter((_, index) => index % 2 === 1),
];

export default function WordPressVsWebflowPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "WordPress vs Webflow",
    description:
      "Comparing WordPress and Webflow for small business websites in 2026, including costs, maintenance, and SEO tradeoffs.",
    url: `${siteUrl}/wordpress-vs-webflow`,
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

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page wpwf-page" aria-label="WordPress versus Webflow comparison page">
        <section className="split-page__section split-page__text wpwf-intro" aria-label="WordPress and Webflow comparison table">
          <div className="split-page__inner">
            <article className="split-page__prose wpwf-prose">
              <p className="wpwf-eyebrow">PLATFORM COMPARISON</p>
              <h1 className="wpwf-title">WordPress vs Webflow: A Direct Comparison for Business Websites</h1>
              <p className="wpwf-lead">
                We build client websites in Webflow because it usually gives better speed, lower maintenance risk,
                and cleaner content editing for growing service businesses.
              </p>
              <div className="wpwf-summary-grid" aria-label="Why Webflow is usually our recommendation">
                <div className="wpwf-summary-card">
                  <Rocket className="wpwf-summary-icon" aria-hidden="true" />
                  <h2>Faster launch path</h2>
                  <p>Less setup overhead means more focus on messaging, conversion paths, and lead flow.</p>
                </div>
                <div className="wpwf-summary-card">
                  <ShieldCheck className="wpwf-summary-icon" aria-hidden="true" />
                  <h2>Lower security overhead</h2>
                  <p>Fewer moving parts compared with plugin-heavy stacks lowers routine maintenance pressure.</p>
                </div>
                <div className="wpwf-summary-card">
                  <Smartphone className="wpwf-summary-icon" aria-hidden="true" />
                  <h2>Easier for teams to edit</h2>
                  <p>Structured editing keeps updates simple for non-technical teams and reduces publishing errors.</p>
                </div>
              </div>
              <h2>WordPress vs Webflow at a glance</h2>
              <div className="wpwf-table-wrap">
                <table className="wpwf-table">
                  <thead>
                    <tr>
                      <th scope="col">Category</th>
                      <th scope="col">WordPress</th>
                      <th scope="col">Webflow</th>
                      <th scope="col">Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.topic}>
                        <th scope="row">
                          <span className="wpwf-topic">
                            <row.Icon className="wpwf-topic-icon" aria-hidden="true" />
                            {row.topic}
                          </span>
                        </th>
                        <td>{row.wordpress}</td>
                        <td>{row.webflow}</td>
                        <td>
                          <span className={`wpwf-badge ${row.winner === "Webflow" ? "is-webflow" : "is-tie"}`}>
                            <CheckCircle2 className="wpwf-badge-icon" aria-hidden="true" />
                            {row.winner}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                If you run a small or mid-sized service business, Webflow is usually the better long-term choice. You get
                strong performance, fewer security headaches, cleaner editing workflows, and lower maintenance overhead.
              </p>
              <p>
                WordPress is still powerful, but many businesses end up paying hidden costs in plugin management,
                troubleshooting, and ongoing technical cleanup.
              </p>
            </article>
          </div>
        </section>

        <section className="split-page__section split-page__text" aria-label="When WordPress is a better fit">
          <div className="split-page__inner">
            <article className="split-page__prose">
              <h2>When WordPress still makes sense</h2>
              <ul>
                <li>You need a specific plugin or legacy integration that only exists in WordPress.</li>
                <li>You have an internal team that already maintains WordPress at a high technical level.</li>
                <li>You are running a publishing-heavy setup with workflows built around WordPress tools.</li>
              </ul>
              <p>
                If those are not priorities, Webflow is often the simpler and more stable option for growing service
                businesses.
              </p>
            </article>
          </div>
        </section>

        <section className="split-page__section split-page__text" aria-label="Why we use Webflow">
          <div className="split-page__inner">
            <article className="split-page__prose">
              <h2>Why we use Webflow for client builds</h2>
              <p>
                Our process is focused on lead generation, speed, and clean handoff. Webflow supports that well for most
                local businesses because the platform reduces complexity while keeping strong design control.
              </p>
              <ul>
                <li>Less time spent on plugin updates and compatibility conflicts.</li>
                <li>Cleaner editing experience for teams that want to publish without developer support.</li>
                <li>Fast page delivery and strong technical SEO fundamentals.</li>
                <li>Lower risk of unexpected breakage after routine updates.</li>
              </ul>
              <p>
                If you are comparing options for a redesign, you can also review our
                {" "}
                <Link href="/services/website-redesign">website redesign service</Link>
                {" "}
                and
                {" "}
                <Link href="/services/web-design">web design service</Link>
                .
              </p>
            </article>
          </div>
        </section>

        <section className="split-page__section split-page__text" aria-label="Frequently asked questions">
          <div className="split-page__inner">
            <article className="split-page__prose">
              <h2>Frequently asked questions</h2>
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
          heading="Need help choosing between WordPress and Webflow?"
          copy="Share your goals and constraints and we will recommend the right platform for your next build or redesign."
          subject="WordPress vs Webflow Consultation - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
