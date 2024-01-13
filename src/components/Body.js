import React, { useContext, useEffect, useState } from "react";
import Rescard from "./Rescard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constant";
import { DiscountInfo } from "./Rescard";
import UserContext from "../utils/UserContext";
import GridCards from "./GridCards";
import OfferCorousel from "./OfferCorousel";
import search from "../../images/search.svg";
import { useSelector } from "react-redux";
import PriceBanner from "./PriceBanner";

const Body = () => {
  // Using Context
  const { Login, setChanger } = useContext(UserContext);
  const banner = useSelector((store) => store.cart.items);
  const [rest, setRest] = useState([]);
  const [text, setText] = useState("");
  const [gridImage, setGridImage] = useState(null);
  const [filterlist, setFilterlist] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = await fetch(RES_API);
    const response = await url.json();

    setRest(
      !gridImage?.cards[0]?.card?.card?.header?.title
        ? response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
    );
    setFilterlist(
      !gridImage?.cards[0]?.card?.card?.header?.title
        ? response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
    );
    setGridImage(response?.data);
    // setCorousel(gridImage?.cards[0]?.card?.card?.header?.title="What's on your mind?");
  };
  const CorouselChecker = gridImage?.cards[0]?.card?.card?.header?.title;
  // Calling High Order Component

  const DiscountBanner = DiscountInfo(Rescard);
  if (rest?.length === 0) return <Shimmer />;
  return (
    <>
      <div className="flex flex-col items-center w-[94.5rem]">
        {banner.length > 0 && <PriceBanner />}
        {/* <input
          className="m-5 mr-48 p-1"
          placeholder="Your Name"
          value={Login}
          onChange={(e) => {
            setChanger(e.target.value);
          }}
        ></input> */}
        <div className="flex my-14 ml-[75rem] items-center mr-[75rem]">
          <input
            className="border-black border-2 rounded-tl-full rounded-bl-full mr-6 p-2 w-[32rem]"
            data-testid="searchInput"
            type="text"
            placeholder="Search for restaurant, cuisine...."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <button
            className="p-2 -ml-6 border-y-2 border-r-2 border-black rounded-tr-full rounded-br-full  font-medium bg-black text-white"
            onClick={() => {
              const searching = rest.filter((i) => {
                return i.info.name.toLowerCase().includes(text.toLowerCase());
              });
              setFilterlist(searching);
            }}
          >
            <img src={search} alt="search" className="w-[1.8rem] pr-1" />
          </button>
        </div>
        {!CorouselChecker && (
          <div className="flex flex-col w-[75rem]">
            <h2 className="mt-6 text-2xl font-bold text-gray-900 mb-6 ml-3">
              Best offers for you
            </h2>
            <div className="flex overflow-x-scroll scroll-smooth no-scrollbar gap-2 w-[75rem]">
              <div className="flex -ml-[20rem]">
                {gridImage?.cards[0]?.card?.card?.imageGridCards?.info.map(
                  (i) => {
                    return <OfferCorousel key={i?.id} corouselData={i} />;
                  }
                )}
              </div>
            </div>
          </div>
        )}
        {!CorouselChecker ? (
          <div className="flex flex-col w-[75rem] mb-16">
            <h2 className="mt-6 text-2xl font-bold text-gray-900 mb-6 ml-3">
              {gridImage?.cards[1]?.card?.card?.header?.title}
            </h2>
            <div className="flex overflow-x-scroll scroll-smooth no-scrollbar gap-2 w-[75rem]">
              <div className="flex -ml-20">
                {gridImage?.cards[1]?.card?.card?.imageGridCards?.info.map(
                  (i) => {
                    return <GridCards key={i?.id} gridImage={i} />;
                  }
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-[75rem] mb-16">
            <h2 className="mt-6 text-2xl font-bold text-gray-900 mb-6 ml-3">
              {gridImage?.cards[0]?.card?.card?.header?.title}
            </h2>
            <div className="flex overflow-x-scroll scroll-smooth no-scrollbar gap-2 w-[75rem]">
              <div className="flex -ml-20">
                {gridImage?.cards[0]?.card?.card?.imageGridCards?.info.map(
                  (i) => {
                    return <GridCards key={i?.id} gridImage={i} />;
                  }
                )}
              </div>
            </div>
          </div>
        )}
        <div className="border-t-2">
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Restaurants with online food delivery in Delhi
          </h2>
          <button
            onClick={() => {
              const change = rest.filter((i) => {
                return i.info.avgRating > 4;
              });
              setFilterlist(change);
            }}
            className="mt-6 px-3 py-2 rounded-lg font-medium bg-red-400 text-white hover:scale-y-110 transition-all duration-300 mr-[68rem] drop-shadow-xl"
          >
            Top Rated
          </button>
        </div>
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
