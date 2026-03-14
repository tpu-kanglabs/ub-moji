# Implementation Plan: Hero Video Section

**Branch**: `002-hero-video` | **Date**: 2026-03-15 | **Spec**: `specs/002-hero-video/spec.md`
**Input**: Feature specification from `/specs/002-hero-video/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Create a full-viewport hero section at the top of the page that plays `demo.mp4` with a centered “ub-MOJI” overlay, uses `poster.jpg` as fallback, respects reduced-motion preferences, and includes a short text alternative for accessibility.

## Technical Context

**Language/Version**: TypeScript 5.9 (strict)  
**Primary Dependencies**: Astro 6.x, React 19, TailwindCSS 4, shadcn/ui, Radix UI  
**Storage**: N/A (static assets only)  
**Testing**: Vitest, Testing Library, Playwright  
**Target Platform**: Modern evergreen browsers (desktop and mobile)  
**Project Type**: Web application (Astro site with React islands)  
**Performance Goals**: Lighthouse Performance ≥ 90 mobile; LCP ≤ 2.5 s; CLS ≤ 0.1; INP ≤ 200 ms  
**Constraints**: Must respect prefers-reduced-motion; minimize client JS; avoid custom styles that duplicate design tokens  
**Scale/Scope**: Single hero section on the top of the landing page

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Code Quality: Pass (Biome check + strict TS required; no exceptions planned)
- Testing Standards: Pass (unit/component/e2e tests planned per user stories)
- UX Consistency: Pass (shadcn/ui + Radix UI + TailwindCSS; WCAG 2.1 AA; reduced motion honored)
- Performance Requirements: Pass (Lighthouse ≥ 90, CWV targets enforced)
- Post-Design Check: Pass (no design decisions conflict with constitution)

## Project Structure

### Documentation (this feature)

```text
specs/002-hero-video/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── assets/
├── components/
├── layouts/
├── lib/
├── pages/
└── styles/

tests/
```

**Structure Decision**: Single project Astro site using `src/` for pages, components, styles, and assets, with `tests/` for automated testing.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
