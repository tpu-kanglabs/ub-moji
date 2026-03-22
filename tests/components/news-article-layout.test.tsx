import { newsProseClassName } from "@/components/news/news-prose";

describe("news prose styling", () => {
  it("includes overflow-safe rules for rich text on mobile", () => {
    expect(newsProseClassName).toContain("[&_pre]:overflow-x-auto");
    expect(newsProseClassName).toContain("[&_table]:overflow-x-auto");
    expect(newsProseClassName).toContain("[&_img]:w-full");
  });
});
