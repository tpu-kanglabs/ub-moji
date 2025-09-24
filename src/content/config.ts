import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		description: z.string().optional(),
		tags: z.array(z.string()).optional(),
		draft: z.boolean().default(false),
		locale: z.enum(["en", "ja"]),
	}),
});

export const collections = {
	news: newsCollection,
};