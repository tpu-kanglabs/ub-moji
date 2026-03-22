import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import CitationTabs from "../../src/components/CitationTabs";

const entries = [
  {
    label: "Paper",
    html: "<pre><code>@article{paper}</code></pre>",
    copyText: "@article{paper}",
    isPlaceholder: false,
  },
  {
    label: "Dataset",
    html: "<pre><code>@dataset{dataset}</code></pre>",
    copyText: "@dataset{dataset}",
    isPlaceholder: false,
  },
];

describe("CitationTabs copy", () => {
  it("copies the active BibTeX entry and shows inline feedback", async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);

    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      configurable: true,
    });

    render(<CitationTabs entries={entries} />);

    await user.click(screen.getByRole("button", { name: /copy bibtex/i }));

    expect(writeText).toHaveBeenCalledWith("@article{paper}");
    expect(screen.getByText("Copied!")).toBeInTheDocument();
  });
});
