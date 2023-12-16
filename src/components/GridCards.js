const GridCards = ({ gridImage }) => {
  const { imageId } = gridImage;
  console.log("from new component imageId:-", imageId);
  return (
    <div>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/" +
          imageId
        }
        className="w-96"
      />
    </div>
  );
};
export default GridCards;
