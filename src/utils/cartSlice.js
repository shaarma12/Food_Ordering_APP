import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    // tally: [],
    // counting: 0,
    // abc: [],
  },
  reducers: {
    addItems: (state, action) => {
      //mutating the state directly
      state.items.push(action.payload);
      // for (let i = 0; i < state.items.length; i++) {
      //   if (
      //     state.items[i]?.card?.info?.id === state.items[i + 1]?.card?.info?.id
      //   ) {
      //     state.tally.push(state.items[i]);
      //   }
      // }
      // for (let i = 0; i < state.tally.length; i++) {
      //   if (
      //     state.tally[i]?.card?.info?.id != state.tally[i + 1]?.card?.info?.id
      //   ) {
      //     state.abc.push(state.tally[i]);
      //     state.counting = state.abc.length;
      //   }
      // }
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
