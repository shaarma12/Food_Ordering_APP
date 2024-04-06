const OfferGridCards = ({ gridImage }) => {
    const { imageId } = gridImage;
    return (
        <div>
            <img
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/" +
                    imageId
                }
                alt="specific dishes"
                className="md:mx-[5.5rem] mx-[13rem] md:h-40 h-[30rem] cursor-pointer"
            />
        </div>
    );
};
export default OfferGridCards;
