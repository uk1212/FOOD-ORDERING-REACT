

const FoodItem = ({
  name,
  description,
  cloudinaryImageId,
  price,
}) => {

  return (
    <div className="w-56  m-2 p-2 bg-gray-300 shadow-lg  ">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + cloudinaryImageId} />
      <h2 className="font-bold  text-justify">{name}</h2>
      <h4>{description} </h4>
      <h4 className="font-bold">Rupees:{price/100} </h4>
    </div>
  );
};
export default FoodItem;
