import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Web Design Chatham",
  description: "Web design services in Chatham focused on local SEO, conversion, and long-term business growth.",
  alternates: { canonical: "/locations/web-design-chatham" },
  openGraph: {
    title: "Web Design Chatham",
    description: "Web design services in Chatham focused on local SEO, conversion, and long-term business growth.",
    url: "/locations/web-design-chatham",
    type: "website",
    images: [{ url: "/images/locations-images/Chatham_ON_1.JPG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Chatham",
    description: "Web design services in Chatham focused on local SEO, conversion, and long-term business growth.",
    images: ["/images/locations-images/Chatham_ON_1.JPG"],
  },
};

export default function WebDesignChathamPage() {
  const chathamPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Web Design Chatham",
        description: "Web design services in Chatham focused on local SEO, conversion, and long-term business growth.",
        url: `${siteUrl}/locations/web-design-chatham`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you work with businesses located in Chatham and Chatham-Kent?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We support businesses in Chatham and across Chatham-Kent, with page messaging tailored to both common local search terms.",
            },
          },
          {
            "@type": "Question",
            name: "Can you help improve my local visibility in Chatham?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We combine technical SEO, conversion-focused content structure, and local page clarity to improve discoverability and lead quality.",
            },
          },
          {
            "@type": "Question",
            name: "What type of Chatham businesses do you usually work with?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most projects are with service businesses, contractors, clinics, and local operators that need a stronger website for calls, inquiries, and trust.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Web design Chatham">
        <SplitPageHero
          eyebrow="LOCATION PAGE"
          title="Web Design Chatham"
          description="Custom websites for Chatham businesses that need more calls, leads, and local visibility."
          imageSrc="/images/locations-images/Chatham_ON_1.JPG"
          imageAlt="Web design in Chatham"
          ctaLabel="Start your project"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text" aria-label="Image credit">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>Image credit: P199. Source: Wikipedia.</p>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                Chatham businesses need websites that communicate trust quickly and make next steps obvious.
                We build practical digital experiences that support local lead generation and long-term growth.
              </p>

              <h2>Web Design Built for Local Decision-Making</h2>
              <p>
                We structure pages around the way people evaluate local providers, with clear messaging,
                service clarity, and conversion-focused layout decisions.
              </p>

              <h2>Performance and SEO Foundations</h2>
              <p>
                Sites are delivered with mobile responsiveness, technical SEO baseline setup, and page
                speed improvements to support both visibility and user experience.
              </p>

              <h2>Support for Growth After Launch</h2>
              <p>
                As your business expands, your site can scale with new service pages, location content,
                and ongoing conversion improvements based on real customer behavior.
              </p>
            </div>
          </div>
        </section>

        <section className="faq faq--location" aria-label="Chatham web design FAQs">
          <div className="faq__inner">
            <h2 className="faq__title">Chatham Web Design FAQs</h2>
            <div className="faq__columns faq__columns--single">
              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Do you work with businesses located in Chatham and Chatham-Kent?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. We support businesses in Chatham and across Chatham-Kent, with page messaging tailored
                    to both common local search terms.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can you help improve my local visibility in Chatham?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. We combine technical SEO, conversion-focused content structure, and local page clarity to
                    improve discoverability and lead quality.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">What type of Chatham businesses do you usually work with?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Most projects are with service businesses, contractors, clinics, and local operators that need
                    a stronger website for calls, inquiries, and trust.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Ready to grow your business in Chatham?"
          copy="Tell us about your business goals and we will map the best website direction for your local market."
          subject="New Chatham Location Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chathamPageSchema) }}
      />
    </div>
  );
}
