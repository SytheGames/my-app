import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Web Design London",
  description: "Strategic web design services for London, Ontario businesses focused on quality leads and scalable growth.",
  alternates: { canonical: "/locations/web-design-london" },
  openGraph: {
    title: "Web Design London",
    description: "Strategic web design services for London, Ontario businesses focused on quality leads and scalable growth.",
    url: "/locations/web-design-london",
    type: "website",
    images: [{ url: "/images/locations-images/London_Ontario_Skyline_2017_(cropped).jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design London",
    description: "Strategic web design services for London, Ontario businesses focused on quality leads and scalable growth.",
    images: ["/images/locations-images/London_Ontario_Skyline_2017_(cropped).jpg"],
  },
};

export default function WebDesignLondonPage() {
  const londonPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Web Design London",
        description: "Strategic web design services for London, Ontario businesses focused on quality leads and scalable growth.",
        url: `${siteUrl}/locations/web-design-london`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is your process a good fit for growing London businesses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We are usually a strong fit for businesses that need a scalable site structure with clearer messaging and better conversion consistency.",
            },
          },
          {
            "@type": "Question",
            name: "Can you support long-term website growth for London service companies?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We build with expansion in mind, including future service pages, location content, and iterative improvements.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with in-house marketing teams?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We can collaborate with internal teams on content direction, campaign landing pages, and performance priorities.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Web design London">
        <SplitPageHero
          eyebrow="LOCATION PAGE"
          title="Web Design London"
          description="Scalable website strategy for London businesses ready to improve conversion quality and online authority."
          imageSrc="/images/locations-images/London_Ontario_Skyline_2017_(cropped).jpg"
          imageAlt="Web design in London"
          ctaLabel="Let&apos;s talk"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text" aria-label="Image credit">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>Image credit: Mcalpinestudios. Source: Wikipedia.</p>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                London businesses often need websites that can support broader growth goals while staying clear and conversion-focused.
                We design systems that balance brand quality with practical lead generation.
              </p>

              <h2>Positioning and Message Clarity</h2>
              <p>
                We refine page messaging so your offer is easier to understand, compare, and trust for users
                researching multiple providers in a competitive market.
              </p>

              <h2>Conversion Flow Across Key Pages</h2>
              <p>
                Service pages, trust sections, and call-to-action blocks are aligned to reduce friction and
                guide visitors toward direct inquiry actions.
              </p>

              <h2>Long-Term Site Structure for Growth</h2>
              <p>
                Your website is structured to support future content expansion, new service pages, and ongoing
                optimization based on performance data.
              </p>
            </div>
          </div>
        </section>

        <section className="faq faq--location" aria-label="London web design FAQs">
          <div className="faq__inner">
            <h2 className="faq__title">London Web Design FAQs</h2>
            <div className="faq__columns faq__columns--single">
              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Is your process a good fit for growing London businesses?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. We are usually a strong fit for businesses that need a scalable site structure with
                    clearer messaging and better conversion consistency.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can you support long-term website growth for London service companies?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Absolutely. We build with expansion in mind, including future service pages, location content,
                    and iterative improvements.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Do you work with in-house marketing teams?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. We can collaborate with internal teams on content direction, campaign landing pages,
                    and performance priorities.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Planning a London website project?"
          copy="Send your project scope and we will outline a practical web strategy for your London market goals."
          subject="New London Location Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(londonPageSchema) }}
      />
    </div>
  );
}
