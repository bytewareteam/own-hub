import { describe } from "vitest";
import { render,screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    render(<App />)
    screen.getAllByRole('heading', { name: /Hello there, Welcome OwnHub 👋/i })
  });

});
