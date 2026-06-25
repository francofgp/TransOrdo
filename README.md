# Transporte Ordoñes — Landing Page

Landing page de **Transporte Ordoñes**, empresa familiar de transporte de cargas de Tío Pujío, Córdoba (cargas generales y granos, cobertura nacional).

Sitio estático, rápido y responsive, con modo oscuro/claro. Construido reusando el stack de la landing de Phyros.

## Stack

- **Framework:** Next.js 16 (App Router) + React 19, exportado como sitio **estático** (`output: 'export'`).
- **Estilos:** Tailwind CSS 4 + variables CSS (OKLCH) en `src/app/globals.css`.
- **Animación:** Framer Motion 12 (respeta `prefers-reduced-motion`).
- **Tipografía:** Archivo (`next/font/google`).
- **Lenguaje:** TypeScript 5 (strict).
- **Analytics (opcional):** GA4 + Consent Mode v2 (apagado hasta cargar `NEXT_PUBLIC_GA_ID`).
- **Gestor de paquetes:** pnpm.

## Requisitos

- Node.js 20+
- pnpm 10+ (`npm i -g pnpm`)

## Empezar

```bash
pnpm install      # instalar dependencias
pnpm dev          # servidor de desarrollo en http://localhost:3000
pnpm build        # build de producción → carpeta out/ (estático)
pnpm lint         # linter
```

> Nota: no corras `pnpm build` mientras `pnpm dev` está activo (comparten la carpeta `.next` y puede corromper el estado del dev). Frená el dev primero.

## Estructura

```
src/
  app/
    layout.tsx        # <head>, metadata/SEO, fuente, tema anti-FOUC, JSON-LD
    page.tsx          # server component: arma las secciones
    globals.css       # tokens (CSS vars) + @layer base/components
    not-found.tsx, robots.ts, sitemap.ts
  components/
    Header.tsx, Footer.tsx, Logo.tsx, Icons.tsx
    ScrollReveal.tsx, FloatingCTA.tsx, CookieBanner.tsx
    sections/         # Hero, Services, About, Fleet, Clients, Coverage, Contact
  context/ThemeContext.tsx   # dark/light
  lib/                # content.ts, contact.ts, consent.ts, motion.ts, utils.ts
messages/es.json      # TODO el contenido/copy del sitio (fuente única)
public/               # fleet/ (fotos), clients/, brand/ (favicon), og-image.jpg
PRODUCT.md, DESIGN.md # contexto estratégico y visual (para humanos y agentes)
```

## Editar el contenido

Todo el texto, datos de contacto y rutas de imágenes viven en **`messages/es.json`**. No hace falta tocar código para cambiar copy.

Claves importantes en `site`:

| Clave | Qué es |
|---|---|
| `whatsappNumber` | Número para el link de WhatsApp, formato internacional sin `+` ni espacios (ej: `5493532XXXXXX`). |
| `phoneHref` | Link de “Llamar” (`tel:+54...`). |
| `phoneDisplay` / `landlineDisplay` | Números como se muestran en pantalla. |
| `email`, `facebook`, `addressLine`, `mapsQuery` | Contacto y dirección del mapa. |

Los números de confianza (años, flota) están en `about.stats`.

> ⚠️ **Pendiente antes de publicar:** reemplazar el teléfono/WhatsApp *placeholder* por los reales. `info.txt` indica `0353 562-8132`; el logo indica `(0353) 488-1051/1111`. Confirmar cuál es el vigente y si tiene WhatsApp.

## Temas (oscuro/claro)

El default es **oscuro**. Un script en `<head>` aplica la clase antes del primer pintado (sin flash). El usuario alterna con el botón del header; la elección se guarda en `localStorage` (`darkMode`).

Los colores son variables CSS en `globals.css`, bajo `.dark` y `.light`. Para cambiar la paleta, editá esas variables (están en OKLCH).

## Despliegue (GitHub Pages, gratis)

El repo incluye un workflow (`.github/workflows/deploy.yml`) que buildea y publica el sitio estático en GitHub Pages en cada push a `main`.

Pasos:

1. Subí el repo a GitHub.
2. En **Settings → Pages**, elegí **Source: GitHub Actions**.
3. Push a `main` → el workflow buildea y publica.

**Dominio:**

- **Con dominio propio** (recomendado, ej: `transporteordones.com.ar`): cargalo en Settings → Pages → Custom domain. No requiere configuración extra; las rutas de assets funcionan tal cual.
- **Con la URL de proyecto** (`usuario.github.io/TransOrdo`): el sitio vive en un subpath. Configurá la variable `NEXT_PUBLIC_BASE_PATH=/TransOrdo` (ver `next.config.mjs`). El workflow ya la pasa automáticamente cuando no hay dominio propio.

> Recordá actualizar `SITE_URL` en `src/app/layout.tsx`, `robots.ts` y `sitemap.ts` con el dominio final.

## Pendientes

- [ ] Teléfono/WhatsApp reales (ver arriba).
- [ ] Años en el rubro y tamaño de flota reales (`about.stats`).
- [ ] Más clientes / confirmar permiso para mostrar logos.
- [ ] Fotos de la flota en mejor resolución (las actuales son caseras).
- [ ] Dominio final + `SITE_URL`.
- [ ] (Opcional) `NEXT_PUBLIC_GA_ID` para activar analytics.

---

Hecho para Nery Ordoñes. Las fotos propias pertenecen a Transporte Ordoñes; `public/fleet/refrigerado.jpg` es stock (Pexels, ver `public/fleet/CREDITS.md`). Los nombres y logos de clientes solo se publican con permiso de cada empresa; por ahora la sección Clientes usa placeholders genéricos.

## Propiedad y licencia

Código y diseño **© 2026 Transporte Ordoñes — todos los derechos reservados** (ver `LICENSE`). El repositorio es **público solo para despliegue/transparencia**: **no es open source** y no se permite su reutilización sin autorización. Como es un sitio estático, el repo no expone nada que no se vea ya desde el navegador (no hay claves ni secretos).

Desarrollado por **Franco Giuliano Pertile** — [Phyros](https://www.phyros.net).
