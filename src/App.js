import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Service from "./components/Service";
import Restaurant from "./components/Restaurant";
import UserContext from "./utils/UserContext";
import { useState } from "react";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Confirmation from "./components/Confirmation";
const App = () => {
  const [changer, setChanger] = useState();

  const data = [
    {
      Name: "Himanshu",
    },
  ];
  const fetchData = () => {
    // Calling API
    setChanger(data[0]?.Name);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Connecting Redux Store to our Application by using Provider Component */}
      <Provider store={appStore}>
        {/* for whole application the value of context is "Default" but for Header it should be "Himanshu" */}
        <UserContext.Provider value={{ Login: changer, setChanger }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};
const Groceries = lazy(() => {
  import("./components/Groceries");
});
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurant />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Groceries />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/order-confirmation",
        element:<Confirmation/>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
