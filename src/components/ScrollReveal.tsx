'use client';

import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ease, viewport } from '@/lib/motion';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'li' | 'section' | 'article';
}

/**
 * Viewport-triggered fade-up wrapper. Disabled when prefers-reduced-motion.
 */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = 'div',
}: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </MotionTag>
  );
}
