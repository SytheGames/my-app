import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, Smartphone, GalleryHorizontalEnd, Settings2 } from "lucide-react";
import { AuthorityServicePage } from "@/components/AuthorityServicePage";
import { topCaseStudies } from "@/lib/topCaseStudies";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const nonprofitFeatures = [
  {
    Icon: HeartHandshake,
    label: "Donation & Volunteer Pathways",
    copy: "The two actions that matter most — donate and volunteer — placed where visitors actually look, not buried in a menu.",
  },
  {
    Icon: Smartphone,
    label: "Mobile-First Builds",
    copy: "Most donors and volunteers find you on their phone. The site is built for that screen first, not adapted to it afterward.",
  },
  {
    Icon: GalleryHorizontalEnd,
    label: "Real Program & Impact Pages",
    copy: "Your mission told through the actual people and programs behind it — real photos, not stock imagery and generic mission statements.",
  },
  {
    Icon: Settings2,
    label: "Simple Self-Serve Updates",
    copy: "A content system your team can update directly, so the site doesn't go stale the moment the person who built it moves on.",
  },
];

const faqs = [
  {
    question: "Do you offer nonprofit discounts?",
    answer:
      "Yes. Nonprofit pricing is discussed on a project basis and reflects typical nonprofit budget constraints — not commercial rates.",
  },
  {
    question: "Can you work with an existing brand or logo?",
    answer:
      "Yes — I can design around your existing brand, or help develop one if you don't have consistent branding yet.",
  },
  {
    question: "Do you build donation functionality?",
    answer:
      "Yes, including integration with common donation platforms like CanadaHelps, Stripe, and PayPal. We'll confirm which one fits your organization before the build starts.",
  },
  {
    question: "How long does a nonprofit website take?",
    answer:
      "Most projects are delivered in 4 to 8 weeks depending on scope, content readiness, and required integrations — similar to a typical small business site.",
  },
  {
    question: "Do you work with nonprofits outside Chatham-Kent, Windsor, Sarnia, or London?",
    answer:
      "Yes — remote nonprofit projects across Ontario are welcome.",
  },
];

export const metadata: Metadata = {
  title: "Nonprofit Website Design in Ontario | Kealey Design",
  description:
    "Custom-built websites for Ontario nonprofits and charities — built by a designer who cares about craft, not templates. Limited nonprofit spots available.",
  alternates: { canonical: "/nonprofit-website-design" },
  openGraph: {
    title: "Nonprofit Website Design in Ontario | Kealey Design",
    description:
      "Custom-built websites for Ontario nonprofits and charities — built by a designer who cares about craft, not templates. Limited nonprofit spots available.",
    url: "/nonprofit-website-design",
    type: "website",
    images: [{ url: "/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg" }],
  },
};

export default function NonprofitWebsiteDesignPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nonprofit and Charity Website Design in Ontario",
    url: `${siteUrl}/nonprofit-website-design`,
    provider: { "@type": "LocalBusiness", name: "Kealey Design", url: siteUrl },
    areaServed: "Ontario",
    serviceType: "Nonprofit and Charity Website Design",
  };

  return (
    <AuthorityServicePage
      eyebrow="NONPROFIT & CHARITY"
      title="Nonprofit Website Design for Ontario Charities and Nonprofits"
      description="A website that actually represents the work you do — custom-built for Ontario nonprofits and charities that need to look credible to donors, funders, and the community, without the agency price tag or the DIY-template compromise."
      imageSrc="/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg"
      imageAlt="Enhanced Concrete website design case study by Kealey Design"
      breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Nonprofit Website Design" }]}
      iconFeatures={nonprofitFeatures}
      proofImage={{
        src: "/case-studies/Screenshot_20-5-2026_161652_enhancedconcrete.ca.jpeg",
        alt: "Enhanced Concrete website design case study by Kealey Design",
        caption:
          "Enhanced Concrete — a real Kealey Design client site built to earn a stranger's trust fast. Same skill a nonprofit site needs, just with a donor or volunteer standing in for the customer.",
        href: "/portfolio/enhanced-concrete-local-seo",
      }}
      ctaLabel="Tell me about your organization"
      ctaSubject="New Nonprofit Website Inquiry - Kealey Design"
      ctaHeading="Only taking on a couple of nonprofit projects this year"
      ctaCopy="I'm keeping nonprofit capacity deliberately small so each organization gets close, hands-on involvement in the build. Tell me what you're working on and I'll let you know if there's room."
      intro={[
        "Most nonprofit websites are built on the cheapest template available, because budgets are tight and nobody has time to think about design. The result is a site that looks like every other nonprofit site — same layout, same stock photos, same donate button buried in a menu nobody opens.",
        "You're not selling a product. You're asking people to trust you with their time, their donations, or their attention — often before they've met anyone from your organization. Your website is frequently the first, and sometimes only, impression a donor, volunteer, or grant reviewer gets. A templated site signals \"we didn't have the budget to care about this.\" A custom-built site signals the opposite, even if your actual budget is modest.",
      ]}
      sections={[
        {
          heading: "Common Problems With Nonprofit Websites",
          body: [
            "The same handful of issues show up again and again on nonprofit sites, usually because the site was built once and never really revisited.",
          ],
          bullets: [
            "Built years ago, never updated — the board changed, the programs changed, the site didn't.",
            "Donation and volunteer sign-up buried — the two actions that matter most are the hardest to find.",
            "Not mobile-friendly — most donors and volunteers are finding you on their phone.",
            "No clear story — mission statements without any sense of the actual people or impact behind them.",
            "Volunteer-built and hard to maintain — the person who built it left, and now nobody can update it.",
          ],
        },
        {
          heading: "Design Credibility, Without a Nonprofit Portfolio Yet",
          body: [
            "I'll be straightforward: I haven't built a nonprofit site yet. What I have is a track record of building custom, non-templated websites for small businesses that needed to look more credible than their budget would suggest — concrete contractors, HVAC companies, restoration shops — the kind of businesses that live or die by whether a stranger trusts them enough to make contact.",
            "That's the same problem a nonprofit site solves, just with a donor or volunteer instead of a customer. You can see the approach in real project examples: ",
          ],
          extra: (
            <p>
              <Link href="/portfolio/enhanced-concrete-local-seo">Enhanced Concrete</Link>,{" "}
              <Link href="/portfolio/pebbles-gravel-regional-lead-flow">Pebbles Gravel</Link>, and{" "}
              <Link href="/portfolio/r3-restomod-showcase-to-sales">R3 Restomod</Link>.
            </p>
          ),
        },
        {
          heading: "What Carries Over Directly",
          body: [],
          bullets: [
            "Clean, professional design that doesn't look like a template.",
            "Mobile-first builds, because most visitors are on their phone.",
            "Clear calls-to-action — for a business that's \"Call Now,\" for a nonprofit that's \"Donate\" or \"Volunteer,\" placed where people actually look.",
            "Sites built to be easy for you to update yourself, not dependent on the developer forever.",
          ],
        },
        {
          heading: "What's Included",
          body: [],
          bullets: [
            "Custom design — no drag-and-drop templates.",
            "Mobile-responsive, fast-loading pages.",
            "Clear donation and volunteer pathways.",
            "Program and impact pages that tell your story with real photos, not stock.",
            "Basic accessibility best practices built in from the start.",
            "Simple content management so your team can make updates without calling a developer.",
            "Hosting and ongoing support available after launch.",
          ],
        },
        {
          heading: "Limited Nonprofit Availability",
          body: [
            "I'm taking on a small number of nonprofit projects — this isn't a full service line yet, it's something I'm testing because I believe in the work and want to build a track record in the space. Pricing reflects nonprofit budgets, not commercial rates, and early nonprofit clients get closer, more hands-on involvement in the build than a typical project.",
            "If you're an Ontario nonprofit or charity that needs a website that actually looks like it belongs to a serious organization, reach out. I'd like to hear what you're working on.",
          ],
        },
      ]}
      caseStudies={topCaseStudies}
      faqs={faqs}
      schema={schema}
    />
  );
}
