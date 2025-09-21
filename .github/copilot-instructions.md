# ub-MOJI Website Development Instructions

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

ub-MOJI is an Astro-based static website for showcasing a Japanese fingerspelling video dataset. The site features multi-language support (English/Japanese), React interactive components, and deploys to GitHub Pages.

## Working Effectively

### Initial Setup
1. **Install pnpm globally**: `npm install -g pnpm@10.16.1`
2. **Install dependencies**: `pnpm install` -- takes ~20 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
3. **Verify setup**: `pnpm check` -- takes under 1 second, validates code quality.

### Core Development Commands
- **Development server**: `pnpm dev` -- starts in ~1 second, serves at http://localhost:4321/ub-moji
- **Build production**: `pnpm build` -- takes ~10 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
- **Preview build**: `pnpm preview` -- serves built site at http://localhost:4321/ub-moji  
- **Lint/Format**: `pnpm check` -- runs Biome linting, formatting, and import organization in under 1 second.

### Critical Build Information
- **NEVER CANCEL BUILD COMMANDS** - Even though builds are fast (~10 seconds), set timeouts to 60+ seconds minimum
- Build generates static files to `dist/` directory
- No tests are configured - manual validation is required
- No environment variables needed for basic operation

## Validation Requirements

### ALWAYS Test These User Scenarios After Changes:
1. **Main site functionality**:
   - Access http://localhost:4321/ub-moji/ (English version)
   - Verify title shows "ub-MOJI | AI Vision Lab"
   - Check hero section, features, and citation blocks render
2. **Internationalization**:
   - Access http://localhost:4321/ub-moji/ja/ (Japanese version)
   - Verify Japanese content displays correctly
   - Test language switching functionality
3. **Papers page**:
   - Access http://localhost:4321/ub-moji/papers/ (English)
   - Access http://localhost:4321/ub-moji/ja/papers/ (Japanese)
   - Verify research papers list properly

### Manual Validation Commands
```bash
# Test main English page
curl -s http://localhost:4321/ub-moji/ | grep -c "ub-MOJI"

# Test Japanese page  
curl -s http://localhost:4321/ub-moji/ja/ | grep -c "ub-MOJI"

# Test papers pages
curl -s http://localhost:4321/ub-moji/papers/ | grep -c "Related Papers"
curl -s http://localhost:4321/ub-moji/ja/papers/ | grep -c "関連論文"
```

### Quality Gates - ALWAYS Run Before Committing
1. `pnpm check` -- must pass with no errors
2. `pnpm build` -- must complete successfully  
3. Manual validation scenarios above must pass

## Project Architecture

### Key Directories and Files
- **src/pages/**: Astro pages (index.astro, papers.astro) + localized versions in src/pages/ja/
- **src/components/**: React (.tsx) and Astro (.astro) components
- **src/layouts/**: Page layout templates  
- **src/lib/**: Utilities (utils.ts, papers.ts)
- **src/i18n/**: Internationalization helpers (ui.ts, utils.ts)
- **src/styles/**: Global CSS with Tailwind
- **src/assets/**: Processed assets (images, videos)
- **public/**: Static files (favicon, robots.txt)
- **astro.config.mjs**: Main configuration with base path `/ub-moji`

### Technology Stack
- **Framework**: Astro 5.x for static site generation
- **Interactive**: React 19.x for component islands
- **Styling**: Tailwind CSS v4 via Vite plugin
- **UI Components**: Radix UI primitives + Lucide Icons
- **Linting**: Biome for formatting, linting, import organization
- **Package Manager**: pnpm 10.16.1
- **Deployment**: GitHub Pages under `/ub-moji` path

### Import Conventions
- Use `@/` alias for internal modules (configured in tsconfig.json)
- Example: `import { cn } from "@/lib/utils";`

## Common Development Tasks

### Adding New Content
- **New pages**: Create .astro files in src/pages/ and src/pages/ja/ for i18n
- **UI text**: Add strings to src/i18n/ui.ts for both English and Japanese
- **Components**: Follow PascalCase naming (e.g., FeatureCards.astro, MobileNav.tsx)
- **Styling**: Use Tailwind classes, global styles in src/styles/global.css

### Internationalization (i18n)
- Default locale: English (`en`)
- Supported locales: English (`en`), Japanese (`ja`)  
- Routes: `/` (English), `/ja/` (Japanese)
- Text strings: src/i18n/ui.ts with keys for both languages
- Pages: Duplicate structure in src/pages/ja/ for Japanese versions

### Debugging Common Issues
- **Build fails**: Check `pnpm check` for linting errors first
- **Images not loading**: Verify paths relative to site base `/ub-moji`
- **i18n issues**: Ensure all UI strings exist in both languages
- **Dev server 404s**: Remember the base path is `/ub-moji`, not `/`

## CI/CD Information
- **CI Pipeline**: Runs on PRs and main branch pushes
- **Quality Checks**: Biome linting + Astro build  
- **Deployment**: Automatic to GitHub Pages on main branch
- **Build Time**: ~10 seconds in CI environment
- **Site URL**: https://tpu-kanglabs.github.io/ub-moji

## Repository Structure Reference
```
/home/runner/work/ub-moji/ub-moji/
├── src/
│   ├── pages/           # Astro pages + ja/ for Japanese
│   ├── components/      # React (.tsx) and Astro (.astro) components
│   ├── layouts/         # Page layouts
│   ├── lib/            # Utilities (utils.ts, papers.ts)
│   ├── i18n/           # Internationalization (ui.ts, utils.ts)
│   ├── styles/         # Global CSS
│   └── assets/         # Processed images/videos
├── public/             # Static files (favicon, robots.txt)
├── astro.config.mjs    # Astro configuration
├── package.json        # Dependencies and scripts
├── biome.json         # Linting/formatting config
├── tsconfig.json      # TypeScript config with @ alias
└── AGENTS.md          # Additional repository guidelines
```

## Quick Reference Commands
| Task | Command | Duration | Timeout |
|------|---------|----------|---------|
| Install deps | `pnpm install` | ~20s | 60s+ |
| Check code | `pnpm check` | <1s | 30s |
| Dev server | `pnpm dev` | ~1s | N/A |
| Build | `pnpm build` | ~10s | 60s+ |
| Preview | `pnpm preview` | ~1s | N/A |