import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/caseStudies";
import { getTestimonialsForClient } from "@/lib/testimonials";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const clientLogos: Record<string, { src: string; alt: string; isLight?: boolean }> = {
  "arcstage-growth-rebuild": {
    src: "/images/logos/arcstage-logo.webp",
    alt: "ARCstage logo",
    isLight: true,
  },
  "enhanced-concrete-local-seo": {
    src: "/images/logos/enhanced-concrete-logo.svg",
    alt: "Enhanced Concrete logo",
  },
};

const serviceLinks = [
  { match: "seo", href: "/local-seo" },
  { match: "redesign", href: "/website-redesign" },
  { match: "ecommerce", href: "/ecommerce-websites" },
  { match: "social", href: "/social-media-management" },
  { match: "website", href: "/web-design" },
  { match: "landing", href: "/web-design" },
  { match: "conversion", href: "/web-design" },
  { match: "brand", href: "/web-design" },
];

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

  const matchingTestimonials = getTestimonialsForClient(study.client);
  const clientLogo = clientLogos[study.slug];

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.description,
    datePublished: study.date,
    author: {
      "@type": "Person",
      name: "Matt Kealey",
      url: `${siteUrl}/about`,
      worksFor: { "@type": "Organization", name: "Kealey Design" },
    },
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
          <Link href="/portfolio" className="blog-post__back-link" aria-label="Back to case studies">
            Back to Portfolio
          </Link>
          <Link href="/services" className="blog-post__back-link" aria-label="View services">
            View Services
          </Link>
          <p className="blog-post__eyebrow">CASE STUDY</p>
          <h1 className="blog-post__title">{study.title}</h1>
          <p className="blog-post__date">{new Date(study.date).toLocaleDateString("en-CA")}</p>

          <div className="blog-post__image-wrap">
            <Image src={study.image} alt={study.title} width={1400} height={820} className="blog-post__image" />
          </div>

          <section className="portfolio-page__meta-grid" aria-label="Case study highlights">
            <div className="portfolio-page__meta-card">
              <h2>Client</h2>
              {clientLogo ? (
                <Image
                  src={clientLogo.src}
                  alt={clientLogo.alt}
                  width={220}
                  height={80}
                  className={`case-study-logo ${clientLogo.isLight ? "case-study-logo--light" : ""}`}
                />
              ) : null}
              <p>{study.client}</p>
            </div>
            <div className="portfolio-page__meta-card">
              <h2>Services</h2>
              <ul className="portfolio-page__meta-list">
                {study.services.map((service) => {
                  const serviceHref = getServiceHref(service);

                  return (
                    <li key={service}>
                      <Link href={serviceHref}>{service}</Link>
                    </li>
                  );
                })}
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

          <section className="case-study-eeat" aria-label="Case study evidence and author credibility">
            <article>
              <h2>Evidence Used</h2>
              <p>
                Each case study is written from project delivery notes, client context, launch outcomes,
                and measurable result points available from the engagement.
              </p>
            </article>
            <article>
              <h2>Results Snapshot</h2>
              <ul>
                {study.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </article>
            <article>
              <h2>Written by Matt Kealey</h2>
              <p>
                Matt is a Chatham-based web designer focused on local SEO, conversion strategy,
                and practical website systems for small businesses. <Link href="/about">Read Matt&apos;s bio</Link>.
              </p>
            </article>
          </section>

          {matchingTestimonials.length > 0 ? (
            <section className="case-study-review" aria-label="Client testimonial">
              <p className="case-study-review__eyebrow">CLIENT REVIEW</p>
              <blockquote className="case-study-review__quote">
                &ldquo;{matchingTestimonials[0].quote}&rdquo;
              </blockquote>
              <p className="case-study-review__author">{matchingTestimonials[0].name}</p>
            </section>
          ) : null}

          <div className="blog-post__content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{study.content}</ReactMarkdown>
          </div>

          <aside className="case-study-cta" aria-label="Start a similar project">
            <div>
              <p className="case-study-cta__eyebrow">Start Your Project</p>
              <h2>Want a site built around clearer leads and stronger trust?</h2>
              <p>
                Share your goals and we will map the practical next steps, package fit, and growth
                opportunities for your website.
              </p>
            </div>
            <Link href="/contact" className="quote-button case-study-cta__button">
              Get a Custom Growth Plan
            </Link>
          </aside>
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

function getServiceHref(service: string): string {
  const normalizedService = service.toLowerCase();
  const matchedService = serviceLinks.find((item) => normalizedService.includes(item.match));

  return matchedService?.href ?? "/services";
}
