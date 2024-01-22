import React from "react";
import { useSelector } from "react-redux";
import ItemBill from "./ItemBill";
const OnHoverBill = () => {
  const data = useSelector((store) => store.cart.items);
  const resData = useSelector((store) => store.cart.restruantName);
  let totalBill = 0;
  return (
    <div className="w-[23rem] p-7 text-black border-t-2 border-red-500 absolute top-32 right-48 bg-white shadow-lg shadow-black">
      <div className="flex pb-5 border-b border-black">
        <img
          className="w-20 h-20"
          alt="OnHoverBill restaurant Image"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData[0]?.cloudinaryImageId
          }
        />
        <div className="ml-6">
          <div>
            <p className="font-medium text-lg">{resData[0]?.name}</p>
            <p className="-mt-1 font-medium text-sm text-gray-400">
              {resData[0]?.areaName}
            </p>
          </div>
          <p className="mt-5 font-bold text-xs text-[#7082de]">
            VIEW FULL MENU
          </p>
        </div>
      </div>
      <div className="mt-5 -ml-1 max-h-56 overflow-y-scroll border-b-2 border-dotted border-gray-400">
        {data.map((i) => {
          return (
            <ItemBill
              key={i?.card?.info?.id}
              name={i?.card?.info?.name}
              isVeg={i?.card?.info?.isVeg}
              price={i?.card?.info?.price}
              defaultPrice={i?.card?.info?.defaultPrice}
              count={i?.count}
              amount={(value) => {
                totalBill += value;
              }}
            />
          );
        })}
      </div>
      <div className="my-4">
        <div className="flex justify-between font-medium">
          <p>Sub total</p>
          {console.log("hum", totalBill)}
          <p className="mr-1">₹ {totalBill}</p>
        </div>
        <p className="-mt-1 text-xs text-gray-400">Extra charges may apply</p>
      </div>
      <button className="bg-orange-500 text-white font-bold py-3 w-[19.3rem] mt-1 mb-1">
        CHECKOUT
      </button>
    </div>
  );
};

export default OnHoverBill;
