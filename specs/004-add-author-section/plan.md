# Implementation Plan: Add Author Section

**Branch**: `004-add-author-section` | **Date**: 2026-03-15 | **Spec**: /home/rmuraix/ghq/github.com/tpu-kanglabs/ub-moji/specs/004-add-author-section/spec.md
**Input**: Feature specification from `/specs/004-add-author-section/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Add a dedicated author section that lists multiple authors with names and affiliations, styled consistently with surrounding content using shadcn/ui and existing design tokens. No backend or data storage changes required.

## Technical Context

**Language/Version**: TypeScript 5.9 (strict)  
**Primary Dependencies**: Astro 6.x, React 19 islands, TailwindCSS 4, shadcn/ui, Radix UI  
**Storage**: N/A (static content)  
**Testing**: Vitest, Testing Library, Playwright  
**Target Platform**: Modern browsers (desktop and mobile)  
**Project Type**: Web application (Astro SSG)  
**Performance Goals**: Lighthouse Performance ≥ 90; LCP ≤ 2.5 s; CLS ≤ 0.1; INP ≤ 200 ms  
**Constraints**: Use shadcn/ui + Radix primitives and Tailwind semantic tokens; honor `prefers-reduced-motion`; minimize client JS  
**Scale/Scope**: Author section on relevant content pages; multiple authors per page

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Code Quality**: Pass (TypeScript strict, Biome checks required)
- **II. Testing Standards**: Pass (tests will be added before implementation)
- **III. UX Consistency**: Pass (shadcn/ui + Radix + Tailwind tokens required)
- **IV. Performance Requirements**: Pass (Core Web Vitals and Lighthouse targets respected)

Re-check after Phase 1 design: No violations introduced.

## Project Structure

### Documentation (this feature)

```text
specs/004-add-author-section/
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

public/

tests/
```

**Structure Decision**: Single Astro web application under `src/` with feature components in `src/components/`; tests under `tests/`.

## Complexity Tracking

No violations identified.
