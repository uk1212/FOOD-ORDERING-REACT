import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch= useDispatch();
  const handleClearCart=()=>{
    dispatch(clearCart());

  }
  return (
    <div className="flex ">
      <h1 className="font-bold text-3xl">Cart Items-{cartItems.length}</h1>
      <button className="bg-green-100 p-2 m-5 h-10 w-36" 
      onClick={()=>handleClearCart()}>
        Clear Cart
      </button>
      <div>
      {cartItems.map(item=><FoodItem {...item} key={item.id}/>)}
      {/* <FoodItem {...cartItems[0]}/> */}
     
    </div>
    </div>
  );
};

export default Cart;
