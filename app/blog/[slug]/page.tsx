import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.seo.metaTitle ?? post.title,
    description: post.seo.metaDescription ?? post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.seo.metaTitle ?? post.title,
      description: post.seo.metaDescription ?? post.description,
      url: `/blog/${post.slug}`,
      siteName: "Kealey Design",
      locale: "en_CA",
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.metaTitle ?? post.title,
      description: post.seo.metaDescription ?? post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.dateModified,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://www.kealeydesign.ca/about",
      sameAs: "https://www.linkedin.com/in/matt-kealey/",
    },
    publisher: { "@type": "Organization", name: "Kealey Design" },
    image: `${siteUrl}${post.image}`,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  const markdownSchemas = post.jsonLdScripts
    .map((jsonLd) => {
      try {
        return JSON.parse(jsonLd) as Record<string, unknown>;
      } catch {
        return null;
      }
    })
    .filter((schema): schema is Record<string, unknown> => schema !== null);

  const hasPrimaryArticleSchema = markdownSchemas.some((schema) => {
    const schemaType = schema["@type"];

    if (typeof schemaType === "string") {
      return schemaType === "Article" || schemaType === "BlogPosting" || schemaType === "NewsArticle";
    }

    if (Array.isArray(schemaType)) {
      return schemaType.some(
        (entry) => entry === "Article" || entry === "BlogPosting" || entry === "NewsArticle",
      );
    }

    return false;
  });

  const schemasToInject = hasPrimaryArticleSchema ? markdownSchemas : [articleSchema, ...markdownSchemas];

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="blog-post" aria-label="Blog post">
        <article className="blog-post__inner">
          <Link href="/blog" className="blog-post__back-link" aria-label="Back to blog posts">
            Back to Blog
          </Link>
          <Link href="/services" className="blog-post__back-link" aria-label="View services">
            View Services
          </Link>
          <p className="blog-post__eyebrow">BLOG POST</p>
          <h1 className="blog-post__title">{post.title}</h1>
          <p className="blog-post__date">{new Date(post.date).toLocaleDateString("en-CA")}</p>
          <div className="blog-post__author" aria-label="Article author">
            <p>
              Written by <Link href="/about">{post.author}</Link>, founder of Kealey Design and a Chatham-based
              web designer focused on local SEO, conversion strategy, and small-business websites.
            </p>
          </div>

          <div className="blog-post__image-wrap">
            <Image src={post.image} alt={post.title} width={1400} height={820} className="blog-post__image" />
          </div>

          <div className="blog-post__content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h2>{children}</h2>,
                table: ({ children }) => (
                  <div className="blog-post__table-wrap">
                    <table>{children}</table>
                  </div>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
          <aside className="blog-post__cta" aria-label="Conversion audit call to action">
            <div>
              <p className="blog-post__cta-eyebrow">Next Step</p>
              <h2>Want a conversion audit for your website?</h2>
              <p>
                Send your current site and we will identify practical improvements for local visibility,
                trust signals, page structure, and lead conversion.
              </p>
            </div>
            <Link href="/contact" className="quote-button blog-post__cta-button">
              Get a Conversion Audit
            </Link>
          </aside>
        </article>
      </main>
      <SiteFooter />
      {schemasToInject.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </div>
  );
}
