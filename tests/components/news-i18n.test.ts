import { getNewsArticleState } from "@/lib/news";
import type { NewsEntry } from "@/lib/news";

function createNewsEntry(
  id: string,
  slug: string,
  locale: "en" | "ja",
  isPublished = true,
): NewsEntry {
  return {
    body: "",
    collection: "news",
    data: {
      articleSlug: slug,
      isPublished,
      locale,
      publishedAt: new Date("2026-03-22"),
      summary: `${slug} summary`,
      title: `${slug} title`,
    },
    id,
    render: vi.fn(),
  } as unknown as NewsEntry;
}

describe("localized news resolution", () => {
  const entries = [
    createNewsEntry("launch-en", "launch", "en"),
    createNewsEntry("launch-ja", "launch", "ja"),
    createNewsEntry("brief-en", "brief", "en"),
  ];

  it("returns available state when the localized article exists", () => {
    const state = getNewsArticleState(entries, "launch", "ja", "/ub-moji");

    expect(state.kind).toBe("available");
    if (state.kind === "available") {
      expect(state.entry.data.locale).toBe("ja");
      expect(state.availableLocales).toEqual(["en", "ja"]);
    }
  });

  it("returns unavailable state when only the default locale exists", () => {
    const state = getNewsArticleState(entries, "brief", "ja", "/ub-moji");

    expect(state.kind).toBe("unavailable");
    if (state.kind === "unavailable") {
      expect(state.defaultArticleHref).toBe("/ub-moji/news/brief/");
      expect(state.indexHref).toBe("/ub-moji/ja/news/");
    }
  });

  it("returns missing state for unknown slugs", () => {
    const state = getNewsArticleState(entries, "missing", "en", "/ub-moji");

    expect(state).toEqual({
      indexHref: "/ub-moji/news/",
      kind: "missing",
      slug: "missing",
    });
  });
});
