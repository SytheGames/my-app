import Link from "next/link";

const cityLinks = [
  { label: "Chatham", href: "/locations/web-design-chatham" },
  { label: "Windsor", href: "/locations/web-design-windsor" },
  { label: "London", href: "/locations/web-design-london" },
  { label: "Sarnia", href: "/locations/web-design-sarnia" },
  { label: "Leamington", href: "/locations/web-design-leamington" },
];

export function TradeLocationLinks({ trade }: { trade: string }) {
  return (
    <p className="split-page__location-links">
      We build {trade} web design and local SEO for companies across Southwestern Ontario, including{" "}
      {cityLinks.map((city, index) => (
        <span key={city.href}>
          <Link href={city.href}>{city.label}</Link>
          {index < cityLinks.length - 2 ? ", " : index === cityLinks.length - 2 ? ", and " : ""}
        </span>
      ))}
      . See how this fits alongside the other <Link href="/industries">industries we build for</Link>.
    </p>
  );
}
