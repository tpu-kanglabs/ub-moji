import { render, screen } from "@testing-library/react";
import UbMojiDatasetTables from "../../src/components/ub-moji/UbMojiDatasetTables";
import { getUbMojiDatasetDetails } from "../../src/lib/ub-moji-dataset-details";

describe("UbMojiDatasetTables metadata", () => {
  it("renders metadata and annotation rows", () => {
    render(<UbMojiDatasetTables details={getUbMojiDatasetDetails("en")} />);

    expect(screen.getByText("metadata.csv")).toBeInTheDocument();
    expect(screen.getByText("participants.csv")).toBeInTheDocument();
    expect(screen.getByText("annotations.toml")).toBeInTheDocument();
  });
});
