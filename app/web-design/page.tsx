import type { Metadata } from "next";
import { AuthorityServicePage } from "@/components/AuthorityServicePage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const faqs = [
  {
    question: "How much does web design cost in Chatham-Kent?",
    answer:
      "Most professional small business websites start around CA$2,500 to CA$4,000 for a focused launch package. Larger custom websites, industry landing pages, SEO planning, copywriting, and conversion tracking are scoped by proposal.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "A focused website can often launch in 4 to 6 weeks when content is ready. Larger builds with deeper service pages, location pages, custom copy, and integrations usually take 6 to 12 weeks.",
  },
  {
    question: "Do you write the website copy?",
    answer:
      "Yes. We can help with page strategy, service copy, calls-to-action, FAQs, trust sections, and local SEO language so the site explains your offer clearly and supports search visibility.",
  },
  {
    question: "Will my website be optimized for Google?",
    answer:
      "Every build includes SEO fundamentals: page titles, metadata, heading structure, internal links, image optimization, schema where useful, mobile performance, and a structure that supports future content.",
  },
  {
    question: "Can you redesign my current website?",
    answer:
      "Yes. We review what should be kept, what should be rewritten, and what needs to be redirected or restructured so the redesign improves the business without throwing away useful authority.",
  },
  {
    question: "Do you work outside Chatham?",
    answer:
      "Yes. We work with businesses across Chatham-Kent, Windsor, London, Sarnia, Leamington, and Southwestern Ontario.",
  },
];

export const metadata: Metadata = {
  title: "Web Design in Chatham-Kent",
  description:
    "Custom web design in Chatham-Kent for service businesses that need stronger messaging, local SEO structure, mobile performance, and better lead generation.",
  alternates: { canonical: "/web-design" },
  openGraph: {
    title: "Web Design in Chatham-Kent",
    description:
      "Conversion-focused website design for Chatham-Kent and Southwestern Ontario businesses.",
    url: "/web-design",
    type: "website",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function WebDesignPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design in Chatham-Kent",
    url: `${siteUrl}/web-design`,
    provider: { "@type": "LocalBusiness", name: "Kealey Design", url: siteUrl },
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
    serviceType: "Web Design",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design Services",
      itemListElement: [
        { "@type": "Offer", name: "Small Business Website Design" },
        { "@type": "Offer", name: "Website Redesign" },
        { "@type": "Offer", name: "Service Business Landing Pages" },
      ],
    },
  };

  return (
    <AuthorityServicePage
      eyebrow="WEB DESIGN"
      title="Web Design in Chatham-Kent for Local Service Businesses"
      description="Custom websites built to improve trust, explain your services clearly, and turn more visitors from Chatham-Kent and Southwestern Ontario into qualified inquiries."
      imageSrc="/og-image.jpg"
      imageAlt="Kealey Design website portfolio preview"
      breadcrumbs={[{ label: "Web Design" }]}
      ctaLabel="Start your web design project"
      ctaSubject="New Web Design Authority Page Inquiry - Kealey Design"
      ctaHeading="Ready to build a website that works harder?"
      ctaCopy="Tell us about your business, service area, and the leads you want more of. We will review your current site and outline the strongest next step."
      intro={[
        "Your website is often the first serious sales conversation a customer has with your business. Before they call, request a quote, book an appointment, or compare you with a competitor, they scan your site for signs of clarity and credibility. A strong website answers their questions quickly: what do you do, where do you work, why should they trust you, and how do they take the next step?",
        "Kealey Design builds web design systems for small businesses and service companies across Chatham-Kent and Southwestern Ontario. The work is not just visual. A high-performing website needs clean information architecture, local search relevance, conversion-focused copy, fast mobile layouts, proof points, forms that are easy to use, and tracking that shows which pages are producing inquiries.",
        "This page explains how we approach web design for businesses in Chatham, Wallaceburg, Tilbury, Blenheim, Ridgetown, Windsor, London, Sarnia, Leamington, and nearby markets. If your current website looks dated, loads slowly, hides your services, or fails to produce leads, the problem is rarely one single design detail. It is usually the structure behind the site.",
      ]}
      sections={[
        {
          heading: "Who This Is For",
          body: [
            "This service is built for businesses that need the website to support revenue, not just exist online. That includes contractors, roofers, HVAC companies, clinics, trades, professional service firms, ecommerce brands, and local organizations with a real service area. If prospects already ask for referrals, search Google before calling, or compare multiple providers in your category, your website needs to make that decision easier.",
            "A good-fit client usually has one of three needs. They may need a first professional website that gives the business a credible foundation. They may need a redesign because the old site no longer reflects the quality of the company. Or they may need a stronger lead-generation system that combines web design with local SEO, Google Business Profile strategy, and better conversion tracking.",
          ],
          bullets: [
            "You serve a defined local or regional market and want more qualified inquiries.",
            "Your existing site looks generic, outdated, slow, or hard to use on mobile.",
            "Your service pages do not explain what you do with enough specificity.",
            "You want a site that can support SEO, paid traffic, referrals, and sales conversations.",
          ],
        },
        {
          heading: "Problems Clients Face Before a Redesign",
          body: [
            "Most underperforming websites do not fail because the logo is too small or the colour palette is slightly off. They fail because visitors cannot understand the offer quickly enough. The homepage tries to say everything at once, service pages are thin, reviews are buried, the phone number is hard to tap, and the site is not structured around the actual questions buyers ask before reaching out.",
            "Search visibility also suffers when the site lacks depth. A single generic services page will rarely rank across multiple towns and service lines. A contractor who wants to rank in Chatham, Windsor, and London needs service and location architecture that gives Google useful, crawlable pages. A clinic needs treatment pages that match patient intent. A roofer needs roof repair, replacement, storm damage, and emergency service content, not a single paragraph that says 'we do roofing'.",
          ],
          bullets: [
            "Unclear value proposition above the fold.",
            "Weak service pages with little local or industry-specific detail.",
            "Poor mobile experience for visitors who are ready to call now.",
            "Missing testimonials, project proof, staff credibility, or warranty information.",
            "No analytics, conversion tracking, or Search Console baseline after launch.",
          ],
        },
        {
          heading: "Our Web Design Process",
          body: [
            "The process starts with discovery. We look at your current website, service mix, target locations, best customers, competitors, and search opportunities. This gives us a practical map of what the website needs to accomplish. A web design project for a local service company should not begin with random page mockups. It should begin with a clear understanding of customer intent and business priorities.",
            "Next, we plan the structure. That includes homepage sections, primary service pages, supporting service pages, location pages, calls-to-action, internal links, trust blocks, forms, and proof elements. The build then turns that plan into a fast, responsive website with clean visual hierarchy. After launch, we can connect analytics, Search Console, Google Business Profile, form tracking, and phone-click tracking so future improvements are based on evidence.",
          ],
          bullets: [
            "Audit and discovery.",
            "Search and service architecture.",
            "Copywriting and page planning.",
            "Design, development, testing, and launch.",
            "Tracking setup and post-launch optimization.",
          ],
        },
        {
          heading: "Benefits and Outcomes",
          body: [
            "The first outcome is clarity. A visitor should understand your business faster than they did before. The second outcome is trust. Reviews, project examples, team details, credentials, guarantees, financing, and service-area proof all help reduce hesitation. The third outcome is action. Every important page should make the next step obvious, whether that is calling, booking, requesting a quote, or filling out a form.",
            "Good web design also improves the foundation for SEO. Google can better understand your services when the site has clear pages, headings, internal links, and local context. Visitors stay longer when pages load quickly and answer questions. Sales conversations improve when prospects arrive already educated. A website cannot fix every business problem, but it can remove a surprising amount of friction from the path between search and inquiry.",
          ],
        },
        {
          heading: "Pricing Guidance",
          body: [
            "Website pricing depends on page count, content needs, design complexity, integrations, SEO depth, and how much conversion strategy is included. A focused small business website often starts around CA$2,500 to CA$4,000. Larger builds with custom service pages, location content, SEO planning, copywriting, analytics, and ongoing optimization are scoped by proposal.",
            "The important question is not only what the site costs. It is what the current website is costing you in missed inquiries, weak trust, poor visibility, and sales conversations that never happen. A better website should give your business a stronger platform for referrals, organic search, Google Business Profile traffic, paid ads, and direct outreach.",
          ],
        },
      ]}
      caseStudies={[
        {
          title: "Enhanced Concrete",
          href: "/portfolio/enhanced-concrete-local-seo",
          summary: "A local contractor website with stronger service-area messaging and lead-focused structure.",
        },
        {
          title: "ARCstage",
          href: "/portfolio/arcstage-growth-rebuild",
          summary: "A portfolio rebuild that made the company easier to evaluate and contact.",
        },
        {
          title: "Davey Chiropractic",
          href: "/portfolio/davey-chiro-conversion-refresh",
          summary: "A clinic website refresh focused on trust, service clarity, and patient action paths.",
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
