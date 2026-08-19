import type { Metadata } from "next";
import { GalleryHorizontalEnd, TreePine, RefreshCw, PhoneCall } from "lucide-react";
import { AuthorityServicePage } from "@/components/AuthorityServicePage";
import { TradeLocationLinks } from "@/components/TradeLocationLinks";
import { topCaseStudies } from "@/lib/topCaseStudies";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const landscapingFeatures = [
  {
    Icon: GalleryHorizontalEnd,
    label: "Seasonal Project Galleries",
    copy: "A gallery-first layout built to showcase finished work across different seasons and project types.",
  },
  {
    Icon: TreePine,
    label: "Design/Build Framing",
    copy: "Pages structured around design/build projects, not folded into one generic landscaping-services list.",
  },
  {
    Icon: RefreshCw,
    label: "Recurring-Maintenance Upsell Path",
    copy: "A separate path for recurring maintenance work, since it's a different sales motion than one-time design/build.",
  },
  {
    Icon: PhoneCall,
    label: "Click-to-Call Visibility",
    copy: "A tap-to-call button built into the header and hero, kept visible through the growing season rush.",
  },
];

const faqs = [
  {
    question: "What makes landscaping web design different?",
    answer:
      "Landscaping sells almost entirely on visuals and seasonality. The site needs a gallery-first layout and messaging that acknowledges spring bookings and off-season planning, rather than pretending demand is flat year-round.",
  },
  {
    question: "Should landscaping websites separate maintenance from design/build?",
    answer:
      "Yes. Recurring maintenance work is a different sales motion than a one-time design/build project, and it's worth its own page and its own call-to-action rather than being folded into the same pitch.",
  },
  {
    question: "Do you have real landscaping client work to show?",
    answer:
      "Not yet. We'd rather say that plainly than dress up an unrelated project as landscaping work. What we can show is the quality of the sites we build.",
  },
  {
    question: "What should a landscaping quote form ask for?",
    answer:
      "Name, phone, town, project type (design/build or maintenance), and a rough sense of scope or timeline. Short enough to complete quickly during the busy spring booking window.",
  },
  {
    question: "How should a landscaping website handle seasonality?",
    answer:
      "The site should speak to spring booking urgency directly, offer off-season planning or design consultations, and keep the gallery organized so visitors can see relevant work regardless of when they're searching.",
  },
  {
    question: "Do you build landscaping websites outside Chatham-Kent?",
    answer:
      "Yes. We build landscaping web design and local SEO for companies across Chatham-Kent, Windsor, London, Sarnia, Leamington, and Southwestern Ontario.",
  },
];

export const metadata: Metadata = {
  title: "Landscaping Website Design | Kealey Design",
  description:
    "Websites for landscaping and design/build companies — seasonal project galleries and lead capture built for Southwestern Ontario's growing seasons.",
  alternates: { canonical: "/landscaping-web-design" },
  openGraph: {
    title: "Landscaping Website Design | Kealey Design",
    description:
      "Websites for landscaping and design/build companies — seasonal project galleries and lead capture built for Southwestern Ontario's growing seasons.",
    url: "/landscaping-web-design",
    type: "website",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function LandscapingIndustryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Landscaping Website Design in Southwestern Ontario",
    url: `${siteUrl}/landscaping-web-design`,
    provider: { "@type": "LocalBusiness", name: "Kealey Design", url: siteUrl },
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
    serviceType: "Landscaping Website Design and Local SEO",
  };

  return (
    <AuthorityServicePage
      eyebrow="LANDSCAPING INDUSTRY"
      title="Landscaping Website Design for Southwestern Ontario Companies"
      description="A gallery-first website strategy for landscaping and design/build companies, built around seasonal project proof and a recurring-maintenance upsell path."
      imageSrc="/og-image.jpg"
      imageAlt="Landscaping company website design services — Kealey Design"
      breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Landscaping Web Design" }]}
      iconFeatures={landscapingFeatures}
      phoneCta={{ label: "Call us now: 519-401-1469", href: "tel:+15194011469" }}
      extraContent={
        <>
          <h3 className="mockup-heading">How Your Project Gallery Would Look</h3>
          <div className="mockup-gallery" role="img" aria-label="Landscaping project gallery layout design example">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="mockup-gallery__tile">
                Project Photo
              </div>
            ))}
          </div>
        </>
      }
      ctaLabel="Plan your landscaping website"
      ctaSubject="New Landscaping Industry Page Inquiry - Kealey Design"
      ctaHeading="Want more landscaping leads from Google?"
      ctaCopy="Tell us your service area and whether you focus on design/build, maintenance, or both. We will map your website and local SEO opportunities."
      intro={[
        "Landscaping sells almost entirely on visuals and seasonality. A homeowner comparing landscapers wants to see finished projects, not just read a list of services, and they're often searching with a specific season and budget in mind: a spring patio project, a fall cleanup, or a maintenance plan for the whole growing season.",
        "That means the website has to be built gallery-first, organized so visitors can browse real work by project type, and honest about how demand shifts through the year rather than pretending it's flat. Recurring maintenance work also deserves its own path, since booking a season of lawn care is a different decision than commissioning a design/build project.",
        "Kealey Design builds landscaping websites around that structure: a gallery-first layout, clear design/build framing, a separate recurring-maintenance path, and seasonal messaging that matches when your customers are actually searching.",
      ]}
      sections={[
        {
          heading: "What Makes Landscaping Websites Different",
          body: [
            "A generic contractor site treats every trade the same way: a hero photo, a services list, a contact form. Landscaping needs more than that, because the buying decision leans so heavily on seeing finished work. A gallery isn't a nice extra here, it's close to the whole pitch.",
            "Seasonality also shapes the site directly. Spring brings a booking rush for design/build projects, while other times of year suit off-season planning, consultations, or maintenance sign-ups. A landscaping site that ignores this and presents everything the same way year-round misses easy conversions.",
          ],
          bullets: [
            "A gallery-first layout organized by project type and season.",
            "Clear separation between design/build projects and recurring maintenance.",
            "Seasonal messaging that matches spring booking urgency and off-season planning.",
            "A fast path to a quote request once a visitor has seen relevant work.",
          ],
        },
        {
          heading: "Key Features Every Landscaping Website Needs",
          body: [
            "Beyond a visible phone number, a landscaping website needs a gallery-first homepage, a clear design/build section, a separate recurring-maintenance section with its own call-to-action, and seasonal messaging that acknowledges spring bookings and off-season planning.",
          ],
          bullets: [
            "A gallery-first layout for browsing finished projects quickly.",
            "Separate sections for design/build and recurring maintenance.",
            "Seasonal booking and planning messaging.",
            "A tap-to-call button and a short quote form.",
          ],
        },
        {
          heading: "What's Included in a Kealey Build for Landscaping",
          body: [
            "A landscaping build from Kealey Design includes a gallery-first homepage, individual pages for design/build and recurring maintenance, a service-area page, and a quote form built to capture project type and timing.",
            "We also structure the site for local search — consistent business information, service pages aligned with what customers and Google's map pack expect, and internal linking connecting your gallery, services, and service area into one clear structure.",
          ],
        },
        {
          heading: "Portfolio and Example Framing",
          body: [
            "We don't have a landscaping client site to show you yet, and we're not going to demonstrate this gallery-first layout with sample landscaping photos we don't have the rights to use. What we can show is the quality of the sites we build.",
          ],
        },
        {
          heading: "Where We Build Landscaping Websites",
          body: [],
          extra: <TradeLocationLinks trade="landscaping" />,
        },
      ]}
      caseStudies={topCaseStudies}
      faqs={faqs}
      schema={schema}
    />
  );
}
