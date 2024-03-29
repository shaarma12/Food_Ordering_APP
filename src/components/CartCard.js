import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";
import { CUIS_IMG } from "../utils/constant";
import veg from "../../images/veg.png";
import nonveg from "../../images/nonveg.png";
import { Link } from "react-router-dom";

const CartCard = ({ restro }) => {
  const res = useSelector(store => store.cart.restruantName)
  const dispatch = useDispatch();
  const value = restro.card.info.price
    ? restro.card.info.price / 100
    : restro.card.info.defaultPrice / 100;
  return (
    <div
      className="flex justify-between items-center w-[70rem] border-b-[1.599px] pb-3 border-gray-300 ml-8 mt-2"
      data-testid="cuisine"
    >
      <div>
        <Link to={"/restaurant/" + res[0]?.id}>
          <img
            className="md:min-w-[160] min-w-[240] md:max-w-[250] max-w-[150] md:h-28 h-60 rounded-xl cursor-pointer"
            src={CUIS_IMG + restro?.card?.info?.imageId}
            alt="Image not found!"
          />
        </Link>
      </div>
      <div className="md:mb-0 mb-16 md:ml-0 ml-11">
        <p className="flex font-semibold md:text-lg text-3xl w-96 text-gray-800">
          {restro.card.info.name.length > 35
            ? restro.card.info.name.substring(0, 35) + "..."
            : restro.card.info.name}
          <div className="md:w-4 w-6">
            {restro.card.info.isVeg ? (
              <img src={veg} alt="Veg" />
            ) : (
              <img src={nonveg} alt="Non-Veg" />
            )}
          </div>
        </p>
        <div className="md:text-sm text-3xl text-gray-400 md:w-[25rem] w-[27rem]">
          <p>
            {restro?.card?.info?.description?.length > 100
              ? restro?.card?.info?.description.substring(0, 100) + "..."
              : restro?.card?.info?.description}
          </p>
        </div>
      </div>
      <div className="flex">
        <p className="md:static relative left-8 md:text-sm text-2xl font-medium">&#8377; {value.toFixed(2)}</p>
      </div>
      {/* Add button and count UI */}
      {restro?.count > 0 ? (
        <button className="md:static relative left-32 md:w-24 w-36 md:h-9 h-14 bg-white text-green-600 rounded-md text-sm font-medium drop-shadow-lg hover:scale-y-105 transition-all duration-100">
          <div className="flex justify-between ml-10">
            <p
              className="-ml-7 mb-2 md:text-2xl text-4xl"
              onClick={() => {
                dispatch(removeItems(restro));
              }}
            >
              -
            </p>
            <p className="md:mt-2 mt-1 md:text-base text-4xl">{restro?.count}</p>
            <p
              className="mr-2 mb-2 md:text-2xl text-4xl"
              onClick={() => {
                dispatch(addItems(restro));
              }}
            >
              +
            </p>
          </div>
        </button>
      ) : (
        /* Add button without count */
        <button
          className="md:w-24 w-36 md:h-9 h-14 bg-white text-green-600 z-10 relative bottom-7 left-5 rounded-md text-sm font-medium drop-shadow-lg hover:scale-y-105 transition-all duration-100"
          onClick={() => {
            dispatch(addItems(restro));
          }}
        >
          ADD
        </button>
      )}
      <p className="md:text-base text-4xl font-semibold md:static relative left-52">
        &#8377;
        {(value * restro?.count).toFixed(2)}
      </p>
    </div>
  );
};

export default CartCard;
