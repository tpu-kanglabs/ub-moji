import type { Locale } from "./locales";

// Astro component type for rendered content
// biome-ignore lint/suspicious/noExplicitAny: Astro component types are inherently dynamic
export type AstroComponentType = any;

export interface NewsPost {
  file: string;
  frontmatter: {
    title: string;
    description?: string;
    pubDate: string | Date;
    date?: string | Date;
    tags?: string[];
    layout?: string;
  };
  render?: () => Promise<{ Content: AstroComponentType }>;
  Content?: AstroComponentType;
}

export interface NewsPostPath {
  params: {
    lang: Locale | undefined;
    slug: string;
  };
  props: {
    post: NewsPost;
    locale: Locale;
  };
}

export function extractSlugFromFile(filePath: string): string {
  return filePath.split("/").pop()?.replace(".md", "") || "";
}

export function generatePathsFromPosts(
  enPosts: NewsPost[],
  jaPosts: NewsPost[],
): NewsPostPath[] {
  const paths: NewsPostPath[] = [];

  // Process English news posts
  for (const post of enPosts) {
    const slug = extractSlugFromFile(post.file);

    // Default locale: /news/slug
    paths.push({
      params: { lang: undefined, slug },
      props: { post, locale: "en" },
    });

    // Explicit en: /en/news/slug
    paths.push({
      params: { lang: "en", slug },
      props: { post, locale: "en" },
    });
  }

  // Process Japanese news posts
  for (const post of jaPosts) {
    const slug = extractSlugFromFile(post.file);

    // Japanese locale: /ja/news/slug
    paths.push({
      params: { lang: "ja", slug },
      props: { post, locale: "ja" },
    });
  }

  return paths;
}

export async function renderNewsPostContent(
  post: NewsPost,
): Promise<AstroComponentType> {
  // Check if post has a render method (for Astro.glob imports)
  if (post.render && typeof post.render === "function") {
    const rendered = await post.render();
    return rendered.Content;
  }
  if (post.Content) {
    return post.Content;
  }
  // Fallback: the post itself might be the content
  return post;
}
