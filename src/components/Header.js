import { useState } from "react";
import logo from "../assets/img/download (1).jpeg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

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
          <li className=" px-2">Cart</li>
        </ul>
      </div>
      <div>{isOnline ? "🟢" : "😡"}</div>
      {!isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      )}
    </div>
  );
};

export default Header;
