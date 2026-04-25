import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import type { CollectionEntry } from "astro:content";
import { buildNewsArticlePath, buildSectionIndexPath } from "@/lib/news-routes";

export type NewsEntry = CollectionEntry<"news">;

export type NewsIndexItem = {
  href: string;
  locale: Locale;
  publishedAt: Date;
  slug: string;
  summary: string;
  tag: string;
  title: string;
};

export type NewsArticleState =
  | {
      availableLocales: Locale[];
      defaultArticleHref: string;
      entry: NewsEntry;
      indexHref: string;
      kind: "available";
    }
  | {
      availableLocales: Locale[];
      defaultArticleHref: string | null;
      indexHref: string;
      kind: "unavailable";
      slug: string;
    }
  | {
      indexHref: string;
      kind: "missing";
      slug: string;
    };

export function getNewsEntryLocale(entry: NewsEntry): Locale {
  if (!entry.filePath) {
    return defaultLocale;
  }

  const segments = entry.filePath.split("/");
  const newsIndex = segments.lastIndexOf("news");
  const locale = newsIndex >= 0 ? segments[newsIndex + 1] : undefined;

  if (locale && isLocale(locale)) {
    return locale;
  }

  return defaultLocale;
}

export function getNewsEntrySlug(entry: NewsEntry): string {
  if (!entry.filePath) {
    return entry.id;
  }

  const segments = entry.filePath.split("/");
  const fileName = segments.at(-1) ?? entry.id;
  return fileName.replace(/\.md$/, "");
}

export function sortNewsEntries(entries: NewsEntry[]): NewsEntry[] {
  return [...entries].sort(
    (left, right) =>
      right.data.publishedAt.getTime() - left.data.publishedAt.getTime(),
  );
}

export function getPublishedNewsEntries(
  entries: NewsEntry[],
  locale: Locale,
): NewsEntry[] {
  return sortNewsEntries(
    entries.filter(
      (entry) => entry.data.isPublished && getNewsEntryLocale(entry) === locale,
    ),
  );
}

export function getCanonicalNewsSlugs(entries: NewsEntry[]): string[] {
  return [...new Set(entries.map((entry) => getNewsEntrySlug(entry)))].sort();
}

export function getAvailableNewsLocales(
  entries: NewsEntry[],
  slug: string,
): Locale[] {
  return [
    ...new Set(
      entries
        .filter(
          (entry) => entry.data.isPublished && getNewsEntrySlug(entry) === slug,
        )
        .map((entry) => getNewsEntryLocale(entry)),
    ),
  ].filter(isLocale);
}

export function findNewsVariant(
  entries: NewsEntry[],
  slug: string,
  locale: Locale,
): NewsEntry | undefined {
  return entries.find(
    (entry) =>
      entry.data.isPublished &&
      getNewsEntrySlug(entry) === slug &&
      getNewsEntryLocale(entry) === locale,
  );
}

export function getNewsIndexItems(
  entries: NewsEntry[],
  locale: Locale,
  basePath = "/",
): NewsIndexItem[] {
  return getPublishedNewsEntries(entries, locale).map((entry) => ({
    href: buildNewsArticlePath(locale, getNewsEntrySlug(entry), basePath),
    locale: getNewsEntryLocale(entry),
    publishedAt: entry.data.publishedAt,
    slug: getNewsEntrySlug(entry),
    summary: entry.data.summary,
    tag: entry.data.tag,
    title: entry.data.title,
  }));
}

export function getNewsArticleState(
  entries: NewsEntry[],
  slug: string,
  locale: Locale,
  basePath = "/",
): NewsArticleState {
  const availableLocales = getAvailableNewsLocales(entries, slug);
  const indexHref = buildSectionIndexPath("news", locale, basePath);

  if (availableLocales.length === 0) {
    return {
      indexHref,
      kind: "missing",
      slug,
    };
  }

  const entry = findNewsVariant(entries, slug, locale);
  const defaultEntry = findNewsVariant(entries, slug, defaultLocale);

  if (entry) {
    return {
      availableLocales,
      defaultArticleHref: buildNewsArticlePath(
        defaultEntry ? getNewsEntryLocale(defaultEntry) : defaultLocale,
        slug,
        basePath,
      ),
      entry,
      indexHref,
      kind: "available",
    };
  }

  return {
    availableLocales,
    defaultArticleHref: defaultEntry
      ? buildNewsArticlePath(defaultLocale, slug, basePath)
      : null,
    indexHref,
    kind: "unavailable",
    slug,
  };
}
