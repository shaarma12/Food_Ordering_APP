import { RES_IMG } from "../utils/constant";
import star from "../../images/star.png";

const Rescard = ({ restaurant }) => {
  // console.log(restaurant);
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    restaurant?.info;
  return (
    <>
      <div className="mb-5 font-sans hover:scale-y-110 transition-all duration-500 ">
        <img
          className="w-72 h-52 rounded-3xl drop-shadow-[5px_5px_10px_rgba(8,7,7,1)]"
          src={RES_IMG + cloudinaryImageId}
          alt="resImg"
        />
        <h2 className="mt-2 text-xl font-semibold ml-2">{name}</h2>
        <div className="flex items-center font-normal ml-2">
          <img className="w-5 h-4 pr-1" src={star} alt="Star" />
          <h3>{avgRating}</h3>
        </div>
        <p className="font-normal ml-2">
          {cuisines.slice(Math.max(cuisines.length - 3)).join(", ")}
        </p>
        <p className="font-normal ml-2">{areaName}</p>
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
        <h1 className="absolute z-10 font-extrabold text-xl text-white mt-[10.8rem] ml-5 opacity-90">
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
