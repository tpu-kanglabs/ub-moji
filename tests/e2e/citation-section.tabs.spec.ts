import { test, expect } from "@playwright/test";

const appBasePath = "/ub-moji";

test("citation tabs switch and copy uses selected entry", async ({ page, context }) => {
  await page.goto(`${appBasePath}/`);

  await context.grantPermissions(["clipboard-write"], {
    origin: new URL(page.url()).origin,
  });

  const section = page.getByTestId("citation-section");
  await expect(section).toBeVisible();

  await section.getByRole("tab", { name: "Dataset" }).click();

  await expect(section.getByText("@dataset{ubmoji_dataset2026")).toBeVisible();

  await section.getByRole("button", { name: /copy bibtex/i }).click();
  await expect(section.getByText("Copied!")).toBeVisible();
});
