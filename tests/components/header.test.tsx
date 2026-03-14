import { render, screen } from "@testing-library/react";
import Header from "../../src/components/Header";

describe("Header", () => {
  it("renders as a fixed header", () => {
    render(<Header locale="en" pathname="/en/" />);

    const header = screen.getByTestId("site-header");
    expect(header).toHaveClass("sticky");
    expect(header).toHaveClass("top-0");
  });
});
