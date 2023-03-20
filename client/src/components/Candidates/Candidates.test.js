import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { ApplicationProvider } from "../../providers/ApplicationProvider";
import { GeneralProvider } from "../../providers/GeneralProvider";
import Candidates from "./Candidates";

describe(Candidates, () => {
  it("render Candidates component successfully", async () => {
    const { getByText } = render(
      <GeneralProvider>
        <ApplicationProvider>
          <Candidates />
        </ApplicationProvider>
      </GeneralProvider>
    );
    const appTitle = getByText("Our Candidates");
    expect(appTitle).toBeInTheDocument();

    await waitFor(() => {
      getByText("Sara Marshall");
    });
  });
});
