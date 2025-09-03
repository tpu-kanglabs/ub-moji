import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

// https://docs.astro.build/ja/guides/integrations-guide/sitemap/
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL(
    `${import.meta.env.BASE_URL}/sitemap-index.xml`,
    site,
  );
  return new Response(getRobotsTxt(sitemapURL), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
