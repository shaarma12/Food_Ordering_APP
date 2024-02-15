import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
    name: "Address",
    initialState: {
        name: null
    },
    reducers: {
        displayAdress: (state, action) => {
            state.name = action.payload;
        }
    }
});
export const { displayAdress } = addressSlice.actions
export default addressSlice.reducer;