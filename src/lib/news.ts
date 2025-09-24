import { type CollectionEntry, getCollection } from "astro:content";
import type { Locale } from "./locales";

// Content Collection entry type
export type NewsEntry = CollectionEntry<"news">;

export interface NewsPostPath {
  params: {
    lang: Locale | undefined;
    slug: string;
  };
  props: {
    post: NewsEntry;
    locale: Locale;
  };
}

export function extractLogicalSlugFromEntry(entry: NewsEntry): string {
  // Extract filename from subdirectory path (e.g., "en/release-2505" -> "release-2505")
  return entry.slug.split("/").pop() || entry.slug;
}

export function getLocaleFromEntry(entry: NewsEntry): Locale {
  // Extract locale from slug path (e.g., "en/release-2505" -> "en")
  const pathParts = entry.slug.split("/");
  if (
    pathParts.length > 1 &&
    (pathParts[0] === "en" || pathParts[0] === "ja")
  ) {
    return pathParts[0] as Locale;
  }
  // Fallback to frontmatter locale
  return entry.data.locale;
}

export async function getNewsCollection(): Promise<NewsEntry[]> {
  return await getCollection("news", ({ data }) => {
    // Filter out draft posts
    return !data.draft;
  });
}

export async function getNewsByLocale(locale: Locale): Promise<NewsEntry[]> {
  const allNews = await getNewsCollection();
  return allNews.filter((entry) => getLocaleFromEntry(entry) === locale);
}

export function generatePathsFromEntries(
  allEntries: NewsEntry[],
): NewsPostPath[] {
  const paths: NewsPostPath[] = [];

  for (const entry of allEntries) {
    const slug = extractLogicalSlugFromEntry(entry);
    const locale = getLocaleFromEntry(entry);

    if (locale === "en") {
      // Default locale: /news/slug
      paths.push({
        params: { lang: undefined, slug },
        props: { post: entry, locale: "en" },
      });

      // Explicit en: /en/news/slug
      paths.push({
        params: { lang: "en", slug },
        props: { post: entry, locale: "en" },
      });
    } else if (locale === "ja") {
      // Japanese locale: /ja/news/slug
      paths.push({
        params: { lang: "ja", slug },
        props: { post: entry, locale: "ja" },
      });
    }
  }

  return paths;
}
