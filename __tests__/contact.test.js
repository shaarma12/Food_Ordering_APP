import Contact from "../src/components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
it("Should Test Contact Page Renders Perfectly or not", () => {
  render(<Contact />);

  const name = screen.getByText("Name:");

  //Assertion

  expect(name).toBeInTheDocument();
});
