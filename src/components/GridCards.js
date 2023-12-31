const GridCards = ({ gridImage }) => {
  const { imageId } = gridImage;
  return (
    <div>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/" +
          imageId
        }
        alt="specific dishes"
        className="mx-[5.5rem] h-40 cursor-pointer"
      />
    </div>
  );
};
export default GridCards;
