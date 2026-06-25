---
name: Transporte Ordoñes
type: brand / landing
theme_default: dark
color_strategy: committed
brand_hue: cyan (logo)
fonts:
  display: Archivo (wght 700-900, width expanded, uppercase)
  body: Archivo (wght 400-600)
radii: small (8-12px), utilitarian
elevation: flat (surface color + 1px border, no heavy shadows)
---

# Transporte Ordoñes — Design System

Sistema visual de la landing. Estética **industrial / rutera**: asfalto oscuro, cyan de alto voltaje (del logo), tipografía de señalética. Honra el pedido de "celeste y blanco" sin caer en la bandera literal: lo argentino viene de las fotos reales y el copy.

## 1. Color

OKLCH siempre. Neutros tintados levísimo al cyan (chroma ~0.012), nunca `#000`/`#fff`. Estrategia **Committed**: el cyan carga la identidad como acento (~10-15% de pantalla); el resto es asfalto + blanco.

**Dark (default)**
- `--background-primary` oklch(0.16 0.012 245) — asfalto
- `--background-secondary` oklch(0.198 0.014 245)
- `--surface-primary` oklch(0.205 0.014 245) — tarjetas
- `--surface-secondary` oklch(0.25 0.015 245)
- `--surface-hover` oklch(0.30 0.016 245)
- `--border-color` oklch(0.34 0.016 245)
- `--text-primary` oklch(0.97 0.004 245)
- `--text-secondary` oklch(0.78 0.012 245)
- `--text-muted` oklch(0.62 0.012 245)
- `--brand` oklch(0.72 0.142 232) — cyan marca
- `--brand-bright` oklch(0.82 0.13 220) — hover (aclara)
- `--brand-contrast` oklch(0.17 0.02 245) — texto sobre cyan
- `--amber` oklch(0.80 0.15 72) — acento puntual (badges/alertas)

**Light**
- `--background-primary` oklch(0.975 0.006 240)
- `--surface-primary` oklch(1 0 0)
- `--surface-secondary` oklch(0.945 0.008 240)
- `--border-color` oklch(0.85 0.012 240)
- `--text-primary` oklch(0.22 0.02 245)
- `--text-secondary` oklch(0.42 0.02 245)
- `--brand` oklch(0.56 0.16 238) — cyan más oscuro para contraste AA
- `--brand-contrast` oklch(0.99 0 0)

## 2. Typography

**Archivo** (Omnibus-Type, foundry argentino). Una sola familia con fuerte contraste de peso y ancho.
- **Display / H1**: wght 900, `font-stretch` ~115-120% (axis wdth), UPPERCASE, tracking -0.02em, line-height .92, `clamp(2.7rem, 8vw, 6.4rem)`.
- **H2**: wght 800, expanded, UPPERCASE, `clamp(1.9rem, 4.2vw, 3.2rem)`.
- **Body**: wght 400-500, line-height 1.6, medida 60-75ch.
- **Kicker/label**: wght 700, UPPERCASE, tracking .22em, 0.78rem, color `--brand`.
Escala modular ≥1.25. Texto claro sobre oscuro: +0.05 line-height.

## 3. Spacing & Layout

- Container: max 1200px, padding-inline `clamp(1.1rem, 4vw, 2.5rem)`.
- Secciones: padding-block `clamp(60px, 8vw, 100px)`; variantes generous/compact.
- Ritmo variado (no padding uniforme). Layouts asimétricos antes que stacks centrados.
- Sin grillas de tarjetas idénticas: servicios y flota usan composición editorial (tamaños distintos, foto + texto).

## 4. Elevation & Surfaces

**Plano.** Superficie = color + borde 1px (`--border-color`). Sin sombras pesadas. Profundidad por color/contraste y por imágenes con overlay. Radios 8-12px (utilitario, no pill salvo chips).

## 5. Components

- **Botón primario**: fondo `--brand`, texto `--brand-contrast`, radio 10px, wght 700. Hover: `--brand-bright` + translateY(-2px).
- **Botón secundario**: transparente, borde `--border-color`. Hover: borde/texto `--brand`.
- **WhatsApp/Llamar**: CTAs primario/secundario con icono; presentes en header (sticky), hero y cierre. WhatsApp = barra flotante en mobile.
- **Card de servicio/flota**: imagen real con overlay degradado + tinte cyan, índice (01/02), título uppercase, texto corto.
- **Kicker**: label uppercase cyan con tracking, para encabezar secciones (uso medido, no en todas).
- **Imágenes**: fotos reales de la flota con `object-fit: cover`, overlay oscuro, leve duotono cyan para cohesión; `loading="lazy"` bajo el fold; `alt` descriptivo.

## 6. Motion

- Framer Motion, `whileInView` con `viewport {once:true, margin:-80px}`.
- Ease-out-expo `[0.16, 1, 0.3, 1]`. Sin bounce/elastic.
- Entrada hero escalonada (kicker → título → texto → CTAs). Reveals sutiles fade-up al scrollear.
- Respeta `prefers-reduced-motion` (sin animación de entrada).

## Mapping
Todo el runtime usa CSS vars en `globals.css` (`.dark`/`.light`). `tailwind.config.ts` espeja valores clave. Tipografía vía `next/font/google` (`--font-archivo`).
