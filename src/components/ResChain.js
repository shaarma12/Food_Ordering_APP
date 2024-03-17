import { RES_IMG } from "../utils/constant";
import star from "../../images/star.png";
import { useDispatch } from "react-redux";
import { resName } from "../utils/cartSlice";

const ResChain = ({ restaurant }) => {
    const dispatch = useDispatch();
    const { cloudinaryImageId, name, avgRating, cuisines, areaName, sla } =
        restaurant?.info;
    return (
        <>
            <div
                className="mb-5 font-sans hover:scale-y-110 transition-all duration-500 -ml-36 md:mr-44 mr-24"
                data-testid="resList"
                onClick={() => {
                    dispatch(resName(restaurant?.info));
                }}
            >
                <img
                    className="md:w-72 w-[34rem] md:h-48 h-96 mx-36 rounded-2xl"
                    src={RES_IMG + cloudinaryImageId}
                    alt="resImg"
                />
                <h2 className="mt-2 md:text-xl text-4xl font-semibold ml-[9.5rem] md:w-full w-[30rem]">{name.length > 27 ? name.substring(0, 26) + "..." : name}</h2>
                <div className="flex items-center font-semibold ml-[9.5rem] w-full">
                    <img className="md:w-5 md:h-4 w-6 h-5 pr-1" src={star} alt="Star" />
                    <h3 className="md:text-base text-2xl">{avgRating}</h3>
                    <p className="font-extrabold mx-1 -mt-3">.</p>
                    <h3 className="md:text-base text-2xl">{sla?.slaString}</h3>
                </div>
                <p className="font-normal ml-[9.5rem] w-full md:text-base text-2xl">
                    {cuisines.slice(Math.max(cuisines.length - 3)).join(", ")}
                </p>
                <p className="font-normal ml-[9.5rem] w-full md:text-base text-2xl">{areaName}</p>
            </div>
        </>
    );
};

export default ResChain;

