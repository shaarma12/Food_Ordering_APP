import { useSelector } from "react-redux";
import CuisineCard from "./CuisineCard";
import {clearCart} from "../utils/cartSlice"
import {useDispatch} from "react-redux"

const Cart = () => {
  const cartItem = useSelector((store)=> store.cart.items)
  const dispatch = useDispatch();
  return (
    <>
      <div className=" flex flex-col mt-12 items-center">
      {cartItem == 0 ?"Please Do Some Shooping!":<button className="bg-red-600 text-white text-lg font-medium p-3 rounded-lg mb-6 hover:scale-y-105 transition-all duration-200" onClick={()=>{
        dispatch(clearCart());
      }}>Clear Cart</button>}
      {cartItem.map((i)=>{
      return <CuisineCard  restro={i}/>
      })}
      </div>
    </>
  );
};
export default Cart;
