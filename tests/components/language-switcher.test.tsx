import { render, screen, within } from "@testing-library/react";
import Header from "../../src/components/Header";

describe("Header language switcher", () => {
  it("renders language options with locale URLs", () => {
    render(<Header locale="en" pathname="/en/" />);

    const select = screen.getByRole("combobox", {
      name: "Language",
    });
    const options = within(select).getAllByRole("option");

    expect(select).toHaveValue("/");
    expect(options).toHaveLength(2);
    expect(options[0]).toHaveValue("/");
    expect(options[1]).toHaveValue("/ja/");
  });

  it("renders localized option labels and selects the Japanese path when on the ja locale", () => {
    render(<Header locale="ja" pathname="/ja/" />);

    const select = screen.getByRole("combobox", { name: "言語" });
    const options = within(select).getAllByRole("option");

    expect(select).toHaveValue("/ja/");
    expect(options[0]).toHaveValue("/");
    expect(options[1]).toHaveValue("/ja/");
    expect(options[0]).toHaveTextContent("英語");
    expect(options[1]).toHaveTextContent("日本語");
  });
});
