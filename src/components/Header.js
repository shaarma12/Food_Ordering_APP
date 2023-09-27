import { useContext, useState } from "react";
import Logoimg from "../../images/Logoimg.png";
import cart from "../../images/cart.png";
import { Link } from "react-router-dom";
import useStatus from "../utils/usestatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [title, setTitle] = useState("Login");

  const { Login } = useContext(UserContext);
  // Custom Hook Creation that get the data regarding online status.
  const onlineStatus = useStatus();
  return (
    <>
      <div className="flex justify-between items-center shadow-xl sticky top-0 z-50">
        {/* Logo */}
        <div>
          <Link to="/">
            <img className="w-40 " src={Logoimg} alt="Main Logo" />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="mr-14">
          <ul className="flex">
            <li className="px-10 text-3xl  font-serif hover:text-red-600 hover:underline underline-offset-8">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="px-10 text-3xl font-serif  hover:text-red-600 hover:underline underline-offset-8">
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li className="px-10 text-3xl font-serif  hover:text-red-600 hover:underline underline-offset-8">
              <Link className="link" to="/services">
                Services
              </Link>
            </li>
            <li className="px-10 text-3xl font-serif  hover:text-red-600 hover:underline underline-offset-8">
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="px-10 text-3xl font-serif  hover:text-red-600 hover:underline underline-offset-8">
              <Link className="link" to="/grocery">
                Grocery
              </Link>
            </li>
            {/* <li className="px-10 text-3xl font-serif">
              {onlineStatus ? "🟢" : "🔴"}
            </li> */}
          </ul>
        </div>
        <div className="flex items-center">
          {/* cart */}

          <div>
            <a href="#" target="_blank">
              <img className="w-14 mx-4" src={cart} alt="Cart" />
            </a>
          </div>

          {/* user icon */}

          <div className="mr-5">
            <button
              onClick={() => {
                title === "Login" ? setTitle(Login) : setTitle("Login");
              }}
              className="px-4 py-2 ml-5 rounded-lg bg-red-400 text-white hover:scale-y-110 transition-all duration-300 drop-shadow-xl "
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
