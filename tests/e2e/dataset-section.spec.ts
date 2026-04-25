import { test, expect } from "@playwright/test";
import { t } from "../../src/lib/i18n";

const appBasePath = "/ub-moji";

test("dataset overview renders on default locale", async ({ page }) => {
  await page.goto(`${appBasePath}/`);

  const section = page.getByTestId("dataset-overview");
  await expect(section).toBeVisible();

  await expect(section).toContainText(t("en", "datasetTitle"));

  const cta = page.locator(
    'a[href="https://huggingface.co/datasets/kanglabs/ub-MOJI"]',
  );
  await expect(cta).toBeVisible();
});

test("dataset overview renders on Japanese locale", async ({ page }) => {
  await page.goto(`${appBasePath}/ja/`);

  const section = page.getByTestId("dataset-overview");
  await expect(section).toBeVisible();

  await expect(section).toContainText(t("ja", "datasetTitle"));

  const cta = page.locator(
    'a[href="https://huggingface.co/datasets/kanglabs/ub-MOJI"]',
  );
  await expect(cta).toBeVisible();
});
