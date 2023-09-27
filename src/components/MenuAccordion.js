import { useState } from "react";
import CuisineCard from "./CuisineCard";

const MenuAccordion = ({ accordion, open, setOpen }) => {
  const { title, itemCards } = accordion?.card?.card;
  return (
    <>
      <div className="w-[48rem] mt-5  flex flex-col border-b-[15px] border-gray-200 mr-2">
        <div
          className="flex justify-between cursor-pointer mb-6 font-bold text-xl"
          onClick={() => {
            setOpen();
          }}
        >
          <span className="ml-2">
            {title} ({itemCards.length})
          </span>
          <span className="mr-9">{open ? "˄" : "˅"}</span>
        </div>
        {open &&
          itemCards.map((i) => {
            return <CuisineCard restro={i} />;
          })}
      </div>
    </>
  );
};
export default MenuAccordion;
