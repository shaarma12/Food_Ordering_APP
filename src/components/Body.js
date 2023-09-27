import React, { useContext, useEffect, useState } from "react";
import Rescard from "./Rescard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constant";
import { DiscountInfo } from "./Rescard";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Using Context
  const { Login, setChanger } = useContext(UserContext);

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

  // Calling High Order Component

  const DiscountBanner = DiscountInfo(Rescard);

  if (rest?.length === 0) return <Shimmer />;
  return (
    <>
      <div className="flex flex-col items-center">
        <input
          className="m-5 mr-48 p-1"
          placeholder="Your Name"
          value={Login}
          onChange={(e) => {
            setChanger(e.target.value);
          }}
        ></input>
        <div className="flex m-10 ml-[75rem] items-center">
          <input
            className="border-none mr-6 p-1 w-56"
            type="text"
            placeholder="Search for restaurant, cuisine...."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 ml-3 mr-2 rounded-lg bg-red-400 text-white hover:scale-y-110 transition-all duration-300 drop-shadow-xl"
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
        <button
          onClick={() => {
            const change = rest.filter((i) => {
              return i.info.avgRating > 4;
            });
            setFilterlist(change);
          }}
          className="px-4 py-2 rounded-lg bg-red-400 text-white hover:scale-y-110 transition-all duration-300 mr-[68rem] drop-shadow-xl"
        >
          Top Rated
        </button>

        <div className="flex flex-wrap justify-center gap-6 mt-14">
          {filterlist?.map((i) => {
            return (
              <Link key={i.info.id} to={"/restaurant/" + i.info.id}>
                {JSON.stringify(i?.info?.aggregatedDiscountInfoV2) === "{}" ? (
                  <Rescard restaurant={i} />
                ) : (
                  <DiscountBanner restaurant={i} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
