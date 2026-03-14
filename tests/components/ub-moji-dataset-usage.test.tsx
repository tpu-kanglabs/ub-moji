import { render, screen } from "@testing-library/react";
import UbMojiDatasetTables from "../../src/components/ub-moji/UbMojiDatasetTables";
import { getUbMojiDatasetDetails } from "../../src/lib/ub-moji-dataset-details";

describe("UbMojiDatasetTables usage constraints", () => {
  it("renders usage constraint badges", () => {
    render(<UbMojiDatasetTables details={getUbMojiDatasetDetails("en")} />);

    expect(screen.getByText("Usage Constraints")).toBeInTheDocument();
    expect(screen.getByText("Academic research only")).toBeInTheDocument();
    expect(screen.getByText("Non-commercial use")).toBeInTheDocument();
    expect(screen.getByText("No redistribution")).toBeInTheDocument();
  });
});
