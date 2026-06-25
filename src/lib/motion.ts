/**
 * Shared Framer Motion constants.
 * ease: ease-out-expo — confident, decisive deceleration (no bounce).
 * viewport: standard scroll-trigger options for whileInView.
 */

export const ease = [0.16, 1, 0.3, 1] as const;

export const viewport = { once: true, margin: '-80px' } as const;
