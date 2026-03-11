import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllCaseStudies } from "@/lib/caseStudies";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Case studies and growth-focused project breakdowns from Kealey Design.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio",
    description: "Case studies and growth-focused project breakdowns from Kealey Design.",
    url: "/portfolio",
    type: "website",
    images: [{ url: "/arcstage.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "Case studies and growth-focused project breakdowns from Kealey Design.",
    images: ["/arcstage.png"],
  },
};

export default function PortfolioPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="portfolio-page" aria-label="Portfolio page">
        <div className="portfolio-page__inner">
          <p className="portfolio-page__eyebrow">PORTFOLIO</p>
          <h1 className="portfolio-page__title">Case Studies</h1>
          <p className="portfolio-page__lead">
            Real project breakdowns focused on conversion, performance, and business growth.
          </p>

          <div className="portfolio-page__grid">
            {caseStudies.map((study) => (
              <article key={study.slug} className="portfolio-page__card">
                <Link href={`/portfolio/${study.slug}`} className="portfolio-page__image-link" aria-label={study.title}>
                  <Image src={study.image} alt={study.title} width={1200} height={700} className="portfolio-page__image" />
                </Link>
                <div className="portfolio-page__card-content">
                  <p className="portfolio-page__date">{new Date(study.date).toLocaleDateString("en-CA")}</p>
                  <h2 className="portfolio-page__card-title">
                    <Link href={`/portfolio/${study.slug}`}>{study.title}</Link>
                  </h2>
                  <p className="portfolio-page__excerpt">{study.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
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
