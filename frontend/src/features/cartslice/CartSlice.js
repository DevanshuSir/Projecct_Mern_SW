import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  Price: 0,
  Quantity: 0,
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const find = state.cart.findIndex(
        (value) => value._id === action.payload._id
      );
      if (find != -1) {
        state.cart[find] = {
          ...state.cart[find],
          quantity: state.cart[find].quantity + 1,
        };
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    deleteCartValue: (state, action) => {
      state.cart = state.cart.filter((value) => value._id !== action.payload);
    },

    cartTotal: (state) => {
      const { totalPrice, totalQuantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { ProductPrice, quantity } = cartItem;
          const ItemsTotal = ProductPrice * quantity;
          cartTotal.totalPrice += ItemsTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      // console.log(totalPrice, totalQuantity);
      state.Price = totalPrice;
      state.Quantity = totalQuantity;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteCartValue, cartTotal } = CartSlice.actions;

export default CartSlice.reducer;
