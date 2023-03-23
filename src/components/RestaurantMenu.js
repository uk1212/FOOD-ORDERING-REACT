import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuDetails, setMenuDetails] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
    getMenuDetails();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      " https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.3300324&lng=77.1253679&restaurantId="+id+"&submitAction=ENTER"
    );
    const json = await data.json();
    // console.log(json);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }
  async function getMenuDetails() {
    const data = await fetch(
      "  https://www.swiggy.com/dapi/menu/quick?menuId="+id+"&categories=true"
    );
    const json = await data.json();
    // console.log(json);
    setMenuDetails(json);
  }
  if(!restaurant)return <Shimmer/>;
  

  return (
    <div className="menu"> 
      <div>
        <h1>Restaurant id: {id}</h1>
        {/* <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2> */}
        <h2>{restaurant?.name}</h2>
        <h2>{restaurant?.id}</h2>
        <h2>{restaurant?.area}</h2>
        <h2>{restaurant?.city}</h2>
        <h2>{restaurant?.avgRating} ✨</h2>
        <h2>{restaurant.costForTwoMsg}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      </div>
      <div >
        <h1>Menu</h1>
        <ul>
          {Object.values(menuDetails?.data?.menu?.items).map((item) => (
            <li key={item.id}> {item.name}</li>
          ))}
          {console.log(menuDetails)}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
