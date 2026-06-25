/**
 * Prefix a public asset path with the configured base path.
 *
 * Static export served from a subpath (e.g. GitHub Pages project page at
 * `usuario.github.io/REPO`) needs every absolute asset URL prefixed with the
 * base path. Plain <img src="/x"> is NOT rewritten by Next's `basePath`, so we
 * do it explicitly. Empty base path (custom domain / root) leaves paths as-is.
 *
 * NEXT_PUBLIC_BASE_PATH is inlined at build time.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path: string): string {
  if (!path) return path;
  return `${BASE_PATH}${path}`;
}
