import { IMG_CDN_URL } from "../constants";


const RestaurantCard=({name,cuisines,cloudinaryImageId,lastMileTravelString})=>{
  
    return(
      < div className="w-56 h-64 m-2 p-2 bg-gray-300 shadow-lg  ">
        <img src={IMG_CDN_URL+cloudinaryImageId}/>
        <h2 className="font-bold  text-justify">{name}</h2>
        {/* <h4>{cuisines&&cuisines.join(",")}</h4> */}
        <h4>{cuisines&&cuisines.join(",")}</h4>
        <h4>{lastMileTravelString} </h4>
      </div>
    );
  };
  export default RestaurantCard;