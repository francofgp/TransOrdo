'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { MapPinIcon, RouteIcon } from '@/components/Icons';
import type { Content } from '@/lib/content';

interface CoverageProps {
  translations: Content['coverage'];
}

export default function Coverage({ translations }: CoverageProps) {
  return (
    <section id="cobertura" className="bg-[var(--background-primary)]">
      <div className="container-custom">
        <div className="overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface-primary)]">
          <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-[1.1fr_1fr] md:gap-12 md:p-12">
            <ScrollReveal>
              <span className="kicker">{translations.kicker}</span>
              <h2 className="section-title mt-4">{translations.title}</h2>
              <p className="mt-4 max-w-md text-[var(--text-secondary)] md:text-lg">
                {translations.description}
              </p>
              <div className="mt-7 inline-flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)] px-4 py-3">
                <MapPinIcon className="h-5 w-5 text-[var(--brand)]" />
                <div>
                  <div className="text-xs uppercase tracking-wide text-[var(--text-muted)]">
                    {translations.baseLabel}
                  </div>
                  <div className="font-semibold text-[var(--text-primary)]">{translations.baseValue}</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="relative">
              <div className="mb-4 flex items-center gap-2 text-[var(--text-muted)]">
                <RouteIcon className="h-5 w-5 text-[var(--brand)]" />
                <span className="text-sm font-semibold uppercase tracking-wide">Llegamos a</span>
              </div>
              <ul className="flex flex-wrap gap-2.5">
                {translations.regions.map((region) => (
                  <li
                    key={region}
                    className="rounded-lg border border-[var(--border-color)] bg-[var(--surface-secondary)] px-3.5 py-2 text-sm font-medium text-[var(--text-primary)]"
                  >
                    {region}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-condensed-strong text-[clamp(2.2rem,5vw,3.4rem)] uppercase leading-none text-[var(--brand)]">
                Todo el país
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
