'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { WhatsAppIcon, ArrowRightIcon, RouteIcon } from '@/components/Icons';
import { waLink } from '@/lib/contact';
import { asset } from '@/lib/asset';
import type { Content } from '@/lib/content';

interface ServicesProps {
  translations: Content['services'];
  site: Content['site'];
}

export default function Services({ translations, site }: ServicesProps) {
  const [first, second, third] = translations.items;
  const whatsapp = waLink(site.whatsappNumber, site.whatsappMessage);

  return (
    <section id="servicios" className="bg-[var(--background-primary)]">
      <div className="container-custom">
        <ScrollReveal className="max-w-2xl">
          <span className="kicker">{translations.kicker}</span>
          <h2 className="section-title mt-4">{translations.title}</h2>
          <p className="mt-4 text-[var(--text-secondary)]">{translations.intro}</p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-12 gap-4 md:gap-5">
          <ScrollReveal as="article" className="col-span-12 md:col-span-7">
            <ServiceImageCard item={first} className="min-h-[320px] md:min-h-[420px]" />
          </ScrollReveal>

          <ScrollReveal as="article" className="col-span-12 md:col-span-5" delay={0.08}>
            <ServiceImageCard item={second} className="min-h-[320px] md:min-h-[420px]" />
          </ScrollReveal>

          <ScrollReveal as="article" className="col-span-12" delay={0.12}>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[var(--brand)] p-7 text-[var(--brand-contrast)] md:flex-row md:items-center md:p-9">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide opacity-80">
                  <RouteIcon className="h-5 w-5" />
                  {third.index}
                </div>
                <h3 className="font-condensed-strong mt-2 text-2xl uppercase md:text-3xl">{third.title}</h3>
                <p className="mt-2 text-[var(--brand-contrast)]/85">{third.description}</p>
              </div>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg shrink-0 bg-[var(--brand-contrast)] text-[var(--brand)] hover:opacity-90"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Consultar
                <ArrowRightIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ServiceImageCard({
  item,
  className = '',
}: {
  item: Content['services']['items'][number];
  className?: string;
}) {
  return (
    <div className={`group relative isolate flex items-end overflow-hidden rounded-2xl border border-[var(--border-color)] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(item.image)}
        alt={item.alt}
        loading="lazy"
        className="img-cover absolute inset-0 -z-10 transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ filter: 'saturate(0.85) brightness(0.82)' }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, transparent 30%, rgba(8,10,14,0.55) 70%, rgba(8,10,14,0.92) 100%)',
        }}
      />
      <div className="p-6 md:p-7">
        <span className="text-sm font-bold tracking-widest text-[var(--brand)]">{item.index}</span>
        <h3 className="font-condensed-strong mt-2 text-2xl uppercase text-white md:text-[1.7rem]">{item.title}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">{item.description}</p>
      </div>
    </div>
  );
}
