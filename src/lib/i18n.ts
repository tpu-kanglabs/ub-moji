import en from "@/lib/locales/en.json";
import ja from "@/lib/locales/ja.json";

export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

const translations: Record<Locale, Record<string, string>> = {
  en,
  ja,
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment && isLocale(segment)) {
    return segment;
  }
  return defaultLocale;
}

export function t(locale: Locale, key: string): string {
  const localized = translations[locale]?.[key];
  if (localized) {
    return localized;
  }
  const fallback = translations[defaultLocale]?.[key];
  return fallback ?? key;
}
