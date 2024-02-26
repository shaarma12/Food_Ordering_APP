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
      <div className="md:w-full w-max flex justify-between items-center shadow-xl sticky top-0 z-50 bg-white">
        {/* Logo */}
        <div>
          <Link to="/">
            <img className="md:w-32 w-56 md:ml-32" src={Logoimg} alt="Main Logo" />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="mr-14">
          <ul className="flex">
            <li className="md:px-10 px-7 md:text-3xl text-4xl font-serif hover:text-red-600 hover:underline underline-offset-8">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="md:px-10 px-7 md:text-3xl text-4xl font-serif hover:text-red-600 hover:underline underline-offset-8">
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li className="md:px-10 px-7 md:text-3xl text-4xl font-serif hover:text-red-600 hover:underline underline-offset-8">
              <Link className="link" to="/services">
                Services
              </Link>
            </li>
            <li className="md:px-10 px-7 md:text-3xl text-4xl font-serif hover:text-red-600 hover:underline underline-offset-8">
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="md:px-10 px-7 md:text-3xl text-4xl font-serif hover:text-red-600 hover:underline underline-offset-8">
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
          <p className="relative md:top-[3.5rem] top-[3.2rem] md:left-[1.5rem] left-[0.15rem] md:text-lg text-2xl font-semibold text-red-400">
            {totalQuantity}
          </p>
          <img className="md:w-16 w-20 mb-9 md:-ml-0 -ml-5" src={bag} alt="Cart" />
          {onBill == true && <OnHoverBill />}
        </Link>
        {/* </div> */}

        {/* user icon */}

        <div className="mr-10 mt-1 flex relative left-6">
          <p className="mr-2 font-bold md:text-lg text-xl border-b-2 mb-1 border-black">{addressDetails?.county ? addressDetails?.county.replace("Tehsil", "") : addressDetails?.suburb.length > 9 ? (addressDetails?.suburb.slice(0, 9) + "...") : addressDetails?.suburb}</p>
          <p className="mr-1 md:text-lg text-xl text-[#686b78]">{addressDetails?.state},</p>
          <p className="md:text-lg text-xl text-[#686b78]">{addressDetails?.country}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
