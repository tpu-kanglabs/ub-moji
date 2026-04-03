import type { APIRoute } from "astro";
import { generateDefaultOgp } from "@/lib/ogp";

export const GET: APIRoute = async () => {
  const png = await generateDefaultOgp();
  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
};
