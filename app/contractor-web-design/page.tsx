import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

export const metadata: Metadata = {
  title: "Contractor Website Design",
  description: "Websites built to generate leads for contractors. Solve common contractor website problems and grow your business.",
  alternates: { canonical: "/contractor-web-design" },
  openGraph: {
    title: "Contractor Website Design",
    description: "Websites built to generate leads for contractors. Solve common contractor website problems and grow your business.",
    url: "/contractor-web-design",
    type: "website",
    images: [{ url: "/images/contractor-web-design.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contractor Website Design",
    description: "Websites built to generate leads for contractors. Solve common contractor website problems and grow your business.",
    images: ["/images/contractor-web-design.jpg"],
  },
};

export default function ContractorWebDesignPage() {
  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Contractor Website Design">
        <SplitPageHero
          eyebrow="INDUSTRY PAGE"
          title="Websites Built to Generate Leads for Contractors"
          description="Lead-focused contractor websites that solve common industry problems and drive more project inquiries."
          imageSrc="/images/contractor-web-design.jpg"
          imageAlt="Contractor website design preview"
          ctaLabel="Request a Free Consultation"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <h2>Common Contractor Website Problems</h2>
              <ul>
                <li>Outdated or generic design</li>
                <li>Poor mobile experience</li>
                <li>Lack of clear calls-to-action</li>
                <li>Missing project galleries or testimonials</li>
                <li>Slow loading times</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <h2>Lead-Focused Design Approach</h2>
              <ul>
                <li>Clear value proposition and service areas</li>
                <li>Easy-to-find contact forms and phone numbers</li>
                <li>Trust-building elements: reviews, certifications, guarantees</li>
                <li>Prominent calls-to-action throughout the site</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <h2>Project Examples</h2>
              <ul>
                <li>Custom home builder site with lead capture</li>
                <li>Renovation contractor portfolio with reviews</li>
                <li>Landscaping company site optimized for local search</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <h2>Local SEO for Contractors</h2>
              <p>We optimize contractor websites for local search, helping you rank higher and attract more clients in your service area.</p>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Ready to grow your contracting business?"
          copy="Request a free consultation and see how a lead-focused website can help you win more projects."
          subject="New Contractor Web Design Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
