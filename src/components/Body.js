import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSeacrchText] = useState(); //To create state variable
  const { user, setUser } = useContext(UserContext);
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
    // console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline please check your internet connection!!</h1>;
  }

  console.log("render()");
  //Conditional rendering
  if (allRestaurants?.length != 0 && filteredRestaurants?.length === 0)
    return <h1>No restaurants found!!!</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className=" p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-50 p-2"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSeacrchText(e.target.value);
          }}
        />
        <button
          className=" m-1 bg-purple-900 text-white rounded-md p-2 hover:bg-black"
          onClick={() => {
            //Need to filter the data
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
              // email: "newemail@gmail.com"
            })
          }
        ></input>
        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              // name: e.target.value,
              ...user,
              email: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="flex flex-wrap text-left bg-gray-50">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
