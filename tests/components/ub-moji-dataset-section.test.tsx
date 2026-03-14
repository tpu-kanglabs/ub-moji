import { render, screen } from "@testing-library/react";
import UbMojiDatasetTables from "../../src/components/ub-moji/UbMojiDatasetTables";
import { getUbMojiDatasetDetails } from "../../src/lib/ub-moji-dataset-details";

describe("UbMojiDatasetTables", () => {
  it("renders core dataset tables", () => {
    render(<UbMojiDatasetTables details={getUbMojiDatasetDetails("en")} />);

    expect(screen.getByText("Subsets")).toBeInTheDocument();
    expect(screen.getByText("Video & Annotations")).toBeInTheDocument();
    expect(screen.getByText("Metadata Files")).toBeInTheDocument();
  });

  it("renders naming convention and license", () => {
    render(<UbMojiDatasetTables details={getUbMojiDatasetDetails("en")} />);

    expect(screen.getByText("File Naming Convention")).toBeInTheDocument();
    expect(
      screen.getByText("{content}_{participantID}_{yyyymm}_{take}.mp4"),
    ).toBeInTheDocument();
    expect(screen.getByText("License")).toBeInTheDocument();
    expect(screen.getByText("Academic research only")).toBeInTheDocument();
  });
});
