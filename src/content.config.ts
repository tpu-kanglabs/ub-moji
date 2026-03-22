import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
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

export const collections = { citations };
