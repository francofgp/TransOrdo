'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { WhatsAppIcon, PhoneIcon } from '@/components/Icons';
import { ease } from '@/lib/motion';
import { waLink } from '@/lib/contact';
import { asset } from '@/lib/asset';
import type { Content } from '@/lib/content';

interface HeroProps {
  translations: Content['hero'];
  site: Content['site'];
}

const overlay =
  'linear-gradient(180deg, rgba(8,10,14,0.5) 0%, rgba(8,10,14,0.22) 22%, rgba(8,10,14,0.68) 55%, rgba(8,10,14,0.97) 100%), radial-gradient(120% 75% at 6% 118%, rgba(16,174,239,0.24), transparent 58%)';

export default function Hero({ translations, site }: HeroProps) {
  const reduced = useReducedMotion();
  const whatsapp = waLink(site.whatsappNumber, site.whatsappMessage);

  const fade = (delay: number, y = 28) => ({
    initial: reduced ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[640px] items-end overflow-hidden md:min-h-[88vh]"
    >
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/fleet/camion-2.jpg')}
          alt="Camión Mercedes-Benz de Transporte Ordoñes en la ruta"
          className="img-cover"
          style={{ objectPosition: 'center 38%' }}
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ background: overlay }} />
      </div>

      <div className="container-custom relative w-full pb-[clamp(2.6rem,7vh,5rem)] pt-32">
        <motion.h1
          {...fade(0.1)}
          className="font-display display max-w-[16ch] text-white"
        >
          {translations.headlineLead}
          <br />
          <span className="text-[var(--brand)]">{translations.headlineAccent}</span>
        </motion.h1>

        <motion.p
          {...fade(0.35)}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg"
          style={{ textShadow: '0 1px 16px rgba(8,10,14,0.6)' }}
        >
          {translations.description}
        </motion.p>

        <motion.div {...fade(0.5)} className="mt-8 flex flex-wrap gap-3">
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            <WhatsAppIcon className="h-5 w-5" />
            {translations.ctaPrimary}
          </a>
          <a
            href={site.phoneHref}
            className="btn btn-lg border border-white/25 bg-white/5 text-white backdrop-blur-sm transition-colors hover:border-white/60"
          >
            <PhoneIcon className="h-5 w-5" />
            {translations.ctaSecondary}
          </a>
        </motion.div>

        <motion.ul
          {...fade(0.65)}
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-5"
        >
          {translations.trust.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm font-medium text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" aria-hidden="true" />
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
