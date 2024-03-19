import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItems,
  clearCart,
  discardOldItem,
  resClose,
  resName,
} from "../utils/cartSlice";

const ChangeRestruantBanner = ({ cuis, restro }) => {
  const dispatch = useDispatch();
  return (
    <div className="p-7 md:text-sm text-2xl bg-[#fff] drop-shadow-[5px_5px_10px_rgba(8,7,7,1)] text-black z-20 md:w-[33rem] w-[45rem] fixed md:h-52 h-[18rem] bottom-5 ml-[5.5rem]">
      <p className="md:text-xl text-4xl font-bold text-[#282c3f]">Items already in cart</p>
      <p className="text-[#35373f] mt-1 tracking-wider">
        Your cart contains items from other restaurant. Would you like to reset
        your cart for adding items from this restaurant?
      </p>
      <div className="mt-7 flex justify-evenly">
        <button
          className="mr-6 py-3 px-20 border-2 border-[#60B240] text-[#60B240] font-bold hover:scale-y-105"
          onClick={() => {
            dispatch(resClose(false));
          }}
        >
          NO
        </button>
        <button
          className="py-3 px-16 bg-[#60B240] font-bold text-white hover:scale-y-105"
          onClick={() => {
            dispatch(discardOldItem());
            dispatch(clearCart());
            dispatch(resName(cuis));
            dispatch(addItems(restro));
          }}
        >
          YES,START AFRESH
        </button>
      </div>
    </div>
  );
};

export default ChangeRestruantBanner;
