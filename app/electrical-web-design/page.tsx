import type { Metadata } from "next";
import { Zap, PhoneCall, MapPin, LayoutList } from "lucide-react";
import { AuthorityServicePage } from "@/components/AuthorityServicePage";
import { TradeLocationLinks } from "@/components/TradeLocationLinks";
import { topCaseStudies } from "@/lib/topCaseStudies";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const electricalFeatures = [
  {
    Icon: Zap,
    label: "EV Charger & Panel Upgrade Pages",
    copy: "Dedicated sections for panel upgrades and EV charger installs, instead of one vague residential and commercial line.",
  },
  {
    Icon: PhoneCall,
    label: "Click-to-Call Visibility",
    copy: "A tap-to-call button built into the header and hero, kept visible for urgent electrical issues.",
  },
  {
    Icon: MapPin,
    label: "Service-Area Clarity",
    copy: "The towns and neighborhoods you serve, stated plainly, so a visitor knows before they call.",
  },
  {
    Icon: LayoutList,
    label: "Structured Service Pages",
    copy: "Separate, clear pages for the jobs you want more of, so homeowners and businesses self-select quickly.",
  },
];

const faqs = [
  {
    question: "What makes electrical web design different?",
    answer:
      "Electrical work carries a heavier trust and safety burden than most trades. The site needs clear, specific service pages, an obvious service area, and a fast path to a call, without feeling flashy or generic.",
  },
  {
    question: "Should EV chargers and panel upgrades get their own pages?",
    answer:
      "Yes. Both are growing, specific search categories. A dedicated page for each converts better than a single generic 'residential and commercial electrical' line and gives you more ways to rank.",
  },
  {
    question: "Can you show my ESA certification or licensing on the site?",
    answer:
      "Yes. We build in dedicated space for your license number, ESA certification, insurance, and reviews, since that's a claim about your business. It's not something we display as a badge on this page.",
  },
  {
    question: "What should an electrical quote form ask for?",
    answer:
      "Name, phone, town, the type of job (panel upgrade, EV charger, repair, new install), and urgency. Keep it short enough to complete from a phone in under a minute.",
  },
  {
    question: "How should an electrical website handle urgent calls?",
    answer:
      "The phone number should stay visible without scrolling, and the copy should make clear whether you handle urgent electrical issues and in which service area.",
  },
  {
    question: "Do you build electrical websites outside Chatham-Kent?",
    answer:
      "Yes. We build electrical contractor web design and local SEO for companies across Chatham-Kent, Windsor, London, Sarnia, Leamington, and Southwestern Ontario.",
  },
];

export const metadata: Metadata = {
  title: "Electrical Contractor Website Design | Kealey Design",
  description:
    "Websites built for electricians in Southwestern Ontario — panel upgrades, EV chargers, and safety-focused trust signals that convert visitors into calls.",
  alternates: { canonical: "/electrical-web-design" },
  openGraph: {
    title: "Electrical Contractor Website Design | Kealey Design",
    description:
      "Websites built for electricians in Southwestern Ontario — panel upgrades, EV chargers, and safety-focused trust signals that convert visitors into calls.",
    url: "/electrical-web-design",
    type: "website",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function ElectricalIndustryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Electrical Contractor Website Design in Southwestern Ontario",
    url: `${siteUrl}/electrical-web-design`,
    provider: { "@type": "LocalBusiness", name: "Kealey Design", url: siteUrl },
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
    serviceType: "Electrical Contractor Website Design and Local SEO",
  };

  return (
    <AuthorityServicePage
      eyebrow="ELECTRICAL INDUSTRY"
      title="Electrical Contractor Website Design for Southwestern Ontario Companies"
      description="An authoritative, safety-forward website strategy for electricians — built around panel upgrades, EV chargers, and a fast, trustworthy path to a call."
      imageSrc="/og-image.jpg"
      imageAlt="Electrical contractor website design services — Kealey Design"
      breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Electrical Web Design" }]}
      iconFeatures={electricalFeatures}
      phoneCta={{ label: "Call us now: 519-401-1469", href: "tel:+15194011469" }}
      ctaLabel="Plan your electrical website"
      ctaSubject="New Electrical Industry Page Inquiry - Kealey Design"
      ctaHeading="Want more electrical calls from Google?"
      ctaCopy="Tell us your service area and the jobs you want more of, including panel upgrades and EV chargers. We will map your website and local SEO opportunities."
      intro={[
        "Electrical web design carries a heavier trust and safety burden than most trades. A homeowner comparing panel upgrade quotes, or a business owner searching for a commercial electrician, is deciding who to let work on the wiring behind their walls. The site has to feel authoritative and safety-forward, not flashy.",
        "Electrical work also has a genuinely growing, specific service line worth its own space: EV chargers and panel upgrades. Folding those into a generic 'residential and commercial electrical' line undersells a category that more homeowners are searching for by name every year.",
        "Kealey Design builds electrical contractor websites around that combination: clear, specific service pages, a fast path to a call, and a service-area boundary stated plainly, without leaning on flashy design that works against the safety-first tone electrical customers expect.",
      ]}
      sections={[
        {
          heading: "What Makes Electrical Websites Different",
          body: [
            "A generic contractor site treats every trade the same: a hero photo, a services list, a contact form. Electrical searches carry more urgency and more consequence than that template accounts for. A customer comparing electricians wants to know quickly whether you handle the specific job they need, and whether they can trust you with it.",
            "That means separating panel upgrades, EV chargers, repairs, and new installs into their own clear sections rather than one broad electrical-services paragraph, and making the service area and contact path obvious from the first screen.",
          ],
          bullets: [
            "Panel upgrades and EV chargers deserve their own space, not a shared generic line.",
            "Safety and trust need to come through in tone and structure, not just a badge.",
            "A clear service area avoids wasted calls and mismatched expectations.",
            "The path to a call should be obvious without feeling flashy.",
          ],
        },
        {
          heading: "Key Features Every Electrical Website Needs",
          body: [
            "Beyond a visible phone number, an electrical website needs structured service pages that separate panel upgrades, EV chargers, and general electrical work, plus a service-area section stated in plain language. Licensing and safety trust matter enormously here, but that's a claim about your business specifically — the site is built with dedicated space for your ESA certification, insurance, and reviews rather than a generic badge.",
          ],
          bullets: [
            "A tap-to-call button that stays visible while scrolling.",
            "Separate, clearly labeled sections for panel upgrades, EV chargers, and general electrical work.",
            "A plainly stated service area.",
            "Dedicated space for your licensing, ESA certification, insurance, and reviews.",
          ],
        },
        {
          heading: "What's Included in a Kealey Build for Electrical",
          body: [
            "An electrical build from Kealey Design includes mobile-first layout, individual pages for panel upgrades, EV chargers, and your other core services, a clear service-area page, and a quote form built to capture the details you actually need before a callback.",
            "We also structure the site for local search — consistent business information, service pages aligned with what Google's map pack expects, and internal linking that helps both customers and search engines understand your service area and specialties.",
          ],
        },
        {
          heading: "Portfolio and Example Framing",
          body: [
            "We don't have an electrical client site to show you yet — we'd rather be upfront about that than dress up an unrelated project as electrical work. What we can show is the quality of the sites we build.",
          ],
        },
        {
          heading: "Where We Build Electrical Websites",
          body: [],
          extra: <TradeLocationLinks trade="electrical contractor" />,
        },
      ]}
      caseStudies={topCaseStudies}
      faqs={faqs}
      schema={schema}
    />
  );
}
