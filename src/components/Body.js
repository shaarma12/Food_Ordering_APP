import React from "react";
import { useEffect, useState } from "react";
import Rescard from "./Rescard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constant";
const Body = () => {
  const [rest, setRest] = useState([]);
  const [text, setText] = useState("");
  const [filterlist, setFilterlist] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = await fetch(RES_API);
    const response = await url.json();
    setRest(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterlist(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (rest?.length === 0) return <Shimmer />;
  return (
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
          {filterlist?.map((i) => {
            return (
              <Link
                className="card"
                key={i.info.id}
                to={"/restaurant/" + i.info.id}
              >
                <Rescard restaurant={i} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
