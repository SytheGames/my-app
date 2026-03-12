import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Local SEO",
  description:
    "Local SEO services for Chatham and Southwestern Ontario businesses, including maps optimization, local content, and citation strategy.",
  alternates: {
    canonical: "/services/local-seo",
  },
  openGraph: {
    title: "Local SEO",
    description:
      "Local SEO services for Chatham and Southwestern Ontario businesses, including maps optimization, local content, and citation strategy.",
    url: "/services/local-seo",
    type: "website",
    images: [{ url: "/daveychiro.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO",
    description:
      "Local SEO services for Chatham and Southwestern Ontario businesses, including maps optimization, local content, and citation strategy.",
    images: ["/daveychiro.png"],
  },
};

export default function LocalSeoServicePage() {
  const localSeoServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Local SEO",
    description:
      "Local SEO services for Chatham and Southwestern Ontario businesses, including maps optimization, local content, and citation strategy.",
    areaServed: "Southwestern Ontario",
    provider: { "@type": "Organization", name: "Kealey Design" },
    url: `${siteUrl}/services/local-seo`,
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Local SEO service">
        <SplitPageHero
          eyebrow="SERVICE"
          title="Local SEO"
          description="We help small businesses rank for local searches by improving website relevance, Google Business Profile quality, and location-specific authority signals."
          imageSrc="/daveychiro.png"
          imageAlt="Local SEO map rankings interface"
          ctaLabel="Get local SEO help"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                Local SEO helps your business appear where buying intent happens first: map results and
                location-based searches from nearby customers looking for your exact service.
              </p>

              <h2>Google Business Profile Optimization</h2>
              <p>
                We optimize your profile categories, descriptions, services, and publishing workflow to
                improve local relevance and increase visibility for high-intent regional searches.
              </p>

              <h2>City and Service Page Alignment</h2>
              <p>
                Your website pages are structured around service-plus-location intent, with clean internal
                linking and content architecture designed to support long-term local ranking growth.
              </p>

              <h2>Reporting Focused on Lead Quality</h2>
              <p>
                Performance is reviewed through calls, form inquiries, and conversion behavior so strategy
                can be adjusted based on business outcomes instead of ranking vanity metrics.
              </p>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Want to improve local search visibility?"
          copy="Tell us your target cities and services and we will recommend a focused local SEO action plan."
          subject="New Local SEO Service Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSeoServiceSchema) }}
      />
    </div>
  );
}
