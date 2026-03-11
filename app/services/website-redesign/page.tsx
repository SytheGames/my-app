import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Website Redesign",
  description:
    "Website redesign services for Ontario businesses needing stronger branding, faster performance, and improved user journeys.",
  alternates: {
    canonical: "/services/website-redesign",
  },
};

export default function WebsiteRedesignServicePage() {
  const websiteRedesignServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Redesign",
    description:
      "Website redesign services for Ontario businesses needing stronger branding, faster performance, and improved user journeys.",
    areaServed: "Ontario",
    provider: { "@type": "Organization", name: "Kealey Design" },
    url: `${siteUrl}/services/website-redesign`,
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Website redesign service">
        <SplitPageHero
          eyebrow="SERVICE"
          title="Website Redesign"
          description="If your current site is outdated, slow, or hard to manage, we redesign it with a modern structure that improves trust, readability, and conversion quality."
          imageSrc="/onehundredking.png"
          imageAlt="Website redesign before and after concept"
          ctaLabel="Book a consultation"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                A redesign is more than a visual refresh. We rebuild outdated websites with clearer structure,
                faster load times, and stronger conversion pathways for modern users.
              </p>

              <h2>Audit-First Redesign Strategy</h2>
              <p>
                Before design starts, we review your current user journey, technical setup, and conversion
                points so the redesign solves real issues instead of only changing appearance.
              </p>

              <h2>Improved UX and Content Flow</h2>
              <p>
                We reorganize page hierarchy, messaging, and section flow to help visitors understand your
                offer quickly and move toward contact, quote, or purchase actions with less friction.
              </p>

              <h2>Modern Performance and SEO Baseline</h2>
              <p>
                Every redesign includes technical cleanup, mobile optimization, and foundational SEO updates
                so your new website performs better in both user experience and search visibility.
              </p>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Thinking about a website redesign?"
          copy="Send your current site details and we will outline the highest-impact redesign priorities first."
          subject="New Website Redesign Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteRedesignServiceSchema) }}
      />
    </div>
  );
}
