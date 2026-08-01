import Image from "next/image";
import Link from "next/link";

type ProofImageBandProps = {
  src: string;
  alt: string;
  caption: string;
  href?: string;
};

export function ProofImageBand({ src, alt, caption, href }: ProofImageBandProps) {
  const media = (
    <span className="proof-band__image-wrap">
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 80rem" className="proof-band__image" />
    </span>
  );

  return (
    <section className="split-page__section proof-band" aria-label={alt}>
      <div className="split-page__inner proof-band__inner">
        {href ? (
          <Link href={href} className="proof-band__link">
            {media}
          </Link>
        ) : (
          media
        )}
        <p className="proof-band__caption">{caption}</p>
      </div>
    </section>
  );
}
