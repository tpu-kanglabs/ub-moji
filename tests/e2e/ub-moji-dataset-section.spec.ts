import { test, expect } from "@playwright/test";

const appBasePath = "/ub-moji";

test("dataset details section renders on default locale", async ({ page }) => {
  await page.goto(`${appBasePath}/`);

  const section = page.getByTestId("dataset-details");
  await expect(section).toBeVisible();
  await expect(section).toContainText("Dataset Details");
  await expect(section).toContainText("Subsets");
  await expect(section).toContainText("Metadata Files");
  await expect(section).toContainText("metadata.csv");
  await expect(section).toContainText("License");
  await expect(section).toContainText("Academic research only");
});

test("dataset details section renders on Japanese locale", async ({ page }) => {
  await page.goto(`${appBasePath}/ja/`);

  const section = page.getByTestId("dataset-details");
  await expect(section).toBeVisible();
  await expect(section).toContainText("データセット詳細");
  await expect(section).toContainText("サブセット");
  await expect(section).toContainText("メタデータ");
  await expect(section).toContainText("metadata.csv");
  await expect(section).toContainText("ライセンス");
  await expect(section).toContainText("学術目的のみ");
});
