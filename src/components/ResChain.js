import { RES_IMG } from "../utils/constant";
import star from "../../images/star.png";
import { useDispatch } from "react-redux";
import { resName } from "../utils/cartSlice";

const ResChain = ({ restaurant }) => {
    const dispatch = useDispatch();
    const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
        restaurant?.info;
    return (
        <>
            <div
                className="mb-5 font-sans hover:scale-y-110 transition-all duration-500 -ml-36 mr-44"
                data-testid="resList"
                onClick={() => {
                    dispatch(resName(restaurant?.info));
                }}
            >
                <img
                    className="w-72 h-48 mx-36 rounded-2xl"
                    src={RES_IMG + cloudinaryImageId}
                    alt="resImg"
                />
                <h2 className="mt-2 text-xl font-semibold ml-[9.5rem] w-full">{name.length > 27 ? name.substring(0, 26) + "..." : name}</h2>
                <div className="flex items-center font-normal ml-[9.5rem] w-full">
                    <img className="w-5 h-4 pr-1" src={star} alt="Star" />
                    <h3>{avgRating}</h3>
                </div>
                <p className="font-normal ml-[9.5rem] w-full">
                    {cuisines.slice(Math.max(cuisines.length - 3)).join(", ")}
                </p>
                <p className="font-normal ml-[9.5rem] w-full">{areaName}</p>
            </div>
        </>
    );
};

export default ResChain;

