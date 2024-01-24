import React from "react";
import veg from "../../images/veg.png";
import nonveg from "../../images/nonveg.png";

const ItemBill = ({ name, isVeg, price, defaultPrice, count }) => {
  const Price = (price ? price / 100 : defaultPrice / 100) * count;
  return (
    <div className="flex mt-2 mb-2">
      {isVeg ? (
        <img className="w-4 m-1" src={veg} alt="veg" />
      ) : (
        <img className="w-4 m-1" src={nonveg} alt="nonveg" />
      )}
      <p className="flex text-sm font-medium w-60">
        {name.length > 22 ? name.substring(0, 22) + "..." : name}
        <p className="mx-1">x</p>
        <p>{count}</p>
      </p>
      <p className="text-sm font-medium  text-gray-500">₹{Price}</p>
    </div>
  );
};

export default ItemBill;
