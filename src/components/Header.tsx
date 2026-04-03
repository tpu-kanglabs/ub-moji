import { NativeSelect } from "@/components/ui/select";
import { defaultLocale, type Locale, locales, t } from "@/lib/i18n";
import { buildNewsIndexPath } from "@/lib/news-routes";
import logoSrc from "@/assets/logo.png";

type HeaderProps = {
  basePath?: string;
  locale: Locale;
  pathname: string;
};

function normalizeBasePath(basePath: string): string {
  return basePath === "/" ? "" : basePath.replace(/\/$/, "");
}

function stripBase(pathname: string, basePath: string): string {
  const normalizedBase = normalizeBasePath(basePath);
  if (normalizedBase && pathname.startsWith(normalizedBase)) {
    const stripped = pathname.slice(normalizedBase.length);
    return stripped.length ? stripped : "/";
  }
  return pathname;
}

function buildLocalePath(
  pathname: string,
  nextLocale: Locale,
  basePath: string,
): string {
  const normalizedPath = stripBase(
    pathname.startsWith("/") ? pathname : `/${pathname}`,
    basePath,
  );
  const hadTrailingSlash = normalizedPath.endsWith("/");
  const segments = normalizedPath.split("/").filter(Boolean);

  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    segments.shift();
  }

  if (nextLocale !== defaultLocale) {
    segments.unshift(nextLocale);
  }

  const rebuilt = segments.length
    ? `/${segments.join("/")}${hadTrailingSlash ? "/" : ""}`
    : "/";
  return `${normalizeBasePath(basePath)}${rebuilt}`;
}

export default function Header({
  basePath = "/",
  locale,
  pathname,
}: HeaderProps) {
  const currentLocale = locales.includes(locale) ? locale : defaultLocale;
  const homeHref = buildLocalePath("/", currentLocale, basePath);
  const newsHref = buildNewsIndexPath(currentLocale, basePath);
  const papersHref = `${homeHref}#papers`;
  const currentLanguagePath = buildLocalePath(
    pathname,
    currentLocale,
    basePath,
  );
  const languageOptions = [
    {
      value: buildLocalePath(pathname, "en", basePath),
      label: t(currentLocale, "languageEnglish"),
    },
    {
      value: buildLocalePath(pathname, "ja", basePath),
      label: t(currentLocale, "languageJapanese"),
    },
  ];

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur motion-reduce:transition-none"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center gap-3 px-4 py-3">
        <a
          href={homeHref}
          aria-label={t(currentLocale, "siteName")}
          className="flex items-center gap-2 text-sm font-semibold"
        >
          <img
            src={logoSrc.src}
            alt=""
            aria-hidden="true"
            className="size-8 object-contain"
          />
          <span>{t(currentLocale, "siteName")}</span>
        </a>

        <nav
          className="order-3 flex w-full flex-wrap items-center gap-3 text-xs text-foreground/80 md:order-none md:ml-6 md:w-auto md:text-sm"
          aria-label="Primary"
        >
          <a className="hover:text-foreground" href={homeHref}>
            {t(currentLocale, "navHome")}
          </a>
          <a className="hover:text-foreground" href={newsHref}>
            {t(currentLocale, "navNews")}
          </a>
          <a className="hover:text-foreground" href={papersHref}>
            {t(currentLocale, "navPapers")}
          </a>
        </nav>

        <div className="order-2 ml-auto md:order-none">
          <NativeSelect
            ariaLabel={t(currentLocale, "languageLabel")}
            className="motion-reduce:transition-none"
            compactOnMobile
            options={languageOptions}
            value={currentLanguagePath}
          />
        </div>
      </div>
    </header>
  );
}
