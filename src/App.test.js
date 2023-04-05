import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Welcome to Toy Robot Game/i);
  expect(headerElement).toBeInTheDocument();

  const submitElement = screen.getByRole("button", {
    name: /SUBMIT COMMANDS/i,
  });
  expect(submitElement).toBeInTheDocument();

  const showElement = screen.getByRole("button", {
    name: /HIDE PLAYBOARD/i,
  });
  expect(showElement).toBeInTheDocument();
});
