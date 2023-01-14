import { IMG_CDN_URL } from "../constants";


//props - properties
// const RestaurantCard = (props) => {
// const RestaurantCard = ({ restaurant }) => {
    const RestaurantCard = ({
        name,
        cuisines,
        cloudinaryImageId,
        lastMileDistance,
      }) => {
        // const { name, cuisines, cloudinaryImageId, lastMileDistance } = restaurant.data;
        return (
          <div className="card">
            <img
              src={
               IMG_CDN_URL +
                cloudinaryImageId
              }
            />
            {/* <h2>{props.restaurant.data?.name}</h2>
            <h3>{props.restaurant.data?.cuisines.join(",")}</h3>
            <h4>{props.restaurant.data?.lastMileTravel} </h4> */}
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{lastMileDistance} minutes </h4>
          </div>
        );
      };

      export default RestaurantCard;