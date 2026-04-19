import { render, screen } from "@testing-library/react";
import Header from "../../src/components/Header";

describe("Header", () => {
  it("renders as a fixed header", () => {
    render(<Header locale="en" pathname="/en/" />);

    const header = screen.getByTestId("site-header");
    expect(header).toHaveClass("sticky");
    expect(header).toHaveClass("top-0");
  });

  it("renders navigation links for the English locale", () => {
    render(<Header locale="en" pathname="/" />);

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "News" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Papers" })).toBeInTheDocument();
  });

  it("renders navigation links in Japanese for the ja locale", () => {
    render(<Header locale="ja" pathname="/ja/" />);

    expect(screen.getByRole("link", { name: "ホーム" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "ニュース" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "論文" })).toBeInTheDocument();
  });
});
