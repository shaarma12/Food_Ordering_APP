import React from "react";
import LargeScreenBody from "./LargeScreenBody";
import SmallScreenBody from "./SmallScreenBody";

const Body = () => {

  return (
    <>
      {window.innerWidth <= 768 ? <SmallScreenBody /> : <LargeScreenBody />}
    </>
  );
};

export default Body;
