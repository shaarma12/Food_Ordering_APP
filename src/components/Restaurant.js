import { useEffect, useState } from "react";
import CuisineCard from "./CuisineCard";
import Coupon from "./Coupon";
import clock from "../../images/clock.png";
import rupee from "../../images/rupee.png";
import star from "../../images/star.png";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const Restaurant = () => {
  const [cuis, setCuis] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = await fetch(MENU_API + resId);

    const data = await url.json();
    setCuis(data);
    console.log(data);
  };

  if (cuis === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    areaName,
    avgRating,
    sla,
    totalRatingsString,
    costForTwoMessage,
    id,
  } = cuis?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    cuis?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  return (
    <>
      <div className="restruant">
        <div className="top">
          <div className="title">
            <p>{name}</p>
            <p>{cuisines.join(", ")}</p>
            <p>
              {areaName}, {sla?.lastMileTravelString}
            </p>
          </div>
          <div className="rating">
            <div className="sta">
              <img src={star} />
              <h3>{avgRating}</h3>
            </div>
            <div className="plus">
              <p>{totalRatingsString}</p>
            </div>
          </div>
        </div>
        <div className="offers">
          <div className="paise">
            <img src={clock} />
            <p>{sla?.slaString}</p>
            <img src={rupee} />
            <p>{costForTwoMessage}</p>
          </div>
          <div className="coupon">
            <Coupon
              copon="USE JUMBO"
              off="20% OFF UPTO ₹60"
              para="ON SELCT ITEMS"
            />
            <Coupon
              copon="USE TRYNEW"
              off="FLAT ₹125 OFF"
              para="ON ABOVE ₹159"
            />
            <Coupon
              copon="NO CODE REQUIRED"
              off="Free Choco Lava Cake"
              para="ON ABOVE ₹599"
            />
          </div>
        </div>
        <div className="cuisines">Recommended ({itemCards.length})</div>
        {itemCards.map((i) => {
          return <CuisineCard key={i.card.info.id} restro={i} />;
        })}
      </div>
    </>
  );
};

export default Restaurant;
