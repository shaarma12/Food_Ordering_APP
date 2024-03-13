import React from "react";
import { useNavigate } from "react-router-dom";
import { clearCart, discardOldItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import Logoimg from "../../images/Logoimg.png";

const Cartpopup = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;

      script.onload = () => {
        resolve(true);
      }

      script.onerror = () => {
        resolve(false);
      }
      document.body.appendChild(script);
    });
  };

  const displayRazorPay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
      alert("You are offline.... Failed to load razorpay SDK");
    }

    const options = {
      key: "rzp_test_PRI9QUWg3RMcQf",
      currency: "INR",
      amount: props.bill * 100, // multiply by 100 becuase razorpay will take amount as paisa
      name: "KhaoJi",
      description: "Thanks for purchasing",
      image: Logoimg,

      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert("Payment Successful");
        // Redirect to confirmation component after successful payment
        dispatch(clearCart());
        dispatch(discardOldItem());
        navigate("/order-confirmation");
      },
      prefill: {
        name: "KhaoJi",
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="w-[30rem] p-10 h-64 bg-white drop-shadow-[5px_5px_10px_rgba(8,7,7,1)] rounded-lg fixed top-48">
      <p className="text-center font-bold text-3xl mb-3">Are you sure?</p>
      <p className="w-80 ml-14 text-gray-500 font-medium">Are you sure you want to place the order. Once order is placed it cannot be cancel.</p>
      <div className="flex mt-8">
        <button className="py-4 px-16 bg-[#60B240] text-white mr-8 text-lg font-semibold hover:drop-shadow-lg" onClick={() => {
          props.data(false);
        }}>Cancel</button>
        <button className="py-4 px-16 bg-[#60B240] text-white text-lg font-semibold hover:drop-shadow-lg" onClick={() => {
          displayRazorPay(props.bill);
          props.data(false);
        }}>Confirm</button>
      </div>
    </div>
  );
};

export default Cartpopup;
