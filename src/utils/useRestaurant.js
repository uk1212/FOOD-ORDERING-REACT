import { useState } from "react";
import { useEffect } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  //Get data from api
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      " https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.3300324&lng=77.1253679&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    // console.log(json);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }

  return restaurant;
};

export default useRestaurant;
