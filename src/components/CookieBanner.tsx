'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ease } from '@/lib/motion';
import { getStoredConsent, setConsent } from '@/lib/consent';

interface CookieBannerProps {
  translations: {
    message: string;
    accept: string;
    reject: string;
  };
}

export default function CookieBanner({ translations }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (getStoredConsent() === null) setVisible(true);
  }, []);

  const choose = (value: 'granted' | 'denied') => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Consentimiento de cookies"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease }}
          className="fixed bottom-4 left-4 right-4 z-[80] mx-auto max-w-xl rounded-xl border border-[var(--border-color)] bg-[var(--surface-primary)] p-4 shadow-lg sm:p-5"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[var(--text-secondary)]">{translations.message}</p>
            <div className="flex shrink-0 gap-2">
              <button className="btn btn-secondary btn-sm" onClick={() => choose('denied')}>
                {translations.reject}
              </button>
              <button className="btn btn-primary btn-sm" onClick={() => choose('granted')}>
                {translations.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
