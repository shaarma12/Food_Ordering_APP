import { useState } from "react";
import CuisineCard from "./CuisineCard";

const MenuAccordion = ({ accordion, veg, cuis }) => {
  const { title, itemCards } = accordion?.card?.card;
  const [show, setshow] = useState(true);
  const vegData = itemCards.filter((i) => {
    return i?.card?.info?.isVeg;
  });
  return (
    <>
      <div className="w-[48rem] mt-5  flex flex-col border-b-[15px] border-gray-200 mr-2">
        <div
          className="flex justify-between cursor-pointer mb-6 font-bold text-xl"
          onClick={() => {
            // setOpen();
            setshow(!show);
          }}
        >
          <span className="ml-2">
            {title} ({veg === true ? vegData.length : itemCards.length})
          </span>
          <span className="mr-9">{show ? "˄" : "˅"}</span>
        </div>
        {show && veg === true
          ? vegData.map((i) => {
              return (
                <CuisineCard
                  key={cuis?.data?.cards[0]?.card?.card?.info?.uniqueId}
                  restro={i}
                  cuis={cuis}
                />
              );
            })
          : show &&
            itemCards.map((i) => {
              return (
                <CuisineCard
                  key={cuis?.data?.cards[0]?.card?.card?.info?.uniqueId}
                  restro={i}
                  cuis={cuis}
                />
              );
            })}
      </div>
    </>
  );
};
export default MenuAccordion;
