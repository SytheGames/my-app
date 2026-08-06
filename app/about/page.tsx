import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const title = "Matt Kealey | Chatham Web Designer | Kealey Design";
const description =
  "Matt Kealey is a Chatham web designer focused on conversion-focused websites, local SEO foundations, and practical growth systems for small businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    type: "website",
    images: [{ url: "/case-studies/Screenshot_20-5-2026_161715_www.pebblesgravel.com.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/case-studies/Screenshot_20-5-2026_161715_www.pebblesgravel.com.jpeg"],
  },
};

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: "About Kealey Design",
        description: "Learn about Matt, his background, and why businesses choose Kealey Design.",
        url: `${siteUrl}/about`,
      },
      {
        "@type": "Person",
        name: "Matt Kealey",
        jobTitle: "Web Designer & Developer",
        description:
          "A Chatham-based web designer focused on conversion-focused websites, local SEO foundations, and practical growth systems for small businesses.",
        url: `${siteUrl}/about`,
        sameAs: [
          "https://www.linkedin.com/in/matt-kealey/",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Kealey Design",
          url: siteUrl,
        },
      },
    ],
  };

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page" aria-label="About page">
        <section className="split-page__section about-page__hero" aria-label="About Matt Kealey">
          <div className="split-page__inner">
            <div className="about-page__hero-grid">
              <div className="about-page__portrait-wrap">
                <Image
                  src="/images/mattkealey.jpg"
                  alt="Matt Kealey, Chatham web designer and founder of Kealey Design"
                  width={900}
                  height={1100}
                  className="about-page__portrait"
                  priority
                />
              </div>
              <div className="about-page__hero-copy">
                <p className="about-page__center-eyebrow">ABOUT MATT</p>
                <h1 className="about-page__center-title">Conversion-focused web design from Chatham, Ontario</h1>
                <p className="about-page__center-copy">
                  I&apos;m Matt Kealey, a 22-year-old web designer who helps small businesses turn their
                  websites into clearer, more useful sales tools.
                </p>
                <p className="about-page__center-copy">
                  My work focuses on the parts of a website that actually move the needle: clear service
                  messaging, mobile-first layouts, local SEO structure, trust signals, and simple paths to
                  contact.
                </p>
                <div className="about-page__hero-actions">
                  <Link href="/portfolio" className="about-page__center-button">
                    View case studies
                  </Link>
                  <Link href="/contact" className="about-page__secondary-button">
                    Get a growth plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <div className="split-page__prose">
              <p>
                I got my first PC when I was nearly five, so the digital world has always felt natural to me.
                Over time, that curiosity turned into a practical skillset: designing websites that communicate
                quickly, load smoothly, and help visitors take the next step.
              </p>

              <h2>Built Around Conversion, Not Decoration</h2>
              <p>
                A good website should do more than look polished. It should explain what you do, make your
                offer easy to compare, support local search visibility, and give qualified visitors a clear
                reason to reach out. That is the lens I use when planning pages, calls to action, content
                hierarchy, and design systems.
              </p>

              <h2>Founder-Led Strategy and Execution</h2>
              <p>
                You work directly with me from discovery to launch. That keeps communication focused and makes
                it easier to connect design choices to real business goals: better leads, clearer positioning,
                stronger proof, and fewer points of friction.
              </p>

              <h2>Digital Background, Business Focus</h2>
              <p>
                I still bring the attention to flow and interaction that came from years around games and digital
                products, but the work here is grounded in business outcomes. The goal is a website that feels
                credible, is easy to use, and helps your best prospects move from interest to inquiry.
              </p>
            </div>

            <div className="about-revamp__grid" aria-label="About highlights">
              <article className="about-revamp__card">
                <h3>Conversion Strategy</h3>
                <p>Pages are structured around clear next steps, trust-building content, and lead quality.</p>
              </article>
              <article className="about-revamp__card">
                <h3>Local SEO Foundation</h3>
                <p>Service, location, metadata, and content structure are planned with search visibility in mind.</p>
              </article>
              <article className="about-revamp__card">
                <h3>Local Market Understanding</h3>
                <p>Strategy tailored to businesses serving Chatham-Kent and surrounding Ontario markets.</p>
              </article>
              <article className="about-revamp__card">
                <h3>Founder-Led Work</h3>
                <p>Work directly with Matt from discovery to launch, with fewer handoffs and clearer decisions.</p>
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
