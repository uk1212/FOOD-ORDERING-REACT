import { useState, useContext } from "react";
import logo from "../assets/img/download (1).jpeg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const loggedInUser = () => {
  //API call to check authentication
  return false;
};

//SPA- Single Page Application

const Title = () => (
  <a href="/">
    <img
      className="h-28 "
      alt="logo"
      // src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
      src={logo}
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // console.log(cartItems.length);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 p-2">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className=" px-2">
            <Link to="/">Home </Link>
          </li>

          <li className=" px-2">
            <Link to="/about">About </Link>
          </li>
          <li className=" px-2">
            <Link to="/contact">Contact </Link>
          </li>
          <li className=" px-2">
            <Link to="/instamart">Instamart </Link>
          </li>
          <li className=" px-2">
            <Link to="/cart">Cart- {cartItems.length} items</Link>
          </li>
        </ul>
      </div>
      <span>{isOnline ? "🟢" : "😡"}</span>
      <span className="p-10  text-red-800"> {user.name}</span>
      {!isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      )}
    </div>
  );
};

export default Header;
