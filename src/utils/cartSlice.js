import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === newItem.card.info.id
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].count += 1;
      } else {
        state.items.push({ ...newItem, count: 1 });
      }
    },
    removeItems: (state, action) => {
      const itemToRemove = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === itemToRemove.card.info.id
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].count -= 1;
        if (state.items[existingItemIndex].count === 0) {
          state.items.splice(existingItemIndex, 1);
        }
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;

export const { addItems, removeItems, clearCart } = cartSlice.actions;
