import React, { useState } from "react";
import cartBag from "../../images/cartBag.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hoverBill } from "../utils/cartSlice";
const PriceBanner = ({ actual }) => {
  const count = useSelector((store) => store.cart.items);
  const quantity = count.reduce((acc, i) => (acc += i.count), 0);
  let value = 0;
  const dispatch = useDispatch();
  count.map((i) => {
    let c = i?.card?.info?.price
      ? i?.card?.info?.price / 100
      : i?.card?.info?.defaultPrice / 100;
    return (value += i?.count * c);
  });
  dispatch(hoverBill(value));
  return (
    <Link
      to="/cart"
      className="flex items-center justify-between px-4 text-sm bg-[#60B240] text-white z-20 w-[48rem] fixed h-12 top-[40.93rem]  -ml-2"
    >
      <p className="font-bold">
        {quantity}
        {quantity > 1 ? " items" : " item"} | ₹{value}
      </p>
      <div className="flex">
        <p className="font-bold mr-2">VIEW CART</p>
        <img src={cartBag} alt="banner bag" className="w-5" />
      </div>
    </Link>
  );
};

export default PriceBanner;
