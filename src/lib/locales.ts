export const LOCALES = ["en", "ja"] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && LOCALES.includes(value as Locale);
}

export const DEFAULT_LOCALE: Locale = "en";

export const LANGUAGES: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
};
