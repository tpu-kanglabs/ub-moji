# ub-moji components

## UbMojiDatasetSection

Astro wrapper for the dataset details section. Requires a `locale` prop and renders the section shell plus the React table block.

Usage:

```astro
---
import UbMojiDatasetSection from "@/components/ub-moji/UbMojiDatasetSection.astro";
import { defaultLocale } from "@/lib/i18n";
---

<UbMojiDatasetSection locale={defaultLocale} />
```

## UbMojiDatasetTables

React component that renders shadcn/ui tables, naming convention, and usage badges from `getUbMojiDatasetDetails(locale)`.
