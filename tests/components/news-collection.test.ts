import { getCanonicalNewsSlugs, getNewsIndexItems } from "@/lib/news";
import type { NewsEntry } from "@/lib/news";

function createNewsEntry(
  id: string,
  slug: string,
  locale: "en" | "ja",
  publishedAt: string,
  isPublished = true,
): NewsEntry {
  return {
    body: "",
    collection: "news",
    data: {
      articleSlug: slug,
      isPublished,
      locale,
      publishedAt: new Date(publishedAt),
      summary: `${slug} summary`,
      title: `${slug} title`,
    },
    id,
    render: vi.fn(),
  } as unknown as NewsEntry;
}

describe("news collection helpers", () => {
  it("builds index items in reverse chronological order for a locale", () => {
    const entries = [
      createNewsEntry("launch-ja", "launch", "ja", "2026-03-20"),
      createNewsEntry("older-en", "older", "en", "2026-03-10"),
      createNewsEntry("launch-en", "launch", "en", "2026-03-22"),
      createNewsEntry("draft-en", "draft", "en", "2026-03-24", false),
    ];

    const items = getNewsIndexItems(entries, "en", "/ub-moji");

    expect(items).toHaveLength(2);
    expect(items.map((item) => item.slug)).toEqual(["launch", "older"]);
    expect(items[0]?.href).toBe("/ub-moji/news/launch/");
  });

  it("returns stable canonical slugs across locales", () => {
    const entries = [
      createNewsEntry("b-en", "benchmark", "en", "2026-03-10"),
      createNewsEntry("a-en", "announcement", "en", "2026-03-22"),
      createNewsEntry("a-ja", "announcement", "ja", "2026-03-22"),
    ];

    expect(getCanonicalNewsSlugs(entries)).toEqual([
      "announcement",
      "benchmark",
    ]);
  });
});
