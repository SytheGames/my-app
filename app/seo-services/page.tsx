import type { Metadata } from "next";
import { AuthorityServicePage } from "@/components/AuthorityServicePage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const faqs = [
  {
    question: "What is the difference between SEO and local SEO?",
    answer:
      "Local SEO focuses on map visibility and service-area searches. SEO services are broader and can include technical SEO, content strategy, internal linking, on-page optimization, topical authority, and organic growth beyond map results.",
  },
  {
    question: "Do you offer one-time SEO audits?",
    answer:
      "Yes. A one-time audit can identify technical issues, content gaps, metadata problems, thin pages, internal linking opportunities, and tracking problems before a monthly campaign begins.",
  },
  {
    question: "Can SEO help a new website?",
    answer:
      "Yes, but expectations need to be realistic. A new website can launch with clean structure, strong content, and proper tracking, then build authority through consistent service pages, local pages, and helpful content.",
  },
  {
    question: "Do you write SEO content?",
    answer:
      "Yes. We can plan and write service pages, location pages, FAQs, blog content, comparison pages, and supporting resources that match search intent and business goals.",
  },
  {
    question: "How are SEO results measured?",
    answer:
      "We measure visibility, rankings, clicks, impressions, organic conversions, calls, form submissions, content performance, technical health, and lead quality where tracking is available.",
  },
  {
    question: "Is SEO better than paid ads?",
    answer:
      "They solve different problems. SEO builds long-term visibility and authority. Paid ads can create faster traffic. Many businesses benefit from both once the website converts properly.",
  },
];

export const metadata: Metadata = {
  title: "SEO Services in Chatham-Kent",
  description:
    "SEO services in Chatham-Kent including technical SEO, content strategy, on-page optimization, local search alignment, internal links, and reporting.",
  alternates: { canonical: "/seo-services" },
  openGraph: {
    title: "SEO Services in Chatham-Kent",
    description:
      "Technical SEO, content strategy, and organic search support for Southwestern Ontario businesses.",
    url: "/seo-services",
    type: "website",
    images: [{ url: "/service-placeholder-seo.svg" }],
  },
};

export default function SeoServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Services in Chatham-Kent",
    url: `${siteUrl}/seo-services`,
    provider: { "@type": "LocalBusiness", name: "Kealey Design", url: siteUrl },
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
    serviceType: "SEO Services",
  };

  return (
    <AuthorityServicePage
      eyebrow="SEO SERVICES"
      title="SEO Services in Chatham-Kent for Businesses Building Authority"
      description="Technical SEO, content strategy, on-page optimization, internal linking, and reporting for companies that want stronger organic visibility and better qualified traffic."
      imageSrc="/service-placeholder-seo.svg"
      imageAlt="SEO service illustration"
      ctaLabel="Get an SEO audit"
      ctaSubject="New SEO Services Authority Page Inquiry - Kealey Design"
      ctaHeading="Need a clearer SEO plan?"
      ctaCopy="Send your website and target services. We will review the search opportunity and recommend the practical next step."
      intro={[
        "SEO services help your website become easier for search engines to understand and easier for customers to find. Local SEO is one important part of that work, but broader SEO includes technical health, content depth, internal links, site architecture, metadata, schema, content pruning, search intent alignment, and ongoing reporting. For a growing business, SEO is how the website becomes more than a brochure.",
        "Kealey Design provides SEO services for Chatham-Kent and Southwestern Ontario businesses that want stronger organic visibility and better qualified traffic. The work is especially valuable when your site already receives some traffic but does not rank for enough high-intent services, when competitors have deeper content, or when your existing pages are too thin to earn trust from Google or visitors.",
        "The best SEO strategy is specific. A generic list of keywords is not enough. We look at what customers search before they contact a business, what pages competitors use to capture that demand, what your current site can realistically rank for, and what content will support the sales process after the visitor lands. That is how SEO becomes a practical growth channel.",
      ]}
      sections={[
        {
          heading: "Who This Is For",
          body: [
            "SEO services are a good fit for businesses that want to build durable search visibility over time. This includes service companies, contractors, healthcare clinics, professional firms, ecommerce brands, and local businesses that need more than one page to explain what they do. If your best customers research before buying, SEO helps your business appear during that research.",
            "This service is also useful for businesses planning a redesign. SEO should not be an afterthought that gets bolted onto a finished site. The page structure, internal links, headings, metadata, service hierarchy, and content plan should be considered before design and development are complete.",
          ],
          bullets: [
            "Your website has thin service pages or weak location coverage.",
            "Competitors rank with deeper content and clearer page structure.",
            "You need technical cleanup before investing in content.",
            "You want organic traffic that supports calls, forms, bookings, or sales.",
          ],
        },
        {
          heading: "Problems Clients Face",
          body: [
            "Many websites are built without a search strategy. Pages are created around navigation labels rather than customer intent. Metadata is duplicated. Blog posts exist but do not support service pages. Important pages are hidden deep in the site. Old content competes with new content. The result is a site that looks fine but gives search engines mixed signals.",
            "Another issue is shallow topical authority. Google is more likely to trust a website that covers a subject clearly and specifically. If a business offers website design, local SEO, maintenance, and Google Business Profile management, each service needs enough depth to stand on its own. If an HVAC company wants to rank for repair, installation, maintenance, and emergency service, those topics need real pages with helpful detail.",
          ],
          bullets: [
            "Duplicate or missing titles and descriptions.",
            "Weak internal linking between related services, industries, and locations.",
            "No keyword-to-page map or content prioritization.",
            "Slow pages, oversized images, or technical crawl issues.",
            "Blog content that does not support commercial pages.",
          ],
        },
        {
          heading: "Our SEO Process",
          body: [
            "The process begins with an audit of technical health, search visibility, page structure, content gaps, metadata, internal links, and conversion tracking. We identify what is blocking performance and what opportunities have the strongest business value. Not every keyword deserves a page. Not every page deserves equal attention. Prioritization is where SEO becomes useful.",
            "Next, we build a search roadmap. This can include rewriting core service pages, creating location pages, improving FAQs, adding schema, building supporting articles, optimizing existing content, cleaning internal links, and setting up reporting. The work can be completed as a one-time project or as an ongoing monthly engagement.",
          ],
          bullets: [
            "Technical SEO audit and cleanup.",
            "Keyword and search-intent mapping.",
            "On-page optimization for core money pages.",
            "Content strategy for service, location, industry, and support pages.",
            "Monthly reporting tied to rankings, traffic, conversions, and lead quality.",
          ],
        },
        {
          heading: "Benefits and Outcomes",
          body: [
            "Strong SEO improves more than rankings. It clarifies your website for buyers. Better page titles increase click-through. Better service content reduces sales friction. Better internal links help visitors move from broad research to specific action. Better technical performance supports both search engines and humans. When the work is done correctly, the website becomes easier to understand at every level.",
            "For local and regional businesses, SEO also helps build authority across a market. A strong homepage, deep service pages, location pages, industry pages, case studies, and FAQs create a web of relevance. That web supports Google, but it also supports sales conversations because prospects can see proof, expertise, and specificity before they reach out.",
          ],
        },
        {
          heading: "Semantic Keywords and Topical Authority",
          body: [
            "Modern SEO is less about repeating one exact phrase and more about covering a topic with enough depth that the page deserves to rank. For a web design service page, that might include conversion rate, responsive design, mobile UX, page speed, service pages, analytics, calls-to-action, schema, accessibility, and local SEO. For an SEO services page, it includes crawlability, indexing, metadata, search intent, content clusters, internal links, topical maps, reporting, and lead quality.",
            "This is where many small business sites are weak. They publish a few short pages and hope Google understands the business. A better approach is to create a clear content system: homepage for broad authority, service pages for commercial intent, location pages for regional relevance, industry pages for specificity, case studies for proof, and FAQs for objections. Those pieces help each other when they are internally linked and written around real customer questions.",
          ],
        },
        {
          heading: "Pricing Guidance",
          body: [
            "SEO pricing depends on the size of the site, the competitiveness of the market, the technical condition of the website, and the amount of content needed. A one-time audit or optimization project may be appropriate for a smaller site. Ongoing SEO is better when the business needs content development, reporting, technical maintenance, and monthly improvement.",
            "A practical monthly SEO campaign for a small or regional business often starts around CA$750 to CA$1,500, while deeper growth work can move beyond that depending on the number of pages, industries, locations, and content assets involved. The best budget is tied to the value of the leads and the size of the opportunity.",
          ],
        },
      ]}
      caseStudies={[
        {
          title: "Enhanced Concrete",
          href: "/portfolio/enhanced-concrete-local-seo",
          summary: "A contractor site structured around local search demand and service clarity.",
        },
        {
          title: "Pebbles Gravel",
          href: "/portfolio/pebbles-gravel-regional-lead-flow",
          summary: "Regional visibility improvements through clearer content and lead pathways.",
        },
        {
          title: "ARCstage",
          href: "/portfolio/arcstage-growth-rebuild",
          summary: "A rebuild that clarified positioning, portfolio content, and inquiry flow.",
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
