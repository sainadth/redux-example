import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import popUpReducer from "./features/cart/popUpSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    popUp: popUpReducer,
  },
});
