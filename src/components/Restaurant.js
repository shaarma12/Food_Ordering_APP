import Coupon from "./Coupon";
import clock from "../../images/clock.png";
import rupee from "../../images/rupee.png";
import star from "../../images/star.png";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRes from "../utils/useRes";
import MenuAccordion from "./MenuAccordion";
import { useState } from "react";

const Restaurant = () => {
  const { resId } = useParams();
  const [veg, setVeg] = useState(false);

  // const [show, setShow] = useState();
  // Creating Custom hook for Fetching Data through API to make this component Single Responsible

  const cuis = useRes(resId);
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

  const { cards } = cuis?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const filterAccordion = cards.filter((i) => {
    return (
      i?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  return (
    <>
      <div className="flex flex-col items-center mt-20 mx-auto">
        <div className="flex justify-between w-[47rem]">
          <div>
            <p className="text-xl font-bold font-sans pb-2">{name}</p>
            <p className="text-sm text-slate-500">{cuisines.join(", ")}</p>
            <p className="text-sm text-slate-500">
              {areaName}, {sla?.lastMileTravelString}
            </p>
          </div>
          <div className="flex flex-col border-[1.5px] rounded-lg items-center  ">
            <div className="flex border-b-[1px] pb-1 pt-1">
              <img className="w-4 h-5 mr-1 mt-[0.25rem]" src={star} />
              <h3 className="text-yellow-500 text-lg font-semibold">
                {avgRating}
              </h3>
            </div>
            <div className="plus">
              <p className="text-[0.7rem] font-semibold text-slate-500 px-1 py-3">
                {totalRatingsString}
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-7 flex-col w-[47rem] border-t-2 border-dotted border-gray-300">
          <div className="flex mt-4">
            <img className="w-5 h-6 pt-1 mr-2" src={clock} />
            <p className="mr-4 font-bold text-lg">{sla?.slaString}</p>
            <img className="w-5 h-6 mx-2 pt-1" src={rupee} />
            <p className="font-bold text-lg">{costForTwoMessage}</p>
          </div>
          <div className="flex mt-5 relative right-2 pb-10 overflow-x-scroll no-scrollbar">
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
            <Coupon
              copon="NO CODE REQUIRED"
              off="Free Choco Lava Cake"
              para="ON ABOVE ₹599"
            />
            <Coupon
              copon="NO CODE REQUIRED"
              off="Free Choco Lava Cake"
              para="ON ABOVE ₹599"
            />
            <Coupon
              copon="NO CODE REQUIRED"
              off="Free Choco Lava Cake"
              para="ON ABOVE ₹599"
            />
            <Coupon
              copon="NO CODE REQUIRED"
              off="Free Choco Lava Cake"
              para="ON ABOVE ₹599"
            />
          </div>
          <div className="border-b-[1.5px] border-gray-300">
            <div className="flex mt-2 mb-6">
              <p className="mr-2 text-sm font-bold tracking-wider cursor-pointer">
                Veg Only
              </p>
              {veg === false ? (
                <div
                  className="w-11 h-6 rounded-md bg-[#D4D5D9] cursor-pointer"
                  onClick={() => {
                    setVeg(true);
                  }}
                >
                  <div className=" bg-white w-5 h-5 ml-[0.1rem] mt-[0.13rem] rounded-md"></div>
                </div>
              ) : (
                <div
                  className=" w-11 h-6 rounded-md bg-[#008000] cursor-pointer"
                  onClick={() => {
                    setVeg(false);
                  }}
                >
                  <img
                    className="bg-white w-5 h-5 ml-[1.4rem] mt-[0.13rem] rounded-md"
                    src="https://www.pngkey.com/png/full/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {filterAccordion.map((i, index) => {
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
  );
};

export default Restaurant;
