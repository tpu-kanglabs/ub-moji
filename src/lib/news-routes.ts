import { defaultLocale, type Locale } from "@/lib/i18n";

export function normalizeBasePath(basePath: string): string {
  return basePath === "/" ? "" : basePath.replace(/\/$/, "");
}

export function buildSectionIndexPath(
  section: string,
  locale: Locale,
  basePath = "/",
): string {
  const normalizedBase = normalizeBasePath(basePath);
  const localeSegment = locale === defaultLocale ? "" : `/${locale}`;
  return `${normalizedBase}${localeSegment}/${section}/`;
}

export function buildNewsArticlePath(
  locale: Locale,
  slug: string,
  basePath = "/",
): string {
  return `${buildSectionIndexPath("news", locale, basePath)}${slug}/`;
}
