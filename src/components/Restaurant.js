import Coupon from "./Coupon";
import clock from "../../images/clock.png";
import rupee from "../../images/rupee.png";
import star from "../../images/star.png";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MenuAccordion from "./MenuAccordion";
import { useState } from "react";
import { Coupon_IMG } from "../utils/constant";
import useSmallRes from "../utils/useSmallRes";

const Restaurant = () => {
  const { resId } = useParams();
  const [veg, setVeg] = useState(false);

  // const [show, setShow] = useState();
  // Creating Custom hook for Fetching Data through API to make this component Single Responsible
  const cuis = useSmallRes(resId);
  if (cuis === null) {
    return <Shimmer />;
  }

  const filterOffer = cuis?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers.filter((i) => {
    return i?.info?.offerTag != "DEAL OF DAY";
  })
  const filterAccordion = cuis?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((i) => {
    return (
      i?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  return (
    <>
      <div className="flex flex-col items-center mt-20 md:mx-auto md:ml-0 ml-[45rem] z-10">
        <div className="flex justify-between md:w-[46rem] w-[75rem]">
          <div>
            <p className="md:text-xl text-7xl font-bold font-sans pb-2">{cuis?.data?.cards[2]?.card?.card?.info?.name}</p>
            <p className="md:text-sm text-4xl text-slate-500">{cuis?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</p>
            <p className="md:text-sm text-4xl text-slate-500">
              {cuis?.data?.cards[2]?.card?.card?.info?.areaName}, {cuis?.data?.cards[2]?.card?.card?.info?.sla?.lastMileTravelString}
            </p>
          </div>
          <div className="flex flex-col md:border-[1.5px] border-[2.5px] md:px-0 px-4 rounded-lg items-center">
            <div className="flex md:pb-2 pb-4 pt-1">
              <img className="md:w-4 w-10 md:h-5 h-11 mr-1 mt-[0.25rem]" src={star} />
              <h3 className="text-yellow-500 md:text-lg text-5xl font-semibold">
                {cuis?.data?.cards[2]?.card?.card?.info?.avgRating}
              </h3>
            </div>
            <div className="plus md:border-t-[1px] border-t-[3px]">
              <p className="md:text-[0.7rem] text-2xl font-semibold text-slate-500 px-1 md:py-2 py-5">
                {cuis?.data?.cards[2]?.card?.card?.info?.totalRatingsString}
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-7 flex-col md:w-[47rem] w-[75rem] border-t-2 border-dotted border-gray-300">
          <div className="flex mt-4">
            <img className="md:w-5 w-9 md:h-6 h-10 pt-1 mr-2" src={clock} />
            <p className="mr-4 font-bold md:text-lg text-4xl">{cuis?.data?.cards[2]?.card?.card?.info?.sla?.slaString}</p>
            <img className="md:w-5 w-9 md:h-6 h-10 mx-2 pt-1" src={rupee} />
            <p className="font-bold md:text-lg text-4xl">{cuis?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
          </div>
          <div className="flex mt-5 relative right-2 pb-10 overflow-x-scroll no-scrollbar">
            {filterOffer.map((i) => {
              return <Coupon
                key={i.offerIds}
                values={i}
              />
            })}
          </div>
          {cuis?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.isPureVeg ? <div className="flex -ml-2 border-b-[1.5px] border-gray-300 pb-4">
            <img src={Coupon_IMG + cuis?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.vegOnlyDetails?.imageId} className="mr-1 w-12 md:w-7" />
            <p className="md:text-xs text-3xl mt-[0.35rem] font-semibold">PURE VEG</p>
          </div> : <div className="border-b-[1.5px] border-gray-300">
            <div className="flex mt-2 mb-6">
              <p className="mr-2 md:text-sm text-3xl font-bold tracking-wider cursor-pointer">
                Veg Only
              </p>
              {veg === false ? (
                <div
                  className="md:w-11 w-20 md:h-6 h-10 rounded-md bg-[#D4D5D9] cursor-pointer"
                  onClick={() => {
                    setVeg(true);
                  }}
                >
                  <div className=" bg-white md:w-5 w-8 md:h-5 h-8 ml-[0.1rem] mt-[0.13rem] rounded-md"></div>
                </div>
              ) : (
                <div
                  className="md:w-11 w-20 md:h-6 h-10 rounded-md bg-[#008000] cursor-pointer"
                  onClick={() => {
                    setVeg(false);
                  }}
                >
                  <img
                    className="bg-white md:w-5 w-8 md:h-5 h-8 md:ml-[1.4rem] ml-[2.8rem] mt-[0.13rem] rounded-md"
                    src="https://www.pngkey.com/png/full/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png"
                  />
                </div>
              )}
            </div>
          </div>}
        </div>
        {/* {topPicksCorousel[0]?.card?.card?.carousel && filterCarouselVeg.length != 0 && veg ? <div className="pb-5">
                    <p className="my-5 md:text-2xl text-8xl font-bold ml-2">{topPicksCorousel[0]?.card?.card?.title}</p>
                    <div className="flex md:w-[47.5rem] w-[65rem] overflow-x-scroll no-scrollbar scroll-smooth gap-3 -ml-1 pl-4">
                        {
                            filterCarouselVeg.map((i) => {
                                return <TopPicksCarousel key={i?.dish?.info?.id} inform={i} cuis={cuis} />
                            })
                        }
                    </div></div> : topPicksCorousel[0]?.card?.card?.carousel && <div className="pb-5">
                        <p className="my-5 text-2xl font-bold ml-2">{topPicksCorousel[0]?.card?.card?.title}</p>
                        <div className="flex md:w-[47.5rem] w-[65rem] overflow-x-scroll no-scrollbar scroll-smooth gap-3 -ml-1 pl-4">
                            {
                                topPicksCorousel[0]?.card?.card?.carousel.map((i) => {
                                    return <TopPicksCarousel key={i?.dish?.info?.id} inform={i} cuis={cuis} />
                                })
                            }
                        </div>
                    </div>} */}
        {/* {topPicksCorousel[0]?.card?.card?.carousel && <div className="border-b-[10px] border-gray-200 md:w-[48rem] w-[65rem] -ml-1"></div>} */}
        {filterAccordion.map((i) => {
          return (
            <MenuAccordion
              key={i?.card?.card?.title}
              veg={veg}
              cuis={cuis}
              accordion={i}
            // Lifting the state Up(passing the data from child to parent component using the function) :-
            // open={index === show ? true : false}
            // setOpen={() => {
            //   setShow(index);
            // }}
            />
          );
        })}
      </div>
    </>
  )
}

export default Restaurant
