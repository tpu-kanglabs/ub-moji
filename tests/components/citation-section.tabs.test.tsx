import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

describe("CitationTabs tabs", () => {
  it("switches the displayed BibTeX when a tab is selected", async () => {
    const user = userEvent.setup();

    render(<CitationTabs entries={entries} />);

    await user.click(screen.getByRole("tab", { name: "Dataset" }));

    expect(screen.getByText("@dataset{dataset}")).toBeVisible();
  });
});
