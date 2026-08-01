import type { Metadata } from "next";
import { HardHat, MessageSquareText, ShieldCheck, MapPinned } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { ProofImageBand } from "@/components/ProofImageBand";

const leadFeatures = [
  {
    Icon: MapPinned,
    label: "Clear Value & Service Area",
    copy: "A homepage that states what you build, where you work, and why a homeowner should call you first.",
  },
  {
    Icon: MessageSquareText,
    label: "Easy Contact",
    copy: "Phone numbers and contact forms that are never more than a scroll or tap away, on any device.",
  },
  {
    Icon: ShieldCheck,
    label: "Trust-Building Elements",
    copy: "Reviews, certifications, and guarantees placed where they actually influence a buying decision.",
  },
  {
    Icon: HardHat,
    label: "Prominent Calls-to-Action",
    copy: "Quote and consultation prompts repeated naturally throughout the page, not buried at the bottom.",
  },
];

export const metadata: Metadata = {
  title: "Contractor Website Design | Lead-Generation Websites for Contractors",
  description: "Websites built to generate leads for contractors. Solve common contractor website problems and grow your business.",
  alternates: { canonical: "/contractor-web-design" },
  openGraph: {
    title: "Contractor Website Design | Lead-Generation Websites for Contractors",
    description: "Websites built to generate leads for contractors. Solve common contractor website problems and grow your business.",
    url: "/contractor-web-design",
    type: "website",
    images: [{ url: "/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contractor Website Design | Lead-Generation Websites for Contractors",
    description: "Websites built to generate leads for contractors. Solve common contractor website problems and grow your business.",
    images: ["/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg"],
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
          imageSrc="/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg"
          imageAlt="Contractor website design preview"
          ctaLabel="Request a Free Consultation"
          ctaHref="/contact"
          breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Contractor Web Design" }]}
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
              <IconFeatureGrid features={leadFeatures} />
            </div>
          </div>
        </section>

        <ProofImageBand
          src="/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg"
          alt="Enhanced Concrete contractor website built by Kealey Design"
          caption="Enhanced Concrete — a real Chatham-Kent contractor site built around local search demand and service-area clarity."
          href="/portfolio/enhanced-concrete-local-seo"
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <h2>Local SEO for Contractors</h2>
              <p>
                We optimize contractor websites for local search, helping you rank higher and attract more
                clients in your service area. That means service pages built around the jobs you want more of,
                location content for the towns you actually serve, and a Google Business Profile that reinforces
                the same story your website tells.
              </p>
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
