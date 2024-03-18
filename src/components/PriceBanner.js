import React, { useState } from "react";
import cartBag from "../../images/cartBag.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const PriceBanner = ({ actual }) => {
  const count = useSelector((store) => store.cart.items);

  const quantity = count.reduce((acc, i) => (acc += i.count), 0);

  let value = 0;

  count.map((i) => {
    let c = i?.card?.info?.price
      ? i?.card?.info?.price / 100
      : i?.card?.info?.defaultPrice / 100;
    return (value += i?.count * c);
  });
  return (
    <div>
      <Link
        to="/cart"
        className="flex items-center justify-between px-4 md:text-sm text-xl bg-[#60B240] text-white z-20 w-[48rem] fixed h-12 md:top-[40.93rem] bottom-0 md:left-[23.5rem] left-[17rem] right-0 -ml-2"
      >
        <p className="font-bold">
          {quantity}
          {quantity > 1 ? " items" : " item"} | ₹{value.toFixed(2)}
        </p>
        <div className="flex">
          <p className="font-bold mr-2">VIEW CART</p>
          <img src={cartBag} alt="banner bag" className="w-5" />
        </div>
      </Link>
    </div>
  );
};

export default PriceBanner;
