import React from "react";

const changeRestruantBanner = () => {
  return (
    <div className="px-4 text-sm bg-[#60B240] text-white z-20 w-[48rem] fixed h-12 top-[40.93rem]  -ml-2">
      <p>Items already in cart</p>
      <p>
        Your cart contains items from other restaurant. Would you like to reset
        your cart for adding items from this restaurant?
      </p>
      <div>
        <button>NO</button>
        <button>YES,START AFRESH</button>
      </div>
    </div>
  );
};

export default changeRestruantBanner;
