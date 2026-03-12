import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Web Design",
  description:
    "Custom web design services in Chatham and Southwestern Ontario focused on conversions, speed, and mobile usability.",
  alternates: {
    canonical: "/services/web-design",
  },
  openGraph: {
    title: "Web Design",
    description:
      "Custom web design services in Chatham and Southwestern Ontario focused on conversions, speed, and mobile usability.",
    url: "/services/web-design",
    type: "website",
    images: [{ url: "/arcstage.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design",
    description:
      "Custom web design services in Chatham and Southwestern Ontario focused on conversions, speed, and mobile usability.",
    images: ["/arcstage.png"],
  },
};

export default function WebDesignServicePage() {
  const webDesignServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design",
    description:
      "Custom web design services in Chatham and Southwestern Ontario focused on conversions, speed, and mobile usability.",
    areaServed: "Southwestern Ontario",
    provider: { "@type": "Organization", name: "Kealey Design" },
    url: `${siteUrl}/services/web-design`,
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Web design service">
        <SplitPageHero
          eyebrow="SERVICE"
          title="Web Design"
          description="We design custom websites that balance visual quality with practical performance. Every build is optimized for mobile devices, clear navigation, and lead-focused user flows."
          imageSrc="/arcstage.png"
          imageAlt="Web design showcase"
          ctaLabel="Start your project"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                Based in Chatham-Kent, our web design approach focuses on modern layouts, clear messaging,
                and practical conversion structure that helps visitors take action.
              </p>

              <h2>Mobile-Ready Website Layouts</h2>
              <p>
                Every page is designed to perform smoothly across desktop, tablet, and mobile devices. We
                build responsive systems that keep your content clear and your calls-to-action easy to use.
              </p>

              <h2>Content Management and Training</h2>
              <p>
                Your website should be simple to update. We deliver manageable page systems and can provide
                one-on-one guidance so your team can confidently update content and imagery over time.
              </p>

              <h2>Why Businesses Choose Our Web Design Service</h2>
              <p>
                We combine strategy, design, and performance into one process so your website is not only
                visually polished, but also aligned to lead generation and long-term growth.
              </p>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Ready to plan your web design project?"
          copy="Share your goals and we will map a practical website strategy built for conversion and long-term growth."
          subject="New Web Design Service Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDesignServiceSchema) }}
      />
    </div>
  );
}
