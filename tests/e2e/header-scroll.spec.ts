import { test, expect } from "@playwright/test";

const appBasePath = "/ub-moji";

test("header remains visible while scrolling", async ({ page }) => {
  await page.goto(`${appBasePath}/`);

  const header = page.getByTestId("site-header");
  await expect(header).toBeVisible();

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect(header).toBeVisible();
});
