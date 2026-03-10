import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navItems = [
  "Our Work",
  "Website Design",
  "Ecommerce",
  "Adobe Commerce",
  "Digital Marketing",
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="#" className="brand" aria-label="Kinex home">
          <span className="brand__mark" aria-hidden>
            K
          </span>
          <span className="brand__text">KINEX</span>
          <span className="brand__menu" aria-hidden>
            <span />
            <span />
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item} href="#" className="site-nav__link">
              {item}
            </Link>
          ))}
        </nav>

        <Link href="#" className="quote-button quote-button--header">
          Get a Quote
          <ArrowRight className="quote-button__icon" aria-hidden />
        </Link>
      </div>
    </header>
  );
}
