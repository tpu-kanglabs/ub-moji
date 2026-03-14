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
});
