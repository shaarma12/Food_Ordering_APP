import React from "react";
import { useEffect, useState } from "react";
import Rescard from "./Rescard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [rest, setRest] = useState([]);
  const [text, setText] = useState("");
  const [filterlist, setFilterlist] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.693473&lng=77.297535&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await url.json();
    setRest(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterlist(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return rest.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="searchbar">
          <button
            onClick={() => {
              const change = rest.filter((i) => {
                return i.info.avgRating > 4;
              });
              setFilterlist(change);
            }}
            className="filter-btn"
          >
            Top Rated
          </button>
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish...."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const searching = rest.filter((i) => {
                return i.info.name.toLowerCase().includes(text.toLowerCase());
              });
              setFilterlist(searching);
            }}
          >
            Search
          </button>
        </div>
        <div className="res-card">
          {filterlist.map((i) => {
            return <Rescard key={i.info.id} restaurant={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Body;