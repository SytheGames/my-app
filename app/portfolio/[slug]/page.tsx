import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/caseStudies";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${study.title} | Case Study`,
    description: study.description,
    keywords: study.keywords,
    alternates: {
      canonical: `/portfolio/${study.slug}`,
    },
    openGraph: {
      type: "article",
      title: study.title,
      description: study.description,
      url: `/portfolio/${study.slug}`,
      siteName: "Kealey Design",
      locale: "en_CA",
      images: [{ url: study.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.description,
      images: [study.image],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.description,
    datePublished: study.date,
    author: { "@type": "Organization", name: "Kealey Design" },
    publisher: { "@type": "Organization", name: "Kealey Design" },
    image: `${siteUrl}${study.image}`,
    mainEntityOfPage: `${siteUrl}/portfolio/${study.slug}`,
    keywords: study.keywords.join(", "),
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="blog-post" aria-label="Case study detail">
        <article className="blog-post__inner">
          <p className="blog-post__eyebrow">CASE STUDY</p>
          <h1 className="blog-post__title">{study.title}</h1>
          <p className="blog-post__date">{new Date(study.date).toLocaleDateString("en-CA")}</p>

          <div className="blog-post__image-wrap">
            <Image src={study.image} alt={study.title} width={1400} height={820} className="blog-post__image" />
          </div>

          <section className="portfolio-page__meta-grid" aria-label="Case study highlights">
            <div className="portfolio-page__meta-card">
              <h2>Client</h2>
              <p>{study.client}</p>
            </div>
            <div className="portfolio-page__meta-card">
              <h2>Services</h2>
              <ul className="portfolio-page__meta-list">
                {study.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="portfolio-page__meta-card">
              <h2>Results</h2>
              <ul className="portfolio-page__meta-list">
                {study.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
          </section>

          <div className="blog-post__content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{study.content}</ReactMarkdown>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
    </div>
  );
}
