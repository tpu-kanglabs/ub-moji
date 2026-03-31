import { test, expect } from "@playwright/test";

const appBasePath = "/ub-moji";

test("switches locale via header", async ({ page }) => {
  await page.goto(`${appBasePath}/`);

  const languageSwitcher = page.getByRole("combobox", { name: "Language" });
  await expect(languageSwitcher).toBeVisible();

  await languageSwitcher.selectOption(`${appBasePath}/ja/`);

  await expect(page).toHaveURL(new RegExp(`${appBasePath}/ja/?$`));
});
