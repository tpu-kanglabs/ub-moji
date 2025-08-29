import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function computeRel(
  path: string,
  repo_slug: string,
  locals: readonly string[],
) {
  // Remove leading/trailing slashes, split by '/', filter out empty segments
  const segs = path
    .replace(/^\/+|\/+$/g, "")
    .split("/")
    .filter(Boolean);
  let i = 0;

  // If first segment is repo slug, skip it
  if (segs[i] === repo_slug) i++;

  // If next segment is a locale, skip it
  if (segs[i] && locals.includes(segs[i] as (typeof locals)[number])) i++;

  return segs.slice(i).join("/");
}
