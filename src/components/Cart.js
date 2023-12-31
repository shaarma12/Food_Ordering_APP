import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CuisineCard from "./CuisineCard";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col mt-24 items-center">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
              className="h-64"
              alt="Empty Cart"
            />
            <p className="mt-6 mb-1 text-xl font-bold text-gray-700 mr-10">
              Your cart is empty
            </p>
            <p className="mr-16 text-gray-500">
              You can go to the home page to view more restaurants
            </p>
            <Link to="/">
              <button className="bg-orange-500 text-white px-6 py-2 text-md font-medium rounded-md my-4 mr-8 hover:scale-y-105 transition-all duration-300">
                SEE RESTAURANTS NEAR YOU
              </button>
            </Link>
          </div>
        ) : (
          <button
            className="bg-red-400 ml-[40rem] text-white text-lg font-medium p-3 rounded-lg mb-7 hover:scale-y-105 transition-all duration-200"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </button>
        )}
        <div className="border-t-2 mb-4">
          {cartItems.map((item) => (
            <CartCard restro={item} key={item.card.info.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
