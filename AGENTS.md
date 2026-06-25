# AGENTS.md

Guía para agentes de IA que trabajen en este repo. Leé esto antes de tocar código.

## Qué es

Landing page estática de **Transporte Ordoñes** (empresa de transporte de cargas, Tío Pujío, Córdoba). Marketing site, no app. Objetivo: que el visitante entienda la propuesta y contacte por WhatsApp/teléfono.

## Contexto de diseño (leer primero)

- **`PRODUCT.md`** — estrategia: registro (brand), audiencia, propósito, personalidad (rutero · confiable · familiar), anti-referencias, principios.
- **`DESIGN.md`** — sistema visual: paleta cyan/asfalto en OKLCH, tipografía Archivo, layout, motion, componentes. Es la fuente de verdad visual.

No dupliques su contenido; actualizalos si cambia la dirección.

## Setup / comandos

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # build estático → out/
pnpm lint
```

- Gestor: **pnpm** (no npm/yarn).
- **No corras `pnpm build` con `pnpm dev` activo**: comparten `.next` y corrompen el estado del dev. Frená el dev antes de buildear.

## Arquitectura y convenciones

- **Next 16 App Router, export estático** (`output: 'export'`, `images.unoptimized`).
- `src/app/page.tsx` es **server component**: importa el contenido y arma las secciones. Solo los componentes con interacción/animación son `'use client'` (Header, sections con Framer Motion, CookieBanner, FloatingCTA). Mantené esa división para minimizar JS.
- Secciones en `src/components/sections/`, una por archivo, reciben su slice de contenido por prop (`translations`).
- Iconos SVG centralizados en `src/components/Icons.tsx` (no inline por componente).
- `ScrollReveal` envuelve bloques para fade-in al scroll (respeta `prefers-reduced-motion`).
- Alias de imports: `@/*` → `src/*`.
- Clases: `cn()` de `src/lib/utils.ts` (clsx + tailwind-merge).

## Estilos — ⚠️ caveat importante de Tailwind v4

`globals.css` usa **cascade layers**. Las reglas base y de componentes están dentro de `@layer base { ... }` y `@layer components { ... }` **a propósito**:

> CSS sin capa (unlayered) GANA sobre cualquier `@layer` de Tailwind, sin importar la especificidad. Si ponés `.btn` o `a { color: inherit }` fuera de una capa, pisan a las utilidades de Tailwind (`text-*`, `hidden`, etc.) y se rompen cosas (texto invisible, `hidden` que no oculta).

Reglas:
- Reset/base → `@layer base`. Componentes (`.btn`, `.kicker`, `.section-title`, `.container-custom`, etc.) → `@layer components`.
- Colores: variables CSS en `.dark`/`.light` (OKLCH). Tokens de marca también espejados en `tailwind.config.ts`.
- Para color en utilidades arbitrarias preferí las utilidades nombradas (`text-brand`, `bg-brand-contrast`) o `text-[color:var(--x)]` si hace falta el hint de tipo.
- Imágenes con overlay/posición negativa: el contenedor necesita `isolate` para crear contexto de apilado (si no, la imagen con `-z-10` se va detrás del fondo de la sección).
- `container-custom` usa `margin: auto`; dentro de un flex column agregale `w-full` o colapsa.

## Tipografía

- **Archivo** vía `next/font/google` con **pesos explícitos** (`weight: ['400'...'900']`).
- No uses el eje de ancho (`axes: ['wdth']`): el rango que genera (`62..125`) hace fallar el fetch de Google Fonts en build. El look “expandido” se logra con peso 900 + tracking + uppercase.

## Contenido / i18n

- Solo español. Todo el copy en **`messages/es.json`**, tipado vía `src/lib/content.ts` (`Content = typeof es`).
- Datos de contacto y placeholders en `site`. Los números de teléfono/WhatsApp son **placeholders**: confirmá con el cliente antes de publicar.

## Export estático

- Route handlers de metadata (`robots.ts`, `sitemap.ts`) necesitan `export const dynamic = 'force-static'` o el build falla con `output: export`.
- No escribas a `out/`/`.next` a mano; editá fuentes y corré `pnpm build`.

## Despliegue

- GitHub Pages vía `.github/workflows/deploy.yml` (build + upload de `out/`).
- Subpath (`usuario.github.io/REPO`) → setear `NEXT_PUBLIC_BASE_PATH`. Dominio propio → sin basePath.
- Actualizá `SITE_URL` en `layout.tsx`, `robots.ts`, `sitemap.ts` con el dominio real.

## Verificación

- `pnpm build` debe pasar (TypeScript + export) antes de dar por terminado un cambio.
- Revisá en browser: dark y light, mobile (incluido el menú hamburguesa) y desktop, estados hover/focus.
- Sin errores de consola; respetar accesibilidad (foco visible, skip-nav, alt en imágenes, `aria-*`).

## Tooling disponible

- `gh` (GitHub CLI), `git`, `docker`, `pnpm`/`node`.
- Para deploy: `gh` + GitHub Actions (Pages). Preferí `gh` sobre la web.

## Gotchas (resumen de cosas que ya mordieron)

1. CSS unlayered pisa utilidades de Tailwind → usar `@layer`.
2. Archivo con eje `wdth` rompe el build → usar pesos.
3. `robots`/`sitemap` necesitan `force-static`.
4. No buildear con el dev corriendo.
5. `container-custom` en flex column → `w-full`.
6. Imagen de fondo invisible → falta `isolate` en el contenedor.
