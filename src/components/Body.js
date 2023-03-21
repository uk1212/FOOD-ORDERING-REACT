import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants]=useState([]);

  //searchText is a local state variable
  const [searchText, setSeacrchText] = useState(); //To create state variable

  //callback and dependency array-->2 params
  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.3314163&lng=77.1283821&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render()");

  //Conditional rendering
  //If restaurant is empty =>shimmer ui
  //If restaurant is nom empty =>actual ui

  // if(!allRestaurants) return null;

  if(allRestaurants.length!=0 &&filteredRestaurants.length===0)
  return <h1>No restaurants found!!!</h1>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSeacrchText(e.target.value);
          }}
        />
        {/* <h1>{searchClicked}</h1> */}
        <button
          className="search-btn"
          onClick={() => {
            //Need to filter the data
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search-{searchText}
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
