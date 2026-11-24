import { test, expect } from "@playwright/test";

const appBasePath = "/ub-moji";

test("switches locale via header", async ({ page }) => {
  await page.goto(`${appBasePath}/`);

  const languageSwitcher = page.getByRole("button", { name: "Language" });
  await expect(languageSwitcher).toBeVisible();
  await page.waitForFunction(() => {
    const header = document.querySelector("[data-testid='site-header']");
    const island = header?.closest("astro-island");
    return island ? !island.hasAttribute("ssr") : false;
  });

  await languageSwitcher.click();
  await page.getByRole("menuitem", { name: "日本語" }).click();

  await expect(page).toHaveURL(new RegExp(`${appBasePath}/ja/?$`));
});
