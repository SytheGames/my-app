import type { Metadata } from "next";
import { MapPin, MonitorSmartphone, RefreshCcw, Wrench } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { ProofImageBand } from "@/components/ProofImageBand";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const londonFeatures = [
  {
    Icon: MonitorSmartphone,
    label: "Mobile-First Design",
    copy: "Built for the phone-first way London customers actually browse and compare local businesses.",
  },
  {
    Icon: MapPin,
    label: "Local SEO Foundations",
    copy: "Schema markup, service pages, and Google Business Profile alignment built in from day one.",
  },
  {
    Icon: RefreshCcw,
    label: "Fast, Modern Performance",
    copy: "Quick load times and clean layouts that keep visitors on the page instead of bouncing to a competitor.",
  },
  {
    Icon: Wrench,
    label: "Ongoing Support",
    copy: "Your site can grow with new service pages, content, and conversion improvements after launch.",
  },
];

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
            name: "There are a lot of businesses in London - how does a good website help mine stand out?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In a larger city like London, customers have more options and tend to compare before deciding. A site that clearly explains your services, shows real results, and makes it easy to get in touch consistently outperforms competitors who rely on a generic or outdated web presence.",
            },
          },
          {
            "@type": "Question",
            name: "Do London consumers research more before contacting a business?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Generally, yes. The university influence in London tends to produce a more research-heavy buyer. Your website needs clear proof, specific service detail, and transparent pricing signals to hold up to that level of scrutiny.",
            },
          },
          {
            "@type": "Question",
            name: "Can you build a London website that also targets nearby areas like Strathroy or St. Thomas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We can structure location pages or service area content to capture regional searches without creating thin duplicate pages that hurt your London ranking.",
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
          breadcrumbs={[{ label: "Locations", href: "/locations" }, { label: "Web Design London" }]}
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
                London is one of the larger cities in southwestern Ontario, with a busy mix of healthcare,
                trades, legal and financial services, and a steady student population from Western University
                and Fanshawe College. Customers here tend to shop around before committing - they&apos;ll look
                at a few options, check reviews, and browse your website before ever picking up the phone.
                A clear, professional site makes sure that research process ends with them calling you.
              </p>

              <h2>Getting Found When London Customers Search for Your Service</h2>
              <p>
                When someone in London searches for a plumber, physiotherapist, accountant, or contractor,
                the businesses that show up and get called are the ones with specific, credible pages - not
                vague placeholders. A site that clearly explains what you do, where you serve, and why
                customers choose you gives both Google and potential customers a reason to pick you over
                whoever is listed next.
              </p>

              <h2>London&apos;s University Influence on Buyer Expectations</h2>
              <p>
                Western University and Fanshawe shape London&apos;s consumer culture in a practical way: people
                here are used to doing research before making decisions. Your website needs to hold up to that
                scrutiny. Clear about-us content, visible credentials, real client results, and specific
                service descriptions all contribute to the kind of site that earns trust from a London audience
                rather than just generating a quick click.
              </p>

              <h2>Service Businesses With Regional Reach</h2>
              <p>
                Many London businesses serve clients across Middlesex County and surrounding areas — from
                Strathroy to St. Thomas. A well-structured website can reflect that reach clearly, with service
                pages that speak to the right communities without spreading your message too thin.
              </p>

              <IconFeatureGrid features={londonFeatures} />
            </div>
          </div>
        </section>

        <ProofImageBand
          src="/case-studies/Screenshot_20-5-2026_161715_www.pebblesgravel.com.jpeg"
          alt="Pebbles Gravel website built by Kealey Design"
          caption="Pebbles Gravel — a real Southwestern Ontario regional business site built for local lead flow, the same approach we bring to London."
          href="/portfolio/pebbles-gravel-regional-lead-flow"
        />

        <section className="faq faq--location" aria-label="London web design FAQs">
          <div className="faq__inner">
            <h2 className="faq__title">London Web Design FAQs</h2>
            <div className="faq__columns faq__columns--single">
              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">There are a lot of businesses in London — how does a good website help mine stand out?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    In a larger city like London, customers have more options and tend to compare before deciding.
                    A site that clearly explains your services, shows real results, and makes it easy to get in
                    touch consistently outperforms competitors who rely on a generic or outdated web presence.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Do London consumers research more before contacting a business?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Generally, yes. The university influence in London tends to produce a more research-heavy
                    buyer. Your website needs clear proof, specific service detail, and transparent pricing
                    signals to hold up to that level of scrutiny.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can you build a London website that also targets nearby areas like Strathroy or St. Thomas?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. We can structure location pages or service area content to capture regional searches
                    without creating thin duplicate pages that hurt your London ranking.
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
