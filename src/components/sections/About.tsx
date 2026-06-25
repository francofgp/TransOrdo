'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { TruckIcon, ShieldCheckIcon, HandshakeIcon, ClockIcon } from '@/components/Icons';
import { asset } from '@/lib/asset';
import type { Content } from '@/lib/content';

interface AboutProps {
  translations: Content['about'];
}

const valueIcons = [TruckIcon, ShieldCheckIcon, HandshakeIcon, ClockIcon];

export default function About({ translations }: AboutProps) {
  return (
    <section id="nosotros" className="bg-[var(--background-secondary)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:items-center">
          <ScrollReveal>
            <h2 className="section-title">{translations.title}</h2>
            <div className="mt-5 space-y-4 text-[var(--text-secondary)] md:text-lg">
              {translations.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-[var(--border-color)] pt-6">
              {translations.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-condensed-strong text-2xl text-[var(--brand)] md:text-3xl">
                    {stat.value}
                  </dd>
                  <span className="text-xs uppercase tracking-wide text-[var(--text-muted)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </dl>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border-color)] aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset('/fleet/camion-3.jpg')}
                alt="Cabina Mercedes-Benz con el lettering de Transporte Ordoñes"
                loading="lazy"
                className="img-cover"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.05}>
          <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {translations.values.map((value, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <li key={value.title} className="border-t border-[var(--border-color)] pt-5">
                  <Icon className="h-6 w-6 text-[var(--brand)]" />
                  <h3 className="mt-3 font-semibold text-[var(--text-primary)]">{value.title}</h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{value.description}</p>
                </li>
              );
            })}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
