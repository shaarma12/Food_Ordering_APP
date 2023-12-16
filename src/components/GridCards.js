const GridCards = ({ gridImage }) => {
  const { imageId } = gridImage;
  console.log("from new component imageId:-", imageId);
  return (
    <div className="w-96">
      <img
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + imageId}
      />
    </div>
  );
};
export default GridCards;
