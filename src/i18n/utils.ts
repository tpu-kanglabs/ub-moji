import { defaultLang, ui } from "./ui";

export function getLangFromUrl(url: URL) {
  const pathname = url.pathname;
  // Remove the base path if present
  const pathWithoutBase = pathname.replace(/^\/ub-moji/, "") || "/";
  const [, lang] = pathWithoutBase.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: string) {
  if (lang === defaultLang) {
    return path;
  }
  return `${path}/${lang}`;
}
