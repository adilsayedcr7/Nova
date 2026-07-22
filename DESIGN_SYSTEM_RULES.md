# Nova — Locked Design System Rules
*(Updated strictly per official Brand Guidelines & Logo Specification)*

> **MANDATORY COMPLIANCE DIRECTIVE**
> 
> All AI assistants, subagents, and automated builders MUST strictly follow these rules:
> 1. **Exclusive Font**: Use **Figtree** (`font-family: 'Figtree', sans-serif`) exclusively across all headlines, body copy, navigation, buttons, eyebrow badges, chapter markers (`01`–`05`), and mockup labels.
> 2. **Background Palette**: Page background MUST be a sleek dark shade of black `#08070B` (`--navy-dark` / `--ink`). Card surfaces use `#121017` (`--navy-card` / `--charcoal`).
> 3. **Official Logo & Wordmark**:
>    - Geometric `N` brandmark: Left floating square block + diagonal arch slope + twin vertical legs in `#2563EB` / `#1D4ED8`.
>    - Wordmark: Clean, bold **`Nova`** in pure white (`font-weight: 800`).

---

## 1. Official Color Palette

```css
:root {
  /* Official Brand Palette — Sleek Dark Black & Confident Blue Theme */
  --navy-dark:    #08070B;   /* Sleek Dark Shade of Black (Page Background) */
  --navy-card:    #121017;   /* Raised Dark Card Surface */
  --charcoal-card:#181620;   /* High-Elevation Card Surface */
  --blue-primary: #1D4ED8;   /* Deep Confident Corporate Blue */
  --blue-vibrant: #2563EB;   /* Confident Muted Royal Blue (CTAs, Accents) */
  --cyan-light:   #60A5FA;   /* Soft Muted Sky Blue (Highlights, Numbers) */
  --white:        #FFFFFF;   /* Primary Text (Pure White) */
  --smoke-blue:   #B8B3D3;   /* Secondary Text / Muted Copy */

  /* Typography Stack — EXCLUSIVELY FIGTREE */
  --font-display: 'Figtree', sans-serif;
  --font-body:    'Figtree', sans-serif;
  --font-mono:    'Figtree', sans-serif;
}
```

---

## 2. Typography Rules

- **Font Family**: **Figtree** ONLY across the entire web application.
- Headlines: `Figtree 700` / `800`.
- Body: `Figtree 400` / `500`.

---

## 3. Brandmark & Logo Lockup Rules

- **Brandmark**: Geometric block `N` icon matching the official Brand Guidelines spec.
- **Wordmark**: Clean, bold **`Nova`** (White, font-weight 800).
