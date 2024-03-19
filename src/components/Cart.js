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
      <div className="flex flex-col mt-24 md:ml-0 ml-[45rem] items-center md:-mb-0 -mb-[45rem] ">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center md:w-[30rem] w-[95rem] md:mt-0 mt-72">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
              className="md:h-64 h-[45rem] md:w-[85rem] w-[150rem]"
              alt="Empty Cart"
            />
            <p className="mt-6 mb-1 md:text-xl text-5xl font-bold text-gray-700 mr-10">
              Your cart is empty
            </p>
            <p className="mr-16 text-gray-500 md:text-base text-2xl">
              You can go to the home page to view more restaurants
            </p>
            <Link to="/">
              <button className="bg-orange-500 text-white md:px-6 px-16 md:py-2 py-5 md:text-lg text-3xl font-medium rounded-md my-4 mr-8 hover:scale-y-105 transition-all duration-300">
                SEE RESTAURANTS NEAR YOU
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="flex md:w-[70rem] w-[90rem] mb-8">
              <div className="flex justify-center md:ml-7 ml-9">
                <p className="md:text-4xl text-7xl font-semibold">
                  Your Cart {"{" + totalQuantity + " items" + "}"}
                </p>
              </div>
              <button
                className="bg-red-400 text-white md:text-lg text-4xl font-medium md:px-3 px-7 md:py-2 py-6 rounded-lg mb-7 md:ml-[41rem] ml-[35rem] hover:scale-y-105 transition-all duration-200"
                onClick={() => {
                  dispatch(clearCart());
                  dispatch(discardOldItem());
                }}
              >
                Clear Cart
              </button>
            </div>
            <div className="flex font-semibold justify-between md:border-b border-b-4 border-gray-300 md:w-[70rem] w-[83rem] ml-8 pb-3">
              <p className="md:ml-2 ml-3 md:text-base text-3xl">Item</p>
              <p className="ml-[35.5rem] md:text-base text-3xl">Price</p>
              <p className="-ml-3 md:text-base text-3xl">Quantity</p>
              <p className="mr-3 md:text-base text-3xl">Total</p>
            </div>
            <div className="max-h-[50rem] overflow-y-scroll no-scrollbar">
              {cartItems.map((item) => (
                <CartCard restro={item} key={item.card.info.id} />
              ))}
            </div>
            <div className="md:text-base text-4xl md:static relative right-10">
              <div className="ml-[50rem] mt-3 font-semibold">
                <div className="flex md:w-[22rem] w-[38rem] justify-between border-b border-black py-3">
                  <p>Subtotal :</p>
                  <p>₹ {bill.toFixed(2)}</p>
                </div>
                {bill.toFixed(2) < freeShippingAmount && (
                  <div className="flex md:w-[22rem] w-[38rem] justify-between border-b border-black py-3">
                    <p>Shipping :</p>
                    <p>₹ {shipping.toFixed(2)}</p>
                  </div>
                )}
                <div className="flex md:w-[22rem] w-[38rem] justify-between border-b border-black py-3">
                  <p>GST Charges :</p>
                  <p>₹ {GST}</p>
                </div>
                <div className="flex md:w-[22rem] w-[38rem] justify-between py-3 font-bold md:text-lg text-5xl">
                  <p>Grand Total :</p>
                  <p className="md:text-2xl text-6xl -mt-1">₹ {totalBill}</p>
                </div>
              </div>
              {bill.toFixed(2) > freeShippingAmount && (
                <div className="md:ml-[55rem] ml-[50rem] md:border-b-4 border-green-600 md:text-base text-4xl">
                  <p className="mb-7">
                    Congrats,You're Eligible for{" "}
                    <span className="font-semibold">Free</span>
                    <span className="ml-5 md:text-lg text-5xl">⛟</span>
                    <p className="font-semibold">Shipping</p>
                  </p>
                </div>
              )}
              {indication == true ? <button className="mt-5 md:px-16 px-20 md:py-4 py-10 bg-orange-500 text-white font-bold md:text-lg text-5xl rounded-md md:ml-[55.5rem] ml-[54rem]" onClick={() => {
                setPopup(<Cartpopup data={(value) => {
                  setOpen(value)
                  setIndication(value)
                }} bill={totalBill} />)
              }}>
                Place Your Order
              </button> : <button className="mt-5 md:px-16 px-20 md:py-4 py-10 bg-orange-500 text-white font-bold md:text-lg text-5xl rounded-md md:ml-[55.5rem] ml-[54rem] hover:drop-shadow-xl hover:bg-opacity-90" onClick={() => {
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
