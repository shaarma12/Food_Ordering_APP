import MOCK from "../mocks/ResListMock.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../src/components/Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Fake of Fetch
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK);
    },
  });
});

it("Should test the Search Button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const search = screen.getByRole("button", { name: "Search" });
  expect(search).toBeInTheDocument();
});

it("Should Test the overall search Functionality", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  //   this test case is for getting all the cards before searching Functionality.
  const cardsBeforeSearch = screen.getAllByTestId("resList");
  expect(cardsBeforeSearch.length).toBe(20);

  //   This is to be used by using testid and i used and put data-testid in the input field of actual component.
  const searchInput = screen.getByTestId("searchInput");
  //   onchange event
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  //   Click Event
  const searchButton = screen.getByRole("button", { name: "Search" });
  fireEvent.click(searchButton);

  //   cards after search functionality.
  const cardAfterSearch = screen.getAllByTestId("resList");
  expect(cardAfterSearch.length).toBe(4);
});
