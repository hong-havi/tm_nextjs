import { createSlice } from "@reduxjs/toolkit";

// Reducer Interface Type
interface CountItf {
  count: number;
  countValue : number;
}

// Reducer State Default Value
const initialState: CountItf = {
    count: 0,
    countValue : 0
};

// Create a Redux slice for managing card data
const countSlice = createSlice({
  name: "counter", // Name of the slice
  initialState, // Initial state
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    }
  },
});

// Export the action creator for getResourcesSuccess
export const { increment, decrement } = countSlice.actions;
// Export the reducer
export default countSlice;
