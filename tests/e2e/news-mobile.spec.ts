import { expect, test } from "@playwright/test";

const appBasePath = "/ub-moji";

test("keeps news pages readable on a mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  await page.goto(`${appBasePath}/news/launch-announcement/`);

  await expect(
    page.getByRole("heading", { name: "Introducing the ub-moji Newsroom" }),
  ).toBeVisible();

  const article = page.locator("article");
  await expect(article).toBeVisible();

  const metrics = await article.evaluate((node) => ({
    clientWidth: node.clientWidth,
    scrollWidth: node.scrollWidth,
  }));

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
  await expect(page.getByRole("link", { name: "Back to news" })).toBeVisible();
});
