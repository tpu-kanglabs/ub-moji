import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { CheckIcon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  defaultLocale,
  isLocale,
  type Locale,
  resolveLocale,
  t,
} from "@/lib/i18n";
import { buildSectionIndexPath, normalizeBasePath } from "@/lib/routes";
import logoSrc from "@/assets/logo.png";

type HeaderProps = {
  basePath?: string;
  locale: Locale;
  pathname: string;
};

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

  if (segments.length > 0 && isLocale(segments[0])) {
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
  const currentLocale = resolveLocale(locale);
  const homeHref = buildLocalePath("/", currentLocale, basePath);
  const newsHref = buildSectionIndexPath("news", currentLocale, basePath);
  const papersHref = buildSectionIndexPath("papers", currentLocale, basePath);
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
          className="order-3 flex w-full flex-wrap items-center gap-1 text-sm text-foreground/80 md:order-none md:ml-6 md:w-auto"
          aria-label="Primary"
        >
          <a
            className="rounded px-2 py-1 hover:text-foreground"
            href={homeHref}
          >
            {t(currentLocale, "navHome")}
          </a>
          <a
            className="rounded px-2 py-1 hover:text-foreground"
            href={newsHref}
          >
            {t(currentLocale, "navNews")}
          </a>
          <a
            className="rounded px-2 py-1 hover:text-foreground"
            href={papersHref}
          >
            {t(currentLocale, "navPapers")}
          </a>
        </nav>

        <div className="order-2 ml-auto md:order-none">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label={t(currentLocale, "languageLabel")}
              >
                <FontAwesomeIcon icon={faLanguage} aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languageOptions.map((option) => (
                <DropdownMenuItem key={option.value} asChild>
                  <a
                    href={option.value}
                    aria-current={
                      option.value === currentLanguagePath ? "true" : undefined
                    }
                    className="justify-between aria-[current=true]:font-semibold"
                  >
                    {option.label}
                    {option.value === currentLanguagePath && (
                      <CheckIcon aria-hidden="true" className="size-4" />
                    )}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
