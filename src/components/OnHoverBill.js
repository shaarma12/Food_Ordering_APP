import React from "react";
import { useSelector } from "react-redux";

const OnHoverBill = () => {
  const data = useSelector((store) => store.cart.item);
  return (
    <div className="w-[23rem] h-56 p-7 text-black border-2 border-red-600 absolute top-32 right-48 bg-white">
      <div>
        <img />
        <div>
          <p></p>
          <p></p>
          <p>VIEW FULL MENU</p>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default OnHoverBill;
