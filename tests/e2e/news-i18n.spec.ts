import { expect, test } from "@playwright/test";

const appBasePath = "/ub-moji";

test("renders localized news index and unavailable-language recovery", async ({
  page,
}) => {
  await page.goto(`${appBasePath}/ja/news/`);

  await expect(
    page.getByRole("heading", { name: "ニュースと更新情報" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /ub-moji のニュースページを公開しました/i }),
  ).toBeVisible();

  await page.goto(`${appBasePath}/ja/news/research-brief/`);

  await expect(
    page
      .locator("main")
      .getByRole("heading", {
        name: "選択中の言語ではこの記事をまだ読めません",
      })
      .first(),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "既定言語の記事を開く" }),
  ).toHaveAttribute("href", `${appBasePath}/news/research-brief/`);
});
