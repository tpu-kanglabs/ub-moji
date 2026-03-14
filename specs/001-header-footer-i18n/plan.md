# Implementation Plan: Fixed Header, Footer Logo, and i18n

**Branch**: `001-header-footer-i18n` | **Date**: 2026-03-15 | **Spec**: /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/specs/001-header-footer-i18n/spec.md
**Input**: Feature specification from `/specs/001-header-footer-i18n/spec.md`

## Summary

Implement a fixed, polished header with logo, primary navigation, and language switcher; ensure a branded footer with logo; add URL-based i18n (default English, support Japanese) with fallback behavior for missing translations.

## Technical Context

**Language/Version**: TypeScript 5.9 (strict)  
**Primary Dependencies**: Astro 6.x, React 19 islands, TailwindCSS 4, shadcn/ui, Radix UI  
**Storage**: N/A (static content and URL-based locale)  
**Testing**: Not currently configured; add unit/component/integration tests per constitution  
**Target Platform**: Modern web browsers (desktop + mobile)  
**Project Type**: Static site / web application  
**Performance Goals**: Lighthouse Performance >= 90; LCP <= 2.5s; CLS <= 0.1; INP <= 200ms  
**Constraints**: Use React for dynamic elements; use shadcn components where possible; header as a single component; locale in URL path  
**Scale/Scope**: Site-wide header/footer and i18n for English/Japanese

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Code Quality: Plan includes Biome checks, strict TypeScript, no dead code. PASS
- Testing Standards: Plan includes test-first approach and required test types. PASS
- UX Consistency: shadcn/ui + Radix primitives + Tailwind, WCAG 2.1 AA, respects prefers-reduced-motion. PASS
- Performance: Lighthouse/Core Web Vitals targets included; Astro island directives to minimize JS. PASS

## Project Structure

### Documentation (this feature)

```text
specs/001-header-footer-i18n/
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
├── components/
├── layouts/
├── lib/
├── pages/
└── styles/
```

**Structure Decision**: Single Astro project with shared UI in `src/components/`, page shells in `src/layouts/`, and routes in `src/pages/`.

## Phase 0: Outline & Research

### Research Tasks

- Research Astro v6 i18n routing with URL-based locales for English/Japanese
- Research best practices for React islands in Astro for language switching
- Research shadcn/ui component choices for header navigation and language switcher

### Output

- `research.md` with decisions and alternatives

## Phase 1: Design & Contracts

### Data Model

- Extract entities from spec and document in `data-model.md`

### Contracts

- Define UI behavior contract for header/footer and language switching in `contracts/ui.md`

### Quickstart

- Document local run steps and verification checklist in `quickstart.md`

### Agent Context Update

- Run `.specify/scripts/bash/update-agent-context.sh codex`

## Phase 2: Planning

- Stop after Phase 2 planning per command scope

## Re-Check Constitution (Post Phase 1)

- All gates remain PASS based on design artifacts and planned tests

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | N/A | N/A |
