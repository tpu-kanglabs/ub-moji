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
    page.getByRole("heading", { name: "Introducing the ub-moji Newsroom" }),
  ).toBeVisible();
  await expect(
    page.getByText("A new place to publish dataset updates"),
  ).toBeVisible();

  await page
    .getByRole("link", { name: /Introducing the ub-moji Newsroom/ })
    .click();

  await expect(page).toHaveURL(`${appBasePath}/news/launch-announcement/`);
  await expect(
    page.getByRole("heading", { name: "Introducing the ub-moji Newsroom" }),
  ).toBeVisible();
});
