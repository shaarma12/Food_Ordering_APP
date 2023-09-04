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

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "h1 tag!"),
    React.createElement("h2", {}, "h2 tag!"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "h1 tag!"),
    React.createElement("h2", {}, "h2 tag!"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
