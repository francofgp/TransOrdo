// Base path for subpath hosting (e.g. GitHub Pages project page /REPO).
// Empty for a custom domain or user/org page. Set via NEXT_PUBLIC_BASE_PATH.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // STATIC EXPORT — deploy to GitHub Pages / Cloudflare Pages / Netlify
  output: 'export',

  basePath: basePath || undefined,

  compress: true,

  // Image Optimization is disabled for static export; we ship pre-sized assets.
  images: {
    unoptimized: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;
