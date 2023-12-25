import React from "react";
import cartBag from "../../images/cartBag.svg";
const PriceBanner = () => {
  return (
    <div className="flex items-center justify-between px-4 text-sm bg-[#60B240] text-white z-20 w-[48rem] fixed h-12 mt-[3.65rem] -ml-2">
      <p className="font-bold">1 item | 322</p>
      <div className="flex"></div>
      <p className="font-bold -mr-[17.2rem]">VIEW CART</p>
      <img src={cartBag} alt="banner bag" className="w-5" />
    </div>
  );
};

export default PriceBanner;
