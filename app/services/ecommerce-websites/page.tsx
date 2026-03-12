import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Ecommerce Websites",
  description:
    "Ecommerce website development for Ontario businesses focused on product discovery, checkout UX, and conversion performance.",
  alternates: {
    canonical: "/services/ecommerce-websites",
  },
  openGraph: {
    title: "Ecommerce Websites",
    description:
      "Ecommerce website development for Ontario businesses focused on product discovery, checkout UX, and conversion performance.",
    url: "/services/ecommerce-websites",
    type: "website",
    images: [{ url: "/enhancedconcrete.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Websites",
    description:
      "Ecommerce website development for Ontario businesses focused on product discovery, checkout UX, and conversion performance.",
    images: ["/enhancedconcrete.png"],
  },
};

export default function EcommerceWebsitesServicePage() {
  const ecommerceServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ecommerce Websites",
    description:
      "Ecommerce website development for Ontario businesses focused on product discovery, checkout UX, and conversion performance.",
    areaServed: "Ontario",
    provider: { "@type": "Organization", name: "Kealey Design" },
    url: `${siteUrl}/services/ecommerce-websites`,
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Ecommerce websites service">
        <SplitPageHero
          eyebrow="SERVICE"
          title="Ecommerce Websites"
          description="We build ecommerce websites that make buying easy, from category browsing to checkout. The focus is smoother UX, stronger product pages, and better conversion outcomes."
          imageSrc="/enhancedconcrete.png"
          imageAlt="Ecommerce storefront concept"
          ctaLabel="Discuss your store"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                Ecommerce growth depends on a storefront that is easy to browse, easy to trust, and easy
                to buy from across all modern devices, especially on mobile.
              </p>

              <h2>Store Architecture and Product Discovery</h2>
              <p>
                We organize category structure, collection flow, and product hierarchy to help visitors
                find the right items faster and move naturally toward purchase decisions.
              </p>

              <h2>Conversion-Focused Product and Checkout UX</h2>
              <p>
                Product pages and checkout paths are designed to reduce friction, strengthen trust, and
                improve conversion performance with clearer calls-to-action and purchase flow.
              </p>

              <h2>Performance and Ongoing Optimization</h2>
              <p>
                We tune ecommerce experiences for speed, usability, and measurable revenue outcomes with a
                roadmap for continuous iteration after launch.
              </p>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Planning a new ecommerce website?"
          copy="Share your store goals and current platform, and we will propose a conversion-focused build approach."
          subject="New Ecommerce Service Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceServiceSchema) }}
      />
    </div>
  );
}
