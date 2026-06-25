'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { WhatsAppIcon } from '@/components/Icons';
import { ease } from '@/lib/motion';
import { waLink } from '@/lib/contact';
import type { Content } from '@/lib/content';

interface FloatingCTAProps {
  site: Content['site'];
}

export default function FloatingCTA({ site }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={waLink(site.whatsappNumber, site.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          initial={reduced ? false : { opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.3, ease }}
          className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full text-[var(--brand-contrast)] shadow-lg"
          style={{ backgroundColor: 'var(--brand)' }}
        >
          <WhatsAppIcon className="h-7 w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
