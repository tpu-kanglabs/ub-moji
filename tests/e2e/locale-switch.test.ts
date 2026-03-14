import { test, expect } from "@playwright/test";

const appBasePath = "/ub-moji";

test("switches locale via header", async ({ page }) => {
  await page.goto(`${appBasePath}/`);
  await page.locator("astro-island").first().waitFor({ state: "attached" });
  await expect(page.locator("astro-island[ssr]")).toHaveCount(0);

  await page
    .getByRole("combobox", { name: "Language" })
    .selectOption(`${appBasePath}/ja/`);

  await expect(page).toHaveURL(new RegExp(`${appBasePath}/ja/?$`));
});
