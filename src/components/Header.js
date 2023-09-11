import { useState } from "react";
import Logoimg from "../../images/Logoimg.png";
import cart from "../../images/cart.png";
import user from "../../images/user.png";

const Header = () => {
  const [title, setTitle] = useState("Login");
  return (
    <>
      <div id="heading">
        {/* Logo */}
        <div id="logo">
          <img className="logo-img" src={Logoimg} alt="Main Logo" />
        </div>

        {/* Nav Links */}
        <div id="nav">
          <ul>
            <a href="#" target="_blank">
              <li>Home</li>
            </a>
            <a href="#" target="_blank">
              <li>About</li>
            </a>
            <a href="#" target="_blank">
              <li>Services</li>
            </a>
            <a href="#1" target="_blank">
              <li>Contact</li>
            </a>
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
