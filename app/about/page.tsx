import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Matt, his background, and why businesses choose Kealey Design.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About",
    description: "Learn about Matt, his background, and why businesses choose Kealey Design.",
    url: "/about",
    type: "website",
    images: [{ url: "/pebblesgravel.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About",
    description: "Learn about Matt, his background, and why businesses choose Kealey Design.",
    images: ["/pebblesgravel.png"],
  },
};

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Kealey Design",
    description: "Learn about Matt, his background, and why businesses choose Kealey Design.",
    url: `${siteUrl}/about`,
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="About page">
        <section className="split-page__section about-page__center-intro" aria-label="About intro">
          <div className="split-page__inner">
            <div className="about-page__center-inner">
              <p className="about-page__center-eyebrow">ABOUT</p>
              <h1 className="about-page__center-title">Built by Matt, focused on practical growth</h1>
              <p className="about-page__center-copy">
                Kealey Design works with businesses across Chatham-Kent and Southwestern Ontario to build
                websites that are easier to manage, easier to trust, and easier to convert from.
              </p>
              <p className="about-page__center-copy">
                Review recent <Link href="/portfolio">case studies</Link> to see how strategy and design decisions impact lead quality.
              </p>
              <Link href="/services" className="about-page__center-button">
                See our services
              </Link>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                My name is Matt. I started designing websites early and have spent years refining a process
                that keeps projects clear, practical, and tied to business outcomes.
              </p>

              <h2>Experience You Can Work With</h2>
              <p>
                I have worked with local businesses, service companies, and marketing teams across Ontario.
                That experience helps me make better decisions around content flow, conversion strategy, and
                technical implementation.
              </p>

              <h2>How Kealey Design Operates</h2>
              <p>
                You work directly with the person planning and building your website. Communication stays
                focused, timelines stay practical, and each decision is made with your lead generation goals in mind.
              </p>

              <h2>What Matters Most</h2>
              <p>
                The goal is not only to launch a good-looking site, but to give your business a reliable digital
                asset that supports sales conversations, local visibility, and long-term growth.
              </p>
            </div>

            <div className="about-revamp__grid" aria-label="About highlights">
              <article className="about-revamp__card">
                <h3>Direct Collaboration</h3>
                <p>Work directly with Matt from planning to launch, without handoffs or communication gaps.</p>
              </article>
              <article className="about-revamp__card">
                <h3>Local Market Understanding</h3>
                <p>Strategy tailored to businesses serving Chatham-Kent and surrounding Ontario markets.</p>
              </article>
              <article className="about-revamp__card">
                <h3>Conversion-Focused Approach</h3>
                <p>Design and content choices are aligned to calls, inquiries, and business results.</p>
              </article>
            </div>
          </div>
        </section>

        <PageContactSection
          heading="Want to work together on your next website project?"
          copy="Share your goals and we will outline the fastest path to a stronger website and better local visibility."
          subject="New About Page Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
    </div>
  );
}
