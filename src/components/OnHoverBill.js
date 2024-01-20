import React from "react";
import { useSelector } from "react-redux";

const OnHoverBill = () => {
  const data = useSelector((store) => store.cart.item);
  return (
    <div className="w-96 h-56 text-black border-2 border-red-600 absolute top-40 right-16">
      <p>Himanshu hu mai</p>
      <p>Himanshu hu mai</p>
      <p>Himanshu hu mai</p>
      <p>Himanshu hu mai</p>
      <p>Himanshu hu mai</p>
    </div>
  );
};

export default OnHoverBill;
