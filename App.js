import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{},"New Header");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const Title = (
  <div>
    <h2>React functional component</h2>
    <h2>This is a h2 tag</h2>
  </div>
);

// Composing Comopnentss
const HeaderComponent = () => {
  return (
    <div class="title">
      <h1 id="title" key="h1">
        Header H1
      </h1>
      <h2 key="h2">Header H2</h2>
      <h3 key="h3">Header H3</h3>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
