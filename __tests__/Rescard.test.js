import { render, screen } from "@testing-library/react";
import Rescard from "../src/components/Rescard";
import MOCK_DATA from "../mocks/RescardMock.json";
import "@testing-library/jest-dom";

it("Should test the rescard", () => {
  render(<Rescard restaurant={MOCK_DATA} />);
  const heading = screen.getByText("Bakingo");
  expect(heading).toBeInTheDocument();
});

it("should test the rescard", () => {
  render(<Rescard restaurant={MOCK_DATA} />);
  const address = screen.getByText("Krishna Nagar");
  expect(address).toBeInTheDocument();
});
