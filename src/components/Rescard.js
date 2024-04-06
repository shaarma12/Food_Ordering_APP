import { RES_IMG } from "../utils/constant";
import star from "../../images/star.png";
import { useDispatch } from "react-redux";
import { resName } from "../utils/cartSlice";

const Rescard = ({ restaurant }) => {
  const dispatch = useDispatch();
  const { cloudinaryImageId, name, avgRating, cuisines, areaName, sla } =
    restaurant?.info;

  return (
    <>
      <div
        className="mb-5 font-sans hover:scale-y-110 transition-all duration-500 "
        data-testid="resList"
        onClick={() => {
          dispatch(resName(restaurant?.info));
        }}
      >
        <img
          className="md:w-72 w-[35rem] h-[28rem] md:h-52 rounded-3xl drop-shadow-[5px_5px_10px_rgba(8,7,7,1)]"
          src={RES_IMG + cloudinaryImageId}
          alt="resImg"
        />
        <h2 className="mt-2 md:text-xl text-5xl font-semibold ml-2 md:w-full w-[35rem]">{name.length > 23 ? name.substring(0, 22) + "..." : name}</h2>
        <div className="flex items-center font-semibold ml-2">
          <img className="md:w-5 md:h-4 w-6 h-5 pr-1" src={star} alt="Star" />
          <h3 className="md:text-base text-2xl">{avgRating}</h3>
          <p className="text-xl font-extrabold mx-1 -mt-3">.</p>
          <h3 className="md:text-base text-2xl">{sla?.slaString}</h3>
        </div>
        <p className="font-normal ml-2 md:text-base text-3xl">
          {cuisines.slice(Math.max(cuisines.length - 3)).join(", ")}
        </p>
        <p className="font-normal ml-2 md:text-base text-3xl">{areaName}</p>
      </div>
    </>
  );
};

export default Rescard;

// High order Component - It will take Component as input and enhance that component and return the enhance Component.

export const DiscountInfo = (Rescard) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props?.restaurant?.info;

    return (
      <>
        <h1 className="absolute w-[20rem] z-10 font-extrabold md:text-xl text-3xl text-white md:mt-[10.8rem] mt-[24rem] md:ml-5 ml-28 opacity-90">
          {aggregatedDiscountInfoV3?.header}
          {""}
          {aggregatedDiscountInfoV3?.subHeader}
        </h1>
        <div className="w-5 bg-black z-10"></div>
        <Rescard {...props} />
      </>
    );
  };
};
