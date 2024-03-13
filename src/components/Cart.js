import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, discardOldItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import Cartpopup from "./Cartpopup";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.count, 0);
  const [popup, setPopup] = useState();
  const [indication, setIndication] = useState(false);
  const [open, setOpen] = useState(false);
  let bill = 0;
  cartItems.map((i) => {
    let value = i.card.info.price
      ? i.card.info.price / 100
      : i.card.info.defaultPrice / 100;
    return (bill += i.count * value);
  });
  const dispatch = useDispatch();
  const freeShippingAmount = 1000.0;
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
          <div>
            <div className="flex w-[70rem] mb-8">
              <div className="flex justify-center ml-7">
                <p className="text-4xl font-semibold">
                  Your Cart {"{" + totalQuantity + " items" + "}"}
                </p>
              </div>
              <button
                className="bg-red-400 text-white text-lg font-medium px-3 py-2 rounded-lg mb-7 ml-[41rem] hover:scale-y-105 transition-all duration-200"
                onClick={() => {
                  dispatch(clearCart());
                  dispatch(discardOldItem());
                }}
              >
                Clear Cart
              </button>
            </div>
            <div className="flex font-semibold justify-between border-b border-gray-300 w-[70rem] ml-8 pb-3">
              <p className="ml-2">Item</p>
              <p className="ml-[35.5rem]">Price</p>
              <p className="-ml-3">Quantity</p>
              <p className="mr-3">Total</p>
            </div>
            <div className="max-h-[50rem] overflow-y-scroll no-scrollbar">
              {cartItems.map((item) => (
                <CartCard restro={item} key={item.card.info.id} />
              ))}
            </div>
            <div>
              <div className="ml-[50rem] mt-3  font-semibold">
                <div className="flex w-[22rem] justify-between border-b border-black py-3">
                  <p>Subtotal :</p>
                  <p>₹ {bill.toFixed(2)}</p>
                </div>
                {bill.toFixed(2) < freeShippingAmount && (
                  <div className="flex w-[22rem] justify-between border-b border-black py-3">
                    <p>Shipping :</p>
                    <p>₹ {shipping.toFixed(2)}</p>
                  </div>
                )}
                <div className="flex w-[22rem] justify-between border-b border-black py-3">
                  <p>GST Charges :</p>
                  <p>₹ {GST}</p>
                </div>
                <div className="flex w-[22rem] justify-between py-3 font-bold text-lg">
                  <p>Grand Total :</p>
                  <p className="text-2xl -mt-1">₹ {totalBill}</p>
                </div>
              </div>
              {bill.toFixed(2) > freeShippingAmount && (
                <div className="ml-[55rem] border-b-4 border-green-600">
                  <p className="mb-7">
                    Congrats,You're Eligible for{" "}
                    <span className="font-semibold">Free</span>
                    <span className="ml-5 text-lg">⛟</span>
                    <p className="font-semibold">Shipping</p>
                  </p>
                </div>
              )}
              {indication == true ? <button className="mt-5 px-16 py-4 bg-orange-300 cursor-default  text-white font-bold text-lg rounded-md ml-[55.5rem]" onClick={() => {
                setPopup(<Cartpopup data={(value) => {
                  setOpen(value)
                  setIndication(value)
                }} bill={totalBill} />)
              }}>
                Place Your Order
              </button> : <button className="mt-5 px-16 py-4 bg-orange-500 text-white font-bold text-lg rounded-md ml-[55.5rem] hover:drop-shadow-xl hover:bg-opacity-90" onClick={() => {
                setPopup(<Cartpopup bill={totalBill} data={(value) => {
                  setOpen(value);
                  setIndication(value);
                }} />)
                setIndication(true)
                setOpen(true);
              }}>
                Place Your Order
              </button>}
            </div>
          </div>
        )}
        {open == true && popup}
      </div>
    </>
  );
};

export default Cart;
