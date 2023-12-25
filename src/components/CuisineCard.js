import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CUIS_IMG } from "../utils/constant";
import { addItems, removeItems } from "../utils/cartSlice";
import veg from "../../images/veg.png";
import nonveg from "../../images/nonveg.png";
import PriceBanner from "./PriceBanner";

const CuisineCard = ({ restro }) => {
  // const measure = useSelector((store) => store.cart.tally);
  const [banner, setBanner] = useState();
  const [count, setCount] = useState(0);
  const { name, price, description, imageId, defaultPrice, isVeg } =
    restro?.card?.info;
  const dispatch = useDispatch();
  return (
    <div
      className="flex justify-between w-[46rem] border-b-[1.599px] border-gray-300 pb-10 mb-5 ml-2 mt-2"
      data-testid="cuisine"
    >
      <div>
        <div className="w-5">
          {isVeg ? <img src={veg} /> : <img src={nonveg} />}
        </div>
        <p className="font-semibold text-lg text-gray-800">{name}</p>
        <div className="flex">
          <p className="text-sm font-medium mb-4">
            &#8377; {price ? price / 100 : defaultPrice / 100}
          </p>
        </div>

        <div className="text-sm text-gray-400 pr-7">
          <p>{description}</p>
        </div>
      </div>
      <div>
        <img
          className="min-w-[140] max-w-[130] h-28 rounded-xl cursor-pointer"
          src={CUIS_IMG + imageId}
        />
        {count > 0 ? (
          <button className="w-24 h-9 bg-white text-green-600 relative bottom-6 left-[1.57rem] rounded-md text-sm font-medium drop-shadow-lg hover:scale-y-105 transition-all duration-100">
            <div className="flex justify-between ml-10">
              <p
                className="-ml-7 mb-2 text-2xl"
                onClick={() => {
                  setCount(count - 1);
                  dispatch(removeItems(restro));
                  <PriceBanner />;
                }}
              >
                -
              </p>
              <p className="mt-2">{count}</p>
              <p
                className="mr-2 mb-2 text-2xl"
                onClick={() => {
                  setCount(count + 1);
                  dispatch(addItems(restro));
                }}
              >
                +
              </p>
            </div>
          </button>
        ) : (
          <button
            className="px-9 py-2 b bg-white text-green-600 z-10 relative bottom-7 left-5 rounded-md text-sm font-medium drop-shadow-lg hover:scale-y-105 transition-all duration-100"
            onClick={() => {
              setCount(count + 1);
              dispatch(addItems(restro));
              setBanner(<PriceBanner />);
            }}
          >
            ADD
          </button>
        )}
      </div>
      {count > 0 ? banner : null}
    </div>
  );
};

export default CuisineCard;
