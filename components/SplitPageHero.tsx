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
};

export function SplitPageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
}: SplitPageHeroProps) {
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
        </div>
      </div>
      <div className="split-hero__right">
        <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 760px) 100vw, 50vw" className="split-hero__image" />
      </div>
    </section>
  );
}
