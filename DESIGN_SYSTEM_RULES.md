# NovaMLM Software — Locked Design System Rules
*(Updated strictly per official Brand Guidelines & Dark Black Theme Directive)*

> **MANDATORY COMPLIANCE DIRECTIVE**
> 
> All AI assistants, subagents, and automated builders MUST strictly follow these rules:
> 1. **Exclusive Font**: Use **Figtree** (`font-family: 'Figtree', sans-serif`) exclusively across all headlines, body copy, navigation, buttons, eyebrow badges, chapter markers (`01`–`05`), and mockup labels.
> 2. **Background Palette**: Page background MUST be a sleek dark shade of black `#08070B` (`--navy-dark` / `--ink`). Card surfaces use `#121017` (`--navy-card` / `--charcoal`).
> 3. **Official Logo & Wordmark**:
>    - Geometric `N` brandmark: Left floating square block + diagonal arch slope + twin vertical legs in `#0090FF` / `#1164F0`.
>    - Wordmark: `Nova` (white bold) `MLM` (gradient cyan-to-blue `#5EEBFC` -> `#0090FF`) with `Software` (white subtext) underneath.

---

## 1. Official Color Palette

```css
:root {
  /* Official Brand Palette — Sleek Dark Black Theme */
  --navy-dark:    #08070B;   /* Sleek Dark Shade of Black (Page Background) */
  --navy-card:    #121017;   /* Raised Dark Card Surface */
  --blue-primary: #1164F0;   /* Primary Electric Blue */
  --blue-vibrant: #0090FF;   /* Secondary Vibrant Cyan Blue (CTAs, Accents) */
  --cyan-light:   #5EEBFC;   /* Light Cyan Highlight (Numbers, Glowing Accents) */
  --white:        #FFFFFF;   /* Primary Text (Pure White) */
  --smoke-blue:   #A19CBB;   /* Secondary Text / Muted Copy */

  /* Theme Mappings */
  --ink:          #08070B;   
  --charcoal:     #121017;   
  --bone:         #FFFFFF;   
  --smoke:        #A19CBB;   
  --nova:         #0090FF;   
  --moss:         #5EEBFC;   

  /* Typography Stack — EXCLUSIVELY FIGTREE */
  --font-display: 'Figtree', sans-serif;
  --font-body:    'Figtree', sans-serif;
  --font-mono:    'Figtree', sans-serif;
}
```
