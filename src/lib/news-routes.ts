import { defaultLocale, type Locale } from "@/lib/i18n";

function normalizeBasePath(basePath: string): string {
  return basePath === "/" ? "" : basePath.replace(/\/$/, "");
}

export function buildNewsIndexPath(locale: Locale, basePath = "/"): string {
  const normalizedBase = normalizeBasePath(basePath);
  const localeSegment = locale === defaultLocale ? "" : `/${locale}`;
  return `${normalizedBase}${localeSegment}/news/`;
}

export function buildNewsArticlePath(
  locale: Locale,
  slug: string,
  basePath = "/",
): string {
  return `${buildNewsIndexPath(locale, basePath)}${slug}/`;
}
