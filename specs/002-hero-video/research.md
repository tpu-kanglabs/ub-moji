# Phase 0 Research: Hero Video Section

## Decision 1: Hero height behavior
- **Decision**: Full-viewport height (full-screen) on initial load.
- **Rationale**: Maximizes brand impact and matches the reference visual direction for a bold, immersive hero.
- **Alternatives considered**: Fixed aspect ratio hero; content-driven minimum height.

## Decision 2: Video playback behavior
- **Decision**: Autoplay when motion is allowed; disable autoplay in reduced-motion contexts.
- **Rationale**: Preserves the intended visual impact while respecting accessibility preferences.
- **Alternatives considered**: No autoplay; desktop-only autoplay.

## Decision 3: Fallback visual
- **Decision**: Use static image `poster.jpg` when video cannot play.
- **Rationale**: Ensures consistent branding and avoids blank or broken presentation.
- **Alternatives considered**: Solid color background; frozen first frame.

## Decision 4: Overlay copy
- **Decision**: Single centered “ub-MOJI” only; no additional copy.
- **Rationale**: Keeps focus on the brand mark and avoids visual clutter.
- **Alternatives considered**: Add tagline or subline.

## Decision 5: Accessibility text alternative
- **Decision**: Provide a short text alternative for the hero video (<= 10 words).
- **Rationale**: Clarifies content intent for assistive technologies with minimal verbosity.
- **Alternatives considered**: No explicit text alternative.
