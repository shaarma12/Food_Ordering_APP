const OfferCorousel = ({ corouselData }) => {
  const { imageId } = corouselData;
  return (
    <div>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/" +
          imageId
        }
        alt="specific dishes"
        className="mx-[20.5rem] mr-32 h-64 cursor-pointer"
      />
    </div>
  );
};
export default OfferCorousel;
