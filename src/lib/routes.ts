import { defaultLocale, locales, type Locale } from "@/lib/i18n";

export function normalizeBasePath(basePath: string): string {
  return basePath === "/" ? "" : basePath.replace(/\/$/, "");
}

export function withTrailingSlash(basePath: string): string {
  return basePath.replace(/\/?$/, "/");
}

/**
 * Parameter for `[...lang]` root. Default locale is represented as (undefined),
 * while other locales are represented as their locale code.
 */
export function toLangParam(locale: Locale): string | undefined {
  return locale === defaultLocale ? undefined : locale;
}

export function getLangStaticPaths() {
  return locales.map((lang) => ({ params: { lang: toLangParam(lang) } }));
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

export function buildNewsOgImagePath(
  locale: Locale,
  slug: string,
  basePath = "/",
): string {
  return `${withTrailingSlash(basePath)}og/news/${locale}/${slug}.png`;
}
