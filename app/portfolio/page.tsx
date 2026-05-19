import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PortfolioFilterGrid } from "@/components/PortfolioFilterGrid";
import { getAllCaseStudies } from "@/lib/caseStudies";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Web Design Portfolio | Kealey Design Case Studies",
  description: "Case studies and growth-focused project breakdowns from Kealey Design.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Web Design Portfolio | Kealey Design Case Studies",
    description: "Case studies and growth-focused project breakdowns from Kealey Design.",
    url: "/portfolio",
    type: "website",
    images: [{ url: "/arcstage.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Portfolio | Kealey Design Case Studies",
    description: "Case studies and growth-focused project breakdowns from Kealey Design.",
    images: ["/arcstage.png"],
  },
};

export default function PortfolioPage() {
  const caseStudies = getAllCaseStudies();
  const portfolioCards = caseStudies.map((study) => ({
    slug: study.slug,
    title: study.title,
    excerpt: study.excerpt,
    date: study.date,
    image: study.image,
    services: study.services,
    industry: getCaseStudyIndustry(study.keywords),
    results: study.results,
  }));

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="portfolio-page" aria-label="Portfolio page">
        <div className="portfolio-page__inner">
          <p className="portfolio-page__eyebrow">PORTFOLIO</p>
          <h1 className="portfolio-page__title">Case Studies</h1>
          <p className="portfolio-page__lead">
            Filter by service or industry to see project goals, challenges, screenshots, and measurable
            results from recent website and SEO work.
          </p>

          <PortfolioFilterGrid caseStudies={portfolioCards} />
        </div>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Kealey Design Case Studies",
            url: `${siteUrl}/portfolio`,
          }),
        }}
      />
    </div>
  );
}

function getCaseStudyIndustry(keywords: string[]): string {
  const normalizedKeywords = keywords.join(" ").toLowerCase();

  if (normalizedKeywords.includes("healthcare")) return "Healthcare";
  if (normalizedKeywords.includes("contractor")) return "Contractors";
  if (normalizedKeywords.includes("arcade")) return "Entertainment";
  if (normalizedKeywords.includes("real estate")) return "Real Estate";
  if (normalizedKeywords.includes("automotive") || normalizedKeywords.includes("car")) return "Automotive";

  return "Small Business";
}
