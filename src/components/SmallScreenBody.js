import React, { useEffect, useState } from "react";
import Rescard from "./Rescard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { DiscountInfo } from "./Rescard";
import GridCards from "./GridCards";
import OfferCorousel from "./OfferCorousel";
import search from "../../images/search.svg";
import { useDispatch, useSelector } from "react-redux";
import PriceBanner from "./PriceBanner";
import { displayAdress } from "../utils/addressSlice";
import ResChain from "./ResChain";
import OfferGridCards from "./OfferGridCards";

const SmallScreenBody = () => {

    const banner = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const [rest, setRest] = useState([]);
    const [text, setText] = useState("");
    const [restrauntChains, setRestrauntChains] = useState([]);
    const [filterlist, setFilterlist] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [carousel, setCarousel] = useState();
    const [offers, setOffers] = useState();
    useEffect(() => {
        geolocation();
    }, []);

    const geolocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            fetchData(latitude, longitude);
            fetchAddressData(latitude, longitude);
        });
    };

    const fetchData = async (latitude, longitude) => {
        try {
            const url = await fetch(
                `https://www.swiggy.com/mapi/homepage/getCards?lat=${latitude}&lng=${longitude}`
            );
            const response = await url.json();
            setRest(
                response?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
            );
            setFilterlist(
                response?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
            );
            setRestrauntChains(
                response?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
            );
            setCarousel(response?.data?.success?.cards[2]?.gridWidget?.imageGridCards?.info);
            setOffers(response?.data?.success?.cards[3]?.gridWidget)
            setLoading(false); // Set loading to false when data is fetched
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchAddressData = async (latitude, longitude) => {
        try {
            const url = await fetch(
                `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=65ccf42560a02876303330moh6024eb`
            );
            const result = await url.json();
            dispatch(displayAdress(result?.address));
        } catch (error) {
            console.error("Error fetching address data:", error);
        }
    };

    if (loading) return <Shimmer />; // Render loading state while data is being fetched

    // Calling High Order Component
    const DiscountBanner = DiscountInfo(Rescard);
    return (
        <div className="flex flex-col items-center ml-0">
            {banner.length > 0 && <PriceBanner />}
            {/* <input
          className="m-5 mr-48 p-1"
          placeholder="Your Name"
          value={Login}
          onChange={(e) => {
            setChanger(e.target.value);
          }}
        ></input> */}
            <div className="flex my-14 md:ml-[75rem] items-center md:mr-[75rem] ml-[65rem] md:mt-12 mt-12">
                <input
                    className="border-black border-2 rounded-tl-full rounded-bl-full mr-6 md:p-2 p-10 md:w-[32rem] w-[40rem] md:placeholder:text-base placeholder:text-3xl"
                    data-testid="searchInput"
                    type="text"
                    placeholder="Search for restaurant, cuisine...."
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                ></input>
                <button
                    className="md:p-2 p-10 -ml-6 border-y-2 border-r-2 border-black rounded-tr-full rounded-br-full font-medium bg-black text-white"
                    onClick={() => {
                        const searching = rest.filter((i) => {
                            return i.info.name.toLowerCase().includes(text.toLowerCase());
                        });
                        setFilterlist(searching);
                    }}
                >
                    <img src={search} alt="search" className="md:w-[1.8rem] w-9 pr-1" />
                </button>
            </div>
            <div className="flex flex-col w-[75rem] md:border-t-2 mb-7 md:border-b-2 pb-12">
                <h2 className="mt-11 md:text-2xl text-7xl w-[96rem] font-bold text-gray-900 md:mb-5 mb-10 md:ml-0 ml-[30rem]">
                    Top restaurant chains in Delhi
                </h2>
                <div className="flex rounded-2xl w-[75rem] overflow-x-scroll no-scrollbar md:ml-0 ml-[31rem]">
                    {restrauntChains && restrauntChains.map((i) => {
                        return <Link to={`/restaurant/` + i?.info?.id} key={i?.info?.id}><ResChain restaurant={i} />
                        </Link>
                    })}
                </div>
            </div>
            <div className="flex flex-col w-[75rem] mb-16">
                <div className="flex overflow-x-scroll scroll-smooth no-scrollbar md:gap-2 md:w-[75rem] w-[90rem] md:ml-0 ml-64">
                    <div className="flex md:-ml-20 gap-6 -ml-40 ">
                        {carousel.map(
                            (i) => {
                                return <GridCards key={i?.id} gridImage={i} />;
                            }
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[75rem] mb-16 mt-16">
                <h2 className="mt-11 md:text-2xl text-7xl w-[96rem] font-bold text-gray-900 md:mb-5 mb-10 md:ml-0 ml-[30rem]">
                    {offers?.header?.title}
                </h2>
                <div className="flex overflow-x-scroll scroll-smooth no-scrollbar md:gap-2 md:w-[75rem] w-[90rem] md:ml-0 ml-64">
                    <div className="flex ml-2 gap-6">
                        {offers?.imageGridCards?.info.map(
                            (i) => {
                                return <OfferGridCards key={i?.id} gridImage={i} />;
                            }
                        )}
                    </div>
                </div>
            </div>
            <div className="md:ml-0 ml-[55rem]">
                <div className="md:ml-[10.5rem] ml-20">
                    <h2 className="md:text-2xl text-5xl font-bold text-gray-900 -ml-2">
                        Restaurants with online food delivery in Delhi
                    </h2>
                    <button
                        onClick={() => {
                            const change = rest.filter((i) => {
                                return i.info.avgRating > 4;
                            });
                            setFilterlist(change);
                        }}
                        className="md:w-28 w-28 mt-6 py-2 px-4 rounded-3xl font-medium border-[2px] border-[#E2E2E7] hover:scale-y-110 transition-all duration-300 mr-[68rem] -ml-2 drop-shadow-xl"
                    >
                        Top Rated
                    </button>
                </div>
                <div className="flex flex-wrap justify-center md:gap-6 gap-20 mt-14 md:ml-0 ml-16 md:-mr-0 -mr-6">
                    {filterlist?.map((i) => {
                        return (
                            <Link key={i.info.id} to={"/restaurant/" + i.info.id}>
                                {i?.info?.aggregatedDiscountInfoV2 === "{}" ? (
                                    <Rescard restaurant={i} />
                                ) : (
                                    <DiscountBanner restaurant={i} />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default SmallScreenBody
