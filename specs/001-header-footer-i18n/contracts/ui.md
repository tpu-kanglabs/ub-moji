# UI Contract: Header, Footer, and Language Switching

## Header (Single Component)

- Must be fixed at top on all pages, including non-scrollable pages.
- Must include logo, primary navigation, and language switcher.
- Must remain usable on common mobile screen sizes without overlapping essential controls.

## Footer

- Must display site logo on all pages.

## Language Switching

- Supported locales: English (default) and Japanese.
- Locale is represented in the URL path (e.g., `/en/`, `/ja/`).
- Language selection persists via URL path across navigation.
- Missing translations fall back to English strings.
