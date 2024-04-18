//Nested tags using createElement.

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello React People!!"),
    React.createElement("span", {}, "Hello React People!!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello React People!!"),
    React.createElement("span", {}, "Hello React People!!"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
