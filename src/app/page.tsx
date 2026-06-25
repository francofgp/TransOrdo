import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import CookieBanner from '@/components/CookieBanner';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Fleet from '@/components/sections/Fleet';
import Clients from '@/components/sections/Clients';
import Coverage from '@/components/sections/Coverage';
import Contact from '@/components/sections/Contact';
import { content } from '@/lib/content';
import { GA_MEASUREMENT_ID } from '@/lib/consent';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-nav">
        Saltar al contenido
      </a>

      <Header translations={content.nav} site={content.site} />

      <main id="main-content">
        <Hero translations={content.hero} site={content.site} />
        <Services translations={content.services} site={content.site} />
        <About translations={content.about} />
        <Fleet translations={content.fleet} />
        <Clients translations={content.clients} />
        <Coverage translations={content.coverage} />
        <Contact translations={content.contact} site={content.site} />
      </main>

      <Footer translations={content.footer} nav={content.nav} site={content.site} />

      <FloatingCTA site={content.site} />

      {GA_MEASUREMENT_ID && <CookieBanner translations={content.cookies} />}
    </>
  );
}
