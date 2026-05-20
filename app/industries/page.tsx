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
              <h2>Specific pages beat generic service copy</h2>
              <p>
                A generic website can tell visitors what you do. An industry-specific website can show that you
                understand the problem they are trying to solve. That difference matters for both SEO and conversion.
                A homeowner searching for emergency furnace repair has different urgency than someone comparing roof
                replacement estimates. A patient researching chiropractic care has different trust needs than a
                business owner looking for a concrete contractor. The page structure should reflect those differences.
              </p>
              <p>
                Kealey Design creates industry pages for service businesses across Chatham-Kent, Windsor, London,
                Sarnia, Leamington, and Southwestern Ontario. These pages help Google understand topical relevance and
                help prospects feel understood faster. The strategy combines industry pain points, service-specific
                page depth, local search terms, quote or booking funnels, seasonality, review placement, project proof,
                and calls-to-action that match the buyer&apos;s urgency.
              </p>

              <h2>How industry strategy supports topical authority</h2>
              <p>
                Topical authority is built when a website covers a subject with useful depth. For a local service
                company, that does not mean publishing random blog posts. It means building a clear hierarchy: a strong
                homepage, core service pages, local SEO pages, location pages, industry pages, case studies, FAQs, and
                supporting content that all reinforce the same expertise. An HVAC page should link to local SEO,
                website design, case studies, service-area pages, and contact paths. A roofing page should explain
                storm damage, roof repair, roof replacement, project proof, warranties, and estimate requests.
              </p>
              <p>
                When those pages are useful, they do two jobs. They give search engines more context about what your
                business deserves to rank for, and they give human visitors more confidence that you understand their
                situation. The result is a site that feels less like a template and more like a real answer.
              </p>

              <h2>Industry pages we are building around</h2>
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

              <h2>What each industry page should include</h2>
              <p>
                A strong industry page should be long enough to cover the buyer&apos;s real concerns without becoming
                filler. The structure usually includes a hero, who the page is for, industry-specific pain points, how
                your website should convert traffic, local map pack opportunities, service-page ideas, before-and-after
                examples, competitor weaknesses, FAQs, pricing context, and a CTA. Internal links should connect the
                page to the homepage, web design, local SEO, SEO services, portfolio examples, locations, and contact.
              </p>
              <p>
                This is the long-term play: build a library of specific pages that show expertise across the industries
                you actually serve. As that library grows, the site becomes easier to navigate, easier to trust, and
                easier for Google to understand.
              </p>

              <h2>How we will expand the industry cluster</h2>
              <p>
                The HVAC page is the model for the rest of the cluster. Each future page should have its own search
                intent, service examples, local references, proof sections, and conversion path. A contractor page can
                focus on project galleries, estimate requests, licensing, insurance, service areas, and before-and-after
                proof. A roofing page can focus on repairs, replacements, storm damage, warranties, financing, and
                emergency leak response. A chiropractic page can focus on treatment pages, practitioner bios, booking,
                reviews, insurance questions, and patient trust.
              </p>
              <p>
                The goal is not to create a pile of nearly identical pages. The goal is to build a topical map that
                shows Kealey Design understands the real marketing problems inside each service category. That kind of
                specificity supports SEO, but it also makes the site more useful for outbound leads because prospects
                can land on a page that already speaks their language.
              </p>
              <p>
                This structure also gives the navigation and footer clearer jobs. The homepage explains the broad local
                authority. The root service pages explain how web design, local SEO, SEO services, maintenance, and GBP
                management work. The industry hub organizes the vertical pages. The location pages prove regional
                relevance. The portfolio supports trust. Together, those pages create the kind of internal linking system
                that helps both search engines and buyers move through the site with less friction.
              </p>

              <Link href="/industries/hvac" className="split-hero__button">
                View HVAC example
                <ArrowRight aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Want an industry page built for your market?"
          copy="Tell us your industry, service area, and highest-value leads. We will map the page structure and SEO opportunities."
          subject="New Industries Page Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
