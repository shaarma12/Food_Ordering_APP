import { useContext, useState } from "react";
import Logoimg from "../../images/Logoimg.png";
import bag from "../../images/bag.png";
import { Link } from "react-router-dom";
import useStatus from "../utils/usestatus";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import OnHoverBill from "./OnHoverBill";

const Header = () => {
  const [title, setTitle] = useState("Login");
  const { Login } = useContext(UserContext);
  const [onBill, setOnBill] = useState(false);
  // Custom Hook Creation that get the data regarding online status.
  const onlineStatus = useStatus();

  const cartItem = useSelector((store) => store.cart.items);
  const totalQuantity = cartItem.reduce((acc, item) => acc + item.count, 0);
  return (
    <>
      <div className="flex justify-between items-center shadow-xl sticky top-0 z-50 bg-white">
        {/* Logo */}
        <div>
          <Link to="/">
            <img className="w-32 ml-32" src={Logoimg} alt="Main Logo" />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="mr-14">
          <ul className="flex">
            <li className="px-10 text-3xl  font-serif  hover:text-red-600 hover:underline underline-offset-8">
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
        {/* cart */}

        {/* <div > */}
        <Link
          to="/cart"
          onMouseOver={() => {
            setOnBill(true);
          }}
          onMouseOut={() => {
            setOnBill(false);
          }}
          className="h-10 w-14"
        >
          <p className="relative top-[1rem] left-[1.4rem] text-lg font-semibold text-red-400">
            {totalQuantity}
          </p>
          <img className="w-16 mb-9 -mt-9" src={bag} alt="Cart" />
        </Link>
        {/* </div> */}

        {/* user icon */}

        <div className="mr-14 mt-1">
          <button
            onClick={() => {
              title === "Login" ? setTitle(Login) : setTitle("Login");
            }}
            className="px-4 py-2 ml-5 rounded-lg font-medium bg-red-400 text-white hover:scale-y-110 transition-all duration-300 drop-shadow-xl "
          >
            {title}
          </button>
        </div>
        {onBill == true && <OnHoverBill />}
      </div>
    </>
  );
};

export default Header;
