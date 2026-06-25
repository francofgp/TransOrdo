'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { WhatsAppIcon, PhoneIcon, MailIcon, MapPinIcon, FacebookIcon } from '@/components/Icons';
import { waLink, mapsEmbed, mapsLink } from '@/lib/contact';
import type { Content } from '@/lib/content';

interface ContactProps {
  translations: Content['contact'];
  site: Content['site'];
}

export default function Contact({ translations, site }: ContactProps) {
  const whatsapp = waLink(site.whatsappNumber, site.whatsappMessage);
  const labels = translations.labels;

  const items = [
    {
      icon: WhatsAppIcon,
      label: labels.whatsapp,
      value: site.phoneDisplay,
      href: whatsapp,
      external: true,
    },
    { icon: PhoneIcon, label: labels.phone, value: site.landlineDisplay, href: site.phoneHref, external: false },
    { icon: MailIcon, label: labels.email, value: site.email, href: `mailto:${site.email}`, external: false },
    {
      icon: MapPinIcon,
      label: labels.address,
      value: `${site.addressLine}, ${site.addressRegion}`,
      href: mapsLink(site.mapsQuery),
      external: true,
    },
    { icon: FacebookIcon, label: labels.facebook, value: 'trans.ordo', href: site.facebook, external: true },
  ];

  return (
    <section id="contacto" className="section-generous bg-[var(--background-secondary)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <span className="kicker">{translations.kicker}</span>
            <h2 className="section-title mt-4">{translations.title}</h2>
            <p className="mt-4 max-w-md text-[var(--text-secondary)] md:text-lg">
              {translations.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <WhatsAppIcon className="h-5 w-5" />
                {translations.ctaPrimary}
              </a>
              <a href={site.phoneHref} className="btn btn-secondary btn-lg">
                <PhoneIcon className="h-5 w-5" />
                {translations.ctaSecondary}
              </a>
            </div>

            <ul className="mt-10 space-y-1">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-[var(--surface-hover)]"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[var(--border-color)] bg-[var(--surface-primary)] text-[var(--brand)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wide text-[var(--text-muted)]">
                          {item.label}
                        </span>
                        <span className="block truncate font-medium text-[var(--text-primary)]">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="h-full min-h-[360px] overflow-hidden rounded-2xl border border-[var(--border-color)]">
              <iframe
                title="Ubicación de Transporte Ordoñes en el mapa"
                src={mapsEmbed(site.mapsQuery)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                style={{ border: 0, minHeight: 360 }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
