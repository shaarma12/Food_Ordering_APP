import Contact from "../src/components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should Test Contact Page Renders Perfectly or not", () => {
  render(<Contact />);

  const name = screen.getByPlaceholderText("Name");

  //Assertion

  expect(name).toBeInTheDocument();
});

it("Should be testing the Suggestion input field", () => {
  render(<Contact />);
  const Suggestion = screen.getByPlaceholderText("Suggestion");
  // Assertion
  expect(Suggestion).toBeInTheDocument();
});

it("should tested the submit Button", () => {
  render(<Contact />);
  const submit = screen.getByRole("button", { name: "Submit" });
  expect(submit).toBeInTheDocument();
});
