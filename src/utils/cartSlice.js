import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    tally: 0,
  },
  reducers: {
    addItems: (state, action) => {
      //mutating the state directly
      state.items.map((i) => {
        if (i?.info?.id === action?.payload?.info?.id) {
          state.tally += 1;
        }
      });
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop(action.payload);
    },
    clearCart: (state, action) => {
      state.items.length = 0; // items = []
    },
  },
});

export default cartSlice.reducer;

export const { addItems, removeItems, clearCart } = cartSlice.actions;
