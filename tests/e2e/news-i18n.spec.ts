import { expect, test } from "@playwright/test";

const appBasePath = "/ub-moji";

test("renders localized news index and localized article detail", async ({
  page,
}) => {
  await page.goto(`${appBasePath}/ja/news/`);

  await expect(
    page.getByRole("heading", { name: "ニュースと更新情報" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /バージョン 25.09のリリース/i }),
  ).toBeVisible();

  await page.goto(`${appBasePath}/ja/news/release-2509/`);

  await expect(
    page.getByRole("heading", { name: "バージョン 25.09のリリース" }),
  ).toBeVisible();
  await expect(page.getByText("濁音・半濁音・長音の追加")).toBeVisible();
});
