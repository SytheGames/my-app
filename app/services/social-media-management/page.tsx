import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitPageHero } from "@/components/SplitPageHero";
import { PageContactSection } from "@/components/PageContactSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export const metadata: Metadata = {
  title: "Social Media Management in Chatham-Kent",
  description:
    "Monthly social media management with custom graphic design posts, account optimization, and content strategy aligned to your business goals.",
  alternates: {
    canonical: "/services/social-media-management",
  },
  openGraph: {
    title: "Social Media Management in Chatham-Kent",
    description:
      "Monthly social media management with custom graphics, posting support, and account optimization.",
    url: "/services/social-media-management",
    type: "website",
    images: [{ url: "/onehundredking.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management in Chatham-Kent",
    description:
      "Monthly social media management with custom graphics, posting support, and account optimization.",
    images: ["/onehundredking.png"],
  },
};

export default function SocialMediaManagementServicePage() {
  const faqs = [
    {
      question: "What does social media management include?",
      answer:
        "We create custom monthly posts (typically 5 posts/month), design graphics that match your brand, write captions, schedule posting, optimize account profiles, and monitor engagement. Scope can expand to include direct message management or follower growth strategy.",
    },
    {
      question: "How often should I post on social media?",
      answer:
        "Posting frequency depends on your audience and platform. For most service businesses, 3–5 posts per week (roughly 1 per day on core days) maintains visibility without overload. We recommend consistency over volume.",
    },
    {
      question: "Do you manage multiple social platforms?",
      answer:
        "Yes. We typically manage Facebook and Instagram as primary channels for Chatham-Kent businesses, with optional expansion to LinkedIn (for B2B), TikTok, or YouTube depending on your audience.",
    },
    {
      question: "Can social media management help with lead generation?",
      answer:
        "Absolutely. Strategic social posting builds brand awareness and trust. By linking social to your website and directing followers toward contact or inquiry actions, social becomes a reliable lead source.",
    },
    {
      question: "How do you measure social media success?",
      answer:
        "We track engagement (likes, comments, shares), reach, profile growth, and—most importantly—clicks and inquiries from social. Monthly reports show what content resonates and how social channels contribute to business goals.",
    },
    {
      question: "What does social media management cost?",
      answer:
        "Social media management pricing is custom based on post frequency, number of platforms, and content complexity. Contact us for a personalized quote based on your needs.",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: "Kealey Design",
    url: siteUrl,
    telephone: "+1-519-401-1469",
    address: {
      "@type": "PostalAddress",
      streetAddress: "73 Marion Ave",
      addressLocality: "Chatham",
      addressRegion: "ON",
      postalCode: "N7M 5N7",
      addressCountry: "CA",
    },
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
  };

  const socialMediaServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/social-media-management#service`,
    name: "Social Media Management",
    description:
      "Monthly social media management service including custom graphic design, content strategy, posting, and profile optimization for Facebook, Instagram, and other platforms.",
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
    provider: { "@id": `${siteUrl}/#organization` },
    url: `${siteUrl}/services/social-media-management`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const faqColumns = [
    faqs.filter((_, index) => index % 2 === 0),
    faqs.filter((_, index) => index % 2 === 1),
  ];

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page social-media-service" aria-label="Social media management service">
        <SplitPageHero
          eyebrow="SERVICE"
          title="Social Media Management for Chatham-Kent Businesses"
          description="We manage your social channels with consistent posting, custom graphic design, and optimization that improves profile quality and audience engagement."
          imageSrc="/onehundredking.png"
          imageAlt="Social media management graphic design showcase"
          ctaLabel="Plan your monthly content"
          ctaHref="/contact"
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <article className="split-page__prose social-media-service__prose">
              <p className="social-media-service__meta">
                <strong>Last updated: April 2026</strong> | By <Link href="/about">Matt Kealey, Founder - Kealey Design</Link>
              </p>

              <p>
                Your social presence should support your sales goals, not just fill a feed. We build a practical monthly content workflow
                that keeps your brand active, consistent, and connected to your website and business objectives. Social media is most powerful
                when it drives brand awareness and feeds leads directly into your sales funnel.
              </p>

              <h2>Custom Monthly Graphic Design and Content Creation</h2>
              <p>
                We design and manage 5 custom posts each month (customizable based on your needs), created to match your brand style, highlight
                your services, and maintain consistent messaging across Facebook, Instagram, or other platforms you choose. Each post is designed
                with clear visual hierarchy, readable typography, and calls-to-action that direct followers toward your website or contact form.
              </p>
              <p>
                Post creation includes copywriting tailored to each platform&apos;s audience, graphic design that reinforces your brand identity,
                and strategic timing to maximize visibility. We also pull content from your website, testimonials, or case studies to keep posts
                relevant and conversion-focused.
              </p>

              <h2>Account Management and Profile Optimization</h2>
              <p>
                Beyond just posting, we optimize your account setup for discoverability and engagement. This includes complete profile descriptions,
                strategic hashtag use, profile link placement (directing to your website or landing pages), and posting cadence tuning based on when
                your audience is most active. We also monitor comments and messages to maintain an engaged community around your brand.
              </p>
              <p>
                Account optimization isn&apos;t a one-time task. We continually refine hashtags, update profile descriptions as your offerings change,
                and adjust posting times based on performance data so your social presence stays current and relevant.
              </p>

              <h2>Strategy Aligned to Your Business Goals</h2>
              <p>
                Social media content is planned around your priorities: whether your goal is more phone inquiries, better local brand awareness, stronger
                website traffic, or seamless coordination with your email and website messaging. We tie social content calendar to seasonal offerings,
                promotions, or key business milestones so social supports your overall revenue goals.
              </p>
              <p>
                Monthly reporting shows engagement metrics (reach, engagement rate, click-throughs), follower growth, and—crucially—how social traffic
                converts to leads or revenue. This keeps social media accountable as a business channel, not just a vanity metric.
              </p>

              <h2>Frequently Asked Questions</h2>
              <section>
                <div className="faq__columns">
                  {faqColumns.map((column, columnIndex) => (
                    <div key={`faq-column-${columnIndex}`} className="faq__column">
                      {column.map((item) => (
                        <details key={item.question} className="faq__item">
                          <summary className="faq__summary">
                            <span className="faq__question">{item.question}</span>
                            <span className="faq__indicator" aria-hidden="true">
                              +
                            </span>
                          </summary>
                          <p className="faq__answer">{item.answer}</p>
                        </details>
                      ))}
                    </div>
                  ))}
                </div>
              </section>

              <p style={{ marginTop: '1.5rem' }}>
                For pricing and to discuss your social media strategy,{' '}
                <Link href="/contact">book a consultation</Link> and share your current platforms and content goals.
              </p>
            </article>
          </div>
        </section>

        <PageContactSection
          heading="Need monthly social media support?"
          copy="Tell us your business goals and platforms, and we will map a social media plan with custom graphics, posting strategy, and account optimization."
          subject="New Social Media Management Service Inquiry - Kealey Design"
        />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(socialMediaServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
