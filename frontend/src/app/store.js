import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/cartslice/CartSlice";

export const store = configureStore({
  reducer: {
    Cart: CartReducer,
  },
});
