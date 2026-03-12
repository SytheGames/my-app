import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Social Media Management in Chatham-Kent",
  description:
    "Social media management services including monthly graphic design posts, account management, and profile optimization.",
  alternates: {
    canonical: "/services/social-media-management",
  },
  openGraph: {
    title: "Social Media Management in Chatham-Kent",
    description:
      "Monthly social media management with custom graphics, posting support, and account optimization.",
    url: "/services/social-media-management",
    type: "website",
    images: [{ url: "/onehundredking.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management in Chatham-Kent",
    description:
      "Monthly social media management with custom graphics, posting support, and account optimization.",
    images: ["/onehundredking.png"],
  },
};

export default function SocialMediaManagementServicePage() {
  const socialMediaServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Social Media Management",
    description:
      "Monthly social media management service including graphic design posts, profile optimization, and account management.",
    areaServed: "Southwestern Ontario",
    provider: { "@type": "Organization", name: "Kealey Design" },
    url: `${siteUrl}/services/social-media-management`,
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Social media management service">
        <SplitPageHero
          eyebrow="SERVICE"
          title="Social Media Management"
          description="We manage your social channels with consistent posting, custom graphic design, and optimization that improves profile quality and audience engagement."
          imageSrc="/onehundredking.png"
          imageAlt="Social media management graphic design showcase"
          ctaLabel="Plan your monthly content"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                Your social presence should support your sales goals, not just fill a feed. We build a
                practical monthly content workflow that keeps your brand active and clear.
              </p>

              <h2>Monthly Graphic Design and Posting</h2>
              <p>
                We create and manage 5 custom posts each month, designed to match your brand style,
                highlight your services, and keep messaging consistent across channels.
              </p>

              <h2>Account Management and Optimization</h2>
              <p>
                We handle profile updates, captions, hashtags, and posting cadence while optimizing your
                account setup for discoverability and stronger local relevance.
              </p>

              <h2>Strategy Based on Business Goals</h2>
              <p>
                Content is planned around your priorities, whether that is more inquiries, better local
                awareness, or stronger consistency across website and social channels.
              </p>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Need monthly social media support?"
          copy="Tell us your business goals and we will map a social media plan with custom graphics, posting, and profile optimization."
          subject="New Social Media Management Service Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(socialMediaServiceSchema) }}
      />
    </div>
  );
}
