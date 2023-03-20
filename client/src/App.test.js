import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./App";

describe(App, () => {
  it("render App successfully", () => {
    const { getByText } = render(<App />);
    const appTitle = getByText("Samwell Test");
    expect(appTitle).toBeInTheDocument();
  });
});
