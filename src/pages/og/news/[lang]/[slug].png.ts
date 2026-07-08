import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { locales, resolveLocale } from "@/lib/i18n";
import { findNewsVariant, getCanonicalNewsSlugs } from "@/lib/news";
import { generateArticleOgp } from "@/lib/ogp";

export async function getStaticPaths() {
  const entries = await getCollection("news");
  const slugs = getCanonicalNewsSlugs(entries);
  return locales.flatMap((lang) =>
    slugs.map((slug) => ({ params: { lang, slug } })),
  );
}

export const GET: APIRoute = async ({ params }) => {
  const { lang, slug } = params;
  const locale = resolveLocale(lang);

  const entries = await getCollection("news");
  const entry = findNewsVariant(entries, slug ?? "", locale);

  const title = entry?.data.title ?? slug ?? "";
  const tag = entry?.data.tag ?? "";

  const png = await generateArticleOgp({ title, tag, lang: locale });
  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
};
