import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  getAllTestimonials,
} from "@/lib/testimonials";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read client reviews and testimonials for Kealey Design, including Google reviews and direct client feedback.",
  alternates: {
    canonical: "/reviews",
  },
  openGraph: {
    title: "Reviews",
    description:
      "Read client reviews and testimonials for Kealey Design, including Google reviews and direct client feedback.",
    url: "/reviews",
    type: "website",
    images: [{ url: "/arcstage.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reviews",
    description:
      "Read client reviews and testimonials for Kealey Design, including Google reviews and direct client feedback.",
    images: ["/arcstage.png"],
  },
};

export default function ReviewsPage() {
  const testimonials = getAllTestimonials();

  const reviewsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Client Reviews",
        description: "Client reviews and testimonials for Kealey Design.",
        url: `${siteUrl}/reviews`,
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="reviews-page" aria-label="Client reviews page">
        <div className="reviews-page__inner">
          <p className="reviews-page__eyebrow">REVIEWS</p>
          <h1 className="reviews-page__title">Client Reviews & Testimonials</h1>
          <p className="reviews-page__lead">
            Real feedback from businesses we have supported with web design, redesign, ecommerce,
            and local SEO work across Chatham-Kent and Southwestern Ontario.
          </p>

          <a
            href="https://maps.app.goo.gl/pqGkSzTHJkWj9Z67A"
            className="reviews-page__google-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Google reviews
          </a>

          <div className="reviews-page__grid" aria-label="All testimonials">
            {testimonials.map((testimonial) => (
              <article key={testimonial.id} className="reviews-page__card">
                <p className="reviews-page__quote">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="reviews-page__name">
                  {testimonial.name}
                  {testimonial.company ? `, ${testimonial.company}` : ""}
                </p>
              </article>
            ))}
          </div>

          <div className="reviews-page__cta-wrap">
            <Link href="/contact" className="quote-button">
              Start your project
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
    </div>
  );
}
