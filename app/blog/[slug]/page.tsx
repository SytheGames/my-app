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
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      siteName: "Kealey Design",
      locale: "en_CA",
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
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
    author: { "@type": "Organization", name: "Kealey Design" },
    publisher: { "@type": "Organization", name: "Kealey Design" },
    image: `${siteUrl}${post.image}`,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

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

          <div className="blog-post__image-wrap">
            <Image src={post.image} alt={post.title} width={1400} height={820} className="blog-post__image" />
          </div>

          <div className="blog-post__content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </div>
  );
}
