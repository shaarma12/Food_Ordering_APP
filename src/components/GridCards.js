// import { RES_IMG } from "../utils/constant";

const GridCards = ({ gridImage }) => {
  console.log("from new Components:-", gridImage);
  const { imageId } = gridImage;
  return (
    <div>
      <image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rng/md/carousel/production/63439465f0824c81088e0d8f00c24dd0" />
    </div>
  );
};
export default GridCards;
