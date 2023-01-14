import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
    let searchTxt="KFC";
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e)=>{ 
            searchTxt=e.target.value;

          }}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
        {/* <RestaurantCard restaurant={...restaurantList[0].data} /> */}
      </div>
    </>
  );
};

export default Body;
