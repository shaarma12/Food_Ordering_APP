import RES_IMG from "../utils/constant";
import star from "../../images/star.png";

const Rescard = ({ restaurant }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    restaurant?.info;
  return (
    <>
      <div className="card">
        <img src={RES_IMG + cloudinaryImageId} alt="resImg" />
        <h2 id="name" className="upg">
          {name}
        </h2>
        <h3 id="rating" className="upg">
          <img className="star" src={star} alt="Star" />
          {avgRating}
        </h3>
        <p id="cuisine" className="upg">
          {cuisines.slice(Math.max(cuisines.length - 4)).join(", ")}
        </p>
        <p id="areaname" className="upg">
          {areaName}
        </p>
      </div>
    </>
  );
};

export default Rescard;
