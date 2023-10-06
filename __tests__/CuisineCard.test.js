import {
  fireEvent,
  getAllByRole,
  getAllByTestId,
  render,
  screen,
} from "@testing-library/react";
import Restaurant from "../src/components/Restaurant";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/CuisineMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";
import Header from "../src/components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../src/components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should test My render Cuisine Card", async () => {
  await act(async () => render(<Restaurant />));
  expect(screen.getByText("Rs 129 Deal Of The Day (27)")).toBeInTheDocument();
});

it("should test the accordion to be open and getting the data", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <Restaurant />
      </Provider>
    )
  );
  const accordion = screen.getByText("Burger and Wrap. (16)");
  fireEvent.click(accordion);
  expect(
    screen.getByText("BK Chicken Double Patty. Burger")
  ).toBeInTheDocument();
});

it("should test the accordion to be open and getting the data", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <Restaurant />
      </Provider>
    )
  );
  const accordion = screen.getByText("Burger and Wrap. (16)");
  fireEvent.click(accordion);
  expect(screen.getByText("BK Chicken Burger..")).toBeInTheDocument();
});

it("should test ADD TO CART Functionality", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <Restaurant />
      </Provider>
    )
  );
  const accordion = screen.getByText("Burger and Wrap. (16)");
  fireEvent.click(accordion);
  const total = screen.getAllByTestId("cuisine");
  expect(total.length).toBe(16);
});

// it("should test My cart Component", async () => {
//   await act(async () =>
//     render(
//       <Provider store={appStore}>
//         <BrowserRouter>
//           <Header />
//           <Cart />
//           <Restaurant />
//         </BrowserRouter>
//       </Provider>
//     )
//   );
//   const accordion = screen.getByText("Rs 129 Deal Of The Day (27)");
//   fireEvent.click(accordion);
//   const button = screen.getAllByRole("button", { name: "ADD" });
//   expect(button.length).toBe(27);
//   fireEvent.click(button[0]);
//   expect(screen.getByText("1")).toBeInTheDocument();
//   fireEvent.click(button[1]);
//   expect(screen.getByText("2")).toBeInTheDocument();

//   const total = screen.getAllByTestId("cuisine");
//   expect(total.length).toBe(29);
// });

it("should test my cart Page", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <Cart />
          <Restaurant />
        </BrowserRouter>
      </Provider>
    )
  );
  const accord = screen.getByText("Burger and Wrap. (16)");
  fireEvent.click(accord);
  expect(screen.getAllByTestId("cuisine").length).toBe(16);
  const addButton = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addButton[1]);
  fireEvent.click(addButton[3]);
  fireEvent.click(addButton[0]);
  expect(screen.getByText("3")).toBeInTheDocument();
  expect(screen.getAllByTestId("cuisine").length).toBe(19);
  expect(
    screen.getByRole("button", { name: "Clear Cart" })
  ).toBeInTheDocument();

  expect(screen.getByText("Crispy Veg Burger.")).toBeInTheDocument();

  const clearCart = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCart);
  expect(screen.getAllByTestId("cuisine").length).toBe(16);
  expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
});
