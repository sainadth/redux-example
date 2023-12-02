import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  shippingMode: 0,
  isLoading: true,
};
// const dispatch = useDispatch();
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    clearCart: (state, action) => {
      // console.log(action);
      return { ...state, cartItems: [] };
    },
    increase: (state, { payload }) => {
      console.log(payload);
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      console.log(action);
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => {
        return itemId === item.id;
      });
      cartItem.amount = cartItem.amount - 1;
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== payload;
      });
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((element) => {
        amount += element.amount;
        total += element.amount * element.price;
      });

      state.amount = amount;
      state.total = total;
      // console.log(state);
      if (state.shippingMode === 1) state.total += 9.9;
    },
    updateShippingMode: (state, { payload }) => {
      console.log(state.shippingMode);
      state.shippingMode = payload;
      console.log(state.shippingMode);
    },
  },
});

console.log(cartSlice);

export const {
  clearCart,
  increase,
  decrease,
  removeItem,
  calculateTotals,
  updateShippingMode,
} = cartSlice.actions;

export default cartSlice.reducer;
