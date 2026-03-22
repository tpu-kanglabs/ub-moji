import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { locales } from "@/lib/i18n";

const citations = defineCollection({
  loader: file("src/contents/citations.yaml"),
  schema: z.object({
    order: z.number().int().nonnegative(),
    label: z.enum(["Paper", "Dataset"]),
    content: z.string(),
    placeholder: z.string(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/news" }),
  schema: z.object({
    articleSlug: z.string().min(1),
    locale: z.enum(locales),
    title: z.string().min(1),
    summary: z.string().min(1).max(220),
    publishedAt: z.coerce.date(),
    isPublished: z.boolean().default(true),
  }),
});

export const collections = { citations, news };
