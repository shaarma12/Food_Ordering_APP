import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import addressReducer from "./addressSlice";


const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    address: addressReducer,
  },
});
export default appStore;
