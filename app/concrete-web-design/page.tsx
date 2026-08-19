import type { Metadata } from "next";
import { Images, CalendarClock, PhoneCall, MapPin } from "lucide-react";
import { AuthorityServicePage } from "@/components/AuthorityServicePage";
import { TradeLocationLinks } from "@/components/TradeLocationLinks";
import { topCaseStudies } from "@/lib/topCaseStudies";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const concreteFeatures = [
  {
    Icon: Images,
    label: "Project Photo Galleries",
    copy: "Real driveway, patio, and flatwork photography your future customers can scroll through, not a wall of text.",
  },
  {
    Icon: CalendarClock,
    label: "Seasonal Scheduling Messaging",
    copy: "Book-ahead availability messaging built for pour season, so quote requests don't stall waiting on a reply.",
  },
  {
    Icon: PhoneCall,
    label: "Click-to-Call Visibility",
    copy: "A tap-to-call button built into the header and hero, kept visible for time-sensitive quote requests.",
  },
  {
    Icon: MapPin,
    label: "Clear Service-Area Boundaries",
    copy: "The towns and neighborhoods you actually serve, stated plainly, so visitors don't request a quote you can't fill.",
  },
];

const faqs = [
  {
    question: "What makes concrete web design different?",
    answer:
      "Concrete work is highly visual and heavily seasonal. The site needs to lean on real project photography and handle pour-season scheduling and quote-request volume without losing leads.",
  },
  {
    question: "Do you have real concrete client work to show?",
    answer:
      "Yes. Enhanced Concrete is a real Kealey Design client project — a full brand, website, and local SEO launch as the business expanded into dedicated concrete services. You can see it in our portfolio.",
  },
  {
    question: "Should a concrete website have separate pages for driveways, patios, and flatwork?",
    answer:
      "Yes, when those are distinct services you want more of. Separate pages let each project type carry its own photography and copy, and give you more relevant pages for search.",
  },
  {
    question: "How should a concrete website handle seasonal demand?",
    answer:
      "The site should set expectations clearly during peak pour season — realistic scheduling messaging and a quote form that captures enough detail to prioritize requests without back-and-forth.",
  },
  {
    question: "What should a concrete quote request form ask for?",
    answer:
      "Name, phone, address or town, the type of project (driveway, patio, slab, repair), and rough size or scope. Enough detail to estimate without turning it into a long form.",
  },
  {
    question: "Do you build concrete contractor websites outside Chatham-Kent?",
    answer:
      "Yes. We build concrete contractor web design and local SEO for companies across Chatham-Kent, Windsor, London, Sarnia, Leamington, and Southwestern Ontario.",
  },
];

export const metadata: Metadata = {
  title: "Concrete Contractor Website Design | Kealey Design",
  description:
    "Custom websites for concrete and flatwork contractors — built to showcase real project photography and capture quote requests across Southwestern Ontario.",
  alternates: { canonical: "/concrete-web-design" },
  openGraph: {
    title: "Concrete Contractor Website Design | Kealey Design",
    description:
      "Custom websites for concrete and flatwork contractors — built to showcase real project photography and capture quote requests across Southwestern Ontario.",
    url: "/concrete-web-design",
    type: "website",
    images: [{ url: "/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg" }],
  },
};

export default function ConcreteIndustryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Concrete Contractor Website Design in Southwestern Ontario",
    url: `${siteUrl}/concrete-web-design`,
    provider: { "@type": "LocalBusiness", name: "Kealey Design", url: siteUrl },
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
    serviceType: "Concrete Contractor Website Design and Local SEO",
  };

  return (
    <AuthorityServicePage
      eyebrow="CONCRETE INDUSTRY"
      title="Concrete Contractor Website Design for Southwestern Ontario Companies"
      description="A portfolio-heavy website strategy for concrete and flatwork contractors, built around real project photography, seasonal scheduling, and fast quote requests."
      imageSrc="/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg"
      imageAlt="Enhanced Concrete website design case study by Kealey Design"
      breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Concrete Web Design" }]}
      iconFeatures={concreteFeatures}
      phoneCta={{ label: "Call us now: 519-401-1469", href: "tel:+15194011469" }}
      proofImage={{
        src: "/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg",
        alt: "Enhanced Concrete website design case study by Kealey Design",
        caption:
          "Enhanced Concrete — a real Chatham-Kent concrete contractor site built by Kealey Design, with project photography and a structure built for quote requests.",
        href: "/portfolio/enhanced-concrete-local-seo",
      }}
      ctaLabel="Plan your concrete website"
      ctaSubject="New Concrete Industry Page Inquiry - Kealey Design"
      ctaHeading="Want more concrete quote requests from Google?"
      ctaCopy="Tell us your service area and the concrete work you want more of. We will map your website and local SEO opportunities."
      intro={[
        "Concrete work sells on what people can see: a finished driveway, a clean patio edge, a stamped and sealed slab. That makes concrete web design different from most trade sites — it can and should carry more photography than a typical contractor page, because the photography is doing the persuading.",
        "Concrete demand is also heavily seasonal. Pour season brings a rush of quote requests, and a website that doesn't set realistic scheduling expectations or capture enough project detail up front creates avoidable back-and-forth during the busiest weeks of the year.",
        "Kealey Design has already built this for a real concrete client. Enhanced Concrete's site, shown above, is a genuine example of the approach: real project photography, a clear service structure, and a quote flow built for how concrete customers actually search and decide.",
      ]}
      sections={[
        {
          heading: "What Makes Concrete Websites Different",
          body: [
            "A generic contractor site treats photography as decoration. A concrete site should treat it as the main sales tool — driveways, patios, and flatwork projects are easiest to sell when a visitor can actually see the finished result, ideally organized so they can find work similar to what they're picturing for their own property.",
            "Scheduling is the other differentiator. Concrete work is weather- and season-dependent in a way many trades aren't, and customers researching in early spring or after a competitor's crew is booked solid need the site to set expectations rather than leave them guessing.",
          ],
          bullets: [
            "Photography does more selling on a concrete site than almost any other trade.",
            "Separate project types (driveways, patios, flatwork) deserve their own space.",
            "Seasonal scheduling messaging reduces avoidable back-and-forth during peak demand.",
            "A fast, detailed quote form matters more when request volume spikes seasonally.",
          ],
        },
        {
          heading: "Key Features Every Concrete Website Needs",
          body: [
            "Beyond a visible phone number, a concrete website needs a portfolio-first layout, clear project-type sections, and messaging that sets realistic scheduling expectations during peak season, all built around a quote form detailed enough to prioritize requests without slowing anyone down.",
          ],
          bullets: [
            "A photo-forward layout that puts finished projects front and center.",
            "Separate sections for driveways, patios, slabs, and repairs.",
            "Seasonal scheduling and availability messaging.",
            "A tap-to-call button and a quote form built to capture project scope quickly.",
          ],
        },
        {
          heading: "What's Included in a Kealey Build for Concrete",
          body: [
            "A concrete build from Kealey Design includes a photography-first homepage and service pages, individual pages for your core project types, a service-area page, and a quote form built to capture the details that matter for estimating.",
            "We also structure the site for local search — consistent business information, service pages aligned with what customers and Google's map pack expect, and internal linking connecting your services, portfolio, and service area into one clear structure.",
          ],
        },
        {
          heading: "Portfolio and Example Framing",
          body: [
            "Unlike the other trade pages on our site, this one has a real project behind it. Enhanced Concrete is an actual Kealey Design client, and the site above is genuine proof of the approach — not a borrowed example from a different industry.",
          ],
        },
        {
          heading: "Where We Build Concrete Websites",
          body: [],
          extra: <TradeLocationLinks trade="concrete contractor" />,
        },
      ]}
      caseStudies={topCaseStudies}
      faqs={faqs}
      schema={schema}
    />
  );
}
