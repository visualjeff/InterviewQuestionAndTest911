import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("App test", () => {
  test("Your test", async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId("button-element"));
    expect(await screen.getByTestId("status-element")).toHaveTextContent(
      "Success? true"
    );
  });
});
