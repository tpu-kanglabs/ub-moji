import { render } from "@testing-library/react";
import CitationTabs from "../../src/components/CitationTabs";

describe("CitationTabs visual snapshot", () => {
  it("matches the citation section layout snapshot", () => {
    const { container } = render(
      <CitationTabs
        entries={[
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
        ]}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
