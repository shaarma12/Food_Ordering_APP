import { useState } from "react";
import Logoimg from "../../images/Logoimg.png";
import cart from "../../images/cart.png";
import { Link } from "react-router-dom";
import useStatus from "../utils/usestatus";

const Header = () => {
  const [title, setTitle] = useState("Login");

  // Custom Hook Creation that get the data regarding online status.
  const onlineStatus = useStatus();
  return (
    <>
      <div id="heading">
        {/* Logo */}
        <div id="logo">
          <Link to="/">
            <img className="logo-img" src={Logoimg} alt="Main Logo" />
          </Link>
        </div>

        {/* Nav Links */}
        <div id="nav">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
              <Link className="link" to="/grocery">
                Grocery
              </Link>
            </li>
            <li>{onlineStatus ? "🟢" : "🔴"}</li>
          </ul>
        </div>
        <div className="head-right">
          {/* cart */}

          <div id="cart">
            <a href="#" target="_blank">
              <img className="cart-img" src={cart} alt="Cart" />
            </a>
          </div>

          {/* user icon */}

          <div id="user">
            <button
              onClick={() => {
                title === "Login" ? setTitle("Logout") : setTitle("Login");
              }}
              className="user-img"
            >
              {title}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
