const GridCards = ({ gridImage }) => {
  const { imageId } = gridImage;
  console.log("from new component imageId:-", imageId);
  return (
    <div>
      <img
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + imageId}
        className="h-52"
      />
    </div>
  );
};
export default GridCards;
