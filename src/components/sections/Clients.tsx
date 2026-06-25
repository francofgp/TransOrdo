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

            <div className="mt-8 grid max-w-md grid-cols-2 gap-3">
              {translations.logos.map((name, i) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-xl border border-dashed border-[var(--border-color)] px-4 py-3"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--brand)] text-sm font-bold text-[var(--brand-contrast)]">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-[var(--text-secondary)]">{name}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[var(--text-muted)]">{translations.logosNote}</p>
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
