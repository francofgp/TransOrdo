---
target: la landing (src/app/page.tsx)
total_score: 32
p0_count: 0
p1_count: 1
timestamp: 2026-06-25T23-03-18Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Estática; feedback en hover/tema/scroll OK |
| 2 | Match System / Real World | 4 | Lenguaje rutero + fotos reales + regiones nombradas |
| 3 | User Control and Freedom | 3 | Tema, menú, links externos en pestaña nueva |
| 4 | Consistency and Standards | 3 | Sistema sólido, pero kicker repetido en las 6 secciones |
| 5 | Error Prevention | 3 | Sin forms; riesgo = teléfono placeholder en vivo |
| 6 | Recognition Rather Than Recall | 4 | Nav clara, iconos+labels, header sticky |
| 7 | Flexibility and Efficiency | 3 | Múltiples caminos a contacto |
| 8 | Aesthetic and Minimalist Design | 3 | Fuerte; kickers + glow cyan + card anidado suman ruido |
| 9 | Error Recovery | 3 | 404 propio; pocos estados de error |
| 10 | Help and Documentation | 3 | Contacto abundante; suficiente para landing |
| **Total** | | **32/40** | **Strong — lista para pulir** |

## Anti-Patterns Verdict

**¿Parece hecho por IA?** Mayormente NO. Fotos reales de la flota (no stock), paleta cyan-sobre-asfalto atada al logo, Archivo display expandido en mayúsculas, estética industrial/rutera coherente con la marca. Evita todos los bans absolutos (sin side-stripe borders, sin gradient text, sin glassmorphism, sin plantilla hero-métrica).

**Lo que sí delata scaffolding de IA (detector determinístico, scan de URL):**
- `repeated-section-kickers` ×6 — kicker tracked-caps arriba de las 6 secciones. Es el tell #1 acá y CONTRADICE tu propio DESIGN.md ("Kicker: uso medido, no en todas").
- `hero-eyebrow-chip` ×1 — el eyebrow tracked-caps sobre el H1 (misma familia de tell).
- `ai-color-palette` ×1 — glow radial cyan del hero (tell común de IA).
- `nested-cards` ×1 — Cobertura: chip "Base operativa" dentro del card grande `rounded-3xl`.
- `low-contrast` ×5 — 4 falsos positivos (#fff sobre #fff = texto sobre imagen que el detector no resuelve) + 1 real: subtítulo del hero sobre la foto, mediana 3.8:1 (< AA 4.5:1).
- `single-font` ×1 y `all-caps-body` ×1 — intencionales (Archivo committed; mayúsculas en títulos/labels, no en body corrido).

## Overall Impression

Landing fuerte y con carácter de marca, alineada al objetivo (entender + contactar). El mayor lastre no es usabilidad sino distinción: el kicker repetido en cada sección la empuja hacia "gramática de IA". El bloqueante real de negocio es de contenido: el teléfono/WhatsApp es placeholder.

## What's Working

- **Fotos reales + paleta committed.** Cyan del logo sobre asfalto; coherente y nada genérico. Cumple "fierros reales".
- **Jerarquía y CTAs.** H1 domina, WhatsApp (primario) y Llamar (secundario) repetidos sin molestar; barra flotante en mobile. Cumple "contacto a un toque".
- **Voz.** Copy directo y rutero ("Tu carga, a todo el país", "Fierros que cumplen"). Match con la audiencia.

## Priority Issues

- **[P1] Teléfono/WhatsApp placeholder en vivo.** Why: el objetivo del sitio es que toquen "Llamar/WhatsApp"; hoy marca un número que no es el real → conversión rota. Fix: cargar `site.phoneHref/whatsappNumber/phoneDisplay/landlineDisplay` reales en `messages/es.json`. (Contenido, ya conocido.) Command: /impeccable harden
- **[P2] Kicker repetido en las 6 secciones (scaffolding).** Why: lee como plantilla de IA y contradice DESIGN.md. Fix: dejar kicker solo en 1-2 secciones (o reemplazarlo por número de sección / estructura), no como gramática en todas. Command: /impeccable distill
- **[P2] Contraste del subtítulo del hero sobre la foto.** Why: mediana 3.8:1 (<4.5:1); ilegible a pleno sol en mobile (audiencia primaria). Fix: scrim/franja más oscura detrás del bloque de texto o bajar el punto de la foto. Command: /impeccable audit
- **[P3] Card anidado en Cobertura.** Why: chip "Base operativa" (borde+fondo) dentro del card `rounded-3xl` → "nested cards always wrong" (DESIGN.md). Fix: aplanar (quitar el contenedor externo o el borde/fondo del chip). Command: /impeccable layout
- **[P3] Em dash en copy de Clientes.** Why: "— sus logos, próximamente" rompe la regla de copy (sin em dashes). Fix: usar coma/punto/paréntesis. Command: /impeccable clarify

## Persona Red Flags

**Responsable de logística (apurado, desde el celular) — persona del proyecto:** entra desde el Facebook, quiere "¿llevan mi carga? ¿cómo los llamo?". Red flag crítico: toca "Llamar" y disca un número placeholder. Segundo: a pleno sol, el subtítulo del hero sobre la foto cuesta leerse (3.8:1).

**Visitante escéptico (primera vez):** las tarjetas "Cliente 1..4" pueden leerse como "sitio sin terminar / no tienen clientes". Es un tradeoff deliberado (permiso de cada empresa), pero conviene un encuadre que no parezca placeholder vacío (ej. rubros: "Industria láctea", "Agro", "Distribución").

**Usuario de lector de pantalla / teclado:** bien cubierto (skip-nav, foco, alt, aria), salvo que el contraste del hero sobre foto también afecta baja visión.
