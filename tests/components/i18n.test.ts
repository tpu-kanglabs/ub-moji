import {
  defaultLocale,
  getLocaleFromPath,
  isLocale,
  locales,
  t,
} from "@/lib/i18n";

describe("locales", () => {
  it("includes en and ja", () => {
    expect(locales).toContain("en");
    expect(locales).toContain("ja");
  });
});

describe("defaultLocale", () => {
  it("is en", () => {
    expect(defaultLocale).toBe("en");
  });
});

describe("isLocale", () => {
  it("returns true for supported locales", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("ja")).toBe(true);
  });

  it("returns false for unsupported locales", () => {
    expect(isLocale("fr")).toBe(false);
    expect(isLocale("")).toBe(false);
    expect(isLocale("EN")).toBe(false);
  });
});

describe("getLocaleFromPath", () => {
  it("extracts a supported locale from the first path segment", () => {
    expect(getLocaleFromPath("/ja/news/")).toBe("ja");
    expect(getLocaleFromPath("/ja/")).toBe("ja");
  });

  it("returns the default locale when no locale segment is present", () => {
    expect(getLocaleFromPath("/")).toBe("en");
    expect(getLocaleFromPath("/news/")).toBe("en");
    expect(getLocaleFromPath("")).toBe("en");
  });

  it("returns the default locale for an unknown first segment", () => {
    expect(getLocaleFromPath("/fr/page/")).toBe("en");
  });
});

describe("t", () => {
  it("returns the translated string for known keys", () => {
    expect(t("en", "navHome")).toBe("Home");
    expect(t("ja", "navHome")).toBe("ホーム");
  });

  it("returns locale-specific translations", () => {
    expect(t("en", "languageLabel")).toBe("Language");
    expect(t("ja", "languageLabel")).toBe("言語");
  });

  it("falls back to the key when no translation exists", () => {
    expect(t("en", "nonexistent-key")).toBe("nonexistent-key");
    expect(t("ja", "nonexistent-key")).toBe("nonexistent-key");
  });
});
