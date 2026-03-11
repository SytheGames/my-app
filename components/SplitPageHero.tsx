import Image from "next/image";
import Link from "next/link";

type SplitPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  relatedLinks?: Array<{
    label: string;
    href: string;
  }>;
};

export function SplitPageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
  relatedLinks,
}: SplitPageHeroProps) {
  const links =
    relatedLinks ??
    [
      { label: "View services", href: "/services" },
      { label: "See portfolio", href: "/portfolio" },
    ];

  return (
    <section className="split-hero" aria-label={title}>
      <div className="split-hero__left">
        <div className="split-hero__content">
          <p className="split-hero__eyebrow">{eyebrow}</p>
          <h1 className="split-hero__title">{title}</h1>
          <p className="split-hero__description">{description}</p>
          {ctaLabel && ctaHref ? (
            <Link href={ctaHref} className="split-hero__button">
              {ctaLabel}
            </Link>
          ) : null}
          <nav className="split-hero__related" aria-label="Related pages">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="split-hero__related-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="split-hero__right">
        <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 760px) 100vw, 50vw" className="split-hero__image" />
      </div>
    </section>
  );
}
