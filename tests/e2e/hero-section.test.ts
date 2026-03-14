import { test, expect } from "@playwright/test";

const appBasePath = "/ub-moji";

test("hero renders on default locale", async ({ page }) => {
  await page.goto(`${appBasePath}/`);

  const hero = page.getByTestId("hero");
  await expect(hero).toBeVisible();

  const overlay = page.getByTestId("hero-overlay");
  await expect(overlay).toHaveText("ub-MOJI");

  const video = page.getByTestId("hero-video");
  await expect(video).toHaveAttribute("poster", /.+/);
});

test("hero renders on Japanese locale", async ({ page }) => {
  await page.goto(`${appBasePath}/ja/`);

  const hero = page.getByTestId("hero");
  await expect(hero).toBeVisible();
  await expect(page.getByTestId("hero-overlay")).toHaveText("ub-MOJI");
});
