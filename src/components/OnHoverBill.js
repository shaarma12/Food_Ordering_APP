import React from "react";
import { useSelector } from "react-redux";
const OnHoverBill = () => {
  const data = useSelector((store) => store.cart.item);
  const resData = useSelector((store) => store.cart.restruantName);
  console.log(resData);
  return (
    <div className="w-[23rem] h-56 p-7 text-black border-2 border-red-600 absolute top-32 right-48 bg-white">
      <div className="flex">
        <img
          className="w-20"
          alt="OnHoverBill restaurant Image"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData[0]?.cloudinaryImageId
          }
        />
        <div className="-mt-1 ml-6">
          <div>
            <p className="font-medium text-lg">{resData[0]?.name}</p>
            <p className="-mt-1 font-medium text-sm text-gray-400">
              {resData[0]?.areaName}
            </p>
          </div>
          <p className="mt-4 font-bold text-sm text-[#919fe4]">
            VIEW FULL MENU
          </p>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default OnHoverBill;
