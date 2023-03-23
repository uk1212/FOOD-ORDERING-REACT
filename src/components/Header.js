import { useState } from "react";
import logo from "../assets/img/download (1).jpeg";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  //API call to check authentication
  return false;
};

//SPA- Single Page Application

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      // src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
      src={logo}
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>

          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/contact">Contact </Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {!isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      )}
    </div>
  );
};

export default Header;
