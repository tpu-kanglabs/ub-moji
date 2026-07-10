import type { APIRoute } from "astro";
import { generateDefaultOgp } from "@/lib/ogp";

export const GET: APIRoute = async () => {
  const png = await generateDefaultOgp();
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
