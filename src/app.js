import React from "react";
import ReactDOM  from "react-dom/client";
//Default import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
//Named Import
// import { Title } from "./components/Header";


/*
      Header
        -Logo(Title)
        -Nav items(right side)
        -Cart
      Body
        -Search Bar
        -RestaurantList
          -RestaurantCard (Many Cards)
            -Image
            -Name
            -Rating
            -Cuisines
      Footer
        -Links */

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Namaste React!"
);

//JSX ??
//React component
// 1. Functional Component-->Name of component starts with capital letter
// 2. Class Component
// React.Fragment






const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />);
root.render(<AppLayout />);
