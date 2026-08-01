import type { Metadata } from "next";
import { AuthorityServicePage } from "@/components/AuthorityServicePage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const faqs = [
  {
    question: "What is Google Business Profile management?",
    answer:
      "It is the ongoing optimization and upkeep of your Google Business Profile, including categories, services, descriptions, photos, posts, products, reviews, profile accuracy, and performance reporting.",
  },
  {
    question: "Can GBP management help map rankings?",
    answer:
      "It can support map visibility when combined with relevance, distance, prominence, reviews, website alignment, and service-area consistency. It is an important part of local SEO.",
  },
  {
    question: "How often should a profile be updated?",
    answer:
      "Most active local businesses benefit from regular updates, including new photos, posts, service changes, review responses, and seasonal offers.",
  },
  {
    question: "Do reviews matter for local SEO?",
    answer:
      "Yes. Reviews influence trust and can support local prominence. A review system should make it easy for happy customers to leave feedback and easy for the business to respond professionally.",
  },
  {
    question: "Do you create Google Business Profile posts?",
    answer:
      "Yes. We can write and publish profile posts for services, projects, seasonal offers, FAQs, and trust-building updates.",
  },
  {
    question: "Is GBP management enough by itself?",
    answer:
      "Sometimes it is a good starting point, but the strongest results usually come when the profile, website, reviews, citations, and service pages all reinforce the same local signals.",
  },
];

export const metadata: Metadata = {
  title: "Google Business Profile Management in Chatham-Kent",
  description:
    "Google Business Profile management in Chatham-Kent for local businesses that need stronger Maps visibility, profile updates, photos, posts, and review support.",
  alternates: { canonical: "/google-business-profile-management" },
  openGraph: {
    title: "Google Business Profile Management in Chatham-Kent",
    description:
      "GBP optimization, posts, photos, review support, service updates, and local reporting for Southwestern Ontario businesses.",
    url: "/google-business-profile-management",
    type: "website",
    images: [{ url: "/service-placeholder-seo.svg" }],
  },
};

export default function GoogleBusinessProfileManagementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Business Profile Management in Chatham-Kent",
    url: `${siteUrl}/google-business-profile-management`,
    provider: { "@type": "LocalBusiness", name: "Kealey Design", url: siteUrl },
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
    serviceType: "Google Business Profile Management",
  };

  return (
    <AuthorityServicePage
      eyebrow="GBP MANAGEMENT"
      title="Google Business Profile Management in Chatham-Kent"
      description="Profile optimization, posts, photos, service updates, review support, and reporting for businesses that want stronger local visibility in Google Maps."
      imageSrc="/service-placeholder-seo.svg"
      imageAlt="Google Business Profile management illustration"
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Google Business Profile Management" }]}
      relatedLinks={[
        { label: "Local SEO", href: "/local-seo" },
        { label: "SEO Services", href: "/seo-services" },
        { label: "Portfolio", href: "/portfolio" },
      ]}
      ctaLabel="Improve your Google profile"
      ctaSubject="New Google Business Profile Management Inquiry - Kealey Design"
      ctaHeading="Want a stronger Google Business Profile?"
      ctaCopy="Send your profile link and target service area. We will review the current setup and recommend the highest-impact improvements."
      intro={[
        "Your Google Business Profile is often the first thing a local customer sees. Before they reach your website, they may read your reviews, look at your photos, compare your services, check your hours, tap for directions, or call directly from the map result. For local businesses in Chatham-Kent and Southwestern Ontario, the profile is not a side asset. It is a major part of the customer journey.",
        "Google Business Profile management keeps that asset accurate, active, and aligned with your website. The work can include category optimization, service descriptions, business descriptions, photos, posts, products, review response systems, Q&A monitoring, profile completeness, and monthly reporting. The goal is to make your business easier to understand and easier to trust from the map pack.",
        "Kealey Design manages Google Business Profile work as part of a broader local SEO system. A profile performs best when it is supported by a strong website, clear service pages, consistent citations, active reviews, and local content. When those pieces reinforce one another, Google receives clearer signals and customers get a more confident buying experience.",
        "This page covers GBP management on its own as a standalone, narrower deliverable. If you also want service-area content, citation cleanup, and conversion tracking built around the profile, our full Local SEO service (linked below) is the broader option.",
      ]}
      sections={[
        {
          heading: "Who This Is For",
          body: [
            "GBP management is for businesses that depend on local visibility. Contractors, HVAC companies, roofers, clinics, restaurants, retailers, trades, and professional services all benefit when their profile is complete, accurate, and active. It is especially important for businesses that receive calls directly from Google Maps.",
            "It is also useful for companies with multiple services or seasonal demand. An HVAC company needs heating content in winter and cooling content in summer. A roofer may need storm damage, replacement, repair, and inspection messaging. A clinic may need treatment-specific services and updated team information.",
          ],
          bullets: [
            "You want more visibility in Google Maps and local pack results.",
            "Your profile is incomplete, inactive, or missing important services.",
            "You have few recent photos, posts, or review responses.",
            "Your profile and website do not describe your services the same way.",
          ],
        },
        {
          heading: "Problems Clients Face",
          body: [
            "Many businesses claim a Google Business Profile and then ignore it. The primary category may be too broad. Service areas may be missing. Services may use internal language instead of customer search language. Photos may be outdated. Reviews may go unanswered. Posts may never be used. Over time, the profile becomes less useful to both Google and customers.",
            "The bigger issue is misalignment. If the profile says one thing, the website says another, and citations show inconsistent business information, local search signals become weaker. Customers also notice. A strong profile should feel like the front door to the same business represented on the website.",
          ],
          bullets: [
            "Incorrect or weak primary and secondary categories.",
            "Missing services, service areas, photos, products, or profile details.",
            "No regular Google Business Profile posting rhythm.",
            "Review requests and responses are inconsistent.",
            "Profile data does not match the website or citations.",
          ],
        },
        {
          heading: "Our GBP Management Process",
          body: [
            "We begin with a profile audit. That includes categories, services, business description, service areas, photos, posts, Q&A, reviews, hours, links, tracking, and alignment with the website. We also review competitors in the local map pack to see what signals may be helping them outperform you.",
            "After the audit, we optimize the profile and establish an update rhythm. Depending on the plan, this can include monthly posts, service updates, photo recommendations, review response support, UTM tracking, performance reporting, and coordination with website content. The profile should not operate in isolation.",
          ],
          bullets: [
            "Audit profile completeness and local competitor signals.",
            "Optimize categories, descriptions, services, links, and service areas.",
            "Create posts for services, projects, offers, and trust-building updates.",
            "Support review response systems and profile freshness.",
            "Report on profile actions, calls, clicks, direction requests, and visibility trends.",
          ],
        },
        {
          heading: "Benefits and Outcomes",
          body: [
            "A better-managed profile can increase trust before a visitor reaches your website. Clear services, recent photos, active posts, and professional review responses show that the business is alive and attentive. This matters when customers are comparing several local options quickly from a phone.",
            "GBP management can also support better local SEO outcomes. It strengthens service relevance, improves profile completeness, encourages review activity, and creates a stronger connection between your website and map presence. The profile becomes a practical lead channel rather than a neglected listing.",
          ],
        },
        {
          heading: "Profile and Website Alignment",
          body: [
            "Google Business Profile management works best when the profile and website reinforce each other. If the profile lists furnace repair, AC installation, and maintenance plans, the website should have pages that explain those services. If the profile targets Chatham-Kent, Windsor, London, Sarnia, or Leamington, the website should include service-area context that proves those markets are real. Consistency reduces confusion for both search engines and customers.",
            "This alignment also improves tracking. Profile links can use campaign parameters so calls, clicks, and website sessions are easier to understand. Service pages can be linked from posts. Photos can support recent projects. Reviews can influence page copy and FAQs. Instead of treating the profile as a separate listing, we treat it as part of the same local search and conversion system.",
          ],
        },
        {
          heading: "Pricing Guidance",
          body: [
            "Google Business Profile management pricing depends on update frequency, number of locations, review support needs, reporting, and whether the work is paired with broader local SEO. A light profile support plan may be enough for a small business, while competitive categories often need GBP management plus website content and local SEO work.",
            "The budget should be based on the value of local leads. If your business wins jobs, bookings, or appointments directly from map searches, profile management is usually one of the highest-leverage monthly marketing activities available.",
            "For many businesses, GBP management is the bridge between referrals and search demand. A person may hear your name, search it on Google, read reviews, look at photos, compare competitors, and tap to call without ever visiting the homepage. Keeping that profile sharp protects the moment when intent is highest and helps your best reputation signals appear before a buyer chooses who to contact.",
          ],
        },
      ]}
      caseStudies={[
        {
          title: "Enhanced Concrete",
          image: "/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg",
          href: "/portfolio/enhanced-concrete-local-seo",
          summary: "A local contractor project where website structure and local visibility work together.",
        },
        {
          title: "Davey Chiropractic",
          image: "/case-studies/Screenshot_20-5-2026_16178_www.daveychiropractic.com.jpeg",
          href: "/portfolio/davey-chiro-conversion-refresh",
          summary: "A clinic refresh that benefits from service clarity, reviews, and local trust signals.",
        },
        {
          title: "Pebbles Gravel",
          image: "/case-studies/Screenshot_20-5-2026_161715_www.pebblesgravel.com.jpeg",
          href: "/portfolio/pebbles-gravel-regional-lead-flow",
          summary: "Regional demand supported by clearer local lead pathways.",
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
