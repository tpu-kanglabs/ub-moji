import { defaultLocale, type Locale, locales } from "@/lib/i18n";
import type { CollectionEntry } from "astro:content";
import { buildNewsArticlePath, buildNewsIndexPath } from "@/lib/news-routes";

export type NewsEntry = CollectionEntry<"news">;

export type NewsIndexItem = {
  href: string;
  locale: Locale;
  publishedAt: Date;
  slug: string;
  summary: string;
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

function isSupportedLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
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
      (entry) => entry.data.isPublished && entry.data.locale === locale,
    ),
  );
}

export function getCanonicalNewsSlugs(entries: NewsEntry[]): string[] {
  return [...new Set(entries.map((entry) => entry.data.articleSlug))].sort();
}

export function getAvailableNewsLocales(
  entries: NewsEntry[],
  slug: string,
): Locale[] {
  return [
    ...new Set(
      entries
        .filter(
          (entry) => entry.data.isPublished && entry.data.articleSlug === slug,
        )
        .map((entry) => entry.data.locale),
    ),
  ].filter(isSupportedLocale);
}

export function findNewsVariant(
  entries: NewsEntry[],
  slug: string,
  locale: Locale,
): NewsEntry | undefined {
  return entries.find(
    (entry) =>
      entry.data.isPublished &&
      entry.data.articleSlug === slug &&
      entry.data.locale === locale,
  );
}

export function getNewsIndexItems(
  entries: NewsEntry[],
  locale: Locale,
  basePath = "/",
): NewsIndexItem[] {
  return getPublishedNewsEntries(entries, locale).map((entry) => ({
    href: buildNewsArticlePath(locale, entry.data.articleSlug, basePath),
    locale: entry.data.locale,
    publishedAt: entry.data.publishedAt,
    slug: entry.data.articleSlug,
    summary: entry.data.summary,
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
  const indexHref = buildNewsIndexPath(locale, basePath);

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
        defaultEntry?.data.locale ?? defaultLocale,
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
