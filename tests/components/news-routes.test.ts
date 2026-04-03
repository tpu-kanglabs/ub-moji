import { buildNewsArticlePath, buildSectionIndexPath } from "@/lib/news-routes";

describe("buildSectionIndexPath", () => {
  it("builds the English news index path with a base path", () => {
    expect(buildSectionIndexPath("news", "en", "/ub-moji")).toBe(
      "/ub-moji/news/",
    );
  });

  it("builds the Japanese news index path with a base path", () => {
    expect(buildSectionIndexPath("news", "ja", "/ub-moji")).toBe(
      "/ub-moji/ja/news/",
    );
  });

  it("builds paths using the default base path", () => {
    expect(buildSectionIndexPath("news", "en")).toBe("/news/");
    expect(buildSectionIndexPath("news", "ja")).toBe("/ja/news/");
  });

  it("treats root as an empty base path", () => {
    expect(buildSectionIndexPath("news", "en", "/")).toBe("/news/");
    expect(buildSectionIndexPath("news", "ja", "/")).toBe("/ja/news/");
  });
});

describe("buildNewsArticlePath", () => {
  it("builds the English article path with a base path", () => {
    expect(buildNewsArticlePath("en", "release-2509", "/ub-moji")).toBe(
      "/ub-moji/news/release-2509/",
    );
  });

  it("builds the Japanese article path with a base path", () => {
    expect(buildNewsArticlePath("ja", "release-2509", "/ub-moji")).toBe(
      "/ub-moji/ja/news/release-2509/",
    );
  });

  it("builds an article path using the default base path", () => {
    expect(buildNewsArticlePath("en", "some-article")).toBe(
      "/news/some-article/",
    );
  });
});
