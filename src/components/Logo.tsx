import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  /** Root font-size; the lockup scales from it (em-based). */
  size?: string;
  /** Force light text (for use over the dark hero image). */
  onDark?: boolean;
}

/**
 * Wordmark lockup recreated in type (Archivo) to echo the printed logo:
 * small tracked "TRANSPORTE" over a heavy "ORDOÑES" with the ñ in brand cyan.
 */
export default function Logo({ className, size = '1.4rem', onDark = false }: LogoProps) {
  return (
    <span
      className={cn('inline-flex flex-col leading-[0.8] select-none', className)}
      style={{ fontSize: size }}
      aria-label="Transporte Ordoñes"
    >
      <span
        className={cn('font-semibold uppercase', onDark ? 'text-white/70' : 'text-[var(--text-muted)]')}
        style={{ fontSize: '0.4em', letterSpacing: '0.36em' }}
      >
        Transporte
      </span>
      <span
        className={cn('font-display', onDark ? 'text-white' : 'text-[var(--text-primary)]')}
        style={{ fontSize: '1em', letterSpacing: '0.01em' }}
      >
        Ordo<span className="text-[var(--brand)]">ñ</span>es
      </span>
    </span>
  );
}
