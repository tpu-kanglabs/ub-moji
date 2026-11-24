import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../../src/components/Header";

describe("Header language switcher", () => {
  it("renders language options as locale links and marks the current one", async () => {
    const user = userEvent.setup();
    render(<Header locale="en" pathname="/en/" />);

    await user.click(screen.getByRole("button", { name: "Language" }));
    const items = await screen.findAllByRole("menuitem");

    expect(items).toHaveLength(2);
    expect(items[0]).toHaveAttribute("href", "/");
    expect(items[0]).toHaveAttribute("aria-current", "true");
    expect(items[1]).toHaveAttribute("href", "/ja/");
    expect(items[1]).not.toHaveAttribute("aria-current");
  });

  it("renders localized labels and checks the Japanese path on the ja locale", async () => {
    const user = userEvent.setup();
    render(<Header locale="ja" pathname="/ja/" />);

    await user.click(screen.getByRole("button", { name: "言語" }));
    const items = await screen.findAllByRole("menuitem");

    expect(items[0]).toHaveTextContent("英語");
    expect(items[1]).toHaveTextContent("日本語");
    expect(items[0]).not.toHaveAttribute("aria-current");
    expect(items[1]).toHaveAttribute("aria-current", "true");
  });
});
