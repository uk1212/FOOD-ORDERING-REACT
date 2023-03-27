import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-56  m-2 p-2 bg-gray-300 shadow-lg  ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold  text-justify">{name}</h2>
      {/* <h4>{cuisines&&cuisines.join(",")}</h4> */}
      <h4>{cuisines && cuisines.join(",")}</h4>
      <h4>{lastMileTravelString} </h4>
      <h4 className="font-bold">{user.name} </h4>
    </div>
  );
};
export default RestaurantCard;
