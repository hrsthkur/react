import React, { useState } from "react";
import Card from "./Card";
import { restaurants } from "../utils/constants.js/mockData";

const Body = () => {
  const [reslist, setreslist] = useState(restaurants);

  return (
    <div>
      <div className="filter">
        <button
          onClick={() => {
            const newReslist = reslist.filter((res) => res.info.avgRating > 4.3);
            setreslist(newReslist);
          }}
        >
          click to filter
        </button>
      </div>

      <div className="res-container">
        {reslist.map((restraunt, index) => (
          <Card key={index} resdata={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
