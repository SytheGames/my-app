import type { Metadata } from "next";
import { AuthorityServicePage } from "@/components/AuthorityServicePage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

const faqs = [
  {
    question: "What is included in website maintenance?",
    answer:
      "Maintenance can include content updates, technical checks, performance reviews, small design improvements, plugin or dependency awareness, analytics review, backups or deployment support, and issue troubleshooting.",
  },
  {
    question: "Do I need maintenance if my website is new?",
    answer:
      "Yes. A new website still needs updates, monitoring, content changes, conversion improvements, and periodic checks so it continues to support the business after launch.",
  },
  {
    question: "Can maintenance include SEO updates?",
    answer:
      "Yes. Maintenance can include light on-page SEO, metadata updates, internal linking, new FAQs, image optimization, and coordination with broader SEO campaigns.",
  },
  {
    question: "Can you update pages for me?",
    answer:
      "Yes. We can handle new sections, staff updates, service changes, project galleries, testimonials, pricing notes, seasonal messages, and landing page edits.",
  },
  {
    question: "How much does website maintenance cost?",
    answer:
      "Pricing depends on the update volume and level of support. Smaller plans may cover light monthly care, while growth-focused plans include content, SEO, reporting, and conversion improvements.",
  },
  {
    question: "Do you maintain websites you did not build?",
    answer:
      "Sometimes. We review the platform, code quality, hosting, and access before taking over maintenance so we can support the site responsibly.",
  },
];

export const metadata: Metadata = {
  title: "Website Maintenance in Chatham-Kent",
  description:
    "Website maintenance in Chatham-Kent for businesses that need content updates, performance checks, SEO improvements, reporting, and ongoing support.",
  alternates: { canonical: "/website-maintenance" },
  openGraph: {
    title: "Website Maintenance in Chatham-Kent",
    description:
      "Ongoing website care, content updates, performance support, and conversion improvements for Southwestern Ontario businesses.",
    url: "/website-maintenance",
    type: "website",
    images: [{ url: "/website-redesign-service.svg" }],
  },
};

export default function WebsiteMaintenancePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Maintenance in Chatham-Kent",
    url: `${siteUrl}/website-maintenance`,
    provider: { "@type": "LocalBusiness", name: "Kealey Design", url: siteUrl },
    areaServed: ["Chatham-Kent", "Windsor", "London", "Sarnia", "Leamington", "Southwestern Ontario"],
    serviceType: "Website Maintenance",
  };

  return (
    <AuthorityServicePage
      eyebrow="WEBSITE MAINTENANCE"
      title="Website Maintenance in Chatham-Kent for Sites That Need to Keep Improving"
      description="Ongoing website support for businesses that need updates, performance checks, content changes, SEO improvements, and practical post-launch care."
      imageSrc="/website-redesign-service.svg"
      imageAlt="Website maintenance and redesign illustration"
      ctaLabel="Discuss maintenance"
      ctaSubject="New Website Maintenance Inquiry - Kealey Design"
      ctaHeading="Need reliable website support?"
      ctaCopy="Tell us what platform your site uses and what kind of updates you need. We will recommend the right maintenance approach."
      intro={[
        "A website is not finished the day it launches. Services change, staff members change, project photos need to be added, search behaviour shifts, competitors improve, and customers ask new questions. Website maintenance is the ongoing work that keeps your site accurate, fast, trustworthy, and useful after the first build is complete.",
        "Kealey Design provides website maintenance for businesses in Chatham-Kent and Southwestern Ontario that want a steady partner for updates, performance checks, content improvements, SEO support, and small conversion improvements. The goal is to prevent the slow decay that happens when a website is ignored for months or years.",
        "Maintenance is especially important for service businesses. An outdated service page can send the wrong expectations. Missing project photos can weaken trust. A broken form can quietly kill leads. A page that loads slowly can make visitors leave before they read your offer. Regular care keeps the website aligned with the business it represents.",
      ]}
      sections={[
        {
          heading: "Who This Is For",
          body: [
            "Website maintenance is for businesses that want their website to remain useful after launch. It is a good fit for contractors adding project galleries, clinics updating services or team bios, HVAC companies changing seasonal offers, retailers updating products, and professional service firms publishing new resources.",
            "It is also valuable for owners who do not want to spend their own time inside a website platform. If a small update takes your team too long, it often gets delayed. Maintenance gives you a practical way to keep the site current without pulling attention away from customers.",
          ],
          bullets: [
            "You need recurring content updates, project photos, or service changes.",
            "You want someone to monitor performance, forms, and small technical issues.",
            "You need light SEO updates as your services or locations evolve.",
            "You want the site to improve gradually instead of sitting unchanged.",
          ],
        },
        {
          heading: "Problems Clients Face Without Maintenance",
          body: [
            "Websites age quietly. At first, everything looks fine. Then a testimonial becomes outdated, a staff member leaves, a service is renamed, a contact form stops sending notifications, images become too large, tracking breaks, or a competitor publishes better content. None of these issues feels urgent on its own, but together they weaken the site.",
            "Many businesses also lose SEO momentum after launch because no one continues improving the pages. Search engines reward useful, accurate, well-structured content. If service pages never expand, internal links never improve, and new customer questions never become FAQs, the site becomes easier for competitors to outrank.",
          ],
          bullets: [
            "Outdated pages that no longer match your current services.",
            "Broken forms, old tracking codes, or missing conversion data.",
            "Slow pages caused by oversized images or neglected performance issues.",
            "No regular SEO improvements after the initial website launch.",
            "Small edits pile up until the website needs another expensive rebuild.",
          ],
        },
        {
          heading: "Our Maintenance Process",
          body: [
            "We start by reviewing the website, platform, current issues, analytics access, Search Console status, forms, and priority pages. This gives us a baseline. If we built the site, the process is simple. If we did not build it, we review the technical setup first so we understand what can be supported safely.",
            "From there, maintenance can include a monthly update rhythm, support requests as needed, performance checks, content additions, SEO adjustments, internal linking, image optimization, and reporting. The scope depends on how active your business is and how much growth work you want the website to support.",
          ],
          bullets: [
            "Initial health check and access review.",
            "Monthly or as-needed update workflow.",
            "Content changes, image additions, and service-page improvements.",
            "Light SEO, metadata, FAQ, and internal link updates.",
            "Performance and conversion checks for important pages.",
          ],
        },
        {
          heading: "Benefits and Outcomes",
          body: [
            "Good maintenance keeps your website accurate and reduces risk. Visitors see current services, recent proof, working forms, and relevant calls-to-action. Search engines see an active website with maintained content. Your team gets a reliable path for updates without turning every small change into a distraction.",
            "Maintenance also creates room for incremental conversion improvements. A new FAQ can answer a sales objection. A stronger project gallery can improve trust. A better call-to-action can increase form submissions. A small page speed improvement can reduce friction. These changes are not as dramatic as a full redesign, but they compound when handled consistently.",
          ],
        },
        {
          heading: "Local Business Maintenance Priorities",
          body: [
            "Local businesses need maintenance that reflects how customers actually evaluate them. A Chatham-Kent contractor may need recent project photos from Wallaceburg, Tilbury, or Blenheim. A clinic may need updated practitioner bios and treatment pages. An HVAC company may need seasonal furnace and AC messaging. A retailer or restaurant may need changing hours, offers, menus, products, and Google Business Profile alignment.",
            "Maintenance can also protect the authority you have already built. When a page earns rankings or produces leads, it should be watched carefully before major edits are made. We look at Search Console, analytics, forms, calls-to-action, internal links, and page purpose before changing high-value pages. The goal is to keep the site fresh without accidentally weakening the pages that already support visibility and inquiries.",
          ],
        },
        {
          heading: "Pricing Guidance",
          body: [
            "Website maintenance pricing depends on update volume, platform complexity, response expectations, and whether SEO or reporting is included. A light maintenance plan may be appropriate for occasional updates and checks. A growth-focused plan is better when the website needs regular content, landing page improvements, conversion tracking, and SEO support.",
            "The right maintenance plan should cost less than the business risk of an outdated or broken website. If your site regularly influences new inquiries, quotes, bookings, or sales conversations, ongoing care is usually easier and less expensive than waiting until problems pile up.",
            "Maintenance can also be staged. Some businesses need a small monthly support block for routine updates. Others need a more active improvement plan with quarterly landing page reviews, service-page expansion, testimonial updates, analytics checks, and local SEO coordination. We help choose the level of support based on how much the website contributes to sales, how often your services change, and how competitive your local market has become.",
          ],
        },
      ]}
      caseStudies={[
        {
          title: "Enhanced Concrete",
          href: "/portfolio/enhanced-concrete-local-seo",
          summary: "Ongoing website and local SEO support for a service business that needs current proof and lead flow.",
        },
        {
          title: "Davey Chiropractic",
          href: "/portfolio/davey-chiro-conversion-refresh",
          summary: "A refreshed clinic website with content and trust improvements that can keep evolving.",
        },
        {
          title: "ARCstage",
          href: "/portfolio/arcstage-growth-rebuild",
          summary: "A portfolio-driven site where new work and service clarity matter after launch.",
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
