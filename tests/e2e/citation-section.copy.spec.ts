import { test, expect } from "@playwright/test";

const appBasePath = "/ub-moji";

test("citation copy shows inline feedback", async ({ page, context }) => {
  await page.goto(`${appBasePath}/`);

  await context.grantPermissions(["clipboard-write"], {
    origin: new URL(page.url()).origin,
  });

  const section = page.getByTestId("citation-section");
  await expect(section).toBeVisible();

  const copyButton = section.getByRole("button", { name: /copy bibtex/i });
  await copyButton.click();

  await expect(section.getByText("Copied!")).toBeVisible();
});
