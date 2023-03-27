import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
//Default import //Named Import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
// import Instamart from "./components/Instamart";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//Chunking
//Code splitting
//Dynamic Bundling
//Lazy Loading
//On Demand Loading

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h1",
//   },
//   "Namaste React!"
// );

//JSX ??
//React component
// 1. Functional Component-->Name of component starts with capital letter
// 2. Class Component
// React.Fragment
const AppLayout = () => {

  const [user,setUser]=useState({
    name: "Utkarsh",
    email:"utkarsh.gmail.com"
  });

  return (
    <>
    <Provider store={store}>
    <UserContext.Provider
    value={{
      user:user,
      setUser: setUser,
    }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />);
root.render(<RouterProvider router={appRouter} />);
