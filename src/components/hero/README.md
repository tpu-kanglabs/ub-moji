# Hero

Full-viewport video hero with centered “ub-MOJI” overlay.

## Usage

```astro
---
import Hero from "@/components/hero/Hero.astro";
---

<Hero />
```

## Behavior

- Uses `src/assets/demo.mp4` as the primary background video.
- Uses `src/assets/poster.jpg` as the fallback image.
- Respects `prefers-reduced-motion` by showing the static image.
- Overlay text is centered and contains only “ub-MOJI”.
