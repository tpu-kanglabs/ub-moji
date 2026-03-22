# Implementation Notes: BibTeX Citation Section

## Astro Syntax Highlighting Review

- No existing code blocks or syntax-highlighted sections found in `src/pages/`.
- Plan: Use Astro built-in syntax highlighting by rendering BibTeX inside a `<pre><code>` block (or Markdown/`<Code>` equivalent if present) within the new citation section component.

## Target Embedding Location

- Primary page: `src/pages/[lang]/index.astro` (dataset landing page).
- Embed citation section within `src/components/ub-moji/UbMojiDatasetSection.astro` under the dataset details area.
