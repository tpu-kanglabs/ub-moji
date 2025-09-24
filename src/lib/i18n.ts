import enDict from "../i18n/en.json";
import jaDict from "../i18n/ja.json";
import type { Locale } from "./locales";

const dictionaries = {
  en: enDict,
  ja: jaDict,
};

export function getDict(locale: Locale) {
  return dictionaries[locale] || dictionaries.en;
}

export function useTranslations(locale: Locale) {
  const dict = getDict(locale);

  return function t(key: string): string {
    // Support nested keys like "site.title"
    const keys = key.split(".");
    let value: unknown = dict;

    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
      if (value === undefined) {
        // Fallback to English if key not found
        const fallbackDict = dictionaries.en;
        let fallbackValue: unknown = fallbackDict;
        for (const k of keys) {
          fallbackValue = (fallbackValue as Record<string, unknown>)?.[k];
          if (fallbackValue === undefined) break;
        }
        return typeof fallbackValue === "string" ? fallbackValue : key;
      }
    }

    return typeof value === "string" ? value : key;
  };
}
