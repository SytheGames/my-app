import type { Metadata } from "next";
import { AuthorityServicePage } from "@/components/AuthorityServicePage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const faqs = [
  {
    question: "What makes HVAC web design different?",
    answer:
      "HVAC websites need to handle urgency, seasonality, mobile calls, service-area searches, trust signals, maintenance plans, repair pages, installation pages, and emergency conversion paths.",
  },
  {
    question: "Should HVAC companies have separate service pages?",
    answer:
      "Yes. Furnace repair, AC repair, installation, maintenance, indoor air quality, emergency service, and commercial HVAC often deserve separate pages when they are meaningful services.",
  },
  {
    question: "Can an HVAC website improve map pack visibility?",
    answer:
      "A website cannot control rankings by itself, but strong service pages, location relevance, reviews, Google Business Profile alignment, and conversion signals can support local SEO.",
  },
  {
    question: "What should an HVAC quote form ask?",
    answer:
      "It should ask for name, phone, email, location, service needed, urgency, system type if known, and a short message. Keep it simple enough for mobile users.",
  },
  {
    question: "How should HVAC websites handle seasonality?",
    answer:
      "The site should support seasonal pages and calls-to-action for furnace repair in colder months, AC service in warmer months, maintenance plans, and emergency support year-round.",
  },
  {
    question: "Do you build HVAC pages outside Chatham-Kent?",
    answer:
      "Yes. We can build HVAC web design and local SEO pages for companies across Chatham-Kent, Windsor, London, Sarnia, Leamington, and Southwestern Ontario.",
  },
];

export const metadata: Metadata = {
  title: "HVAC Web Design in Southwestern Ontario",
  description:
    "HVAC web design and local SEO in Southwestern Ontario. Build pages for repair, installation, maintenance, map pack visibility, seasonality, and quote requests.",
  alternates: { canonical: "/industries/hvac" },
  openGraph: {
    title: "HVAC Web Design in Southwestern Ontario",
    description:
      "Industry-specific HVAC web design for mobile calls, local map visibility, seasonal demand, and quote request funnels.",
    url: "/industries/hvac",
    type: "website",
    images: [{ url: "/images/AdobeStock_65737788.jpeg" }],
  },
};

export default function HvacIndustryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "HVAC Web Design in Southwestern Ontario",
    url: `${siteUrl}/industries/hvac`,
    provider: { "@type": "LocalBusiness", name: "Kealey Design", url: siteUrl },
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
    serviceType: "HVAC Web Design and Local SEO",
  };

  return (
    <AuthorityServicePage
      eyebrow="HVAC INDUSTRY"
      title="HVAC Web Design and Local SEO for Southwestern Ontario Companies"
      description="A specific web design and SEO strategy for HVAC companies that need more service calls, better mobile conversion, stronger map pack visibility, and seasonal lead flow."
      imageSrc="/images/AdobeStock_65737788.jpeg"
      imageAlt="Residential HVAC units beside a home"
      ctaLabel="Plan your HVAC website"
      ctaSubject="New HVAC Industry Page Inquiry - Kealey Design"
      ctaHeading="Want more HVAC calls from Google?"
      ctaCopy="Tell us your HVAC service area and the jobs you want more of. We will map your website and local SEO opportunities."
      intro={[
        "HVAC web design needs to be more specific than a general contractor website. Customers are often searching with urgency, comparing companies from a phone, and trying to solve a seasonal problem quickly. In winter, they may need furnace repair. In summer, they may need AC service. During shoulder seasons, they may be comparing maintenance plans, heat pumps, indoor air quality, or replacement options.",
        "For an HVAC company in Chatham-Kent, Windsor, London, Sarnia, Leamington, or Southwestern Ontario, the website has to support both emergency demand and planned projects. That means click-to-call buttons, clear service pages, local map pack signals, reviews, financing or maintenance plan messaging, quote request forms, and a mobile-first layout that does not bury the phone number.",
        "Kealey Design builds HVAC web design and SEO pages around the way homeowners actually search. The goal is to make your company easier to find, easier to trust, and easier to contact when the need is urgent. A beautiful website that hides emergency service, loads slowly on mobile, or fails to explain your service area will lose leads to a simpler competitor site that answers the problem faster.",
      ]}
      sections={[
        {
          heading: "HVAC-Specific Pain Points",
          body: [
            "HVAC companies face a difficult mix of urgency, trust, and seasonality. A customer with no heat does not want to read a long brand story before they find the emergency number. A homeowner comparing AC replacement wants proof, financing context, warranty information, and confidence that the company can handle the install properly. A business owner looking for commercial service may care about response time, maintenance agreements, and experience.",
            "A generic website cannot handle all of those search intents well. The site needs dedicated pathways for repair, replacement, installation, maintenance, emergency service, and service areas. It also needs to show reviews, licenses, team credibility, project proof, and equipment or brand familiarity without making the page feel cluttered.",
          ],
          bullets: [
            "Emergency calls require fast mobile conversion.",
            "Replacement jobs need more trust, proof, financing, and warranty detail.",
            "Maintenance plans need recurring-value messaging and simple signup paths.",
            "Seasonal demand changes the most important services throughout the year.",
            "Service-area visibility matters because HVAC searches are highly local.",
          ],
        },
        {
          heading: "Mobile Conversion Optimization",
          body: [
            "Most urgent HVAC searches happen on a phone. That means the mobile version of the site is not secondary; it is the primary sales path. Visitors should see what you do, where you work, and how to call without pinching, hunting, or waiting through a slow page load. Tap targets need to be obvious. Forms need to be short. Service pages need to answer the immediate question quickly.",
            "Mobile conversion also depends on trust. A sticky call button can help, but a visitor still needs confidence before calling. Reviews near the top of the page, emergency service language, local service areas, technician credibility, and simple explanations of what happens next can reduce hesitation.",
          ],
          bullets: [
            "Click-to-call buttons in the header, hero, and service pages.",
            "Short forms for quote requests, inspections, and emergency contact.",
            "Fast image loading and clean layouts for lower-friction mobile browsing.",
            "Trust signals visible before the visitor reaches the bottom of the page.",
          ],
        },
        {
          heading: "Local Map Pack Discussion",
          body: [
            "The Google map pack is one of the most important search surfaces for HVAC companies. When someone searches for furnace repair near me or AC repair in Chatham, they often see map results before traditional organic listings. The website, Google Business Profile, reviews, proximity, categories, services, and citations all contribute to the local search picture.",
            "An HVAC website should support the profile with clear service pages, consistent business information, local content, and internal links. The Google Business Profile should reinforce the same services with accurate categories, service descriptions, photos, posts, and review activity. When the profile and website tell the same story, the business becomes easier for both customers and search engines to understand.",
          ],
          bullets: [
            "Align Google Business Profile categories with actual HVAC services.",
            "Create service pages that match profile services and customer searches.",
            "Use location-specific content for priority towns without thin duplicates.",
            "Build a review request and response process that supports trust.",
          ],
        },
        {
          heading: "Quote Request Funnels",
          body: [
            "Not every HVAC lead is the same. A no-heat emergency call should route differently than a planned furnace replacement estimate. A maintenance plan inquiry has different questions than an AC repair request. The website should create simple funnels for these different intents rather than forcing every visitor through one generic contact page.",
            "A strong funnel starts with the service page. The page explains the problem, signs the homeowner may need service, what happens after they contact you, and why your company is trustworthy. The CTA then matches intent: call now for urgent repair, request an estimate for replacement, schedule maintenance, or ask about commercial service.",
          ],
          bullets: [
            "Emergency repair pages should emphasize speed, phone calls, and availability.",
            "Installation pages should explain options, process, warranties, and financing context.",
            "Maintenance pages should focus on prevention, comfort, efficiency, and recurring plans.",
            "Commercial pages should speak to reliability, response time, and ongoing service agreements.",
          ],
        },
        {
          heading: "Seasonality and SEO Opportunities",
          body: [
            "HVAC demand changes throughout the year, and the website should be ready before the season peaks. Furnace repair pages should be strong before cold weather. AC repair and installation pages should be ready before summer heat. Maintenance content should support spring and fall campaigns. Indoor air quality and heat pump content can support research-based searches year-round.",
            "SEO opportunities often appear where competitors are thin. Many HVAC sites have a homepage and one services page, but no deep pages for furnace repair, AC installation, heat pumps, maintenance plans, ductless systems, or emergency service by town. Building useful pages around those services creates more ways to rank and more relevant landing pages for visitors.",
          ],
          bullets: [
            "Furnace repair and replacement content for winter demand.",
            "AC repair, installation, and tune-up content before summer demand.",
            "Maintenance plan pages for recurring revenue and seasonal campaigns.",
            "Heat pump, indoor air quality, and ductless pages for research-stage visitors.",
          ],
        },
        {
          heading: "Competitor Weaknesses and Before/After Examples",
          body: [
            "A typical weak HVAC website has a broad homepage, a short services page, a phone number, and little else. The visitor has to guess whether the company handles their specific problem, whether they serve the town, and whether they are credible. The before state is vague: 'heating and cooling services' with no clear path for emergency repair, replacement, or maintenance.",
            "The after state is specific. The homepage routes visitors to repair, installation, maintenance, and emergency service. Each service page has relevant copy, FAQs, reviews, service-area links, and a matching CTA. The Google Business Profile aligns with those services. The site tracks calls and forms. Internal links connect HVAC web design, local SEO, service pages, location pages, portfolio proof, and the contact page into one authority structure.",
          ],
        },
        {
          heading: "Pricing Guidance",
          body: [
            "HVAC web design pricing depends on page depth, number of service areas, copywriting, SEO planning, forms, tracking, and whether Google Business Profile management is included. A focused HVAC website may start in the same range as other professional service sites, while a full lead-generation build with service pages, location pages, local SEO, and reporting requires a larger investment.",
            "The better way to think about pricing is by lead value. One qualified furnace replacement, AC installation, or commercial service agreement can be worth a meaningful amount. If the website can help convert more of those searches into calls and estimates, the return can justify deeper strategy than a basic brochure build.",
          ],
        },
      ]}
      caseStudies={[
        {
          title: "Enhanced Concrete",
          href: "/portfolio/enhanced-concrete-local-seo",
          summary: "A local service-business project showing how clearer service-area structure supports lead generation.",
        },
        {
          title: "Davey Chiropractic",
          href: "/portfolio/davey-chiro-conversion-refresh",
          summary: "A mobile-friendly local website refresh with trust and conversion improvements.",
        },
        {
          title: "ARCstage",
          href: "/portfolio/arcstage-growth-rebuild",
          summary: "A rebuild focused on clearer service presentation and inquiry flow.",
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
