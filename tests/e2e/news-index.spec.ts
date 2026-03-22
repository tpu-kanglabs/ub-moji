import { expect, test } from "@playwright/test";

const appBasePath = "/ub-moji";

test("shows the default-locale news index and opens an article", async ({
  page,
}) => {
  await page.goto(`${appBasePath}/news/`);

  await expect(
    page.getByRole("heading", { name: "News and release notes" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Release of version 25.09" }),
  ).toBeVisible();
  await expect(page.getByText("Add new data for voiced sounds")).toBeVisible();

  await page.getByRole("link", { name: /Release of version 25.09/ }).click();

  await expect(page).toHaveURL(`${appBasePath}/news/release-2509/`);
  await expect(
    page.getByRole("heading", { name: "Release of version 25.09" }),
  ).toBeVisible();
});
