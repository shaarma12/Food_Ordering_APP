import React from "react";
import { useDispatch } from "react-redux";
import { CUIS_IMG } from "../utils/constant";
import { addItems } from "../utils/cartSlice";
import veg from "../../images/veg.png";
import nonveg from "../../images/nonveg.png";

const CuisineCard = ({ restro }) => {
  const { name, price, description, imageId, defaultPrice, isVeg } =
    restro?.card?.info;
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between w-[46rem] border-b-[1.599px] border-gray-300 pb-10 mb-5 ml-2 mt-2">
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
        <button
          className="px-9 py-2 b bg-white text-green-600 relative bottom-7 left-5 rounded-md text-sm font-medium drop-shadow-lg hover:scale-y-105 transition-all duration-100"
          onClick={() => {
            dispatch(addItems(restro));
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default CuisineCard;
