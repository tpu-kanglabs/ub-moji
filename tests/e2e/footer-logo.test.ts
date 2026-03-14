import { test, expect } from "@playwright/test";

const appBasePath = "/ub-moji";

test("footer logo is visible", async ({ page }) => {
  await page.goto(`${appBasePath}/`);

  const footerLogo = page.getByTestId("site-footer-logo");
  await expect(footerLogo).toBeVisible();
});
