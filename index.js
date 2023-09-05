import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("h1", {}, "Hi, this is h1 tag!")
// );

// for siblings:-

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "h1 tag!"),
//     React.createElement("h2", {}, "h2 tag!"),
//   ])
// );

// for two different id's:-

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child-1" }, [
//     React.createElement("h1", {}, "h1 tag!"),
//     React.createElement("h2", {}, "h2 tag!"),
//   ]),
//   React.createElement("div", { id: "child-2" }, [
//     React.createElement("h1", {}, "h1 tag!"),
//     React.createElement("h2", {}, "h2 tag!"),
//   ]),
// ]);

// ----------------------------------------------------------------------------------------

// episode - 3

// Creating React Element using Core React.

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React Component Using Core React!"
);

// JSX

const JSXHeading = <h1 id="heading">Namaste React from JSX 🚀!</h1>;

// Functional Component

const HeadingComponent = () => {
  return <h1 id="heading">Namaste React Coming From Component ❤!</h1>;
};

// React Element
const ele = <span>React Element in the React Element!</span>;
const title = (
  <>
    <h1>Title which is a React Element!</h1>
    {ele}
    <HeadingComponent />
  </>
);

// Functional Component without using return Statement
const HeadingComp = () => (
  <>
    <h1>Namaste Component!</h1>
    {title}
    <HeadingComponent />
    <HeadingComponent></HeadingComponent>
    {HeadingComponent()}
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComp />);
