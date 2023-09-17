import React from "react";
import rup from "../../images/rup.png";
import { CUIS_IMG } from "../utils/constant";
const CuisineCard = ({ restro }) => {
  const { name, price, description, imageId } = restro?.card?.info;
  return (
    <div className="menu-card">
      <div className="write">
        <p>{name}</p>
        <div className="rups">
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
