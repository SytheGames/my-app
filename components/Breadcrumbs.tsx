import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kealeydesign.ca";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const trail: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol className="breadcrumbs__list">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;

            return (
              <li key={item.label} className="breadcrumbs__item">
                {item.href && !isLast ? (
                  <Link href={item.href} className="breadcrumbs__link">
                    {item.label}
                  </Link>
                ) : (
                  <span className="breadcrumbs__current" aria-current="page">
                    {item.label}
                  </span>
                )}
                {!isLast ? (
                  <span className="breadcrumbs__separator" aria-hidden>
                    /
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
