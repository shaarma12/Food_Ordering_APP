import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../src/components/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";
import "@testing-library/jest-dom";
import Body from "../src/components/Body";

it("Should test logo in the header", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const Home = screen.getByText("Home");
  expect(Home).toBeInTheDocument();
});

it("should test what happen when we click on the home", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const about = screen.getByText("About");
  expect(about).toBeInTheDocument();
});

it("should test Grocery on the header", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("Grocery")).toBeInTheDocument();
});

it("should test Login Button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
});

// it("should be test Login Functionality", () => {
//   render(
//     <Provider store={appStore}>
//       <BrowserRouter>
//         <Header />
//       </BrowserRouter>
//     </Provider>
//   );
//   const Login = screen.getByRole("button", { name: "Login" });
//   fireEvent.click(Login);
//   const Logout = screen.getByRole("button", { name: "Logout" });
//   expect(Logout).toBeInTheDocument();
// });
