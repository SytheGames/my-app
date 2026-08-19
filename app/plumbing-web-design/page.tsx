import type { Metadata } from "next";
import { PhoneCall, Smartphone, MapPin, Clock } from "lucide-react";
import { AuthorityServicePage } from "@/components/AuthorityServicePage";
import { TradeLocationLinks } from "@/components/TradeLocationLinks";
import { topCaseStudies } from "@/lib/topCaseStudies";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const plumbingFeatures = [
  {
    Icon: PhoneCall,
    label: "Click-to-Call Visibility",
    copy: "A tap-to-call button built into the header and hero so after-hours emergencies reach your phone in one tap, not three.",
  },
  {
    Icon: Smartphone,
    label: "Mobile Quote Form",
    copy: "A short quote request form built for someone typing one-handed from under a sink or standing in a driveway.",
  },
  {
    Icon: MapPin,
    label: "Clear Service-Area Boundaries",
    copy: "The towns and neighborhoods you actually serve, stated plainly, so visitors don't call and get turned away.",
  },
  {
    Icon: Clock,
    label: "After-Hours Ready Messaging",
    copy: "Copy and layout built around emergency and after-hours demand, not just a nine-to-five service page.",
  },
];

const faqs = [
  {
    question: "What makes plumbing web design different?",
    answer:
      "Plumbing searches skew emergency and after-hours. The site needs fast mobile calls, a clear service area, short forms, and trust signals a homeowner can scan in seconds before they call someone else.",
  },
  {
    question: "Should a plumbing company have separate service pages?",
    answer:
      "Yes, when the services are meaningful. Drain cleaning, water heater repair, emergency plumbing, and fixture installation often deserve their own pages so customers land on exactly what they searched for.",
  },
  {
    question: "How should a plumbing website handle emergency calls?",
    answer:
      "The phone number should be visible without scrolling, tappable from a header or sticky button, and backed by short, simple copy that confirms you handle emergencies and where.",
  },
  {
    question: "What should a plumbing quote form ask for?",
    answer:
      "Name, phone, address or town, the problem, and urgency. Keep it short. A long form loses mobile visitors who are calling other companies while they wait for it to load.",
  },
  {
    question: "Can you show my licensing and insurance on the site?",
    answer:
      "Yes. We build in dedicated space for your license number, insurance details, and reviews so customers can verify you're credentialed. That's specific to your business, not something we display on this page.",
  },
  {
    question: "Do you build plumbing websites outside Chatham-Kent?",
    answer:
      "Yes. We build plumbing web design and local SEO pages for companies across Chatham-Kent, Windsor, London, Sarnia, Leamington, and Southwestern Ontario.",
  },
];

export const metadata: Metadata = {
  title: "Plumbing Website Design | Kealey Design",
  description:
    "Custom, mobile-first websites for plumbing companies across Southwestern Ontario — built for after-hours calls and local search visibility.",
  alternates: { canonical: "/plumbing-web-design" },
  openGraph: {
    title: "Plumbing Website Design | Kealey Design",
    description:
      "Custom, mobile-first websites for plumbing companies across Southwestern Ontario — built for after-hours calls and local search visibility.",
    url: "/plumbing-web-design",
    type: "website",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function PlumbingIndustryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plumbing Website Design in Southwestern Ontario",
    url: `${siteUrl}/plumbing-web-design`,
    provider: { "@type": "LocalBusiness", name: "Kealey Design", url: siteUrl },
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
    serviceType: "Plumbing Website Design and Local SEO",
  };

  return (
    <AuthorityServicePage
      eyebrow="PLUMBING INDUSTRY"
      title="Plumbing Website Design for Southwestern Ontario Companies"
      description="A plumbing-specific website strategy built around emergency and after-hours demand, a clear service area, and a fast path from search to phone call."
      imageSrc="/og-image.jpg"
      imageAlt="Plumbing website design services — Kealey Design"
      breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Plumbing Web Design" }]}
      iconFeatures={plumbingFeatures}
      phoneCta={{ label: "Call us now: 519-401-1469", href: "tel:+15194011469" }}
      ctaLabel="Plan your plumbing website"
      ctaSubject="New Plumbing Industry Page Inquiry - Kealey Design"
      ctaHeading="Want more plumbing calls from Google?"
      ctaCopy="Tell us your plumbing service area and the jobs you want more of. We will map your website and local SEO opportunities."
      intro={[
        "Plumbing web design needs to work differently than a general contractor site. A customer with a burst pipe or a backed-up drain isn't browsing — they're searching from a phone, often after hours, and they will call whichever company answers their question fastest: do you serve my area, and can I call you right now?",
        "That means the website has to lead with the phone number, not bury it under a brand story. It has to state the service area clearly before someone dials, since a wasted call to a company that doesn't serve their town costs both sides time. And it has to build trust quickly, since a stranger is about to let a plumber into their home.",
        "Kealey Design builds plumbing websites around that reality: fast mobile calls, an obvious service area, short quote forms, and a layout that doesn't make an anxious homeowner hunt for the one thing they came for.",
      ]}
      sections={[
        {
          heading: "What Makes Plumbing Websites Different",
          body: [
            "A generic contractor website usually leads with a portfolio and a long services list. Plumbing searches are more urgent and more binary: the visitor either needs someone right now, or they're comparing a few companies for a planned job like a water heater replacement. The site has to serve both without making the emergency visitor wait.",
            "Licensing and trust matter more here than on most trade sites too, since plumbing work touches a home's water supply and drainage directly. The site should make room for that trust — license numbers, insurance, reviews — without slowing down the path to a call.",
          ],
          bullets: [
            "Emergency visitors need the phone number visible in one glance, not after a scroll.",
            "Planned-job visitors want service pages for specific jobs, not one generic 'plumbing services' block.",
            "A clear service area prevents wasted calls in both directions.",
            "Trust signals need to be present but shouldn't slow down the emergency path.",
          ],
        },
        {
          heading: "Key Features Every Plumbing Website Needs",
          body: [
            "Beyond a phone number in the header, a plumbing website needs a few specific structural features to actually convert urgent traffic into calls: emergency call-now visibility that survives scrolling, a mobile-first quote form short enough to fill out one-handed, and service-area boundaries stated in plain language rather than buried in a map widget.",
            "None of this replaces your own licensing and insurance credentials — the site is built with dedicated space for those, since that's a claim about your business, not something we add as decoration.",
          ],
          bullets: [
            "A sticky or header-level call-to-call button that stays visible while scrolling.",
            "A short quote form: name, phone, town, problem, urgency.",
            "A plainly stated list of service-area towns and neighborhoods.",
            "Dedicated space for your license number, insurance, and reviews.",
          ],
        },
        {
          heading: "What's Included in a Kealey Build for Plumbing",
          body: [
            "A plumbing build from Kealey Design starts with mobile-first layout and works outward: individual service pages for the jobs you want more of, a clear service-area page, fast page-load performance, and a quote form connected directly to your inbox or CRM.",
            "We also structure the site for local search from day one — consistent business information, service pages that match what Google's map pack expects to see, and internal linking that helps both customers and search engines understand what you do and where you work.",
          ],
        },
        {
          heading: "Portfolio and Example Framing",
          body: [
            "We don't have a plumbing client site to show you yet — we'd rather say that plainly than dress up an unrelated project as plumbing work. What we can show is the quality of the sites we build.",
          ],
        },
        {
          heading: "Where We Build Plumbing Websites",
          body: [],
          extra: <TradeLocationLinks trade="plumbing" />,
        },
      ]}
      caseStudies={topCaseStudies}
      faqs={faqs}
      schema={schema}
    />
  );
}
