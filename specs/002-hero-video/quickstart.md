# Quickstart: Hero Video Section

## Prerequisites

- Node.js version per repository configuration
- pnpm installed

## Run Locally

```bash
pnpm install
pnpm dev
```

Open the local dev server URL printed in the terminal.

## What to Verify

- The hero fills the viewport height on initial load.
- The video `src/assets/demo.mp4` plays automatically when motion is allowed.
- The overlay shows only the centered “ub-MOJI” text.
- If the video cannot play, `src/assets/poster.jpg` is shown as the fallback.
- Reduced-motion preference disables autoplay motion and keeps the hero visible.
