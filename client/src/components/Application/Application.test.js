import "@testing-library/jest-dom";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import { ApplicationProvider } from "../../providers/ApplicationProvider";
import { GeneralProvider } from "../../providers/GeneralProvider";
import Candidates from "../Candidates/Candidates";
import Application from "./Application";

describe(Candidates, () => {
  const Wrapper = ({ children }) => (
    <GeneralProvider>
      <ApplicationProvider>{children}</ApplicationProvider>
    </GeneralProvider>
  );
  it("render Application component successfully", async () => {
    const { getByText } = render(
      <Wrapper>
        <Candidates />
        <Application />
      </Wrapper>
    );
    const appTitle = getByText("Our Candidates");
    expect(appTitle).toBeInTheDocument();

    await waitFor(() => {
      getByText("Sara Marshall");
    });

    const candidateSara = screen.getByText("Sara Marshall");
    fireEvent.click(candidateSara);

    await waitFor(() => {
      screen.getAllByText("Tell us about yourself.");
    });
  });
});
