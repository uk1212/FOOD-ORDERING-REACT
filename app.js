import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Namaste React!"
);

//JSX ??

const title = (
  <h1 id="title" key="h2">
    Namasteee React
  </h1>
);

//React component
// 1. Functional Component-->Name of component starts with capital letter
// 2. Class Component

const HeaderComponent = () => {
  return (
    <div>
     {title}
     {1+5}    
      <h2>Namaste React Functional Component</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
