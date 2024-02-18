import { useContext, useState } from "react";
import Logoimg from "../../images/Logoimg.png";
import bag from "../../images/bag.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import OnHoverBill from "./OnHoverBill";

const Header = () => {
  // const [title, setTitle] = useState("Login");
  const { Login } = useContext(UserContext);
  const [onBill, setOnBill] = useState(false);
  // Custom Hook Creation that get the data regarding online status.
  // const onlineStatus = useStatus();

  const cartItem = useSelector((store) => store.cart.items);
  const addressDetails = useSelector((store) => store.address.name);
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
        >
          <p className="relative top-[3.5rem] left-[1.5rem] text-lg font-semibold text-red-400">
            {totalQuantity}
          </p>
          <img className="w-16 mb-9" src={bag} alt="Cart" />
          {onBill == true && <OnHoverBill />}
        </Link>
        {/* </div> */}

        {/* user icon */}

        <div className="mr-10 mt-1 flex relative left-6">
          <p className="mr-2 font-bold text-lg border-b-2 mb-1 border-black">{addressDetails?.county.replace("Tehsil", "")}</p>
          <p className="mr-1 text-lg text-[#686b78]">{addressDetails?.state},</p>
          <p className="text-lg text-[#686b78]">{addressDetails?.country}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
