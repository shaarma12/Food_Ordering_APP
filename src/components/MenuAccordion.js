import { useState } from "react";
import CuisineCard from "./CuisineCard";

const MenuAccordion = ({ accordion }) => {
  const [show, setShow] = useState(false);
  const { title, itemCards } = accordion?.card?.card;
  return (
    <>
      <div className="w-[48rem] mt-5  flex flex-col border-b-[15px] border-gray-200 mr-2">
        <div
          className="flex justify-between cursor-pointer mb-4 font-bold text-xl"
          onClick={() => {
            setShow(!show);
          }}
        >
          <span className="ml-2">
            {title} ({itemCards.length})
          </span>
          <span className="mr-9">{show ? "˄" : "˅"}</span>
        </div>
        {show &&
          itemCards.map((i) => {
            return <CuisineCard restro={i} />;
          })}
      </div>
    </>
  );
};
export default MenuAccordion;
