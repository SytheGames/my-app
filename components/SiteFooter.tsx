import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  services: ["Brand Strategy", "Web Design", "Development", "SEO"],
  company: ["About", "Projects", "Industries", "Contact"],
};

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "Facebook", href: "#", icon: Facebook },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand-block">
            <Link href="#" className="site-footer__logo" aria-label="Kinex home">
              <span className="site-footer__logo-mark" aria-hidden>
                K
              </span>
              <span className="site-footer__logo-text">KINEX</span>
            </Link>
            <p className="site-footer__description">
              We design and build performance-first websites that help brands scale faster.
            </p>
            <Link href="#" className="site-footer__cta">
              Start your project
              <ArrowUpRight className="site-footer__cta-icon" aria-hidden="true" />
            </Link>
          </div>

          <div className="site-footer__links-grid">
            <div className="site-footer__column">
              <p className="site-footer__heading">Services</p>
              <ul className="site-footer__list">
                {footerLinks.services.map((item) => (
                  <li key={item}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer__column">
              <p className="site-footer__heading">Company</p>
              <ul className="site-footer__list">
                {footerLinks.company.map((item) => (
                  <li key={item}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer__column">
              <p className="site-footer__heading">Follow</p>
              <div className="site-footer__socials" aria-label="Social links">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <Link key={label} href={href} aria-label={label} className="site-footer__social-link">
                    <Icon className="site-footer__social-icon" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">© {new Date().getFullYear()} M Studio. All rights reserved.</p>
          <p className="site-footer__legal">Privacy Policy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
