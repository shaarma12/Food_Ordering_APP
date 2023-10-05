import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../src/components/Body";
import { BrowserRouter } from "react-router-dom";
import MOCK from "../mocks/ResListMock.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK);
    },
  });
});

it("Should Test Top-Rated Functionality", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const beforeClickTopRated = screen.getAllByTestId("resList");
  expect(beforeClickTopRated.length).toBe(20);
  const topRated = screen.getByRole("button", { name: "Top Rated" });
  fireEvent.click(topRated);
  const afterClickTopRated = screen.getAllByTestId("resList");
  expect(afterClickTopRated.length).toBe(8);
});
