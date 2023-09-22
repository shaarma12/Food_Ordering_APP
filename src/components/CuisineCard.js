import React from "react";
import rup from "../../images/rup.png";
import { CUIS_IMG } from "../utils/constant";
const CuisineCard = ({ restro }) => {
  const { name, price, description, imageId } = restro?.card?.info;
  return (
    <div className="flex flex-col">
      <div className="write">
        <p>{name}</p>
        <div className="w-9">
          <img src={rup} />
          <p>{price / 100}</p>
        </div>

        <div className="parat">
          <p>{description}</p>
        </div>
      </div>
      <img src={CUIS_IMG + imageId} />
    </div>
  );
};

export default CuisineCard;
