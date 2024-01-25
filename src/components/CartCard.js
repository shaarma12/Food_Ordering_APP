import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";
import { CUIS_IMG } from "../utils/constant";
import veg from "../../images/veg.png";
import nonveg from "../../images/nonveg.png";
import PriceBanner from "./PriceBanner";

const CartCard = ({ restro }) => {
  const dispatch = useDispatch();
  const [banner, setBanner] = useState();
  const value = restro.card.info.price
    ? restro.card.info.price / 100
    : restro.card.info.defaultPrice / 100;
  return (
    <div
      className="flex justify-between items-center w-[70rem] border-b-[1.599px] pb-3 border-gray-300 ml-8 mt-2"
      data-testid="cuisine"
    >
      <div>
        <img
          className="min-w-[140] max-w-[130] h-28 rounded-xl cursor-pointer"
          src={CUIS_IMG + restro?.card?.info?.imageId}
          alt="Image not found!"
        />
      </div>
      <div className="">
        <p className="flex font-semibold text-lg text-gray-800">
          {restro.card.info.name.length > 35
            ? restro.card.info.name.substring(0, 35) + "..."
            : restro.card.info.name}
          <div className="w-4">
            {restro.card.info.isVeg ? (
              <img src={veg} alt="Veg" />
            ) : (
              <img src={nonveg} alt="Non-Veg" />
            )}
          </div>
        </p>
        <div className="text-sm text-gray-400 w-[25rem]">
          <p>
            {restro.card.info.description.length > 100
              ? restro.card.info.description.substring(0, 100) + "..."
              : restro.card.info.description}
          </p>
        </div>
      </div>
      <div className="flex">
        <p className="text-sm font-medium">&#8377; {value.toFixed(2)}</p>
      </div>
      {/* Add button and count UI */}
      {restro?.count > 0 ? (
        <button className="w-24 h-9 bg-white text-green-600 relative rounded-md text-sm font-medium drop-shadow-lg hover:scale-y-105 transition-all duration-100">
          <div className="flex justify-between ml-10">
            <p
              className="-ml-7 mb-2 text-2xl"
              onClick={() => {
                dispatch(removeItems(restro));
              }}
            >
              -
            </p>
            <p className="mt-2">{restro?.count}</p>
            <p
              className="mr-2 mb-2 text-2xl"
              onClick={() => {
                dispatch(addItems(restro));
                setBanner(<PriceBanner />);
              }}
            >
              +
            </p>
          </div>
        </button>
      ) : (
        /* Add button without count */
        <button
          className="px-9 py-2 bg-white text-green-600 z-10 relative bottom-7 left-5 rounded-md text-sm font-medium drop-shadow-lg hover:scale-y-105 transition-all duration-100"
          onClick={() => {
            dispatch(addItems(restro));
            setBanner(<PriceBanner />);
          }}
        >
          ADD
        </button>
      )}
      <p className="font-semibold">
        &#8377;
        {(value * restro?.count).toFixed(2)}
      </p>
    </div>
  );
};

export default CartCard;
