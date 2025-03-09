import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
  const [reslist, setreslist] = useState([]);
  const [filteredrestraunt, setfilteredrestraunt] = useState([])

  const [searchtext, setsearchtext] = useState("");
  let reslistcopy = [];

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);

    setreslist(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
   setfilteredrestraunt( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  };

  

  return reslist.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div class="search">
        <input
          type="text"
          value={searchtext}
          class="search-bar"
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const filteredrestraunts = reslist.filter((rest) =>
              rest.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );
            setfilteredrestraunt(filteredrestraunts);
          }}
        >
          search
        </button>
      </div>
      <div className="filter">
        <button
          onClick={() => {
            const newReslist = reslist.filter(
              (res) => res.info.avgRating > 4.3
            );
            setreslist(newReslist);
          }}
        >
          click to filter
        </button>
      </div>

      <div className="res-container">
        {filteredrestraunt.map((restraunt, index) => (
          <Card key={index} resdata={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
