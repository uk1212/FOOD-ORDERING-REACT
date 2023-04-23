import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import useMenu from "../utils/useMenu";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const menuDetails = useMenu(id); 
  
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  if (!restaurant) return <Shimmer />;

  return (
    <div className="flex flex-wrap p-2 m-2 justify-between">
  
      <div>
        <h1>Restaurant id: {id}</h1>
        {/* <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2> */}
        <h2>{restaurant?.name}</h2>
        <h2>{restaurant?.id}</h2>
        <h2>{restaurant?.area}</h2>
        <h2>{restaurant?.city}</h2>
        <h2>{restaurant?.avgRating} ✨</h2>
        <h2>{restaurant?.costForTwoMsg}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      </div>

      <div className="p-5">
        <h1 className="font-bold text-lg">Menu</h1>
        <ul>
          {Object.values(menuDetails?.data?.menu?.items).map((item) => (
            <li key={item.id}>
              {" "}
              {item?.name} 
              {
                <button
                  className=" p-2 m-2 bg-green-100"
                  onClick={() => addFoodItem(item)}
                >
                  Add
                </button>
              }
            </li>
          ))}
           {/* {console.log(menuDetails)}  */}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;


