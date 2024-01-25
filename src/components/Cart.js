import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, discardOldItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const bill = useSelector((store) => store.cart.onHoverBill);
  const dispatch = useDispatch();
  const GST = 18.31;
  const shipping = 50.0;
  const totalBill = (bill + GST + shipping).toFixed(2);
  if (cartItems.length == 0) {
    dispatch(discardOldItem());
  }
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
              // dispatch(discardOldItem());
            }}
          >
            Clear Cart
          </button>
        )}
        <div className="max-h-[50rem] overflow-y-scroll no-scrollbar">
          {cartItems.map((item) => (
            <CartCard restro={item} key={item.card.info.id} />
          ))}
        </div>
        <div className="ml-[50rem] mt-3  font-semibold">
          <div className="flex w-[22rem] justify-between border-b border-black py-3">
            <p>Subtotal :</p>
            <p>₹ {bill.toFixed(2)}</p>
          </div>
          <div className="flex w-[22rem] justify-between border-b border-black py-3">
            <p>Shipping :</p>
            <p>₹ {shipping.toFixed(2)}</p>
          </div>
          <div className="flex w-[22rem] justify-between border-b border-black py-3">
            <p>GST Charges :</p>
            <p>₹ {GST}</p>
          </div>
          <div className="flex w-[22rem] justify-between py-3 font-bold text-lg">
            <p>Grand Total :</p>
            <p className="text-2xl -mt-1">₹ {totalBill}</p>
          </div>
        </div>
        {totalBill > 1000.0 && (
          <div>
            <p>
              Congrats,You're Eligible for{" "}
              <span className="font-semibold">Free</span>
              <span className="ml-5 text-lg">⛟</span>
              <p className="font-semibold">Shipping</p>
            </p>
          </div>
        )}
        <button className="p-4 bg>-orange-500 text-white font-bold text-lg rounded-md ml-[62rem] hover:drop-shadow-xl mt-2">
          Place Your Order
        </button>
      </div>
    </>
  );
};

export default Cart;
