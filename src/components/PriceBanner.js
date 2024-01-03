import React, { useState } from "react";
import cartBag from "../../images/cartBag.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const PriceBanner = () => {
  const count = useSelector((store) => store.cart.items);
  let value = 0;
  count.map((i) => {
    return (value += i?.card?.info?.price
      ? i?.card?.info?.price / 100
      : i?.card?.info?.defaultPrice / 100);
  });
  return (
    <Link
      to="/cart"
      className="flex items-center justify-between px-4 text-sm bg-[#60B240] text-white z-20 w-[48rem] fixed h-12 mt-[3.65rem] -ml-2"
    >
      <p className="font-bold">
        {count.length}
        {count.length > 1 ? " items" : " item"} | ₹{value}
      </p>
      <div className="flex">
        <p className="font-bold mr-2">VIEW CART</p>
        <img src={cartBag} alt="banner bag" className="w-5" />
      </div>
    </Link>
  );
};

export default PriceBanner;
