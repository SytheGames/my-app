import type { Metadata } from "next";
import { AuthorityServicePage } from "@/components/AuthorityServicePage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const faqs = [
  {
    question: "What is local SEO?",
    answer:
      "Local SEO improves how your business appears in Google Maps and local organic search for service-plus-location searches, such as contractor in Chatham or HVAC company near me.",
  },
  {
    question: "How long does local SEO take?",
    answer:
      "Early improvements can show within 4 to 8 weeks, especially in Google Business Profile activity. Stronger rankings and steadier lead flow usually compound over 3 to 6 months.",
  },
  {
    question: "Do you manage Google Business Profiles?",
    answer:
      "Yes. Google Business Profile optimization and management can include categories, services, descriptions, photos, posts, products, review strategy, and performance reporting.",
  },
  {
    question: "Do I need location pages?",
    answer:
      "If you serve multiple towns or cities, location pages can help when they are useful, specific, and connected to your real service area. Thin city-swapped pages are not the goal.",
  },
  {
    question: "How do you report on local SEO?",
    answer:
      "Reporting can include Google Business Profile actions, Search Console data, rankings, calls, form submissions, conversion rates, and notes about lead quality.",
  },
  {
    question: "Can local SEO work with a new website?",
    answer:
      "Yes. A new website can be built with the right structure from day one, including service pages, location signals, schema, internal links, and tracking.",
  },
];

export const metadata: Metadata = {
  title: "Local SEO in Chatham-Kent",
  description:
    "Local SEO in Chatham-Kent for service businesses that need stronger Google Maps visibility, service-area pages, reviews, and lead tracking.",
  alternates: { canonical: "/local-seo" },
  openGraph: {
    title: "Local SEO in Chatham-Kent",
    description:
      "Google Maps optimization, service-area SEO, local content, and conversion reporting for Southwestern Ontario businesses.",
    url: "/local-seo",
    type: "website",
    images: [{ url: "/case-studies/Screenshot_20-5-2026_16178_www.daveychiropractic.com.jpeg" }],
  },
};

export default function LocalSeoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Local SEO in Chatham-Kent",
    url: `${siteUrl}/local-seo`,
    provider: { "@type": "LocalBusiness", name: "Kealey Design", url: siteUrl },
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
    serviceType: "Local SEO",
  };

  return (
    <AuthorityServicePage
      eyebrow="LOCAL SEO"
      title="Local SEO in Chatham-Kent That Connects Rankings to Leads"
      description="Local SEO services for businesses that want more visibility in Google Maps, stronger service-area relevance, and clearer reporting on calls, forms, and qualified inquiries."
      imageSrc="/case-studies/Screenshot_20-5-2026_16178_www.daveychiropractic.com.jpeg"
      imageAlt="Local SEO website and search visibility example"
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Local SEO" }]}
      relatedLinks={[
        { label: "GBP Management", href: "/google-business-profile-management" },
        { label: "SEO Services", href: "/seo-services" },
        { label: "Portfolio", href: "/portfolio" },
      ]}
      ctaLabel="Plan your local SEO campaign"
      ctaSubject="New Local SEO Authority Page Inquiry - Kealey Design"
      ctaHeading="Want more local search visibility?"
      ctaCopy="Tell us your services and target towns. We will review your current local search foundation and recommend the strongest next step."
      intro={[
        "Local SEO is the work of making your business more visible when nearby customers search for the services you sell. For a Chatham-Kent business, that might mean showing up for searches in Chatham, Wallaceburg, Tilbury, Blenheim, Ridgetown, Dresden, Windsor, London, Sarnia, Leamington, or the broader Southwestern Ontario region. The best local SEO strategy connects Google Business Profile optimization, service pages, location content, reviews, citations, website performance, and conversion tracking.",
        "Kealey Design approaches local SEO as a lead-generation system. Rankings matter, but a ranking that never produces a call or form submission is not enough. We look at what people are searching, whether your website answers that intent, whether your Google Business Profile reinforces the same services and locations, and whether your reporting can show which work is producing real inquiries.",
        "This matters because local search is often high intent. Someone searching for a roofer, HVAC company, chiropractor, contractor, or web designer in a specific city is usually closer to buying than someone casually browsing social media. If your business is missing from the map pack, has weak service pages, or sends visitors to a confusing website, competitors can win those leads even if your company is the better choice.",
        "This is the full local SEO service, covering the profile, the website, and the reporting together. If you only need ongoing Google Business Profile upkeep on its own, our narrower GBP Management service (linked below) may be the better fit. If your goal is broader technical and content SEO beyond map visibility, see SEO Services instead.",
      ]}
      sections={[
        {
          heading: "Who This Is For",
          body: [
            "Local SEO is a strong fit for businesses with a defined service area and real customer demand in Google. It works especially well for contractors, home service companies, healthcare clinics, trades, professional services, restaurants, local retailers, and businesses that rely on calls, appointment requests, quote forms, or walk-in traffic.",
            "It is also useful for businesses that already receive referrals but want Google to support that reputation. A customer may hear your name from a friend, then search your business, compare reviews, check your website, and look at competitors before calling. Local SEO makes sure that entire discovery path feels credible and complete.",
          ],
          bullets: [
            "You want more calls or form submissions from Google Maps and local organic search.",
            "You serve multiple towns and need a clearer service-area strategy.",
            "Your Google Business Profile is incomplete, inactive, or inconsistent with your website.",
            "You have reviews and project proof but they are not helping your search visibility enough.",
          ],
        },
        {
          heading: "Problems Local Businesses Face",
          body: [
            "Many local businesses have fragments of SEO in place but no connected system. The Google Business Profile may list the wrong category. Service descriptions may be thin. The website may talk about the company but not the specific services customers search. The contact form may work, but no one knows which page generated the lead. Citations may show old phone numbers or inconsistent address formats across the web.",
            "Another common problem is weak topical depth. A business wants to rank for several services across several towns, but the website has only one generic service page. Google has little reason to treat that page as the best result for specific searches. Specific, helpful pages create more entry points for searchers and more internal linking context for Google.",
          ],
          bullets: [
            "Missing or poorly chosen Google Business Profile categories.",
            "No local landing pages for important towns or service areas.",
            "Reviews are not being requested, answered, or used as trust signals.",
            "Website pages do not match the language customers use in search.",
            "Tracking does not separate traffic, calls, forms, and qualified leads.",
          ],
        },
        {
          heading: "Our Local SEO Process",
          body: [
            "The process starts with a visibility audit. We review your Google Business Profile, website structure, service pages, location signals, citations, reviews, competitors, and current tracking. This audit identifies whether the fastest gains are likely to come from profile cleanup, content expansion, technical fixes, review systems, or conversion improvements.",
            "From there, we build a local SEO plan around priority services and towns. The plan can include Google Business Profile optimization, citation cleanup, service-page improvements, location pages, internal linking, schema, review acquisition support, content updates, and reporting. The goal is not to create endless pages. The goal is to build the right pages and signals for the markets that can produce revenue.",
          ],
          bullets: [
            "Audit search visibility, profile quality, citations, content, and tracking.",
            "Prioritize high-value service and location opportunities.",
            "Optimize Google Business Profile and website alignment.",
            "Build or improve service-area pages and internal links.",
            "Report on rankings, actions, calls, forms, and lead quality.",
          ],
        },
        {
          heading: "Benefits and Outcomes",
          body: [
            "A stronger local SEO foundation can improve map visibility, increase qualified website visits, support more phone calls, and make your business look more credible during comparison. It can also make other marketing work better. Paid ads convert better when the landing page is strong. Referrals trust you faster when reviews and service pages are clear. Sales conversations improve when prospects already understand what you do.",
            "The compounding value comes from consistency. Google Business Profile updates, review activity, content expansion, internal links, and better pages all reinforce one another over time. Instead of chasing one keyword, we build a local search footprint that covers the way real customers search across services, towns, problems, and buying stages.",
          ],
        },
        {
          heading: "Local References and Semantic Coverage",
          body: [
            "A Chatham-Kent local SEO campaign should not rely on one city name repeated across the website. Real customers search in different ways: Chatham, Chatham-Kent, Wallaceburg, Tilbury, Blenheim, Ridgetown, Dresden, Windsor, London, Sarnia, Leamington, near me, open now, emergency, quote, best, reviews, and service-specific phrases. The content needs to reflect those patterns naturally while staying useful to the person reading it.",
            "Semantic coverage means building pages around related ideas, not stuffing keywords. A roofing company may need storm damage, roof repair, roof replacement, insurance, metal roofing, flat roofing, emergency leaks, warranties, and service areas. An HVAC company may need furnace repair, AC installation, heat pumps, maintenance plans, emergency calls, and seasonal offers. The more clearly the website covers the real topic, the easier it is for Google and customers to understand why the business is relevant.",
          ],
        },
        {
          heading: "Pricing Guidance",
          body: [
            "Local SEO pricing depends on competition, the number of target locations, the state of the current website, and how much content or conversion work is needed. A focused local SEO foundation often starts around CA$650 to CA$950 per month. More competitive campaigns that include service-page expansion, content planning, reporting, and conversion optimization often range from CA$1,200 to CA$2,400 per month.",
            "The right budget should be based on the value of a lead, the lifetime value of a customer, and the competitiveness of the search market. A roofing, HVAC, legal, clinic, or contractor lead may justify deeper work because one qualified inquiry can be worth far more than the monthly SEO investment.",
          ],
        },
      ]}
      caseStudies={[
        {
          title: "J. Amelia Law",
          image: "/case-studies/Screenshot_1-8-2026_42952_jamelialaw.ca.jpeg",
          href: "/portfolio/j-amelia-law-rebrand-website-launch",
          summary: "A law firm rebrand that preserved existing search rankings through a full domain and name migration.",
        },
        {
          title: "Enhanced Concrete",
          image: "/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg",
          href: "/portfolio/enhanced-concrete-local-seo",
          summary: "Local SEO and service-area structure for a contractor serving Chatham-Kent communities.",
        },
        {
          title: "Davey Chiropractic",
          image: "/case-studies/Screenshot_20-5-2026_16178_www.daveychiropractic.com.jpeg",
          href: "/portfolio/davey-chiro-conversion-refresh",
          summary: "A clinic website refresh with clearer content and stronger local trust signals.",
        },
        {
          title: "Pebbles Gravel",
          image: "/case-studies/Screenshot_20-5-2026_161715_www.pebblesgravel.com.jpeg",
          href: "/portfolio/pebbles-gravel-regional-lead-flow",
          summary: "Regional lead-flow improvements for a business with location-specific demand.",
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
