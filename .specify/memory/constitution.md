<!--
SYNC IMPACT REPORT
==================
Version change: [unversioned template] → 1.0.0
Modified principles: N/A (initial population from template)
Added sections:
  - Core Principles (I–IV)
  - Technology Standards
  - Development Workflow
  - Governance
Removed sections: N/A (template placeholders replaced)
Templates requiring updates:
  - .specify/templates/plan-template.md  ✅ — Constitution Check section
    already references constitution gates generically; aligns with principles.
  - .specify/templates/spec-template.md  ✅ — Success Criteria / measurable
    outcomes align with Performance and UX principles.
  - .specify/templates/tasks-template.md ✅ — Polish phase includes
    performance optimization and testing tasks consistent with principles.
  - No command files in .specify/templates/commands/ (directory absent).
Deferred TODOs: None — all fields resolved.
-->

# ub-moji Constitution

## Core Principles

### I. Code Quality (NON-NEGOTIABLE)

All code MUST pass Biome lint and format checks (`pnpm check`) with zero
errors before merge. TypeScript strict mode MUST be enabled; `any` types are
forbidden except where third-party library boundaries require them, in which
case the exception MUST be annotated with a `// biome-ignore` comment and a
rationale. Files MUST be scoped to a single responsibility. Complexity MUST be
justified — if a simpler approach exists, it MUST be used. Dead code MUST be
removed; it MUST NOT be commented out.

**Rationale**: Consistent tooling and strict typing prevent entire classes of
runtime errors and reduce cognitive load during review.

### II. Testing Standards

Every user-facing feature MUST have acceptance tests written before
implementation begins (test-first). Tests MUST fail before the implementation
is written. The minimum required coverage per feature:
- **Unit tests**: all pure utility functions in `src/lib/`
- **Component tests**: interactive React components (user events, state
  transitions)
- **Integration / E2E smoke tests**: at least one happy-path scenario per
  user story

Tests MUST NOT mock internal modules; mocks are permitted only at true
system boundaries (network, browser APIs). A failing test suite MUST block
merge.

**Rationale**: Early test writing forces specification clarity and catches
regressions before they reach users.

### III. User Experience Consistency

All UI components MUST use the shadcn/ui + Radix UI primitives and TailwindCSS
utility classes. Custom one-off styles that duplicate existing design tokens
are forbidden. Interactive elements MUST meet WCAG 2.1 AA contrast and keyboard
navigation requirements. Motion MUST respect `prefers-reduced-motion`. Every
new component MUST document its props and intended usage in a co-located story
or README note. Visual and interaction patterns MUST be consistent across
equivalent contexts (e.g., all destructive actions use the same confirmation
pattern).

**Rationale**: A coherent design system reduces user confusion, accelerates
development, and makes accessibility compliance auditable.

### IV. Performance Requirements

Pages MUST achieve a Lighthouse Performance score ≥ 90 on mobile (simulated
4G). Core Web Vitals targets:
- **LCP** ≤ 2.5 s
- **CLS** ≤ 0.1
- **INP** ≤ 200 ms

JavaScript shipped to the client MUST be minimized; Astro islands MUST use
`client:idle` or `client:visible` directives unless immediate interactivity is
required. Images MUST use the Astro `<Image>` component with explicit `width`,
`height`, and `loading` attributes. Bundle size regressions > 5 KB (gzip) on
any route MUST be justified before merge.

**Rationale**: The target audience uses a range of devices; fast load times
are a baseline quality requirement, not an optimization afterthought.

## Technology Standards

- **Language**: TypeScript 5.x with `strict: true`
- **Framework**: Astro 6.x (SSG-first; SSR only when dynamic data requires it)
- **UI**: React 19 islands, TailwindCSS 4, shadcn/ui, Radix UI primitives
- **Linting/Formatting**: Biome (single tool, no ESLint/Prettier duplication)
- **Package manager**: pnpm
- **Node version**: as declared in `.nvmrc` / `engines` field

Introducing a new runtime dependency MUST be accompanied by a justification
comment in the PR description covering: why an existing dependency cannot
fulfill the need, bundle-size impact, and maintenance status.

## Development Workflow

1. Create a feature branch from `main` following the `###-feature-name`
   convention.
2. Write spec and plan artifacts under `specs/###-feature-name/` before
   coding begins.
3. Run `pnpm check` and `pnpm typecheck` locally; both MUST pass before
   opening a PR.
4. PRs MUST reference the relevant spec and include a Constitution Check
   section confirming compliance with all four principles.
5. All CI checks MUST be green before merge; bypassing CI (e.g.,
   `--no-verify`) is forbidden.
6. Squash-merge to `main`; commit message MUST follow Conventional Commits
   (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `perf:`, `test:`).

## Governance

This constitution supersedes all other development practices documented in
the repository. Any amendment requires:

1. A PR updating this file with a version bump (see versioning policy below).
2. A description of the rationale in the PR body.
3. Review and approval by at least one maintainer.
4. Propagation of changes to all dependent spec/plan/task templates.

**Versioning policy**:
- MAJOR: removal or redefinition of an existing principle.
- MINOR: new principle or section added.
- PATCH: clarification, wording fix, non-semantic refinement.

All PRs and code reviews MUST verify compliance with the four Core Principles
before approval. Complexity violations found during review MUST be documented
in the plan's Complexity Tracking table.

**Version**: 1.0.0 | **Ratified**: 2026-03-15 | **Last Amended**: 2026-03-15
