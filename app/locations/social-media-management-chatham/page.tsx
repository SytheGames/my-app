import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Social Media Management Chatham",
  description:
    "Social media management in Chatham with monthly graphic design posts, platform management, and profile optimization.",
  alternates: { canonical: "/locations/social-media-management-chatham" },
  openGraph: {
    title: "Social Media Management Chatham",
    description:
      "Social media management in Chatham with monthly graphic design posts, platform management, and profile optimization.",
    url: "/locations/social-media-management-chatham",
    type: "website",
    images: [{ url: "/images/locations-images/Chatham_ON_1.JPG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management Chatham",
    description:
      "Social media management in Chatham with monthly graphic design posts, platform management, and profile optimization.",
    images: ["/images/locations-images/Chatham_ON_1.JPG"],
  },
};

export default function SocialMediaManagementChathamPage() {
  const chathamSocialSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Social Media Management Chatham",
        description:
          "Social media management in Chatham with monthly graphic design posts, platform management, and profile optimization.",
        url: `${siteUrl}/locations/social-media-management-chatham`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is included in your monthly social media management package?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our standard monthly package includes 5 custom posts, account management, and profile optimization recommendations tailored to your business goals.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide graphic design for social content?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We design custom social graphics aligned with your brand and service messaging so your feed stays consistent and professional.",
            },
          },
          {
            "@type": "Question",
            name: "Can this service support local visibility in Chatham-Kent?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We align social messaging, profile optimization, and local keywords to support stronger visibility for Chatham-area audiences.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Social media management Chatham">
        <SplitPageHero
          eyebrow="LOCATION PAGE"
          title="Social Media Management Chatham"
          description="Social media support for Chatham businesses with custom graphics, monthly posting, and practical optimization."
          imageSrc="/images/locations-images/Chatham_ON_1.JPG"
          imageAlt="Social media management in Chatham"
          ctaLabel="Get social support"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                Consistent social media helps local businesses stay visible between website visits and
                referrals. We provide a practical monthly process that keeps your brand active.
              </p>

              <h2>5 Monthly Posts with Graphic Design</h2>
              <p>
                We design and publish five branded posts each month focused on your offers, updates, and
                value propositions so your audience sees consistent communication.
              </p>

              <h2>Managed Accounts and Optimization</h2>
              <p>
                Your profile, categories, post structure, and messaging are reviewed and improved to help
                support stronger local trust and clearer service positioning.
              </p>

              <h2>Built for Chatham-Kent Service Businesses</h2>
              <p>
                We tailor social content toward local service intent and pair it with your website goals,
                creating better continuity across your digital presence.
              </p>
            </div>
          </div>
        </section>

        <section className="faq faq--location" aria-label="Chatham social media FAQs">
          <div className="faq__inner">
            <h2 className="faq__title">Chatham Social Media Management FAQs</h2>
            <div className="faq__columns faq__columns--single">
              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">What is included in your monthly social media management package?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Our standard monthly package includes 5 custom posts, account management, and profile
                    optimization recommendations tailored to your business goals.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Do you provide graphic design for social content?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. We design custom social graphics aligned with your brand and service messaging so
                    your feed stays consistent and professional.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can this service support local visibility in Chatham-Kent?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. We align social messaging, profile optimization, and local keywords to support
                    stronger visibility for Chatham-area audiences.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Want social media management for your Chatham business?"
          copy="Share your goals and we will build a monthly social media plan with design, management, and optimization."
          subject="New Chatham Social Media Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chathamSocialSchema) }}
      />
    </div>
  );
}
