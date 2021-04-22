import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  toggle: false,
};

const cartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.find((product) => product.id === action.payload.id)
        ? alert("this item already exists in the cart")
        : state.products.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.products=state.products.filter((product) => product.id !== action.payload.id);
    },
    increaseAmount: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      product.amount++;
    },
    decreaseAmount: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      product.amount--;
    },
    toggleCart: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const cartActions = cartSlicer.actions;

export default cartSlicer.reducer;
