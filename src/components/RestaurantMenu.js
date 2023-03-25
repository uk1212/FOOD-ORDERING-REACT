import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import useMenu from "../utils/useMenu";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant=useRestaurant(id);
  const menuDetails=useMenu(id);

  if(!restaurant)return <Shimmer/>;
  

  return (
    <div className="flex flex-wrap p-3 justify-between"> 
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
      <div >
        <h1 className="font-bold text-lg">Menu</h1>
        <ul>
          {Object.values(menuDetails?.data?.menu?.items).map((item) => (
            <li key={item.id}> {item?.name}</li>
          ))}
          {console.log(menuDetails)}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
