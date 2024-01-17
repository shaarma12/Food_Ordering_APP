import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";
import { CUIS_IMG } from "../utils/constant";
import veg from "../../images/veg.png";
import nonveg from "../../images/nonveg.png";
import PriceBanner from "./PriceBanner";
import ChangeRestruantBanner from "./ChangeRestruantBanner";

const CuisineCard = ({ restro, name }) => {
  const [banner, setBanner] = useState();
  const [changeRestruant, setchangeRestruant] = useState();
  const dispatch = useDispatch();
  const restruantName = useSelector((store) => store.cart.restruantName);
  const count = useSelector(
    (store) =>
      store.cart.items.find((item) => item.card.info.id === restro.card.info.id)
        ?.count || 0
  );

  return (
    <div
      className="flex justify-between w-[46rem] border-b-[1.599px] border-gray-300 pb-10 mb-5 ml-2 mt-2"
      data-testid="cuisine"
    >
      <div>
        <div className="w-5">
          {restro.card.info.isVeg ? (
            <img src={veg} alt="Veg" />
          ) : (
            <img src={nonveg} alt="Non-Veg" />
          )}
        </div>
        <p className="font-semibold text-lg text-gray-800">
          {restro.card.info.name}
        </p>
        <div className="flex">
          <p className="text-sm font-medium mb-4">
            &#8377;{" "}
            {restro.card.info.price
              ? restro.card.info.price / 100
              : restro.card.info.defaultPrice / 100}
          </p>
        </div>
        <div className="text-sm text-gray-400 pr-7">
          <p>{restro.card.info.description}</p>
        </div>
      </div>
      <div>
        <img
          className="min-w-[140] max-w-[130] h-28 rounded-xl cursor-pointer"
          src={CUIS_IMG + restro?.card?.info?.imageId}
          alt="Image not found!"
        />
        {/* Add button and count UI */}
        {count > 0 ? (
          <button className="w-24 h-9 bg-white text-green-600 relative bottom-6 left-[1.57rem] rounded-md text-sm font-medium drop-shadow-lg hover:scale-y-105 transition-all duration-100">
            <div className="flex justify-between ml-10">
              <p
                className="-ml-7 mb-2 text-2xl"
                onClick={() => {
                  dispatch(removeItems(restro));
                }}
              >
                -
              </p>
              <p className="mt-2">{count}</p>
              <p
                className="mr-2 mb-2 text-2xl"
                onClick={() => {
                  if (restruantName == name) {
                    dispatch(addItems(restro));
                  } else {
                    setchangeRestruant(
                      <ChangeRestruantBanner name={name} restro={restro} />
                    );
                  }
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
              if (restruantName == name) {
                dispatch(addItems(restro));
              } else {
                setchangeRestruant(
                  <ChangeRestruantBanner name={name} restro={restro} />
                );
              }
              setBanner(<PriceBanner />);
            }}
          >
            ADD
          </button>
        )}
      </div>
      {count > 0 && banner}
      {count == 0 && changeRestruant}
    </div>
  );
};

export default CuisineCard;
