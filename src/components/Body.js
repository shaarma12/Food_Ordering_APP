import { useState } from "react";
import data from "../utils/mockData";
import Rescard from "./Rescard";

const Body = () => {
  const [rest, setRest] = useState(data);
  return (
    <>
      <div className="body">
        <div className="searchbar">
          <button
            onClick={() => {
              const change = rest.filter((i) => {
                return i.info.avgRating > 4;
              });
              setRest(change);
            }}
            className="filter-btn"
          >
            Top Rated
          </button>
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish...."
          ></input>
          <button>Search</button>
        </div>
        <div className="res-card">
          {rest.map((i) => {
            return <Rescard key={i.info.id} restaurant={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
