import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems, resClose } from "../utils/cartSlice";
import { CUIS_IMG } from "../utils/constant";
import veg from "../../images/veg.png";
import nonveg from "../../images/nonveg.png";
import PriceBanner from "./PriceBanner";
import ChangeRestruantBanner from "./ChangeRestruantBanner";

const CuisineCard = ({ restro, cuis }) => {
  const [banner, setBanner] = useState();
  const [changeRestruant, setchangeRestruant] = useState();
  const dispatch = useDispatch();
  const restruantName = useSelector((store) => store.cart.restruantName);
  const restruantBannerClose = useSelector(
    (store) => store.cart.restruantBannerClose
  );
  const count = useSelector(
    (store) =>
      store.cart.items.find((item) => item?.card?.info?.id === restro?.card?.info?.id)
        ?.count || 0
  );

  return (
    <div
      className="flex justify-between md:w-[46rem] w-[65rem] border-b-[1.599px] border-gray-300 pb-10 mb-5 ml-2 mt-2"
      data-testid="cuisine"
    >
      <div>
        <div className="md:w-5 w-7">
          {restro.card.info.isVeg ? (
            <img src={veg} alt="Veg" />
          ) : (
            <img src={nonveg} alt="Non-Veg" />
          )}
        </div>
        <p className="font-semibold md:text-lg text-4xl text-gray-800">
          {restro.card.info.name}
        </p>
        <div className="flex">
          <p className="md:text-sm text-2xl font-medium mb-4">
            &#8377;{" "}
            {restro.card.info.price
              ? restro.card.info.price / 100
              : restro.card.info.defaultPrice / 100}
          </p>
        </div>
        <div className="md:text-sm text-2xl text-gray-400 pr-7">
          <p>{restro.card.info.description}</p>
        </div>
      </div>
      <div>
        <img
          className="md:min-w-[140] min-w-[200] md:max-w-[130] max-w-[190] md:h-28 h-48 rounded-xl cursor-pointer"
          src={CUIS_IMG + restro?.card?.info?.imageId}
          alt="Image not found!"
        />
        {/* Add button and count UI */}
        {count > 0 ? (
          <button className="md:w-24 w-28 md:h-9 h-11 bg-white text-green-600 relative bottom-6 md:left-[1.57rem] left-[2.8rem] rounded-md text-sm font-medium drop-shadow-lg hover:scale-y-105 transition-all duration-100">
            <div className="flex justify-between ml-10">
              <p
                className="-ml-7 mb-2 md:text-2xl text-3xl"
                onClick={() => {
                  dispatch(removeItems(restro));
                }}
              >
                -
              </p>
              <p className="mt-[0.35rem] md:text-base text-xl">{count}</p>
              <p
                className="mr-2 mb-2 md:text-2xl text-3xl"
                onClick={() => {
                  if (
                    cuis?.data?.cards[2]?.card?.card?.info?.name ==
                    restruantName[0]?.name
                  ) {
                    dispatch(addItems(restro));
                  } else {
                    setchangeRestruant(
                      <ChangeRestruantBanner
                        cuis={cuis?.data?.cards[2]?.card?.card?.info}
                        restro={restro}
                      />
                    );
                    dispatch(resClose(true));
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
            className="md:w-24 w-28 md:h-9 h-11 bg-white text-green-600 z-10 relative bottom-7 md:left-5 left-12 rounded-md text-sm font-medium drop-shadow-lg hover:scale-y-105 transition-all duration-100"
            onClick={() => {
              if (
                cuis?.data?.cards[2]?.card?.card?.info?.name ==
                restruantName[0]?.name
              ) {
                dispatch(addItems(restro));
              } else {
                setchangeRestruant(
                  <ChangeRestruantBanner
                    cuis={cuis?.data?.cards[2]?.card?.card?.info}
                    restro={restro}
                  />
                );
                dispatch(resClose(true));
              }
              setBanner(<PriceBanner />);
            }}
          >
            ADD
          </button>
        )}
      </div>
      {count > 0 && banner}
      {restruantBannerClose == true && count == 0 && changeRestruant}
    </div>
  );
};

export default CuisineCard;
