import React from "react";
import rup from "../../images/rup.png";
import { CUIS_IMG } from "../utils/constant";
const CuisineCard = ({ restro }) => {
  const { name, price, description, imageId } = restro?.card?.info;
  return (
    <div className="flex justify-between w-[46rem] border-b-[1.599px] border-gray-300 pb-10 mb-5">
      <div className="write">
        <p className="font-semibold text-lg text-gray-800">{name}</p>
        <div className="flex">
          <p className="text-sm font-medium mb-4">&#8377; {price / 100}</p>
        </div>

        <div className="text-sm text-gray-400 pr-7">
          <p>{description}</p>
        </div>
      </div>
      <img
        className="min-w-[140] max-w-[130] h-28 rounded-xl cursor-pointer"
        src={CUIS_IMG + imageId}
      />
    </div>
  );
};

export default CuisineCard;
