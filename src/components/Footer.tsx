import React from 'react';
import Logo from '@/components/Logo';
import { MapPinIcon, PhoneIcon, MailIcon, WhatsAppIcon } from '@/components/Icons';
import { waLink } from '@/lib/contact';
import type { Content } from '@/lib/content';

interface FooterProps {
  translations: Content['footer'];
  nav: Content['nav'];
  site: Content['site'];
}

export default function Footer({ translations, nav, site }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--background-secondary)]">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo size="1.7rem" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--text-secondary)]">
              {translations.tagline}
            </p>
          </div>

          <nav aria-label="Pie de página">
            <h2 className="kicker no-rule mb-4">{translations.navTitle}</h2>
            <ul className="space-y-2">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--brand)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="kicker no-rule mb-4">{translations.contactTitle}</h2>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[var(--brand)]" />
                <span>{site.addressLine}, {site.addressRegion}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-[18px] w-[18px] shrink-0 text-[var(--brand)]" />
                <a href={site.phoneHref} className="transition-colors hover:text-[var(--brand)]">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="h-[18px] w-[18px] shrink-0 text-[var(--brand)]" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-[var(--brand)]">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsAppIcon className="h-[18px] w-[18px] shrink-0 text-[var(--brand)]" />
                <a
                  href={waLink(site.whatsappNumber, site.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--brand)]"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--border-color)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {site.name}. {translations.rights}</span>
          <span>{translations.madeWith}</span>
        </div>
      </div>
    </footer>
  );
}
