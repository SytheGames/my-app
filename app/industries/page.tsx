import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageContactSection } from "@/components/PageContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SplitPageHero } from "@/components/SplitPageHero";

export const metadata: Metadata = {
  title: "Industry Web Design & SEO in Southwestern Ontario",
  description:
    "Industry-specific web design and SEO for HVAC, roofing, contractors, clinics, trades, and service businesses across Southwestern Ontario.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industry Web Design & SEO in Southwestern Ontario",
    description:
      "Specific web design and SEO strategies for local service industries across Chatham-Kent and Southwestern Ontario.",
    url: "/industries",
    type: "website",
    images: [{ url: "/mockup.png" }],
  },
};

const industries = [
  {
    name: "HVAC Companies",
    href: "/industries/hvac",
    summary:
      "Emergency calls, furnace and AC seasonality, installation pages, maintenance plans, local map pack visibility, and click-to-call conversion.",
  },
  {
    name: "Roofing Companies",
    href: "/roofing-company-web-design-southwestern-ontario",
    summary:
      "Storm damage, repair and replacement pages, project proof, service-area trust, warranties, and estimate request funnels.",
  },
  {
    name: "Contractors",
    href: "/contractor-web-design",
    summary:
      "Project galleries, quote requests, service pages, credibility signals, location coverage, and lead-generation structure.",
  },
  {
    name: "Chiropractic Clinics",
    href: "/chiropractor-web-design",
    summary:
      "Patient trust, treatment pages, local search visibility, online booking paths, doctor bios, and review placement.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="Industry web design and SEO">
        <SplitPageHero
          eyebrow="INDUSTRIES"
          title="Industry-Specific Web Design and SEO for Southwestern Ontario"
          description="Google rewards specificity. We build pages and strategies around the real buying patterns, objections, seasons, and search intent inside each local service industry."
          imageSrc="/mockup.png"
          imageAlt="Kealey Design portfolio preview"
          ctaLabel="Plan your industry page"
          ctaHref="/contact"
          relatedLinks={[
            { label: "Web Design", href: "/web-design" },
            { label: "Local SEO", href: "/local-seo" },
          ]}
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <h2>Industry websites built for local service businesses</h2>
              <p>
                Kealey Design builds websites for the industries that rely on search, trust, and fast contact. We work
                with HVAC companies, roofing teams, contractors, chiropractic clinics, and other service businesses
                across Southwestern Ontario.
              </p>
              <p>
                These industries need websites that communicate the right services clearly: emergency repair, seasonal
                installs, maintenance plans, project estimates, and practitioner credibility. We help businesses present
                what they do in the language their customers use.
              </p>

              <h2>Industries we serve</h2>
              <ul>
                {industries.map((industry) => (
                  <li key={industry.name}>
                    <strong>
                      <Link href={industry.href}>{industry.name}</Link>
                    </strong>{" "}
                    - {industry.summary}
                  </li>
                ))}
              </ul>

              <h2>What these businesses need</h2>
              <p>
                HVAC companies need fast mobile calls, clear seasonal offers, and trust signals for emergency service.
                Roofing teams need storm-response credibility, project proof, and reliable estimate funnels. Contractors
                need strong examples of project work, explained service offerings, and local coverage messaging.
                Chiropractic clinics need practitioner trust, patient-focused benefits, and easy booking.
              </p>
              <p>
                Kealey Design helps each industry speak directly to its best customers, so the website feels like it was
                made for that business rather than a generic agency template.
              </p>

              <h2>Local service marketing in Southwestern Ontario</h2>
              <p>
                Businesses in Chatham-Kent, Windsor, London, Sarnia, Leamington, and surrounding towns compete on
                reputation, speed, and local relevance. A website that matches their industry and region makes the
                company easier to find and easier to choose.
              </p>
              <p>
                That is the focus here: industry clarity, local relevance, and messaging that helps the right leads
                recognise the business quickly.
              </p>

              <Link href="/industries/hvac" className="split-hero__button">
                View HVAC example
                <ArrowRight aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Want a website for your industry and region?"
          copy="Tell us your industry and service area. We will recommend the best website approach for your field."
          subject="New Industries Page Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
