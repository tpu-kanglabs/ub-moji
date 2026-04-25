import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

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
    tag: z.string().min(1).max(40),
    title: z.string().min(1),
    summary: z.string().min(1).max(220),
    publishedAt: z.coerce.date(),
    isPublished: z.boolean().default(true),
  }),
});

const papers = defineCollection({
  loader: file("src/contents/papers.yaml"),
  schema: z.object({
    order: z.number().int().nonnegative(),
    title: z.string().min(1),
    authors: z.string().min(1),
    venue: z.string().optional(),
    year: z.number().int().optional(),
    url: z.string().optional(),
  }),
});

export const collections = { citations, news, papers };
