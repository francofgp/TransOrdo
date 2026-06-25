'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { asset } from '@/lib/asset';
import type { Content } from '@/lib/content';

interface FleetProps {
  translations: Content['fleet'];
}

// Asymmetric spans for up to 5 photos (12-col grid).
const spans = ['md:col-span-7', 'md:col-span-5', 'md:col-span-4', 'md:col-span-4', 'md:col-span-4'];
const heights = ['min-h-[300px] md:min-h-[400px]', 'min-h-[300px] md:min-h-[400px]', 'min-h-[260px]', 'min-h-[260px]', 'min-h-[260px]'];

export default function Fleet({ translations }: FleetProps) {
  return (
    <section id="flota" className="bg-[var(--background-primary)]">
      <div className="container-custom">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <ScrollReveal className="max-w-2xl">
            <h2 className="section-title">{translations.title}</h2>
            <p className="mt-4 text-[var(--text-secondary)]">{translations.intro}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="flex flex-wrap gap-2">
            {translations.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border-color)] bg-[var(--surface-primary)] px-3 py-1.5 text-xs font-semibold text-[var(--text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </ScrollReveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12">
          {translations.photos.map((photo, i) => (
            <ScrollReveal
              key={photo.image}
              as="div"
              delay={0.05 * i}
              className={`${spans[i] ?? 'md:col-span-4'} col-span-1`}
            >
              <figure
                className={`group relative overflow-hidden rounded-2xl border border-[var(--border-color)] ${heights[i] ?? 'min-h-[260px]'} h-full`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(photo.image)}
                  alt={photo.alt}
                  loading="lazy"
                  className="img-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
