import { getCollection, type CollectionEntry } from "astro:content";
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
	// Remove locale suffix from slug (e.g., "release-2505-en" -> "release-2505")
	return entry.slug.replace(/-(?:en|ja)$/, "");
}

export async function getNewsCollection(): Promise<NewsEntry[]> {
	return await getCollection("news", ({ data }) => {
		// Filter out draft posts
		return !data.draft;
	});
}

export async function getNewsByLocale(locale: Locale): Promise<NewsEntry[]> {
	const allNews = await getNewsCollection();
	return allNews.filter((entry) => entry.data.locale === locale);
}

export function generatePathsFromEntries(
	allEntries: NewsEntry[],
): NewsPostPath[] {
	const paths: NewsPostPath[] = [];

	for (const entry of allEntries) {
		const slug = extractLogicalSlugFromEntry(entry);
		const locale = entry.data.locale;

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
