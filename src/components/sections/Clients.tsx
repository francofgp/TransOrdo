'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { asset } from '@/lib/asset';
import type { Content } from '@/lib/content';

interface ClientsProps {
  translations: Content['clients'];
}

export default function Clients({ translations }: ClientsProps) {
  return (
    <section id="clientes" className="bg-[var(--background-secondary)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <ScrollReveal>
            <span className="kicker">{translations.kicker}</span>
            <h2 className="section-title mt-4">{translations.title}</h2>
            <p className="mt-4 max-w-md text-[var(--text-secondary)] md:text-lg">
              {translations.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <span className="text-3xl font-black italic tracking-tight" style={{ color: 'oklch(0.62 0.21 27)' }}>
                Saputo
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-[var(--text-primary)]">
                La&nbsp;Paulina
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                {translations.logosNote}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-[var(--border-color)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(translations.image)}
                alt={translations.imageAlt}
                loading="lazy"
                className="block w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
