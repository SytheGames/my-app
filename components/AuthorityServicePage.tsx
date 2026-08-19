import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageContactSection } from "@/components/PageContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SplitPageHero } from "@/components/SplitPageHero";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { ProofImageBand } from "@/components/ProofImageBand";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";

type FaqItem = {
  question: string;
  answer: string;
};

type AuthoritySection = {
  heading: string;
  body: string[];
  bullets?: string[];
  extra?: ReactNode;
};

type CaseStudyLink = {
  title: string;
  href: string;
  summary: string;
  image?: string;
};

type IconFeature = {
  Icon: LucideIcon;
  label: string;
  copy: string;
};

type ProofImage = {
  src: string;
  alt: string;
  caption: string;
  href?: string;
};

type AuthorityServicePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel: string;
  ctaSubject: string;
  ctaHeading: string;
  ctaCopy: string;
  phoneCta?: { label: string; href: string };
  intro: string[];
  sections: AuthoritySection[];
  caseStudies: CaseStudyLink[];
  faqs: FaqItem[];
  schema: object;
  breadcrumbs?: BreadcrumbItem[];
  relatedLinks?: Array<{ label: string; href: string }>;
  iconFeatures?: IconFeature[];
  proofImage?: ProofImage;
  extraContent?: ReactNode;
};

export function AuthorityServicePage({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaSubject,
  ctaHeading,
  ctaCopy,
  phoneCta,
  intro,
  sections,
  caseStudies,
  faqs,
  schema,
  breadcrumbs,
  relatedLinks,
  iconFeatures,
  proofImage,
  extraContent,
}: AuthorityServicePageProps) {
  const faqColumns = [
    faqs.filter((_, index) => index % 2 === 0),
    faqs.filter((_, index) => index % 2 === 1),
  ];

  return (
    <div className="landing-page">
      <SiteHeader />
      <main className="split-page web-design-service authority-service" aria-label={title}>
        <SplitPageHero
          eyebrow={eyebrow}
          title={title}
          description={description}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          ctaLabel={ctaLabel}
          ctaHref="/contact"
          phoneCta={phoneCta}
          relatedLinks={
            relatedLinks ?? [
              { label: "Portfolio", href: "/portfolio" },
              { label: "Contact", href: "/contact" },
            ]
          }
          breadcrumbs={breadcrumbs}
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <article className="split-page__prose">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {iconFeatures ? <IconFeatureGrid features={iconFeatures} /> : null}
              {extraContent}
            </article>
          </div>
        </section>

        {proofImage ? <ProofImageBand {...proofImage} /> : null}

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <article className="split-page__prose">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.extra}
                </section>
              ))}

              <h2>Recent Case Studies</h2>
              <p>A few recent examples of the websites we&apos;ve designed and built.</p>
              <div className="authority-case-studies">
                {caseStudies.map((study) => (
                  <Link key={study.href} href={study.href} className="authority-case-studies__card">
                    {study.image ? (
                      <span className="authority-case-studies__image-wrap">
                        <Image src={study.image} alt={study.title} fill sizes="(max-width: 768px) 100vw, 24rem" className="authority-case-studies__image" />
                      </span>
                    ) : null}
                    <span className="authority-case-studies__body">
                      <span className="authority-case-studies__title">{study.title}</span>
                      <span className="authority-case-studies__summary">{study.summary}</span>
                    </span>
                  </Link>
                ))}
              </div>

              <h2>Frequently Asked Questions</h2>
              <div className="faq__columns">
                {faqColumns.map((column, columnIndex) => (
                  <div key={`faq-column-${columnIndex}`} className="faq__column">
                    {column.map((item) => (
                      <details key={item.question} className="faq__item">
                        <summary className="faq__summary">
                          <h3 className="faq__question">{item.question}</h3>
                          <span className="faq__indicator" aria-hidden>
                            +
                          </span>
                        </summary>
                        <p className="faq__answer">{item.answer}</p>
                      </details>
                    ))}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <PageContactSection heading={ctaHeading} copy={ctaCopy} subject={ctaSubject} />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
