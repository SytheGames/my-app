import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";
const pagePath = "/roofing-company-web-design-southwestern-ontario";

export const metadata: Metadata = {
  title: "Roofing Company Web Design in Southwestern Ontario",
  description:
    "Lead-focused roofing company web design for Southwestern Ontario roofers. Get a fast, mobile-friendly website built to turn local searches into roofing estimates.",
  alternates: { canonical: pagePath },
  openGraph: {
    title: "Roofing Company Web Design in Southwestern Ontario",
    description:
      "Websites for roofing companies in Southwestern Ontario that help generate calls, estimate requests, and stronger local search visibility.",
    url: pagePath,
    type: "website",
    images: [{ url: "/mockup.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Company Web Design in Southwestern Ontario",
    description:
      "Lead-focused websites for Southwestern Ontario roofing companies that want more estimate requests from Google.",
    images: ["/mockup.png"],
  },
};

export default function RoofingCompanyWebDesignSouthwesternOntarioPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roofing Company Web Design in Southwestern Ontario",
    description:
      "Website design, conversion strategy, and local SEO structure for roofing companies in Southwestern Ontario.",
    areaServed: [
      "Southwestern Ontario",
      "Chatham-Kent",
      "Windsor",
      "London",
      "Sarnia",
      "Leamington",
      "Wallaceburg",
      "Tilbury",
    ],
    provider: { "@type": "Organization", name: "Kealey Design", url: siteUrl },
    url: `${siteUrl}${pagePath}`,
    serviceType: "Web Design",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do roofing companies need a different kind of website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Roofing websites need to make it easy for homeowners to trust the company, understand the service area, see proof of past work, and request an estimate quickly from a phone.",
        },
      },
      {
        "@type": "Question",
        name: "Can a roofing website help generate more local leads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A properly built roofing website can improve local visibility, make estimate requests easier, and turn more visitors from Google into phone calls and form submissions.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with roofers outside Chatham-Kent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Kealey Design works with service businesses across Southwestern Ontario, including Windsor, London, Sarnia, Leamington, Chatham-Kent, and surrounding communities.",
        },
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page web-design-service" aria-label="Roofing company web design in Southwestern Ontario">
        <SplitPageHero
          eyebrow="ROOFING WEB DESIGN"
          title="Roofing Company Web Design in Southwestern Ontario"
          description="We build fast, credible roofing websites that help local roofers turn Google searches into calls, quote requests, and booked inspections."
          imageSrc="/mockup.png"
          imageAlt="Website design portfolio preview for local service businesses"
          ctaLabel="Request a Free Website Audit"
          ctaHref="/contact"
          relatedLinks={[
            { label: "Contractor web design", href: "/contractor-web-design" },
            { label: "Local SEO", href: "/services/local-seo" },
          ]}
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p className="web-design-service__meta">Built for roofers in Chatham-Kent, Windsor, London, Sarnia, Leamington, and nearby Southwestern Ontario communities.</p>
              <p>
                When a homeowner has a leak, storm damage, missing shingles, or an aging roof, they usually
                search fast and compare a few local companies. Your website has to earn trust quickly, show
                that you serve their area, and make the next step obvious.
              </p>

              <h2>Most roofing websites lose leads before the phone rings</h2>
              <ul>
                <li>The site looks dated or thin compared with nearby competitors</li>
                <li>Project photos, reviews, service areas, and warranty details are hard to find</li>
                <li>Mobile visitors have to pinch, scroll, or hunt for the phone number</li>
                <li>There are no dedicated pages for repairs, replacements, inspections, or emergency work</li>
                <li>The website is not structured around the local searches homeowners actually use</li>
              </ul>

              <h2>A roofing website should be a lead system</h2>
              <p>
                We design roofing websites around the questions homeowners ask before they request an estimate:
                Are you local? Do you handle my roof type? Can I trust your workmanship? How quickly can I get
                someone to look at it?
              </p>
              <ul>
                <li>Clear calls to call, request an estimate, or book an inspection</li>
                <li>Service pages for roof repair, roof replacement, flat roofing, metal roofing, and storm damage</li>
                <li>Local SEO structure for your highest-value towns and service areas</li>
                <li>Review placement, project galleries, credentials, warranties, and financing details</li>
                <li>Fast mobile layouts built for people comparing roofers from their phone</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <h2>What your roofing website can include</h2>
              <ul>
                <li><strong>Conversion-focused homepage</strong> - a clear offer, service area, trust signals, and estimate path above the fold.</li>
                <li><strong>Dedicated roofing service pages</strong> - pages for the jobs you want more of, written around real customer search intent.</li>
                <li><strong>Local landing page structure</strong> - content for priority areas across Southwestern Ontario without creating thin duplicate pages.</li>
                <li><strong>Project gallery and proof</strong> - before-and-after photos, testimonials, certifications, and warranty messaging placed where they matter.</li>
                <li><strong>Lead capture forms</strong> - forms that ask for the right information without making homeowners work too hard.</li>
              </ul>

              <h2>Built for Southwestern Ontario search demand</h2>
              <p>
                Roofing competition is local. A roofer in Chatham-Kent, Windsor, London, Sarnia, or Leamington
                needs a website that tells Google where they work and tells homeowners why they should call.
                We combine web design, local SEO fundamentals, and practical lead generation so your site is
                built to do more than sit online.
              </p>

              <h2>Good fit for roofing companies that want more estimate requests</h2>
              <p>
                This page is for established roofers who want a sharper website, stronger local presence, and
                a cleaner way to turn traffic into booked roofing estimates. It is especially useful if referrals
                are strong, but your website is not yet pulling its weight.
              </p>
            </div>
          </div>
        </section>

        <section className="faq" aria-label="Roofing company web design frequently asked questions">
          <div className="faq__inner">
            <p className="faq__eyebrow">FAQ</p>
            <h2 className="faq__title">Roofing Web Design FAQs</h2>

            <div className="faq__columns">
              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Do roofing companies need a different kind of website?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. Roofing websites need strong trust signals, clear service pages, project proof, local
                    service-area content, and simple estimate requests that work well on mobile.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can the site be built for roofing leads from Google?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. We structure pages around local roofing searches, add clear conversion paths, and build
                    the technical foundation for stronger local SEO.
                  </p>
                </details>
              </div>

              <div className="faq__column">
                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">What areas do you serve?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Kealey Design works with service businesses across Southwestern Ontario, including
                    Chatham-Kent, Windsor, London, Sarnia, Leamington, Wallaceburg, Tilbury, and nearby areas.
                  </p>
                </details>

                <details className="faq__item">
                  <summary className="faq__summary">
                    <h3 className="faq__question">Can you redesign an existing roofing website?</h3>
                    <span className="faq__indicator" aria-hidden>+</span>
                  </summary>
                  <p className="faq__answer">
                    Yes. We can rebuild an outdated roofing website into a faster, clearer, more lead-focused
                    site while preserving useful content, rankings, and brand recognition where possible.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Want more roofing estimate requests?"
          copy="Tell us about your roofing company, your service area, and the jobs you want more of. We will outline a website plan built for local leads."
          subject="New Roofing Company Web Design Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
