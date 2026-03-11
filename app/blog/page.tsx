import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllBlogPosts } from "@/lib/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read website design, local SEO, and digital growth insights from Kealey Design in Chatham, Ontario.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog",
    description:
      "Read website design, local SEO, and digital growth insights from Kealey Design in Chatham, Ontario.",
    url: "/blog",
    type: "website",
    images: [{ url: "/mockup.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description:
      "Read website design, local SEO, and digital growth insights from Kealey Design in Chatham, Ontario.",
    images: ["/mockup.png"],
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="blog-page" aria-label="Blog index">
        <div className="blog-page__inner">
          <p className="blog-page__eyebrow">BLOG</p>
          <h1 className="blog-page__title">Web Design & SEO Insights</h1>
          <p className="blog-page__lead">
            Practical articles from Kealey Design for businesses in Chatham and Southwestern Ontario.
          </p>

          <div className="blog-page__grid">
            {posts.map((post) => (
              <article key={post.slug} className="blog-page__card">
                <Link href={`/blog/${post.slug}`} className="blog-page__image-link" aria-label={post.title}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="blog-page__image"
                    width={1200}
                    height={700}
                  />
                </Link>
                <div className="blog-page__content">
                  <p className="blog-page__date">{new Date(post.date).toLocaleDateString("en-CA")}</p>
                  <h2 className="blog-page__card-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="blog-page__excerpt">{post.excerpt}</p>
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
            "@type": "Blog",
            name: "Kealey Design Blog",
            url: `${siteUrl}/blog`,
          }),
        }}
      />
    </div>
  );
}
