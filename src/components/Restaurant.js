import { useEffect, useState } from "react";
import CuisineCard from "./CuisineCard";
import Coupon from "./Coupon";

const Restaurant = () => {
  const [cuis, setCuis] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const url = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.693473&lng=77.297535&restaurantId=653368&catalog_qa=undefined&submitAction=ENTER"
    );

    const data = await url.json();
    setCuis(data);
    console.log(data);
  };
  return (
    <>
      <div className="restruant">
        <div className="top">
          <div className="title">
            <h3>Subway</h3>
            <p>cuisine</p>
            <p>DurgaPuri</p>
          </div>
          <div className="rating">
            <h3>4.3 star</h3>
            <p>500+ ratings</p>
          </div>
        </div>
        <div className="offers">
          <div className="paise">
            <h3>21 mins</h3>
            <h3>350 for two</h3>
          </div>
          <Coupon />
        </div>
        <div className="cuisines">
          <CuisineCard />
        </div>
      </div>
    </>
  );
};

export default Restaurant;
