import { configureStore } from "@reduxjs/toolkit";
import mobileCart from './createSlice'
export const store = configureStore({
    reducer: {
        mobileCart: mobileCart
    }
})