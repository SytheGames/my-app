"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export type PortfolioFilterCard = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  services: string[];
  industry: string;
  results: string[];
};

type PortfolioFilterGridProps = {
  caseStudies: PortfolioFilterCard[];
};

const allFilter = "All";

export function PortfolioFilterGrid({ caseStudies }: PortfolioFilterGridProps) {
  const [activeService, setActiveService] = useState(allFilter);
  const [activeIndustry, setActiveIndustry] = useState(allFilter);

  const serviceFilters = useMemo(
    () => [allFilter, ...Array.from(new Set(caseStudies.flatMap((study) => study.services))).sort()],
    [caseStudies],
  );

  const industryFilters = useMemo(
    () => [allFilter, ...Array.from(new Set(caseStudies.map((study) => study.industry))).sort()],
    [caseStudies],
  );

  const visibleCaseStudies = caseStudies.filter((study) => {
    const matchesService = activeService === allFilter || study.services.includes(activeService);
    const matchesIndustry = activeIndustry === allFilter || study.industry === activeIndustry;

    return matchesService && matchesIndustry;
  });

  return (
    <>
      <div className="portfolio-page__filters" aria-label="Portfolio filters">
        <div>
          <p className="portfolio-page__filter-label">Service</p>
          <div className="portfolio-page__filter-row">
            {serviceFilters.map((service) => (
              <button
                key={service}
                type="button"
                className={`portfolio-page__filter ${activeService === service ? "is-active" : ""}`}
                onClick={() => setActiveService(service)}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="portfolio-page__filter-label">Industry</p>
          <div className="portfolio-page__filter-row">
            {industryFilters.map((industry) => (
              <button
                key={industry}
                type="button"
                className={`portfolio-page__filter ${activeIndustry === industry ? "is-active" : ""}`}
                onClick={() => setActiveIndustry(industry)}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="portfolio-page__grid">
        {visibleCaseStudies.map((study) => (
          <article key={study.slug} className="portfolio-page__card">
            <Link href={`/portfolio/${study.slug}`} className="portfolio-page__image-link" aria-label={study.title}>
              <Image src={study.image} alt={study.title} width={1200} height={700} className="portfolio-page__image" />
            </Link>
            <div className="portfolio-page__card-content">
              <div className="portfolio-page__card-meta">
                <p className="portfolio-page__date">{new Date(study.date).toLocaleDateString("en-CA")}</p>
                <span>{study.industry}</span>
              </div>
              <h2 className="portfolio-page__card-title">
                <Link href={`/portfolio/${study.slug}`}>{study.title}</Link>
              </h2>
              <p className="portfolio-page__excerpt">{study.excerpt}</p>
              {study.results[0] ? <p className="portfolio-page__result">{study.results[0]}</p> : null}
              <div className="portfolio-page__service-tags">
                {study.services.slice(0, 3).map((service) => (
                  <span key={service}>{service}</span>
                ))}
              </div>
              <Link href={`/portfolio/${study.slug}`} className="portfolio-page__case-link">
                View goals, challenges, and results
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
