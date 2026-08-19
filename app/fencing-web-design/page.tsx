import type { Metadata } from "next";
import { Columns3, HelpCircle, PhoneCall, MapPin } from "lucide-react";
import { AuthorityServicePage } from "@/components/AuthorityServicePage";
import { TradeLocationLinks } from "@/components/TradeLocationLinks";
import { topCaseStudies } from "@/lib/topCaseStudies";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const fencingFeatures = [
  {
    Icon: Columns3,
    label: "Material Comparison Content",
    copy: "A structured wood vs. vinyl vs. chain-link comparison, built to help visitors decide quickly instead of guessing.",
  },
  {
    Icon: HelpCircle,
    label: "Permit & Property-Line FAQs",
    copy: "Answers to the questions that stall a fence quote, built into the page instead of left for a phone call.",
  },
  {
    Icon: PhoneCall,
    label: "Click-to-Call Visibility",
    copy: "A tap-to-call button built into the header and hero, ready for the demand spike right after a storm.",
  },
  {
    Icon: MapPin,
    label: "Clear Service-Area Boundaries",
    copy: "The towns and neighborhoods you actually serve, stated plainly, so visitors don't request a quote you can't fill.",
  },
];

const faqs = [
  {
    question: "What makes fencing web design different?",
    answer:
      "Fencing has a real, recurring demand spike after storms, and those searches are urgent. The site needs fast quote turnaround, clear photography, and content that answers common material and permit questions upfront.",
  },
  {
    question: "Do you have real fencing client work to show?",
    answer:
      "Not yet. We'd rather say that plainly than dress up an unrelated project as fencing work. What we can show is the quality of the sites we build.",
  },
  {
    question: "Should a fencing website compare materials?",
    answer:
      "Yes. A simple wood vs. vinyl vs. chain-link comparison helps visitors self-educate before they call, which tends to produce better-qualified quote requests.",
  },
  {
    question: "Should a fencing website answer permit and property-line questions?",
    answer:
      "Yes. Those questions often stall a decision. Answering them on the page, even briefly, keeps a visitor moving toward a quote instead of abandoning the search to look elsewhere.",
  },
  {
    question: "How should a fencing website handle storm-driven demand?",
    answer:
      "Speed matters most here. The phone number and quote form need to be immediately visible, since storm-damage searches are urgent and visitors are often comparing several companies at once.",
  },
  {
    question: "Do you build fencing websites outside Chatham-Kent?",
    answer:
      "Yes. We build fencing contractor web design and local SEO for companies across Chatham-Kent, Windsor, London, Sarnia, Leamington, and Southwestern Ontario.",
  },
];

export const metadata: Metadata = {
  title: "Fencing Contractor Website Design | Kealey Design",
  description:
    "Custom websites for fencing companies — material comparison content and visual portfolios built to turn storm-season demand into booked jobs.",
  alternates: { canonical: "/fencing-web-design" },
  openGraph: {
    title: "Fencing Contractor Website Design | Kealey Design",
    description:
      "Custom websites for fencing companies — material comparison content and visual portfolios built to turn storm-season demand into booked jobs.",
    url: "/fencing-web-design",
    type: "website",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function FencingIndustryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fencing Contractor Website Design in Southwestern Ontario",
    url: `${siteUrl}/fencing-web-design`,
    provider: { "@type": "LocalBusiness", name: "Kealey Design", url: siteUrl },
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
    serviceType: "Fencing Contractor Website Design and Local SEO",
  };

  return (
    <AuthorityServicePage
      eyebrow="FENCING INDUSTRY"
      title="Fencing Contractor Website Design for Southwestern Ontario Companies"
      description="A fast, visual website strategy for fencing companies, built around material comparison content, permit questions, and storm-driven urgency."
      imageSrc="/og-image.jpg"
      imageAlt="Fencing contractor website design services — Kealey Design"
      breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Fencing Web Design" }]}
      iconFeatures={fencingFeatures}
      phoneCta={{ label: "Call us now: 519-401-1469", href: "tel:+15194011469" }}
      extraContent={
        <>
          <h3 className="mockup-heading">How a Material Comparison Section Would Look</h3>
          <div className="mockup-compare" role="img" aria-label="Fence material comparison section design example">
            {["Wood", "Vinyl", "Chain-Link"].map((material) => (
              <div key={material} className="mockup-compare__column">
                <p className="mockup-compare__label">{material}</p>
                <div className="mockup-compare__swatch" />
              </div>
            ))}
          </div>
        </>
      }
      ctaLabel="Plan your fencing website"
      ctaSubject="New Fencing Industry Page Inquiry - Kealey Design"
      ctaHeading="Want more fencing quote requests from Google?"
      ctaCopy="Tell us your service area and the fence types you install most. We will map your website and local SEO opportunities."
      intro={[
        "Fencing has a real, recurring demand spike after storms. When a fence goes down, the homeowner is comparing companies within hours, not days, and speed of response often decides who gets the job.",
        "That urgency doesn't mean the site should skip the details, though. Fencing customers commonly stall on two questions before they'll request a quote: which material fits their budget and property, and what permits or property-line rules apply. A site that answers both upfront keeps more of that urgent traffic moving toward a call instead of bouncing to search again.",
        "Kealey Design builds fencing websites around that combination: fast quote turnaround for storm-driven demand, a clear material comparison, and permit and property-line answers built into the page instead of left for a phone call.",
      ]}
      sections={[
        {
          heading: "What Makes Fencing Websites Different",
          body: [
            "A generic contractor site doesn't account for how differently fencing demand behaves. A large share of fencing searches follow storm damage, meaning the site needs to convert fast, urgent traffic without losing the visitors who are planning a fence project on a normal timeline.",
            "Fencing decisions also hinge on a few recurring questions: material, cost range, and whether permits or property-line surveys are needed. A site that answers those clearly, rather than making every visitor call to find out, tends to produce better-qualified leads.",
          ],
          bullets: [
            "Storm-driven searches need the fastest possible path to a call.",
            "Material comparison content helps visitors self-educate before they call.",
            "Permit and property-line FAQs reduce hesitation and stalled quotes.",
            "A visual portfolio still matters for planned, non-urgent projects.",
          ],
        },
        {
          heading: "Key Features Every Fencing Website Needs",
          body: [
            "Beyond a visible phone number, a fencing website needs a simple material comparison section, a short FAQ covering permits and property lines, and a quote form fast enough for someone comparing companies right after a storm.",
          ],
          bullets: [
            "A tap-to-call button that stays visible while scrolling.",
            "A wood vs. vinyl vs. chain-link comparison section.",
            "A brief FAQ answering common permit and property-line questions.",
            "A short quote form built for urgent, mobile visitors.",
          ],
        },
        {
          heading: "What's Included in a Kealey Build for Fencing",
          body: [
            "A fencing build from Kealey Design includes mobile-first layout, a material comparison section, a permit and property-line FAQ, a service-area page, and a quote form built to capture the details you need fast during a storm-driven demand spike.",
            "We also structure the site for local search — consistent business information, service pages aligned with what customers and Google's map pack expect, and internal linking connecting your services, portfolio, and service area into one clear structure.",
          ],
        },
        {
          heading: "Portfolio and Example Framing",
          body: [
            "We don't have a fencing client site to show you yet, and we're not going to show off fence photography we don't have the rights to use. What we can show is the quality of the sites we build.",
          ],
        },
        {
          heading: "Where We Build Fencing Websites",
          body: [],
          extra: <TradeLocationLinks trade="fencing contractor" />,
        },
      ]}
      caseStudies={topCaseStudies}
      faqs={faqs}
      schema={schema}
    />
  );
}
