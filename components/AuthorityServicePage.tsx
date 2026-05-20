import Link from "next/link";
import { PageContactSection } from "@/components/PageContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SplitPageHero } from "@/components/SplitPageHero";

type FaqItem = {
  question: string;
  answer: string;
};

type AuthoritySection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

type CaseStudyLink = {
  title: string;
  href: string;
  summary: string;
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
  intro: string[];
  sections: AuthoritySection[];
  caseStudies: CaseStudyLink[];
  faqs: FaqItem[];
  schema: object;
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
  intro,
  sections,
  caseStudies,
  faqs,
  schema,
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
          relatedLinks={[
            { label: "Portfolio", href: "/portfolio" },
            { label: "Contact", href: "/contact" },
          ]}
        />

        <section className="split-page__section split-page__text">
          <div className="split-page__inner">
            <article className="split-page__prose">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

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
                </section>
              ))}

              <h2>Relevant Case Studies</h2>
              <p>
                These examples show how better structure, clearer messaging, and stronger local search alignment
                can turn a website into a more useful business asset.
              </p>
              <ul>
                {caseStudies.map((study) => (
                  <li key={study.href}>
                    <strong>
                      <Link href={study.href}>{study.title}</Link>
                    </strong>{" "}
                    - {study.summary}
                  </li>
                ))}
              </ul>

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
