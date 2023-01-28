import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data.json";

let getCartData = JSON.parse(localStorage.getItem("cart-data")) || [];
let cartDataReduce = [
  ...getCartData.reduce((map, obj) => map.set(obj.id, obj), new Map()).values(),
];
const initialState = {
  mobileData: cartDataReduce,
  
};
export const mobileSlice = createSlice({
  name: "mobileCart",
  initialState,
  reducers: {
    increment: (state, action) => {
      let mobileData = state.mobileData.find(
        (mobile) => mobile.id === action.payload
      );
      mobileData.quantity = mobileData.quantity + 1;
    },
    decrement: (state, action) => {
      let mobileData = state.mobileData.find(
        (mobile) => mobile.id === action.payload
      );
      mobileData.quantity = mobileData.quantity - 1;
    },
    deleteItem: (state, action) => {
      state.mobileData = state.mobileData.filter(
        (mobile) => mobile.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.mobileData = [];
    },
    addToCart: (state, action) => {
      if (state.mobileData.find((mobile) => mobile.id === action.payload)) {
        return;
      } else {
        state.mobileData = [
          ...state.mobileData,
          ...Data.filter((e) => e.id === action.payload),
        ];
      }
    },
  },
});

export const { increment, decrement, deleteItem, clearCart, addToCart } =
  mobileSlice.actions;
export default mobileSlice.reducer;
