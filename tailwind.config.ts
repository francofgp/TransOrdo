import type { Config } from 'tailwindcss';

// ═══════════════════════════════════════════════════════════════════════════
// TRANSPORTE ORDOÑES — BRAND TOKENS (mirror of globals.css CSS variables)
// Runtime styling uses the CSS vars; this mirror exists for Tailwind utilities.
// ═══════════════════════════════════════════════════════════════════════════

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--brand)',
          bright: 'var(--brand-bright)',
          contrast: 'var(--brand-contrast)',
        },
        amber: { DEFAULT: 'var(--amber)' },
      },
      fontFamily: {
        sans: ['var(--font-archivo)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(2.7rem, 8vw, 6.4rem)',
        section: 'clamp(1.9rem, 4.2vw, 3.2rem)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
